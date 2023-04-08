const url = new URL(window.location.href)
const name = url.searchParams.get('name')
console.log(name);
document.querySelector('#name').innerHTML = name
const food = url.searchParams.get('orders')
const arrayOfFood = food.split(',')
console.log(arrayOfFood);
const ratingFood = document.querySelector('#foodrating')
ratingFood.innerHTML = ''
ratingFood.innerHTML += arrayOfFood.map((x) => {
    console.log(x);
    return `
<div class="food">
<p id="foodname">${x.replace(/([A-Z])/g, ' $1')}</p>
<div class="rating">
    <input type="radio" data-id="rating-5" data-name="${x}" class="rating" name="rating-${x}" id="rating-5${x}">
    <label for="rating-5${x}"></label>
    <input type="radio" class="rating" data-id="rating-4" data-name="${x}" name="rating-${x}" id="rating-4${x}">
    <label for="rating-4${x}"></label>
    <input type="radio" class="rating" data-id="rating-3" data-name="${x}"  name="rating-${x}" id="rating-3${x}">
    <label for="rating-3${x}"></label>
    <input type="radio" class="rating" data-id="rating-2" data-name="${x}" name="rating-${x}" id="rating-2${x}">
    <label for="rating-2${x}"></label>
    <input type="radio" class="rating" data-id="rating-1" data-name="${x}" name="rating-${x}" id="rating-1${x}">
    <label for="rating-1${x}"></label>
</div>
</div>

`

}).join('')
const comment = document.querySelector('#comment')
comment.innerHTML = ''
comment.innerHTML += arrayOfFood.map((x) => {
    return `
    <option>${x.replace(/([A-Z])/g, ' $1')}</option>
    
    `
})

const submit = document.querySelector('#submit')
submit.addEventListener('click', (event) => {
    event.preventDefault()
    const rateing = document.querySelector('input[class="rating"]:checked')
    console.log(rateing.name, rateing.dataset.id);
    var elements = document.getElementsByClassName("rating");
    console.log(elements);


    for (var i = 0; i < elements.length; i++) {

        if (elements[i].checked) {
            console.log(elements[i].dataset.id, elements[i].dataset.name);
        }
    }
    const textarea = document.getElementsByTagName('textarea')
    if (textarea[0].value.length === 0) {
        console.log('no data');
    } else {
        console.log(textarea[0].value.length);
    }


})