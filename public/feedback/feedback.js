document.querySelector('.wrapper').style.display = 'none'

const url = new URL(window.location.href)
const nameOfCustomer = url.searchParams.get('name')
console.log(nameOfCustomer);
const number = url.searchParams.get('number')
console.log(number);

document.querySelector('#name').innerHTML = nameOfCustomer
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

comment.innerHTML += arrayOfFood.map((x) => {
    return `
    <option>${x.replace(/([A-Z])/g, ' $1')}</option>
    
    `
})

const submit = document.querySelector('#submit')
submit.addEventListener('click', async (event) => {
    event.preventDefault()
    const rateing = document.querySelector('input[class="rating"]:checked')
    console.log(rateing.name, rateing.dataset.id);
    var elements = document.getElementsByClassName("rating");
    console.log(elements);
    const local = []

    for (var i = 0; i < elements.length; i++) {

        if (elements[i].checked) {

            local.push({
                    "name": elements[i].dataset.name,
                    "rating": elements[i].dataset.id
                }

            )
        }
    }
    const textarea = document.getElementsByTagName('textarea')
    const particular = []
    if (textarea[0].value.length === 0) {
        console.log('no data');
    } else {
        console.log(textarea[0].value.length);
        var e = document.getElementById("comment");
        var value = e.value;
        var text = e.options[e.selectedIndex].text;
        console.log(text, textarea[0].value)
        particular.push({
            "item": text,
            "description": textarea[0].value
        })
    }
    const recommendations = document.querySelector("input[name='user-recommend']:checked").value
    console.log(recommendations);
    console.log(recommendations);



    const description = textarea[1].value
    console.log(description);
    const data = {
        review: local,
        specificProductFeedback: particular,
        description,
        name: nameOfCustomer,
        number,
        userReccomendation: recommendations
    }

    document.querySelector('.container').style.display = 'none'
    document.querySelector('.wrapper').style.display = 'flex'
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

        } // ***
        // ...use `response.json`, `response.text`, etc. here
    })




})

history.replaceState({}, null, "/feedback");