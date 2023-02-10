document.querySelector('.navbar-fostrap').addEventListener('click',()=>{
  document.querySelector('.nav-fostrap').classList.toggle('visible')
  
    })
  



const baseUrl='/info'
const baseUrl2='/send'
const z=[]

const orderstest=[]

  getinfo()
  


async function getinfo() {
  const res = await fetch(baseUrl,
    {
      method:'GET',
      }

    )

    const res2= await fetch(baseUrl2,
        {
method:'GET'
    })
    //products
const data2=await res2.json()
//information of customer
    const data=await res.json()




 
   
    



data.map((y)=>{
console.log(y)

  if(y.status==='pending'){

z.push(y)
 

}else{
  
}
})
createCard(z,data2)
}

function createCard(y,data){

    const food=[]
    const quantity=[]
    const categories=[]
 const onlyFood=[]
    y.map((y)=>{
   



y.orderedFood.map((z)=>{
if (z.status==='pending'){



const category=data.filter((r)=> r.item.replace(/\s/g, '') ===z.id)
onlyFood.push(z.id)
food.push({
  food:z.id,
  quantity:z.items

})
quantity.push(z.items)
categories.push(category[0].category)


}
})

})

rearrangedData(onlyFood,quantity,data)

//duplicate
//for left hand side
const map=categories.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
const string=[...map.keys()];
const number=[...map.values()]




string.forEach((c)=>{

})
for (let index = 0; index < string.length; index++) {
    document.querySelector('.categories').innerHTML+=`<button onclick='send(event)' class='category name' id='${string[index]}'> 
   
    
    ${string[index].toUpperCase()} </button>`
    
    
}


}
//fills up the div
function send(event){




    const x=orderstest.filter((y)=> y.category ===event.target.id)





const tbody=document.querySelector('tbody')
tbody.innerHTML=''
    x.map((y)=>{
     
      
      const tr=document.createElement('tr')
      
      const name=document.createElement('td')
      name.classList.add('name')
      name.innerHTML=y.item.replace(/([A-Z])/g, ' $1').trim()
      
        
      
      const quantity=document.createElement('td')
      quantity.innerHTML=y.quantity
   
      const category=document.createElement('td')
      category.innerHTML=y.category
   category.classList.add('name')   
     
      const notifyWaiter=document.createElement('td')
      notifyWaiter.innerHTML=`<button onclick='sendNotification(event)' id='${y.item}' class='notify'>Notify Waiter</button>`
      
     
      tr.append(name,quantity,notifyWaiter)
      
      tbody.append(tr)
      })
      







}

function sendNotification(event){

  const x=orderstest.filter((y)=> y.item ===event.target.id)
 
 
z.map((a)=>{
 ;
 const d= a.orderedFood.filter((c)=>c.id===x[0].item)

if(d.length>0){


//Find index of specific object using findIndex method.    
objIndex = d.findIndex((obj => obj.id == event.target.id));


//Update object's name property.
d[objIndex].status = "cooked"

//Log object to console again.
console.log("After update: ", d[objIndex])
console.log(a)
console.log(event.target.id)
const x=event.target.id +' is ready to be searved'
socket.emit('ready', x )

const baseUrl='/updateKitchen'
post(a,baseUrl)
location.reload()
}
})
// location.reload()
}




function rearrangedData(quantity2,amount,data){
  const datt=[]
  for (let index = 0; index < quantity2.length; index++) {
      datt.push({'time':quantity2[index],'amount':amount[index]})
      
  }
  const map2 = quantity2.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
  
  const time=[...map2.keys()];
  const total3=[]
  const foodprice=[]
  const categories=[]
  function maap2(y){
      y.map((z)=>{
  
          const x=datt.filter((o)=>o.time===z)
        
        total3.push(x[0])
        let result = x.map(a => a.amount)
        const add=result.reduce(function(acc, val) { return acc + val; }, 0)
        foodprice.push(add)
        })
  }
  function aaa(y){
  maap2(time)
     
    }
    aaa()
    time.map((a)=>{

      const category=data.filter((r)=> r.item.replace(/\s/g, '') ===a)
categories.push(category[0].category)
    })
    for (let index = 0; index < time.length; index++) {
     
      orderstest.push({
        item:time[index],
        quantity:foodprice[index],
        category:categories[index],
        status:'cooked',
        })    
  
    }

  
  
}








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
          console.log( "HTTP error " + response.status);  // ***
        }                                                    // ***
        // ...use `response.json`, `response.text`, etc. here
      })
      .catch(error => {
        console.log(error);
      });
  
    }
  
    var socket=io('/kitchen2');
    var socket = io();

    socket.on('message', data=>{
      Notification.requestPermission().then(perm =>{
          
          if(perm==='granted'){
              const notification = new Notification("Example Notification",{
                  body:data,
                  data:{hello :'world'},
                  tag:'hii'
              })
              notification.addEventListener('error',e=>{
                  alert('err')
              })
          } else{
  
          }
      })
  
      console.log('hii');
      console.log(data);
      const html=`<h1>  ${data}</h1>`
      messege.innerHTML +=html
  })