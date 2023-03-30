var socket = io('/kot&bill');
var socket = io();


document.querySelector('.navbar-fostrap').addEventListener('click', () => {
  document.querySelector('.nav-fostrap').classList.toggle('visible')

})

//next thing to do is to create two inputs for payboy and then print option 
//and delete data from data base or send to another database

const bookedTables = []
const tax = []

var billno = 0
var fooditems = []

const p = document.querySelector('.haha')
const hoho = []
const tables = ['6', '5', '7', '8', '1', '2', '3', '4', '9']
// const appdata=JSON.parse(localStorage.getItem('kot')) || []




function none() {
  document.querySelector('.generateBill').style.display = 'none'
}






const baseUrl = '/info'

async function getinfo() {
  const res = await fetch(baseUrl, {
      method: 'GET',
    }

  )


  const data = await res.json()
  console.log(data);
  data.map((x) => {


    hoho.push(x.table)
    //if order is takeaway
    if (x.table === 'takeaway') {
      document.querySelector('.torder').style.display = 'block'
      const j = data.filter(el => el.table === 'takeaway');


      const takeaway = document.createElement('div')
      takeaway.classList.add('takeawayonline')
      const print = document.createElement('button')
      print.innerHTML = 'print'
      print.addEventListener('click', () => {
        printbill(j)
      })
      const kota = document.createElement('button')
      kota.innerHTML = 'Print Kot'
      kota.addEventListener('click', () => {
        const baseUrl = '/info'
        getinfo()
        async function getinfo() {
          const res = await fetch(baseUrl, {
              method: 'GET',
            }

          )


          const data = await res.json()


          //update edit delete


          var xc = 0;

          if (data.length !== 0) {
            return (data
              .map((f) => {
                if (f.status === 'pending') {


                  xc++

                  const card = document.createElement('div')



                  card.classList.add('cardo')

                  ///restraunt 
                  const restrauntName = document.createElement('h3')
                  var customerName = document.createElement('p')
                  restrauntName.innerText = 'XYZ restraunt'
                  //customer name 
                  customerName.classList.add('customerName')
                  customerName.innerText = 'Name: ' + f.name
                  //table
                  var kot = document.createElement('p')
                  kot.innerText = "kot number: " + f.kot

                  var table = document.createElement('p')
                  table.innerText = 'table:' + f.table
                  table.classList.add('tableNumber')

                  //date and time
                  const date = document.createElement('p')

                  date.innerText = "date: " + f.time + '-' + f.month

                  const time = document.createElement('p')
                  time.innerText = 'time: ' + f.time2 + ':' + f.min
                  time.classList.add('time')
                  //table of ordered items
                  const gridContainer = document.createElement('table')
                  gridContainer.classList.add('grid-container')
                  const theadaa = document.createElement('thead')

                  if (f.table === 'takeaway') {
                    h1.innerHTML = 'Take away ' + f.kot
                  }
                  if (f.table === 'onlineorder') {
                    h1.innerHTML = 'online order ' + f.kot
                  }
                  //item
                  const item = document.createElement('td')
                  item.classList.add('grid-item')
                  item.innerText = 'Item'
                  //quantity
                  const quantity = document.createElement('td')
                  quantity.classList.add('grid-item')
                  quantity.innerText = 'Quantity'


                  const hr = document.createElement('hr')

                  theadaa.append(item, quantity)
                  gridContainer.append(theadaa)


                  var amounttt = []

                  const tb = document.createElement('tbody')

                  const la = document.createElement('div')
                  const vic = document.createElement('div')

                  vic.append(restrauntName, customerName, table, kot, date, time)
                  card.setAttribute('id', 'kot' + f.kot)
                  card.classList.add('bookedTable')
                  var zoo = []
                  zoo.push(xc)

                  //e.target.parentElement.parentElement.style.bacgroundColor='red'
                  // const printElement=document.querySelector()
                  //     printJS(printElement, 'html')



                  f.orderedFood.map((x) => {

                    //getting ordered food 
                    var nameOfFood = document.createElement('td')
                    nameOfFood.innerText = x.id
                    nameOfFood.classList.add('grid-item')
                    //quantity
                    var quantity = document.createElement('td')
                    quantity.innerText = x.items
                    quantity.classList.add('grid-item')
                    //price


                    const tr3 = document.createElement('tr')

                    tr3.append(nameOfFood, quantity)
                    tb.append(tr3)

                  })



                  gridContainer.append(tb)

                  // total logic

                  var nums = amounttt.map(function (str) {


                    return parseInt(str);
                  });

                  var totalcost = nums.reduce((a, b) => a + b, 0)


                  //total
                  const tr2 = document.createElement('table')
                  const thead = document.createElement('thead')
                  const total = document.createElement('td')

                  total.innerText = 'Total'
                  const totalAmt = document.createElement('td')
                  totalAmt.innerText = f.orderedFood.length
                  thead.append(total, totalAmt)
                  tr2.append(thead)
                  // const tbody=document.createElement('tbody')
                  // tbody.append(tr,tr2)



                  //pushing

                  vic.append(gridContainer, tr2, hr)
                  la.setAttribute('id', 'lol' + xc.toString())
                  la.append(vic)
                  la.classList.add(xc.toString())
                  la.classList.add('ol')


                  card.append(la)
                }
              }))
          }
        }
      })
      const h1 = document.createElement('h2')
      h1.innerHTML = `Kot ${x.kot}`

      const customerName = document.createElement('input')
      customerName.setAttribute('placeholder', 'customer name')
      customerName.setAttribute('id', 'customerName')
      const number = document.createElement('input')
      number.setAttribute('placeholder', 'Phone Number')
      number.setAttribute('id', 'PhoneNumber')
      const remove = document.createElement('button')
      remove.innerHTML = 'remove'
      remove.addEventListener('click', () => {
        post(j, '/delete')
      })
      const buttondiv = document.createElement('div')
      buttondiv.classList.add('flex')
      const kot = document.createElement('button')
      kot.innerHTML = `<a href='../kot/KOT.html' class='kot'>Kot</a>`


      buttondiv.append(print, remove, kot)
      takeaway.append(h1, customerName, number, buttondiv)
      document.body.append(takeaway)
      const takeawayorders = document.querySelector('.takeaway')
      takeawayorders.append(takeaway)
    }
    //if order is a online order
    if (x.table === 'onlineorder') {
      document.querySelector('.order').style.display = 'block'

      const j = data.filter(el => el.table === 'onlineorder');


      const onlineorder = document.createElement('div')
      onlineorder.classList.add('onlineorder')
      const print = document.createElement('button')
      print.innerHTML = 'PRINT'
      print.addEventListener('click', () => {
        printbill(j)
      })

      const h1 = document.createElement('h2')
      h1.innerHTML = `Kot  ${x.kot}
`

      const customerName = document.createElement('input')
      customerName.setAttribute('placeholder', 'customer name')
      customerName.setAttribute('id', 'customerName')
      const number = document.createElement('input')
      number.setAttribute('placeholder', 'Phone Number')
      number.setAttribute('id', 'PhoneNumber')
      const remove = document.createElement('button')
      remove.innerHTML = 'REMOVE'
      remove.addEventListener('click', () => {
        post(j, '/delete')
      })
      const buttondiv = document.createElement('div')
      buttondiv.classList.add('flex')
      const kot = document.createElement('button')
      kot.innerHTML = `<a href='../kot/KOT.html' style='color:"white"' class='kot'>KOT</a>`


      buttondiv.append(print, remove, kot)
      onlineorder.append(h1, customerName, number, buttondiv)
      const onlineOrders = document.querySelector('.onlineorders')
      onlineOrders.append(onlineorder)

    }

  })




  // Checked the matched table numbers between two arrays tables and data and add into the result array

  let ret = tables.filter(val => hoho.includes(val));
  //shows booked tables
  const bookedTables = []

  ret.map((y) => {



    //setting background color of the reserved div
    const selectedTables = document.querySelector('#table' + y.toString())
    selectedTables.classList.add('bookedTable')
    //searchingfor the object in data that has same data as  ret
    let search9 = data.find((O) => O.table === y);

    bookedTables.push(search9)
    const j = data.filter(el => el.table === y);



    //generating bill templete in div on left corner
    selectedTables.addEventListener('click', () => {

      //bill gemeration


      //right-container  inner html
      const bill = document.querySelector('.generateBill')
      bill.style.display = 'flex'
      bill.innerHTML = ` <div class='flexoid'><i id='cross' class="fa-regular fa-circle-xmark" onclick='none()'></i></div>`

      function orders() {
        var gridContainer = document.createElement('table')
        gridContainer.classList.add('table')
        gridContainer.classList.add('text-black')

        //item
        const item = document.createElement('th')
        item.classList.add('grid-item')
        item.innerText = 'Item'
        //quantity
        const quantity = document.createElement('th')
        quantity.classList.add('grid-item')
        quantity.innerText = 'Quantity'
        //rate
        const rate = document.createElement('th')
        rate.classList.add('grid-item')
        rate.innerText = 'Amount'
        //amount


        const header = document.createElement('thead')
        header.append(item, quantity, rate)
        gridContainer.append(header)


        const theadaa = document.createElement('tbody')

        const salesToday = []
        j.map((x) => {
          const saleForToday = []
          x.orderedFood.map((y) => {

            saleForToday.push(y.price * y.items);

            const tr = document.createElement('tr')
            //item
            const item = document.createElement('td')
            item.classList.add('grid-item')
            item.innerText = y.id.replace(/([A-Z])/g, ' $1').trim()
            //quantity
            const quantity = document.createElement('td')
            quantity.classList.add('grid-item')
            quantity.innerText = y.items
            //rate
            const rate = document.createElement('td')
            rate.classList.add('grid-item')
            rate.innerText = y.price
            //amount
            tr.append(item, quantity, rate)
            theadaa.append(tr)


          })
          const add = saleForToday.reduce(function (acc, val) {
            return acc + val;
          }, 0)
          console.log(add);
          salesToday.push(add)

        })



        gridContainer.append(theadaa)
        gridContainer.style.display = 'none'
        const customerName = document.createElement('input')
        customerName.setAttribute('placeholder', 'customer name')
        customerName.setAttribute('id', 'customerName')
        const number = document.createElement('input')
        number.setAttribute('placeholder', 'Phone Number')
        number.setAttribute('id', 'PhoneNumber')
        const inputs = document.createElement('div')
        //inputs.append(customerName, number)
        inputs.innerHTML = `
<div class="form-group">
											<label class="font-w600">Customer Info</label>
											<input type="text" class="form-control solid"  id="customerName" placeholder="Enter Full Name">
										</div>
                    
                    <div class="form-group">
											<input type="text" class="form-control solid" id="PhoneNumber" placeholder="Enter Phone Number">
										</div>
                  

                    
                    <div class="form-group" style='display:flex'>
											<input type="text" class="form-control solid" id="discount" placeholder="Enter discount" style='width:60%'>
                      <select style='width:50' id='percent'><option id='₹'>₹</option> <option id='%'>%</option></select>
										</div>
                

`
        const amt = document.createElement('div')
        console.log(salesToday);
        amt.setAttribute('class', 'total')
        amt.innerHTML = `<h4 class="mb-4">Amount to Pay ₹<strong>   ${salesToday}</strong></h4>`
        const button = document.createElement("a")
        button.style.color = 'black'
        button.setAttribute('class', 'limk')
        button.addEventListener('click', () => {
          document.querySelector('.table').style.display = 'block'
          document.querySelector('.limk').style.display = 'none'
          document.querySelector('.total').style.display = 'none'

        })
        button.innerHTML = 'View orders'

        bill.append(gridContainer, amt, button, inputs)
        const payment = document.createElement('div')

        payment.innerHTML = `
        <div class='flex'>
        <div class="form-group mb-4 pb-2">
<label class="font-w600">Select Payment Method</label>
<div class="row no-gutters align-items-center">
  <div class="col-6 col-sm-6 col-md-6 col-lg-4">
    <div class="custom-control custom-radio">
      <input checked="" type="radio" id="cash" name="option" class="custom-control-input">
      <label class="custom-control-label" for="cash"><span class="ms-2">Cash</span></label>
    </div>
  </div>
  <div class="col-6 col-sm-6 col-md-6 col-lg-4">
    <div class="custom-control custom-radio">
      <input type="radio" id="card" name="option" class="custom-control-input">
      <label class="custom-control-label" for="card"><span class="ms-2">Card</span></label>
    </div>
  </div>
</div>
</div>
<div class="form-group mb-4 pb-2">
<label class="font-w600">Order type</label>
<div class="row no-gutters align-items-center">

  <div class="col-6 col-sm-6 col-md-6 col-lg-4">
    <div class="custom-control custom-radio">
      <input type="radio" id="dine-in" name="option2" class="custom-control-input">
      <label class="custom-control-label" for="dine-in"><span class="ms-2">Dine-in</span></label>
    </div>
  </div>
  <div class="col-6 col-sm-6 col-md-6 col-lg-4">
    <div class="custom-control custom-radio">
      <input checked="" type="radio" id="takeaway" name="option2" class="custom-control-input">
      <label class="custom-control-label" for="takeaway"><span class="ms-2">Takeaway</span></label>
    </div>
  </div>
  <div class="col-12 col-sm-12 col-md-6 col-lg-4">
    <div class="select_box style-1 w-100 d-flex">
    
  </div>
</div>
</div>
</div>

`
        const order = document.createElement('div')
        order.innerHTML = ``
        bill.append(payment)
        const buttondiv = document.createElement('div')
        buttondiv.classList.add('buttondiv')
        const print = document.createElement('button')

        print.innerHTML = `
<i class="fa-brands  fa-whatsapp " id='sms'></i>`
        const remove = document.createElement('button')
        print.addEventListener('click', () => {
          printbill(j)
          document.querySelector('.haha').style.display = 'block'

          // document.querySelector('.haha').style.display='none'
          document.querySelector('#table' + j[0].table).classList.remove('bookedTable')

        })


        remove.innerText = 'Remove'
        remove.addEventListener('click', (e) => {
          j.map((Q) => {
            document.querySelector('#table' + j[0].table).classList.remove('bookedTable')
            document.querySelector('.generateBill').style.display = 'none'

            let search9 = j.find((O) => O.kot === Q.kot);



            //send info to backend
            post(search9, '/delete')
          })
        })
        const kota = document.createElement('button')
        kota.innerHTML = `
<i class="fa-regular sms fa-message" id='sms'></i>`
        kota.addEventListener('click', (e) => {
          document.querySelector('.generateBill').style.display = 'none'
          number.innerHTML
          post(number.innerHTML, '/sms')

        })

        buttondiv.append(print, remove, kota)
        bill.append(buttondiv)


      }

      orders()


    })








  })

}


const printbill = (data) => {
  if (data.length !== 0) {

    // var emailContent = document.getElementsByTagName('table')[0].textContent;



    billno++
    const restrauntName = document.createElement('h3')
    var customerName = document.createElement('p')
    restrauntName.innerText = 'XYZ restraunt'
    //customer name 
    customerName.classList.add('customerName')
    const n = document.querySelector('#customerName')
    customerName.innerText = 'Name: ' + n.value
    //table
    var kot = document.createElement('p')
    kot.innerText = "Bill number: " + billno

    var table = document.createElement('p')
    table.innerText = 'table: ' + data[0].table
    table.classList.add('tableNumber')

    const date = document.createElement('p')
    date.innerText = "date: " + data[0].time

    const time = document.createElement('p')
    time.innerText = 'time: ' + data[0].hours
    time.classList.add('time')



    //table of ordered items
    const gridContainer = document.createElement('table')
    gridContainer.classList.add('grid-container')

    const theadaa = document.createElement('thead')
    //item
    const item = document.createElement('td')
    item.classList.add('grid-item')
    item.innerText = 'Item'
    //quantity
    const quantity = document.createElement('td')
    quantity.classList.add('grid-item')
    quantity.innerText = 'Quantity'
    //rate
    const rate = document.createElement('td')
    rate.classList.add('grid-item')
    rate.innerText = 'Rate'
    //amount
    const amount = document.createElement('td')
    amount.classList.add('grid-item')
    amount.innerText = 'Amount'

    const hr = document.createElement('hr')

    theadaa.append(item, quantity, rate, amount)
    gridContainer.append(theadaa)
    console.log('loll');
    console.log(theadaa);
    var amounttt = []

    const tb = document.createElement('tbody')


    const vic = document.createElement('div')

    vic.append(restrauntName, customerName, table, kot, date, time)

    vic.setAttribute('id', 'bill' + data[0].table)

    var foodmsg = [];
    var foodlist = []
    data.map((y) => {

      y.orderedFood.map((x) => {
        foodlist.push(x.id)

        //getting ordered food 
        var nameOfFood = document.createElement('td')
        nameOfFood.innerText = x.id.replace(/([A-Z])/g, ' $1').trim()
        nameOfFood.classList.add('grid-item')
        //quantity
        var quantity = document.createElement('td')
        quantity.innerText = x.items
        quantity.classList.add('grid-item')
        //price

        //rate
        const rate = document.createElement('td')
        rate.innerText = x.price
        rate.classList.add('grid-item')

        //amount
        const amount = document.createElement('td')
        amount.innerText = x.price * x.items
        amount.setAttribute('id', 'amount')
        amount.classList.add('grid-item')
        const tr3 = document.createElement('tr')

        tr3.append(nameOfFood, quantity, rate, amount)
        var msg1 = `Name: ${x.id}      Quantity: ${x.items}       Rate: ${x.price}    Amount: ${x.price*x.items}       `
        foodmsg.push(msg1)
        tb.append(tr3)
        amounttt.push(amount.innerText);
      })
    })


    gridContainer.append(tb)

    // total logic

    var nums = amounttt.map(function (str) {


      return parseInt(str);
    });

    var totalcost = nums.reduce((a, b) => a + b, 0)

    //gst 
    const gst = document.createElement('table')
    gst.classList.add('gst')

    const theada = document.createElement('thead')

    const sgst = document.createElement('td')

    sgst.innerText = 'SGST'
    const sgstAmt = document.createElement('td')
    sgstAmt.innerText = Math.floor(totalcost / 100 * 2.5 * 100) / 100

    theada.append(sgst, sgstAmt)

    const tr = document.createElement('tr')
    const cgst = document.createElement('td')

    cgst.innerText = 'CGST'


    const cgstAmt = document.createElement('td')
    cgstAmt.innerText = Math.floor(totalcost / 100 * 2.5 * 100) / 100
    cgst.classList.add('tax')
    tr.append(cgst, cgstAmt)

    tax.push(cgst.value)
    //total
    const tr2 = document.createElement('tr')
    const total = document.createElement('td')

    total.innerText = 'Total'
    const totalAmt = document.createElement('td')


    const discount = document.querySelector('#discount').value
    const e = document.querySelector('#percent')

    var text = e.options[e.selectedIndex].id;
    var discountedamt;
    console.log(discount, text);
    var discAmt;
    if (text === '%') {
      console.log(text);
      discAmt = totalcost * discount / 100

      discountedamt = totalcost - (totalcost * discount / 100)
    } else if (text === '₹') {
      discountedamt = totalcost - discount
      discAmt = discount
    }
    totalAmt.innerText = Math.round(discountedamt + discountedamt / 100 * 2.5 + discountedamt / 100 * 2.5)
    const tr3 = document.createElement('tr')
    const tddiscount = document.createElement('td')
    tddiscount.innerText = 'Less Discount'
    const amountOfDiscount = document.createElement('td')

    amountOfDiscount.innerText = discAmt
    tr2.append(total, totalAmt)
    tr3.append(tddiscount, amountOfDiscount)
    const tbody = document.createElement('tbody')
    tbody.append(tr, tr3, tr2)
    gst.append(theada, tbody)
    //greetings
    const greetings = document.createElement('p')
    greetings.innerText = ` Visit Again
   Have a nice day `



    //pushing

    vic.append(gridContainer, gst, greetings, hr)


    //append in html
    p.append(vic)
    const number = document.querySelector('#PhoneNumber').value
    const name = document.querySelector('#customerName').value


    document.querySelector('#bill' + data[0].table).style.display = 'block';

    const finaldata = document.querySelector('#phoneNumber').value


    // Find the HTML element you want to capture as an image
    const element = document.querySelector('#bill' + data[0].table);


    async function sendApi() {
      console.log('hohoh');
      const json = {
        html: element.innerHTML,
        css: "body { padding: 1em; }"
      };

      const username = "ca49f4e7-fdaa-430b-920c-9399cbbbf3eb";
      const password = "ce9daf46-d672-4aa1-8e15-b76a787e876c";

      const options = {
        method: 'POST',
        body: JSON.stringify(json),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa(username + ":" + password)
        }
      }

      await fetch('https://hcti.io/v1/image', options)
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            return Promise.reject(res.status);
          }
        })
        .then((data) => {
          // Image URL is available here
          console.log(data);

          const url = new URL(window.location.href)
          url.pathname = '/feedback'

          url.searchParams.set('name', n.value)
          url.searchParams.set('orders', foodlist)
          url.searchParams.set('number', number)

          console.log(url.search)
          console.log(data.url)




          const postdata = {
            number,
            image: data.url,
            name,
            totalcost: discountedamt,
            feedback: url.search,


          }
          console.log(postdata);

          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          myHeaders.append("Authorization",
            "Bearer EAAHpWJgc9ysBAI85N5KI7a4Xyh86IUe5UgatqtgZCp6XQ1y8qsEuPaeqW0cEOsrkIqMAC8XgHvmOOMvUDOXTtODLOayDZCYl2p0uA7tFP67RFXhvXGUPmI9ieXCJOMFhVlbWwCcZAfZCKoVVQqPiAitUlaRkGRtKAYz7cVvscZCkpSkiZAiOb6lLwgiVB6bAFXhBGazQbD3AZDZD"
          );
          console.log(myHeaders);
          var raw = JSON.stringify({
            "messaging_product": "whatsapp",
            "recipient_type": "individual",

            "to": `${number}`,
            "type": "template",
            "template": {
              "name": "billing_info",
              "language": {
                "code": "en"
              },
              "components": [{
                "type": "header",
                "parameters": [{
                  "type": "image",
                  "image": {
                    "link": `${data.url}`
                  }
                }]
              }, {
                "type": "body",
                "parameters": [{
                  "type": "text",
                  "text": `${name}`
                }, {
                  "type": "text",
                  "text": "XYZ restraunt"
                }, {
                  "type": "text",
                  "text": `${totalcost}`
                }, {
                  "type": "text",
                  "text": "XYZ"
                }]
              }, {
                "type": "button",
                "sub_type": "url",
                "index": "0",
                "parameters": [{
                  "type": "text",
                  "text": `${url.search}`
                }]
              }],
            }
          })
          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
          fetch("https://graph.facebook.com/v16.0/115687568138953/messages", requestOptions).then(response => response
            .text()).then(result => console.log(result + 'ther')).catch(error => console.log('error', error));

        })
        .catch(err => console.error(err));

    }
    sendApi()
    let method;
    let type;

    function displayRadioValue(ele, str) {

      const lol = document.querySelector('input[name="option"]:checked')
      console.log(lol);
      method = lol.id



    }
    var ele = document.getElementsByName('option');
    var ele2 = document.getElementsByName('optiion2');
    console.log('heee');
    //  displayRadioValue(ele, 'pay')
    displayRadioValue(ele2, 'type')
    const lol = document.querySelector('input[name="option2"]:checked')

    console.log(document.querySelector('input[name="option2"]:checked'));
    console.log(lol);
    type = lol.id


    const food = []
    data.map((x) => {
      var discountant;
      const name = document.querySelector('#customerName')
      const discount = document.querySelector('#discount').value

      const e = document.querySelector('#percent')

      var text = e.options[e.selectedIndex].id;

      console.log(discount, text);
      if (text === '%') {
        console.log(text);
        const total = document.querySelector('.mb-4').children[0].childNodes[0].data

        discountant = total * discount / 100
      } else {
        discountant = discount

      }
      var search9 = data.find((O) => O.kot === x.kot);
      search9.number = finaldata
      food.push(search9.orderedFood)

      const yearr = data[0].year
      const week = data[0].week


      const month = data[0].month
      const minutes = x.min
      var billData = {
        name: name.value,
        number: number,
        table: data[0].table,
        hours: data[0].hours,
        date: data[0].time,
        orders: food,
        status: data[0].status,
        year: yearr,
        week: week,
        month: month,
        minutes: minutes,
        paymentMethod: method,
        orderType: type,
        discount,
      }
      console.log(method, type);

      none()



      // const baseUrll = '/bill';
      // post(billData, baseUrll)
      // const baseUrl = '/delete'
      // post(search9, baseUrl)

    })

    document.querySelector('.generateBill').innerHTML = ''

    //remves bill1 from .haha
    const removePrevious = document.querySelector('#bill' + data[0].table)

    removePrevious.remove()


  } else {
    p.innerHTML =
      `
      <h2>No orders yet</h2>
      `
  }


}

getinfo()




async function post(data, baseUrl) {

  const res = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        pp: data
      }),

    }


  ).then(response => {
    if (!response.ok) { // ***
    } else {
      console.log('sent');
    } // ***
    // ...use `response.json`, `response.text`, etc. here
  });
  //  location.reload()

}