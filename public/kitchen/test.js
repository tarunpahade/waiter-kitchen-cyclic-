
console.log('hello');

const color=['bg-danger','bg-primary','bg-success','bg-warning']
const baseUrl1='http://localhost:8000/updateFood'

const baseUrl='http://localhost:8000/info'

  getinfo()
  
async function getinfo() {
  const res = await fetch(baseUrl,
    {
      method:'GET',
      }

    )
    const data=await res.json()
    console.log(data);
    console.log('hi');



 
   
    



data.map((y)=>{


  if(y.status==='pending'){


 createCard(y)

}else{
  
}
})}
function createCard(t){
  

  

  const cardContainer=document.createElement('div')
  cardContainer.classList.add('card-container')
  const card=document.createElement('div')
  card.classList.add('card')
  card.classList.add('shadow-sm')

  const cardHeader=document.createElement('div')
cardHeader.classList.add('card-header')
cardHeader.classList.add('card-header'+t.kot)



  const cardBody=document.createElement('div')
  cardBody.classList.add('card-body')

  const div=document.createElement('div')
  
  const h4=document.createElement('h3')
  h4.classList.add('text-white')
  h4.classList.add('type'+t.table)
  h4.innerHTML='Dine In'

  const span =document.createElement('span')
  span.classList.add('fs12')
  span.classList.add('op9')
span.innerHTML='table'+t.table

  const h3=document.createElement('h3')
  h3.classList.add('text-white')
  console.log(t.min);
  h3.innerHTML=t.hours+':'+t.min
  var seconds = 0

var timer = setInterval(upTimer, 1000);

function upTimer() {

++seconds;

var hour = Math.floor(seconds / 3600);

var minute = Math.floor((seconds - hour * 3600) / 60);

var updSecond = seconds - (hour * 3600 + minute * 60);
//h3.innerHTML = hour + ":" + minute + ":" + updSecond;

}
console.log(t);
h3.innerHTML=   t.hours+' : '+  t.min
  const ul =document.createElement('ul')
ul.classList.add('order-list-'+t.kot)
ul.classList.add('order-list')
const li= document.createElement('li')
const span2=document.createElement('span')

// console.log(li);
// ul.append(li)

cardHeader.append(div,h3)
div.append(h4,span)
const button=document.createElement('button')
  
button.classList.add('button-57')
button.setAttribute('role','button')
const span3=document.createElement('span')
const span4=document.createElement('span')
span3.classList.add('text')
span3.innerHTML='Done'
span4.innerHTML='👍'
button.append(span3,span4)
button.onclick=()=>{
      const baseUrl='http://localhost:8000/updateFood'
     // here data might be the problem
        post(t,baseUrl)
        location.reload()
        console.log('foodupdated');
   
  }
  cardBody.append(ul,button)


  card.append(cardHeader,cardBody)

cardContainer.append(card)
 const row= document.querySelector(".row")
    

row.append(cardContainer)



console.log(cardBody);

if(t.table==='takeaway'){
  document.querySelector('.type'+t.table).innerHTML='Take away'

 }
 if(t.table==='onlineorder'){
  document.querySelector('.type'+t.table).innerHTML='onlineorder'

 }
document.querySelector('.card-header'+t.kot).classList.add(color[Math.floor(Math.random()*4)])
t.orderedFood.map((y)=>{
  document.querySelector('.order-list-'+t.kot).innerHTML+=`
  <li onclick='lineThrough(event)'><span>${y.items}</span>${y.id}</li>`
})


}




function lineThrough(e){
e.target.firstChild.classList.toggle('line')
e.target.classList.toggle('line')
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

  

  // const search=lala[0].filter((u)=u.table==='1')
  // $(document).ready(function(){
  //   $('.navbar-fostrap').click(function(){
  //     $('.nav-fostrap').toggleClass('visible');
  //     $('body').toggleClass('cover-bg');
  //   });
  // });

  document.querySelector('.navbar-fostrap').addEventListener('click',()=>{
document.querySelector('.nav-fostrap').classList.toggle('visible')

  })
