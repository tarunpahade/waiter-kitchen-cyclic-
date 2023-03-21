var socket=io('/kot&bill');
var socket = io();


document.querySelector('.navbar-fostrap').addEventListener('click',()=>{
  document.querySelector('.nav-fostrap').classList.toggle('visible')
  
    })
  
//next thing to do is to create two inputs for payboy and then print option 
//and delete data from data base or send to another database

const bookedTables=[]
const tax=[]

var billno=0
var fooditems=[]

const p =document.querySelector('.haha')
const hoho=[]
const tables=[ '6','5','7','8','1','2','3','4','9']
// const appdata=JSON.parse(localStorage.getItem('kot')) || []




function none(){
  document.querySelector('.generateBill').style.display='none'
}






const baseUrl='/info'

async function getinfo() {
  const res = await fetch(baseUrl,
    {
      method:'GET',
      }

    )
  

    const data=await res.json()

data.map((x)=>{


hoho.push(x.table)
//if order is takeaway
if(x.table==='takeaway'){
document.querySelector('.torder').style.display='block'
  const j=data.filter(el => el.table === 'takeaway');


  const takeaway=document.createElement('div')
  takeaway.classList.add('takeawayonline')
  const print=document.createElement('button')
  print.innerHTML='print'
  print.addEventListener('click',()=>{
  printbill(j)
  })
const kota=document.createElement('button')
kota.innerHTML='Print Kot'
kota.addEventListener('click',()=>{
  const baseUrl='/info'
getinfo()
async function getinfo() {
  const res = await fetch(baseUrl,
    {
      method:'GET',
      }

    )
  

    const data=await res.json()


//update edit delete


var xc=0;

    if (data.length !== 0) {
      return ( data
        .map((f) => {
          if(f.status==='pending'){

    
            xc++          
   
            const card= document.createElement('div') 

            
    
card.classList.add('cardo')

///restraunt 
const restrauntName= document.createElement('h3')
var customerName = document.createElement('p')
restrauntName.innerText='XYZ restraunt'
//customer name 
customerName.classList.add('customerName')
customerName.innerText = 'Name: '+f.name
//table
var kot=document.createElement('p')
kot.innerText="kot number: "+f.kot

var table = document.createElement('p')
table.innerText ='table:'+ f.table
table.classList.add('tableNumber')

//date and time
const date=document.createElement('p')

date.innerText="date: "+f.time+'-'+f.month

const time = document.createElement('p')
time.innerText ='time: '+ f.time2 +':'+f.min
time.classList.add('time')
//table of ordered items
const gridContainer=document.createElement('table')
gridContainer.classList.add('grid-container')
const theadaa=document.createElement('thead')

if(f.table==='takeaway'){
  h1.innerHTML='Take away '+f.kot
}
if(f.table==='onlineorder'){
  h1.innerHTML='online order '+f.kot
}
//item
const item=document.createElement('td')
item.classList.add('grid-item')
item.innerText='Item'
//quantity
const quantity=document.createElement('td')
quantity.classList.add('grid-item')
quantity.innerText='Quantity'


const hr=document.createElement('hr')

theadaa.append(item,quantity)
gridContainer.append(theadaa)


var amounttt=[]

const tb=document.createElement('tbody')

const la = document.createElement('div')
const vic= document.createElement('div')

vic.append(restrauntName, customerName, table,kot,date,time)
card.setAttribute('id','kot'+f.kot)
card.classList.add('bookedTable')
var zoo=[]
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
   

    const tr3=document.createElement('tr')

    tr3.append(nameOfFood, quantity)
    tb.append(tr3) 

})



gridContainer.append(tb)

// total logic

var nums = amounttt.map(function(str) {


return parseInt(str); });

var totalcost=nums.reduce((a, b) => a + b, 0)


//total
const tr2=document.createElement('table')
const thead=document.createElement('thead')
const total=document.createElement('td')

total.innerText='Total'
const totalAmt=document.createElement('td')
totalAmt.innerText=f.orderedFood.length
thead.append(total,totalAmt)
tr2.append(thead)
// const tbody=document.createElement('tbody')
// tbody.append(tr,tr2)



//pushing

vic.append(gridContainer,tr2,hr)
la.setAttribute('id','lol'+xc.toString())
la.append(vic)
la.classList.add(xc.toString())
la.classList.add('ol')


card.append(la)
}
}))}
}})
const h1=document.createElement('h2')
h1.innerHTML=`Kot ${x.kot}`

const customerName=document.createElement('input')
customerName.setAttribute('placeholder', 'customer name')
customerName.setAttribute('id', 'customerName')
const number=document.createElement('input')
number.setAttribute('placeholder', 'Phone Number')
number.setAttribute('id', 'PhoneNumber')
const remove= document.createElement('button') 
remove.innerHTML='remove'
remove.addEventListener('click',()=>{
  post(j,'/delete')
})
const buttondiv=document.createElement('div')
buttondiv.classList.add('flex')
const kot=document.createElement('button')
kot.innerHTML=`<a href='../kot/KOT.html' class='kot'>Kot</a>`


buttondiv.append(print,remove,kot)
takeaway.append(h1,customerName,number,buttondiv)  
document.body.append(takeaway)
const takeawayorders=document.querySelector('.takeaway')
takeawayorders.append(takeaway)
}
//if order is a online order
if(x.table==='onlineorder'){
  document.querySelector('.order').style.display='block'

  const j=data.filter(el => el.table === 'onlineorder');


  const onlineorder=document.createElement('div')
  onlineorder.classList.add('onlineorder')
  const print=document.createElement('button')
  print.innerHTML='PRINT'
  print.addEventListener('click',()=>{
  printbill(j)
  })

const h1=document.createElement('h2')
h1.innerHTML=`Kot  ${x.kot}
`

const customerName=document.createElement('input')
customerName.setAttribute('placeholder', 'customer name')
customerName.setAttribute('id', 'customerName')
const number=document.createElement('input')
number.setAttribute('placeholder', 'Phone Number')
number.setAttribute('id', 'PhoneNumber')
const remove= document.createElement('button') 
remove.innerHTML='REMOVE'
remove.addEventListener('click',()=>{
  post(j,'/delete')
})
const buttondiv=document.createElement('div')
buttondiv.classList.add('flex')
const kot=document.createElement('button')
kot.innerHTML=`<a href='../kot/KOT.html' style='color:"white"' class='kot'>KOT</a>`


buttondiv.append(print,remove,kot)
onlineorder.append(h1,customerName,number,buttondiv)  
const onlineOrders=document.querySelector('.onlineorders')
onlineOrders.append(onlineorder)

}

})




// Checked the matched table numbers between two arrays tables and data and add into the result array
  
  let ret = tables.filter(val => hoho.includes(val) );
  //shows booked tables
  const bookedTables=[]

  ret.map((y)=>{

  

    //setting background color of the reserved div
    const selectedTables= document.querySelector('#table'+y.toString())
    selectedTables.classList.add('bookedTable')
    //searchingfor the object in data that has same data as  ret
  let search9=data.find((O)=> O.table === y );

bookedTables.push(search9)
const j=data.filter(el => el.table === y);



//generating bill templete in div on left corner
selectedTables.addEventListener('click',()=>{
  
  //bill gemeration


  //right-container  inner html
  const bill= document.querySelector('.generateBill')
bill.style.display='flex'  
  bill.innerHTML=` <div class='flexoid'><h3>${search9.name}</h3><i id='cross' class="fa-regular fa-circle-xmark" onclick='none()'></i></div>`

function orders(){
  var gridContainer=document.createElement('table')
gridContainer.classList.add('grid-container')

var theadaa=document.createElement('tbody')
  j.map((x)=>{
 x.orderedFood.map((y)=>{
fooditems.push(y)

const tr=document.createElement('tr')
//item
const item=document.createElement('td')
item.classList.add('grid-item')
item.innerText=y.id.replace(/([A-Z])/g, ' $1').trim()
//quantity
const quantity=document.createElement('td')
quantity.classList.add('grid-item')
quantity.innerText=y.items
//rate
const rate=document.createElement('td')
rate.classList.add('grid-item')
rate.innerText=y.price
//amount
tr.append(item,quantity,rate)
theadaa.append(tr)


})


})



gridContainer.append(theadaa)

const customerName=document.createElement('input')
customerName.setAttribute('placeholder', 'customer name')
customerName.setAttribute('id', 'customerName')
const number=document.createElement('input')
number.setAttribute('placeholder', 'Phone Number')
number.setAttribute('id', 'PhoneNumber')
const inputs=document.createElement('div')
inputs.append(customerName,number)
bill.append(gridContainer,inputs)


const buttondiv=document.createElement('div') 
buttondiv.classList.add('buttondiv')
const print= document.createElement('button') 

print.innerHTML=`
<i class="fa-brands  fa-whatsapp " id='sms'></i>`
const remove= document.createElement('button') 
print.addEventListener('click',()=>{

  document.querySelector('.haha').style.display='block'
  printbill(j)
  // document.querySelector('.haha').style.display='none'
  document.querySelector('#table'+j[0].table).classList.remove('bookedTable')
  
})


remove.innerText='Remove'
remove.addEventListener('click',(e)=>{
j.map((Q)=>{
  document.querySelector('#table'+j[0].table).classList.remove('bookedTable')
  document.querySelector('.generateBill').style.display='none'

  let search9=j.find((O)=> O.kot ===  Q.kot);



//send info to backend
 post(search9,'/delete')
})
})
const kota=document.createElement('button')
kota.innerHTML=`
<i class="fa-regular sms fa-message" id='sms'></i>`
kota.addEventListener('click',(e)=>{
  document.querySelector('.generateBill').style.display='none'
 number.innerHTML
  post(number.innerHTML,'/sms')

}
)

buttondiv.append(print,remove,kota)
bill.append(buttondiv)


}

orders()


})


  


  
  
  
  })

}



const printbill=(data)=>{
      if (data.length !== 0) {
 
  // var emailContent = document.getElementsByTagName('table')[0].textContent;



  billno++
  const restrauntName= document.createElement('h3')
  var customerName = document.createElement('p')
  restrauntName.innerText='XYZ restraunt'
  //customer name 
  customerName.classList.add('customerName')
  const n=document.querySelector('#customerName')
  customerName.innerText = 'Name: '+n.value
  //table
  var kot=document.createElement('p')
  kot.innerText="Bill number: "+billno
  
  var table = document.createElement('p')
  table.innerText ='table: '+ data[0].table
  table.classList.add('tableNumber')
  
  const date=document.createElement('p')
date.innerText="date: "+data[0].time

const time = document.createElement('p')
time.innerText ='time: '+ data[0].hours
time.classList.add('time')
  


  //table of ordered items
  const gridContainer=document.createElement('table')
  gridContainer.classList.add('grid-container')
  
  const theadaa=document.createElement('thead')
  //item
  const item=document.createElement('td')
  item.classList.add('grid-item')
  item.innerText='Item'
  //quantity
  const quantity=document.createElement('td')
  quantity.classList.add('grid-item')
  quantity.innerText='Quantity'
  //rate
  const rate=document.createElement('td')
  rate.classList.add('grid-item')
  rate.innerText='Rate'
  //amount
  const amount=document.createElement('td')
  amount.classList.add('grid-item')
  amount.innerText='Amount'
  
  const hr=document.createElement('hr')
  
  theadaa.append(item,quantity,rate,amount)
  gridContainer.append(theadaa)
  
  
  var amounttt=[]
  
  const tb=document.createElement('tbody')
  
  
  const vic= document.createElement('div')
  
  vic.append(restrauntName, customerName, table,kot,date,time)
  
 vic.setAttribute('id','bill'+data[0].table) 

 var foodmsg=[];
  var foodlist=[]
  data.map((y) => {

  y.orderedFood.map((x)=>{
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
      const rate=document.createElement('td')
      rate.innerText=x.price
  rate.classList.add('grid-item')
  
  //amount
      const amount=document.createElement('td')
      amount.innerText=x.price*x.items
      amount.setAttribute('id','amount')
      amount.classList.add('grid-item')
      const tr3=document.createElement('tr')
  
      tr3.append(nameOfFood, quantity,rate,amount)
      var msg1=`Name: ${x.id}      Quantity: ${x.items}       Rate: ${x.price}    Amount: ${x.price*x.items}       `
      foodmsg.push(msg1)
      tb.append(tr3) 
  amounttt.push(amount.innerText);
  })
})
  
  
  gridContainer.append(tb)
  
  // total logic
  
  var nums = amounttt.map(function(str) {
  
  
  return parseInt(str); });
  
  var totalcost=nums.reduce((a, b) => a + b, 0)
  
  //gst 
  const gst=document.createElement('table')
  gst.classList.add('gst')
  
  const theada=document.createElement('thead')
  
  const sgst=document.createElement('td')
  
  sgst.innerText='SGST' 
  const sgstAmt=document.createElement('td')
  sgstAmt.innerText=Math.floor( totalcost/100*2.5*100)/100
  
  theada.append(sgst,sgstAmt)
  
  const tr=document.createElement('tr')
  const cgst=document.createElement('td')
  
  cgst.innerText='CGST'
  
  
  const cgstAmt=document.createElement('td')
  cgstAmt.innerText=Math.floor( totalcost/100*2.5*100)/100
  cgst.classList.add('tax')
  tr.append(cgst,cgstAmt)
  
  tax.push(cgst.value)
  //total
  const tr2=document.createElement('tr')
  const total=document.createElement('td')
  
  total.innerText='Total'
  const totalAmt=document.createElement('td')
  totalAmt.innerText=Math.round(totalcost+totalcost/100*2.5+totalcost/100*2.5)
  tr2.append(total,totalAmt)
  const tbody=document.createElement('tbody')
  tbody.append(tr,tr2)
  gst.append(theada,tbody)
  //greetings
  const greetings=document.createElement('p')
  greetings.innerText=` Visit Again
   Have a nice day `
  
  
  
  //pushing

  vic.append(gridContainer,gst,greetings,hr)


//append in html
  p.append(vic)
const number=document.querySelector('#PhoneNumber').value

  
  document.querySelector('#bill'+data[0].table).style.display='block' ;

  const finaldata=document.querySelector('#phoneNumber').value 

 printJS('bill'+data[0].table, 'html')
const bill =document.querySelector('#bill'+ data[0].table).innerText


// Find the HTML element you want to capture as an image
const element = document.querySelector('#bill'+ data[0].table);

 
function sendApi(){
 console.log('hohoh');
  const json = {
    html: element.innerHTML,
    css: "body { padding: 1em; }"
  };
  
  const username = "9a4e5d51-f632-4f8d-a00c-3df3d5b5ed45";
  const password = "290b5505-f619-4e96-bbfb-78138a1f3282";
  
  const options = {
    method: 'POST',
    body: JSON.stringify(json),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(username + ":" + password)
    }
  }
  
  fetch('https://hcti.io/v1/image', options)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res.status);
      }
    })
    .then(data => {
      // Image URL is available here


const url=new URL(window.location.href)
url.pathname='/feedback'
 
 url.searchParams.set('name',n.value)
url.searchParams.set('orders',foodlist)
url.searchParams.set('number',number)
console.log(url.href);
console.log(url)
console.log(url.search)
      console.log(data.url)
      const twiliodata={
        img:data.url,
        phone:number,
        url:url.href
      }
      
const baseUr='/number'
// post(twiliodata,baseUr)
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Bearer EAAHpWJgc9ysBAHFMrspVbblT3bTqBltJs2HiE7uSLYukKvuXV6AtFIvCXS6wZAkLmuZAB8ZCD4m9e09gAZA4DhGGuNTucS9B3dm4M13KkJPT6qp0u0grhZA3wwja6cG0MAZCFkCU4hfVBvtChdfMhGiVXVYF5UBbxHOB0WZAHq2OMZAYYscIYHj8OMDgROMMDD3aqODVRfhAegZDZD");

var raw = JSON.stringify({
  "messaging_product": "whatsapp",
  "from": "919766289013",
  "to": "918010669013",
  "type": "template",
  "template": {
    "name": "hello_world",
    "language": {
      "code": "en_US"
    }
  }
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://graph.facebook.com/v16.0/115687568138953/messages", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

    })
    .catch(err => console.error(err));
}

sendApi()


  //getUrl()


   

  const food=[]
  data.map((x)=>{

 
    var search9=data.find((O)=> O.kot ===  x.kot);
  search9.number=finaldata
food.push(search9.orderedFood)

 const yearr=data[0].year
 const week=data[0].week
 const timee=data[0].time

const month=data[0].month
const minutes=x.min
    const billData={
      name:n.value,
      number:number,
      table:data[0].table,
hours:data[0].hours,
      date:data[0].time,
      orders:food,
status:data[0].status,
year:yearr,
week:week,
month:month,
    minutes:minutes
     }
    
     const msgdata={
      number,
      msg:`
      Hello ${n.value}, Thanks for visiting our restraunt ! Here is your bill
      ${foodmsg},
      CGST: ${Math.round(totalcost/100*2.5)}
      SGST: ${Math.round(totalcost/100*2.5)}
      total :${Math.round(totalcost+totalcost/100*2.5+totalcost/100*2.5)}
      
      `,
     }
     none()


   
// const baseUrll='/bill';
// post(billData,baseUrll)    
// const baseUrl='/delete'
// post(search9,baseUrl)

})   

 
; 
//const booked= document.querySelector('#table'+data[0].table)
//if(booked.length>0){
//booked.classList.remove('bookedTable')
//}
 
   document.querySelector('.generateBill').innerHTML=''

   //remves bill1 from .haha
const removePrevious=document.querySelector('#bill'+data[0].table)

removePrevious.remove()




   
  
//now search9 delete it from the database
}
  else{
     p.innerHTML=
       `
      <h2>No orders yet</h2>
      `
  }

  
    }

      getinfo()
      

  

  async   function post(data,baseUrl){

      const res= await fetch(baseUrl,
        {
          method:"POST",
        headers: {
    "Content-Type": 'application/json'
        },
        body: JSON.stringify({
          pp:data}),
   
      }
    
        
        ).then(response => {
          if (!response.ok) {                                  // ***
          }  else {
            console.log('sent');
          }                                                  // ***
          // ...use `response.json`, `response.text`, etc. here
        })
     ;
      //  location.reload()
   
      }


    