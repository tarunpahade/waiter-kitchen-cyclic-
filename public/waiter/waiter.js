

const rders=document.querySelector('.orders')
const baseUrl='http://localhost:8000/info'

  getinfo()
  

async function getinfo() {
  const res = await fetch(baseUrl,
    {
      method:'GET',
      }

    )
  

    const data=await res.json()
data.map((x)=>{

x.orderedFood.map((z)=>{
  if(z.status==='cooked'){
    console.log(z);
    const div=document.createElement('div')
      div.classList.add('card')
      const cardBody=document.createElement('div')
      cardBody.classList.add('card-body')
    
      const orderNumber=document.createElement('p')
      const served=document.createElement('button')
      orderNumber.innerHTML= ` is ready to be searved `
      const tableNumber=document.createElement('p')
      tableNumber.innerHTML='Name: '+z.id.replace(/([A-Z])/g, ' $1').trim()
      const kotNumber=document.createElement('p')
      kotNumber.innerHTML='Quantity: '+z.items
      const table=document.createElement('p')
table.innerHTML='Table: '+x.table
      
      served.addEventListener('click',()=>{
      
        const d= x.orderedFood.filter((c)=>c.id===z.id)

       
        
        
        //Find index of specific object using findIndex method.    
        objIndex = d.findIndex((obj => obj.id == z.id));
        
        
        //Update object's name property.
        d[objIndex].status = "served"
        
        //Log object to console again.
        console.log("After update: ", d[objIndex])
        console.log(x)
  const baseUrl='http://localhost:8000/waiter'
        post(x,baseUrl)
       location.reload()
       })
 
      served.innerHTML='Served'

 cardBody.append(tableNumber,kotNumber,table)
 div.append(cardBody,orderNumber,served)
 document.body.append(div)


  }
})

    if(x.status==='cooked'){

 rders.innerHTML='muhahahahha'

 //rders.push(orderNumber,served)
 //   const n =Notification.requestPermission.then(
    //      new Notification("xample Notification", {
    //         body: `order ${x.name} is ready, at seat ${x.table}`,
    //         data: `order ${x.kot} is ready, at seat ${x.table}` 
    //     }))
    }
})    
if(rders.innerHTML=''){
  rders.innerHTML='Nothing To serve'
}
}

  async  function post(data,baseUrl){


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
        }                     else{
          location.reload()
        }                               // ***
        // ...use `response.json`, `response.text`, etc. here
      })
      .catch(error => {
        console.log(error);
      });
  
    }

//sen notification on reciving a new aorder next task

document.querySelector('.navbar-fostrap').addEventListener('click',()=>{
  document.querySelector('.nav-fostrap').classList.toggle('visible')
  
    })

    var socket=io('http://localhost:8000/waiter');
    var socket = io();

    socket.on('orderReady', data=>{
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
  
   
  })