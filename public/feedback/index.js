const lala = document.querySelector('.lala')
const url = new URL(window.location.href)
const name = url.searchParams.get('name')
console.log(name);
const nameDiv = document.querySelector(".name").innerHTML = name
document.querySelector(".name2").innerHTML = name
const food = url.searchParams.get('orders')
const arrayOfFood = food.split(',')
console.log(arrayOfFood);
const baseUrl1 = '/send'
getinfos()
async function getinfos() {
  const res = await fetch(baseUrl1, {
    method: 'GET',
  })
  const data = await res.json()
  const food = []
  data.map((a) => {
    arrayOfFood.map((z) => {
      if (a.item.replace(/ +/g, "") === z) {
        console.log(a);
        generatecards([a])
      }
    })
  })
}

let generatecards = (food) => {
  lala.innerHTML += food.map((x) => {
    let id = x.item;
    return `


<div class="card">
<div class="photo">
<img src="${x.url}">
</div>
<div class="description">
<h4 class="name">${id}</h3>

<div class="buttons">
<div class="star-rating">
<label for="5-stars${id.replace(/ +/g, "")}" id="5star${id.replace(/ +/g, "")}"  data-id='${id}' onclick="changecolor(event)"  class="fa-regular fa-face-grin-hearts"></label>
<label for="4-stars${id.replace(/ +/g, "")}" id="4star${id.replace(/ +/g, "")}" data-id='${id}' onclick="changecolor(event)" class="fa-regular fa-face-laugh-beam"></label>
<label for="3-stars${id.replace(/ +/g, "")}" id="3star${id.replace(/ +/g, "")}" data-id='${id}' onclick="changecolor(event)" class="fa-regular fa-face-meh-blank"></label>
<label for="2-stars${id.replace(/ +/g, "")}" id="2star${id.replace(/ +/g, "")}" data-id='${id}' onclick="changecolor(event)" class="fa-regular fa-face-frown"></label>
<label for="1-star${id.replace(/ +/g, "")}" id="1star${id.replace(/ +/g, "")}" data-id='${id}' onclick="changecolor(event)" class='fa-regular fa-face-angry'></label>
</div>
</div>


</div>
</div>`
  }).join('')
}

function changecolor(event) {
  console.log(event.target.id)
  const id = event.target.id


  const ele = document.getElementById(id)
  console.log(ele);
  const local = JSON.parse(localStorage.getItem('review')) || []
  // ele.style.color = 'red'
  ele.classList.toggle('checked')
  const data = id.replace(/([A-Z])/g, ' $1').trim()
  console.log(ele.dataset.id);
  const gaga = {

    'name': ele.dataset.id,
    'rating': data.substring(0, 5)
  }
  console.log(local);
  local.push(gaga)
  console.log(local);
  localStorage.setItem('review', JSON.stringify(local));
}

async function post() {
  const local = JSON.parse(localStorage.getItem('review'))
  const description = document.querySelector("#description").value
  console.log(description);
  const url = new URL(window.location.href)
  const name = url.searchParams.get('name')
  const number = url.searchParams.get('number')
  const data = {
    rating: local,
    description,
    name,
    number
  }
  localStorage.setItem('review', '');
  document.querySelector('.intro').style.display = 'none'
  document.querySelector('.thank-you').style.display = 'block'
  const baseUrl = '/feedback'
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
    if (!response.ok) {
      console.log('err'); // ***
    } else {
      console.log('sent');

    } // ***
    // ...use `response.json`, `response.text`, etc. here
  })


}