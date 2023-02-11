const express=require('express')
const mongoose=require('mongoose')
mongoose.set("strictQuery", false);
const bodyParser = require('body-parser');
const path= require('path');
var cors = require('cors')
const flash=require('express-flash')
const session=require('express-session')
const usersinfo=[]
var app = express();


app.use(flash())
// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave:false,
//   saveUninitialized:false,
// }))

var y=1



app.use(cors())
app.use(bodyParser.json());
app.use(express.json())
app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.urlencoded({extended:false}))
mongoose.connect('mongodb://tarunpahade:test123@ac-ad8joto-shard-00-00.byx71hn.mongodb.net:27017,ac-ad8joto-shard-00-01.byx71hn.mongodb.net:27017,ac-ad8joto-shard-00-02.byx71hn.mongodb.net:27017/?ssl=true&replicaSet=atlas-wy4ihy-shard-0&authSource=admin&retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
  console.log('connected');
});
mongoose.set("strictQuery", false);

const db=mongoose.connection
db.on("error",()=>{console.log('err');})
db.once('open',()=>{console.log('opened');})

const orders=mongoose.Schema({
name:String,
table:String,
hours:String,
time:String,
kot:Number,
status:String,
year:String,
week:String,
time2:String,
month:String,
min:String,
orderedFood:[{
    id:String,
    items:Number,
    price:Number,
    status:String
}]
})

   // compile schema to model
   var order = mongoose.model('data', orders, 'kot');

   app.get('/',(req,res)=>{
  console.log('haha');
  res.redirect('/menu')
})



//from menu to database
app.post('/',(req,res)=>{
  
const date = new Date();
  const d = new Date();
const month2 = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const year =date.getFullYear();

let nam = month2[d.getMonth()];
const minutes=String(d.getMinutes()).padStart(2, '0')
console.log(minutes);
const month =month2[d.getMonth()];
const timee =String(date.getDate()).padStart(2, '0');
const hours=date.getHours();
const currentTime=+date.getHours();
    const { pp } =req.body;
  const name=pp[0].customerName
  const table=pp[0].tableNumber  
const orderedItems=pp[0].orderedItems

    console.log(minutes)

    const data=new order({
      min:minutes,
      name:name,
      table:table,
hours:hours,
      year:year,
      month:month,
      time:timee,
      time2:currentTime,
kot:y,

status:'pending',
      orderedFood:orderedItems

    })

 
  data.save(function (err, book) {
    if (err) return console.error('fucked up code'+err);
    y++
    console.log(book.name + " saved to collection.");
  });

    })

//from menu to database
app.post('/bill',(req,res)=>{
  console.log('posting');
  const { pp } =req.body;
  console.log(pp);

  const name=pp.name
const table=pp.table  
const orderedItems=pp.orders[0]

const year=pp.year
const week=pp.week
const todayDate=pp.date
const number=pp.number
const status=pp.status
const hours=pp.hours
const month=pp.month


function run(){

    const data=new bill({
      name:name,
    month:month,
      table:table,
      date:todayDate,
hours:hours,
  year:year,
number:number,
  kot:pp.kot,

      orderedFood:orderedItems,
      status:status
  })

   data.save(function (err, book) {
    if (err) { console.error('fucked up code'+err);}
else{console.log('succesfully upated');}
    
  });


}
run()

})

app.get('/waiter',(req,res)=>{
  res.sendFile(__dirname+'/public/waiter/waiter.html')
})
app.get('/cart',(req,res)=>{
  res.sendFile(__dirname+'/public/menu/cart.html')

})

    app.post('/waiter',(req,res)=>{
      

    console.log('break');
    const { pp }=req.body
 const id=pp._id 
  console.log(pp);
    order.findByIdAndUpdate(id,pp,   function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
    console.log('success');
    }
  
  }) 
    
    })

    const register=new mongoose.Schema({
      username:String,
      password:String,
    email:String, 
    phone:String,
    restraunt:String,
    position:String,
    status:String
      })
      var registeredUser = mongoose.model('orderUser',register,'users')


const foodlist=mongoose.Schema(
  
    
      {
        url:String,
      item:String,
      price:Number,
      category:String
    }
  
    )
    
       // compile schema to model
       var food = mongoose.model( 'fooddata',foodlist, 'orderlist');
    
    
app.post('/send',(req,res)=>{
  const { pp }=req.body

const data=new food({
    item:pp.item,
    price:pp.price,
category:pp.category,
url:pp.url
  })


data.save(function (err, book) {
  if (err) return console.error('fucked up code'+err);
  
  console.log(book.name + " saved to collection.");
});
});

app.get('/send',(req,res)=>{

 
food.find({},(err,user)=>{
    if(err){
      console.log(err);
    }
//user.push(userInfo)
    res.send(user);
// console.log(userInfo);

  })
})
app.get('/menu',(req,res)=>{
  res.sendFile(__dirname+'/public/menu/home/index.html')
})



//sends information of order
app.get('/info',(req,res)=>{
    order.find({},(err,user)=>{
      if(err){
        console.log(err);
      }
    
      res.send(user);
    })
  });
  const billschema=new mongoose.Schema({
    name:String,
    table:String,
    date:String,
    year:String,
  minutes:String,
  week:String,
  month:String,
  time:String,
  hours:String,
  number:Number,
    orderedFood:[{
        id:String,
        items:Number,
        price:Number
    }],
    status:String
    })
  
  
  //to add data in test restraunt 
    var bill = mongoose.model('orderedFood',billschema,'billS')
//sends data to dashboard
app.get('/bill',(req,res)=>{
    // console.log(usersinfo);
  //   if(usersinfo.length===0){
  //    console.log('haha');
    
  //     }else if(usersinfo.length>0){
  
  
  // console.log(usersinfo[0].username+'username');
  
  
  // if(usersinfo[0].username==='admin'){
  console.log('haha');
    bill.find({},(err,user)=>{
     
   if(err){
        console.log(err);
      }
      res.send(user);
    })
  // }
  
  // }
  
  });

  
  //sends bill data
  app.post('/',(req,res)=>{
    console.log('posting');
    const { pp } =req.body;
    console.log(pp);
  
    const name=pp.name
  const table=pp.table  
  const orderedItems=pp.orders[0]
  
  const year=pp.year
  const week=pp.week
  const todayDate=pp.date
  const number=pp.number
  const status=pp.status
  const hours=pp.hours
  const month=pp.month
  
  
  function run(){
  
      const data=new bill({
        name:name,
      month:month,
        table:table,
        date:todayDate,
  hours:hours,
    year:year,
  number:number,
    kot:pp.kot,
  
        orderedFood:orderedItems,
        status:status
    })
  
     data.save(function (err, book) {
      if (err) { console.error('fucked up code'+err);}
  else{console.log('succesfully upated');}
      
    });
  
  
  }
  run()
  
  })
  
  //deletes menu data
  app.post('/delete',(req,res)=>{
  console.log(req.body);
  const { pp }=req.body
  console.log(pp);
  order.deleteOne({_id:pp._id}).then((err,book)=>{
    if(err){console.log(err);}else{console.log(book);}
    
  })
  })
  
  //after the bill is printed
  app.post('/update',(req,res)=>{
    db.collection('orderedFood')
    const { pp }=req.body
  const id=pp._id
  console.log(pp);
    order.updateOne(pp,{status: 'printed'},   function (err, docs) {
      if (err){
          console.log(err)
      }
      else{
          console.log("Updated User : ");
      }
  
  })
  })
  //vonyage
  const { Vonage } = require('@vonage/server-sdk');
const { log } = require('console');
  const vonage = new Vonage({
    apiKey: "c5940ea8",
    apiSecret: "BzfUzC48vXNzeSNQ"
  })
  const from = "Vonage APIs"
  const to = "918010669013"
  
  
  async function sendSMS(text,to) {
    await vonage.sms.send({to, from, text})
        .then(resp => { console.log('Message sent successfully'); console.log(resp); })
        .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
  }
  //twilio
  const authToken = 'd3e2910aff173ee94bea532d24abab4a'; 

  const accountSid = 'ACbf2608b126a238d429463d915859023d'; 
const accountSid2='ACbf2608b126a238d429463d915859023d';
const authToken2='3d178128d53f73e69e4aa2c99b725e8f'
const client = require('twilio')(accountSid2, authToken2); 
async function sendSMSTwilo(text,to) {
client.messages 
  .create({ 
     body: text,  
     messagingServiceSid: 'MG5b44a6c5d07e45371925e9b63ac0501d', 
     from:'+13396751233',     
     to: to 
   }) 
  .then(message => console.log(message.sid+'messege sent successfully')).catch((err)=>console.log(err)) 

  }

  app.post('/number',(req,res)=>{
    console.log('heyy');
  const { pp }=req.body
console.log('request for message');
const number=pp.number
   sendSMSTwilo(pp.msg,'+91'+number)
  })
  app.get('/',(req,res)=>{
    res.redirect('/login')
    })

//sends kitchen files
app.get('/orders',(req,res)=>{
  res.sendFile(__dirname+'/public/kitchen2/index.html')

});
//updates status of food kitchen 1
 app.post('/updateFood',(req,res)=>{
  const { pp }=req.body
const id=pp._id
console.log(id);
  order.findByIdAndUpdate(id,{status:'cooked'},   function (err, docs) {
  if (err){
      console.log(err)
  }
  else{
      console.log("Updated User : ", docs.type);
  }

})  
})
//updates status of food kitchen 2
app.post('/updateKitchen', async(req,res)=>{
  console.log('break');
  const { pp }=req.body
const id=pp._id 
console.log(pp);
  order.findByIdAndUpdate(id,pp,   function (err, docs) {
  if (err){
      console.log(err)
  }
  else{
      console.log( docs+'not');
  }

}) 



})


    app.get('/login',(req,res)=>{
      res.sendFile(__dirname+'/public/login/login.html')
    })
    
  app.post('/login',async(req,res)=>{
  
    try {
      const ff=req.body
  const username=ff.username
  const password=ff.password
  
    console.log(ff);
  const user= await  registeredUser.findOne({username:username})
  console.log(user+'this is user ');
  if (user==null) {
    res.redirect('login/notfound.html')
  console.log('redirect null');
  }
  if (password===user.password){
   
    
  
  
    registeredUser.findByIdAndUpdate(user._id, { $set: { status: 'online' }}, { new: true }, function (err, article) {
      if (err) return handleError(err);
      console.log('hii');
      usersinfo.push(user)
console.log(usersinfo);    
if(usersinfo[0].position==='Waiter'){
   res.redirect('/bill/bill.html')  

}  
else if(usersinfo[0].position==='Chef')
res.redirect('/kitchen2')  

});
    
    
  //console.log('this is user info'+usersinfo);
  }
  else{
    res.redirect('registerLogin/notfound.html')
  console.log('else');
  }
  
  
    } catch (error) {
      res.status(400).send='invali email or password'
    }
  })




  const port = process.env.PORT || 8080;

//socket io
const server=app.listen(port,()=>{
  console.log('conn')
})

const io = require("socket.io")(server);


io.on('connection', (socket) => {
  
  socket.on('menu', data=>{
   
  io.emit('message',data)
  console.log('sent to chef');
})
socket.on('ready', data=>{
   
  io.emit('orderReady',data)
  console.log('sent to waiter');

})

  // socket.on('disconnect', () => {
  //   console.log('user disconnected');
  // });
});

function sendWhatsapp(number, data){


 
client.messages 
      .create({ 
         body: data,
         from: 'whatsapp:+14155238886',       
         to: 'whatsapp:'+number 
       }) 
      .then(message => console.log(message.sid)) 
      .done();

      }

//O0ouB-9WXjzcaFIYs48e0hjvezalKxOgxGsebpi4