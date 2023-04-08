const express = require('express')
const mongoose = require('mongoose')
mongoose.set("strictQuery", false);
const bodyParser = require('body-parser');
const path = require('path');
var cors = require('cors')
const flash = require('express-flash')
const usersinfo = []
var app = express();
require('dotenv').config()
//ias user link https://770314986153.signin.aws.amazon.com/console

app.use(flash())
const axios = require('axios');

const ingredient = new mongoose.Schema({
  rawMaterial: String,
  menuItem: String,
  quantity: Number,
  unit: String
})
var ingredients = mongoose.model('orderedRecipe', ingredient, 'recipe')
app.get('/reciepe', (req, res) => {
  ingredients.find({}, (err, user) => {

    if (err) {
      console.log(err);
    }
    res.send(user);
  })
})





var y = 1



app.use(cors())
app.use(bodyParser.json());
app.use(express.json())
app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.urlencoded({
  extended: false
}))
mongoose.connect('mongodb://tarunpahade:test123@ac-ad8joto-shard-00-00.byx71hn.mongodb.net:27017,ac-ad8joto-shard-00-01.byx71hn.mongodb.net:27017,ac-ad8joto-shard-00-02.byx71hn.mongodb.net:27017/?ssl=true&replicaSet=atlas-wy4ihy-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('connected');
});
mongoose.set("strictQuery", false);

const db = mongoose.connection
db.on("error", () => {
  console.log('err');
})
db.once('open', () => {
  console.log('opened');
})


const port = process.env.PORT || 8080;

//socket io
const server = app.listen(port)

const io = require("socket.io")(server)

const orders = mongoose.Schema({
  name: String,
  table: String,
  hours: String,
  time: String,
  kot: Number,
  status: String,
  year: String,
  week: String,
  time2: String,
  month: String,
  min: String,
  orderedFood: [{
    id: String,
    items: Number,
    price: Number,
    status: String
  }]
})

// compile schema to model
var order = mongoose.model('data', orders, 'kot');

const category = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
  unit: String,

})
var categories = mongoose.model('orderedCategory', category, 'category')


app.get('/', (req, res) => {
  console.log('haha');
  res.redirect('/menu')
})



//from menu to database
app.post('/', async (req, res) => {

  const date = new Date();
  const d = new Date();
  const month2 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const year = date.getFullYear();

  let nam = month2[d.getMonth()];
  const minutes = String(d.getMinutes()).padStart(2, '0')
  console.log(minutes);
  const month = month2[d.getMonth()];
  const timee = String(date.getDate()).padStart(2, '0');
  const hours = date.getHours();
  const currentTime = +date.getHours();
  const {
    pp
  } = req.body;

  const name = pp[0].customerName
  const table = pp[0].tableNumber
  const orderedItems = pp[0].orderedItems

  const check = await order.find({
    table
  })
  console.log(check + "if table already exists");
  console.log(check.length);
  if (check.length < 1) {
    console.log('pppp');
    const data = new order({
      min: minutes,
      name: name,
      table: table,
      hours: hours,
      year: year,
      month: month,
      time: timee,
      time2: currentTime,
      kot: y,

      status: 'pending',
      orderedFood: orderedItems

    })


    data.save(function (err, book) {
        if (err) {
          console.error('fucked up code' + err);
          y++
        } else {
          console.log(book);
        }


      }

    );


  } else {
    console.log('this is a obj');
    const food = check[0].orderedFood

    pp[0].orderedItems.forEach((c) => {

      food.push(c)

    })
    const data = {
      min: minutes,
      name: name,
      table: table,
      hours: hours,
      year: year,
      month: month,
      time: timee,
      time2: currentTime,
      kot: y,

      status: 'pending',
      orderedFood: food
    }
    console.log(food, 'this is food', check._id);

    order.findByIdAndUpdate(check[0]._id, {
      $push: {
        orderedFood: pp[0].orderedItems
      }
    }, (err, book) => {
      if (err) {
        console.log(err);
      } else {
        console.log(book);
      }
    })

  }


})

app.post('/ingredients', async (req, res) => {
  const {
    pp
  } = req.body
  console.log(pp)
  pp.map((pp) => {
    const quantity = pp.items
    const menuItem = pp.id.replace(/([A-Z])/g, ' $1').trim()


    const user = ingredients.find({
      menuItem
    })
    console.log(user.length + 'this is user');
    console.log(user.length);
    if (user.length < 1 && user.length === 0) {
      console.log('no user found');
    } else if (user !== null && user !== undefined) {
      user.map(async user => {



        const substract = Number(user.quantity) * Number(quantity)

        const rawMaterial = await categories.findOne({
          name: user.rawMaterial
        })
        if (rawMaterial == null) {} else {

          const result = Number(rawMaterial.quantity) - Number(substract)




          if (result < 0 || result === 0) {
            categories.deleteOne({
              _id: pp._id
            }).then((err, book) => {
              if (err) {
                console.log(err);
              } else {
                console.log(book);
              }

            })




          }
          if (result === 0 || result < 200) {


            io.on('connection', (socket) => {
              socket.emit('notificationToClient', 'you are running out of ' + rawMaterial.name); //message sent from server to client 
            });
          }


          categories.findByIdAndUpdate(rawMaterial._id, {
            quantity: Number(result)
          }, {
            new: true
          }, function (err, article) {
            if (err) {
              console.log(err);
            } else {
              console.log('Success');
            }
          });


        }

      })


    }

  })





})


//from menu to database
app.post('/bill', async (req, res) => {

  const {
    pp
  } = req.body;


  const name = pp.name
  const table = pp.table
  const orderedItems = pp.orders[0]
  const year = pp.year
  const todayDate = pp.date
  const number = pp.number
  const status = pp.status
  const hours = pp.hours
  const month = pp.month

  const data = new bill({
    name: name,
    month: month,
    table: table,
    date: todayDate,
    hours: hours,
    year: year,
    number: number,
    kot: pp.kot,
    orderedFood: orderedItems,
    status: status,
    paymentMethod: pp.paymentMethod,
    orderType: pp.orderType,
    discount: pp.discount
  })

  data.save(function (err, book) {
    if (err) {
      console.error('fucked up code' + err);
    }


  });
});











app.get('/waiter', (req, res) => {
  res.sendFile(__dirname + '/public/waiter/waiter.html')
})
app.get('/menu/cart', (req, res) => {
  res.sendFile(__dirname + '/public/menu/cart.html')

})

app.post('/waiter', (req, res) => {



  const {
    pp
  } = req.body
  const id = pp._id

  order.findByIdAndUpdate(id, pp, function (err, docs) {
    if (err) {
      console.log(err)
    } else {
      console.log('success');
    }

  })

})

const register = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  phone: String,
  restraunt: String,
  position: String,
  status: String
})
var registeredUser = mongoose.model('orderUser', register, 'users')


const foodlist = mongoose.Schema(


  {
    url: String,
    item: String,
    price: Number,
    category: String
  }

)

// compile schema to model
var food = mongoose.model('fooddata', foodlist, 'orderlist');


app.post('/send', (req, res) => {
  const {
    pp
  } = req.body

  const data = new food({
    item: pp.item,
    price: pp.price,
    category: pp.category,
    url: pp.url
  })


  data.save(function (err, book) {
    if (err) return console.error('fucked up code' + err);

    console.log(book.name + " saved to collection.");
  });
});

app.get('/send', (req, res) => {


  food.find({}, (err, user) => {
    if (err) {
      console.log(err);
    }
    //user.push(userInfo)
    res.send(user);
    // console.log(userInfo);

  })
})
app.get('/menu', (req, res) => {
  res.sendFile(__dirname + '/public/menu/home/index.html')
})



//sends information of order
app.get('/info', (req, res) => {
  order.find({}, (err, user) => {
    if (err) {
      console.log(err);
    }

    res.send(user);
  })
});
const billschema = new mongoose.Schema({
  name: String,
  table: String,
  date: String,
  year: String,
  minutes: String,
  week: String,
  month: String,
  time: String,
  hours: String,
  number: Number,
  orderedFood: [{
    id: String,
    items: Number,
    price: Number
  }],
  status: String,
  paymentMethod: String,
  orderType: String
})


//to add data in test restraunt 
var bill = mongoose.model('orderedFood', billschema, 'billS')
//sends data to dashboard
app.get('/bill', (req, res) => {


  //     }else if(usersinfo.length>0){


  // console.log(usersinfo[0].username+'username');


  // if(usersinfo[0].username==='admin'){

  //     }else if(usersinfo.length>0){


  // console.log(usersinfo[0].username+'username');


  // if(usersinfo[0].username==='admin'){
  console.log('haha');
  bill.find({}, (err, user) => {

    if (err) {
      console.log(err);
    }
    res.send(user);
  })


});


//sends bill data to the database

//deletes menu data
app.post('/delete', (req, res) => {
  console.log(req.body);
  const {
    pp
  } = req.body

  order.deleteOne({
    _id: pp._id
  }).then((err, book) => {
    if (err) {
      console.log(err);
    } else {
      console.log();
    }

  })
})

//after the bill is printed
app.post('/update', (req, res) => {
  db.collection('orderedFood')
  const {
    pp
  } = req.body
  const id = pp._id
  console.log(pp);
  order.findByIdAndUpdate(id, {
    status: 'printed'
  }, function (err, docs) {
    if (err) {
      console.log(err)
    } else {
      console.log("Updated User : ");
    }

  })
})
//directs user according to the information provided
app.post('/login', async (req, res) => {

  try {
    const ff = req.body
    const username = ff.username
    const password = ff.password

    console.log(ff);
    const user = await registeredUser.findOne({
      username: username
    })
    console.log(user + 'this is user ');
    if (user == null) {
      res.redirect('login/notfound.html')
      console.log('redirect null');
    }
    if (password === user.password) {




      registeredUser.findByIdAndUpdate(user._id, {
        $set: {
          status: 'online'
        }
      }, {
        new: true
      }, function (err, article) {
        if (err) return handleError(err);
        console.log('hii');
        usersinfo.push(user)
        console.log(usersinfo);
        if (usersinfo[0].position === 'Waiter') {
          res.redirect('/menu')

        } else if (usersinfo[0].position === 'Chef')
          res.redirect('/kitchen2')

      });


      //console.log('this is user info'+usersinfo);
    } else {
      res.redirect('login/notfound.html')

    }


  } catch (error) {
    res.status(400).send = 'invali email or password'
  }
})

const feedback = mongoose.Schema({
  description: String,
  name: String,
  number: Number,
  review: [{
    name: String,
    rating: String
  }],
  userReccomendation: String,
  specificProductFeedback: [{
    item: String,
    description: String,
    date: String,
    hours: String,
    minutes: String,

    month: String,
    year: String

  }]
})
var review = mongoose.model('rating', feedback, 'feedback');
app.post('/feedback', (req, res) => {
  console.log('posting');
  const {
    pp
  } = req.body;
  console.log(pp);
  const date3 = new Date
  const month2 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const year = date3.getFullYear();
  const date = date3.getDate()
  const minutes = date3.getMinutes()
  const month = month2[date3.getMonth()];
  const hours = date3.getHours()
  const data = new review({
    description: pp.description,
    name: pp.name,
    number: pp.number,
    review: pp.rating,
    specificProductFeedback: pp.specificProductFeedback,
    date,
    hours,
    minutes,
    month,
    year,
  })
  data.save(function (err, book) {
    if (err) {
      console.error('fucked up code' + err);
    } else {
      console.log('succesfully upated');
    }

  });
})



////////////         Billing          ////////////

app.get('/feedback', (req, res) => {
  console.log(req.params);

  res.sendFile(__dirname + '/public/feedback/feedback.html')
})

app.get('/fbtoken', (req, res) => {


  res.send(JSON.stringify(process.env.facebook))
})



//to send bill through whatsapp
app.post('/sms', (req, res) => {
  const {
    pp
  } = req.body
  console.log(pp)
  const number = pp.phone
  const image = pp.img
  const authTokenW = process.env.AUTH_TOKEN;
  const accountSid2 = process.env.ACC_SID;

  const client = require('twilio')(accountSid2, authTokenW);
  client.messages
    .create({
      body: `Thanks for visiting restraunt
       this is link to your bill ${image}
       `,
      from: '+13396751233',
      to: `+91${number}`,


    })
    .then(message => console.log(message.sid + 'messege sent successfully')).catch((err) => console.log(err))

})

app.post("/webhook", (req, res) => {
  // Parse the request body from the POST
  let body = req.body;

  // Check the Incoming webhook message
  console.log(JSON.stringify(req.body, null, 2));

  // info on WhatsApp text message payload: https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks/payload-examples#text-messages
  if (req.body.object) {
    console.log('lvl1');
    if (
      req.body.entry &&
      req.body.entry[0].changes &&
      req.body.entry[0].changes[0] &&
      req.body.entry[0].changes[0].value.messages &&
      req.body.entry[0].changes[0].value.messages[0]
    ) {
      console.log('body is obj lvl2');
      let phone_number_id =
        req.body.entry[0].changes[0].value.metadata.phone_number_id;
      let from = req.body.entry[0].changes[0].value.messages[0].from; // extract the phone number from the webhook payload
      let msg_body = req.body.entry[0].changes[0].value.messages[0].text.body; // extract the message text from the webhook payload
      console.log(from, msg_body);
      console.log("https://graph.facebook.com/v16.0/" + phone_number_id + "/messages?access_token=" + process.env.TOKEN);

      const axios = require('axios');

      let data = JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": "91" + from,
        "type": "text",
        "text": {
          "preview_url": false,
          "body": "Thankyou for your response we will get back as soon as possible"
        }
      });

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://graph.facebook.com/v16.0/115687568138953/messages',
        headers: {
          'Authorization': `Bearer ${process.env.facebook}`,
          'Content-Type': 'application/json'
        },
        data: data
      };

      axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      console.log('succesfully sent');
    }
    res.send('sent');
  } else {
    // Return a '404 Not Found' if event is not from a WhatsApp API
    res.sendStatus(404);
  }
});

// // Accepts GET requests at the /webhook endpoint. You need this URL to setup webhook initially.
// // info on verification request payload: https://developers.facebook.com/docs/graph-api/webhooks/getting-started#verification-requests 
app.get("/webhook", (req, res) => {
  /**
   * UPDATE YOUR VERIFY TOKEN
   *This will be the Verify Token value when you set up webhook
   **/
  const verify_token = process.env.VERIFY_TOKEN;

  // Parse params from the webhook verification request
  let mode = req.query["hub.mode"];
  let token = req.query["hub.verify_token"];
  let challenge = req.query["hub.challenge"];

  // Check if a token and mode were sent
  if (mode && token) {
    // Check the mode and token sent are correct
    if (mode === "subscribe" && token === verify_token) {
      // Respond with 200 OK and challenge token from the request
      console.log("WEBHOOK_VERIFIED");
      res.status(200).send(challenge);
      nnoded
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  }
});


const apikey = process.env.facebook
// hello.mjs -- or the extension could be just `.js`
async function hello(text) {
  await console.log(text);
}
module.exports = apikey
////////////         End Billing         ////////////




app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/login/login.html')
})



app.get('/', (req, res) => {
  res.redirect('/login')
})

//sends kitchen files
app.get('/orders', (req, res) => {
  res.sendFile(__dirname + '/public/kitchen2/kitchen2.html')

});
//logs out
app.get('/logout', (req, res) => {

  console.log(usersinfo);
  registeredUser.findByIdAndUpdate(usersinfo._id, {
    $set: {
      status: 'offline'
    }
  }, {
    new: true
  }, function (err, article) {
    if (err) {
      console.log(err)
    } else {
      console.log(article);

      console.log('hii');
      res.redirect('/login')
    }
  });

})




//updates status of food kitchen 1
app.post('/updateFood', (req, res) => {
  const {
    pp
  } = req.body
  const id = pp._id
  console.log(id);
  order.findByIdAndUpdate(id, {
    status: 'cooked'
  }, function (err, docs) {
    if (err) {
      console.log(err)
    } else {
      console.log("Updated User : ", docs.type);
    }

  })
})
//updates status of food kitchen 2
app.post('/updateKitchen', async (req, res) => {

  const {
    pp
  } = req.body
  const id = pp._id
  console.log(pp);



  order.findByIdAndUpdate(id, pp, function (err, docs) {
    if (err) {
      console.log(err)
    } else {
      console.log(docs + 'not');
    }

  })



})







;


io.on('connection', (socket) => {

  socket.on('kitchen', data => {
    console.log(data);
    io.emit('kitchenReady', data)

  })
  socket.on('outofstock', data => {
    io.emit('stockfinished', data)
  })
  socket.on('ready', data => {

    io.emit('orderReady', data)
    console.log('sent to waiter');

  })

  // socket.on('disconnect', () => {
  //   console.log('user disconnected');
  // });
});



//O0ouB-9WXjzcaFIYs48e0hjvezalKxOgxGsebpi4

//whatsapp
// curl -i -X POST \
//   https://graph.facebook.com/v16.0/105954558954427/messages \
//   -H 'Authorization: Bearer EAAFl...' \
//   -H 'Content-Type: application/json' \
//   -d '{ "messaging_product": "whatsapp", "to": "15555555555", "type": "template", "template": { "name": "hello_world", "language": { "code": "en_US" } } }'