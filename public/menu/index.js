var socket = io('/menu');
var socket = io();
let basket = JSON.parse(localStorage.getItem("data")) || []


document.querySelector('.navbar-fostrap').addEventListener('click', () => {
    document.querySelector('.nav-fostrap').classList.toggle('visible')

})
document.querySelector('.fa-circle-xmark').addEventListener('click', () => {
    document.querySelector('.nav-fostrap').classList.toggle('visible')

})


document.querySelector('.menu2').addEventListener('click', () => {
    document.querySelector('.containernav2').style.display = 'block'
})

document.querySelector('.menu2').style.display = 'none'
document.querySelector('.view-order').style.display = 'none'
const saojiSpecial = []
const special = []
const staters = []
const vegMainCorse = []
const paneerMainCorse = []
const rice = []
const biryani = []
const dal = []
const roti = []
const deserts = []
const kalaMasala = []
const chinese = []


// const appdata=JSON.parse(localStorage.getItem('kot')) || []
const baseUrl1 = '/send'
getinfos()
async function getinfos() {
    const res = await fetch(baseUrl1, {
            method: 'GET',
        }

    )


    const data = await res.json()
    console.log(data)

    const input = document.querySelector('#search')
    input.addEventListener('keyup', (e) => {

        var td, tr, txtValue, filter, tbody;
        tbody = data
        console.log('hah');
        filter = input.value.toUpperCase();
        const food = []
        for (i = 0; i < data.length; i++) {
            td = data[i].item

            txtValue = td;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {

                console.log();
                food.push(data[i])



            } else {}
        }
        generatecards(food)

    })
    document.querySelector('#searchicon').addEventListener('click', () => {
        document.querySelector('.food').style.display = 'none'
        // document.querySelector('.fa-solid').setAttribute('class', "fa-regular fa-circle-xmark")

        // document.querySelector('.fa-circle-xmark').addEventListener('click', () => {
        //     document.querySelector('.fa-circle-xmark').setAttribute('class', "fa-solid fa-magnifying-glass")
        //     document.querySelector('.food').style.display = 'grid'
        //     // lala.style.display = 'none'
        //     input.value = ''
        // })

    })


    data.map((x) => {

        if (x.status === 'inactive') {
            console.log(x);
        } else {


            if (x.category === 'saojiSpecial') {
                saojiSpecial.push(x)

            }
            if (x.category === 'special') {

                special.push(x)


            }
            if (x.category === 'starters') {

                staters.push(x)

            }
            if (x.category === 'vegMainCorse') {
                vegMainCorse.push(x)

            }
            if (x.category === 'paneerMainCourse') {

                paneerMainCorse.push(x)

            }
            if (x.category === 'kalamMsala') {

                kalaMasala.push(x)

            }
            if (x.category === 'biryani') {

                biryani.push(x)

            }
            if (x.category === 'chinese') {

                chinese.push(x)

            }
            if (x.category === 'roti') {

                roti.push(x)

            }
            if (x.category === 'dal') {

                dal.push(x)

            }
            if (x.category === 'rice') {

                rice.push(x)

            }
            if (x.category === 'deserts') {

                deserts.push(x)

            }
        }

    })

}


document.querySelectorAll('.itemnav').forEach(item => {
    item.onclick = function () {
        console.log('haha');

        if (item.id == 'saojiSpecial') {
            generatecards(saojiSpecial)
        }
        if (item.id === 'specials') {

            generatecards(special)


        }
        if (item.id === 'staters') {
            generatecards(staters)

        }
        if (item.id === 'mainCourse') {

            generatecards(vegMainCorse)

        }
        if (item.id === 'paneerCourse') {
            generatecards(paneerMainCorse)

        }
        if (item.id === 'kalaMasala') {

            generatecards(kalaMasala)

        }
        if (item.id === 'biryani') {

            generatecards(biryani)

        }
        if (item.id === 'chinese') {

            generatecards(chinese)

        }
        if (item.id === 'roti') {

            generatecards(roti)

        }
        if (item.id === 'dal') {

            generatecards(dal)

        }
        if (item.id === 'rice') {

            generatecards(rice)

        }
        if (item.id === 'deserts') {

            generatecards(deserts)

        }
        document.querySelector('.food').style.display = 'none'



        document.querySelector('.topic').innerHTML = item.innerHTML
    }
})

document.querySelectorAll('.container').forEach(item => {
    item.onclick = function corn() {
        if (item.dataset.item === 'saojiSpecial') {

            generatecards(saojiSpecial)

        }
        if (item.dataset.item === 'specials') {

            generatecards(special)


        }
        if (item.dataset.item === 'staters') {

            generatecards(staters)

        }
        if (item.dataset.item === 'mainCourse') {

            generatecards(vegMainCorse)

        }
        if (item.dataset.item === 'paneerCourse') {

            generatecards(paneerMainCorse)

        }
        if (item.dataset.item === 'kalaMasala') {

            generatecards(kalaMasala)

        }
        if (item.dataset.item === 'biryani') {

            generatecards(biryani)

        }
        if (item.dataset.item === 'chinese') {

            generatecards(chinese)

        }
        if (item.dataset.item === 'roti') {

            generatecards(roti)

        }
        if (item.dataset.item === 'dal') {

            generatecards(dal)

        }
        if (item.dataset.item === 'rice') {

            generatecards(rice)

        }
        if (item.dataset.item === 'deserts') {

            generatecards(deserts)

        }
        document.querySelector('.food').style.display = 'none'

        document.querySelector('nav').classList.add('nav')
        document.querySelector('.menu2').style.display = 'flex'
        document.querySelector('.view-order').style.display = 'flex'
        document.querySelector('.topic').innerHTML = item.firstChild.nextSibling.lastChild.previousElementSibling.firstElementChild.innerText


    }


})

document.querySelector('.menu2').addEventListener('click', () => {
    document.querySelector('.containernav2').style.display = 'block'
    document.querySelector('.menu2').style.display = 'none'
    document.querySelector('.cross').style.display = 'block'
})
document.querySelector('.cross').addEventListener('click', () => {

    document.querySelector('.containernav2').style.display = 'none'
    document.querySelector('.menu2').style.display = 'flex'
    document.querySelector('.cross').style.display = 'none'
})

const lala = document.querySelector('.lala')
const input = document.querySelector('.text2')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const bbl = document.querySelector('.bbl')


let generatecards = (food) => {
    lala.innerHTML = food.map((x) => {
        let id = x.item;
        console.log(id);

        let search = basket.find((x) => x.id === id) || []

        return `


<div class="card">
<div class="photo">
    <img src="${x.url}">
</div>
<div class="description">
    <h3 class="name">${id}</h3>
    
    <h3 >${x.price}</h3>
    <div class="buttons">
        <button class="minus" onclick='decrement(${id.replace(/ +/g, "")})'>-</button>
        <span  max="10" min="0" type="number" id='${id.replace(/ +/g, "")}'>${search.items ===
            undefined? 0: search.items}</span>
        
     <button class="plus" onclick='increment(${id.replace(/ +/g, "")})'>+</button>
    </div>
</div>
</div>`
    }).join('')

}
console.log(basket)

let increment = (id) => {
    console.log(id);
    let selecteditem = id
    console.log(selecteditem);
    let search = basket.find((y) => y.id === selecteditem.id);

    var search9 = saojiSpecial.find((y) => y.item.replace(/ +/g, "") === selecteditem.id) || special.find((y) => y.item.replace(/ +/g, "") === selecteditem.id) || staters.find((y) => y.item.replace(/ +/g, "") === selecteditem.id) || vegMainCorse.find((y) => y.item.replace(/ +/g, "") === selecteditem.id) || paneerMainCorse.find((y) => y.item.replace(/ +/g, "") === selecteditem.id) || kalaMasala.find((y) => y.item.replace(/ +/g, "") === selecteditem.id) || biryani.find((y) => y.item.replace(/ +/g, "") === selecteditem.id) || chinese.find((y) => y.item.replace(/ +/g, "") === selecteditem.id) || roti.find((y) => y.item.replace(/ +/g, "") === selecteditem.id) || dal.find((y) => y.item.replace(/ +/g, "") === selecteditem.id) || rice.find((y) => y.item.replace(/ +/g, "") === selecteditem.id) || deserts.find((y) => y.item.replace(/ +/g, "") === selecteditem.id) || [];

    if (search === undefined) {

        basket.push({
            id: selecteditem.id,
            items: 1,
            price: search9.price,
            status: 'pending'
        })

    } else {
        search.items += 1
    }


    localStorage.setItem("data", JSON.stringify(basket));

    update(selecteditem.id)
}
let decrement = (id) => {

    let selecteditem = id
    let search = basket.find((y) => y.id === selecteditem.id);
    if (search === undefined) return;

    else if (search.items === 0) return;

    else {
        search.items -= 1
    }

    update(selecteditem.id)

    basket = basket.filter((v) => v.items !== 0);


    localStorage.setItem("data", JSON.stringify(basket));
}

let update = (id) => {

    let search = basket.find((x) => x.id === id.replace(/ +/g, ""))

    document.getElementById(id).innerHTML = search.items

    calc()
}

let calc = () => {

    const navcart = document.getElementById('cartproducts')
    console.log(basket)
    const price = []
    basket.map((c) => {
        price.push(c.price)
    })
    document.querySelector('#total').innerHTML = '₹' + price.reduce((x, y) => x + y, 0)
    navcart.innerHTML = basket.map((v) => v.items).reduce((x, y) => x + y, 0) + ' total'
}

// calc()

const baseUrl = '/info'
setInterval(() => {
    getinfo()
}, 1000);
getinfo()


async function getinfo() {
    const res = await fetch(baseUrl, {
            method: 'GET',
        }

    )


    const data = await res.json()

    const yo = []
    data.map((x) => {

        x.orderedFood.map((z) => {
            if (z.status === 'cooked') {
                console.log(z);
                yo.push(z)

            }
        })
    })







}
socket.on('orderReady', data => {
    location.reload()
    Notification.requestPermission().then(perm => {

        if (perm === 'granted') {
            const notification = new Notification("Example Notification", {
                body: data,
                data: {
                    hello: 'world'
                },
                tag: 'hii'
            })
            notification.addEventListener('error', e => {
                alert('err')
            })
        }

    })


})

socket.on('notificationToClient', (data) => { //received message 
    console.log(data);
    alert(data)
})

function orderOnClick() {
    let arrya = JSON.parse(localStorage.getItem("kot")) || [];
    var basket = JSON.parse(localStorage.getItem("data")) || [];

    socket.emit('kitchen', 'New order');




    let table = JSON.parse(localStorage.getItem("table")) || []
    let employee = JSON.parse(localStorage.getItem("user")) || []
    console.log(employee);
    let info = {
        'customerName': employee.username,
        'tableNumber': table,
        'orderedItems': basket,
    }
    //send info to backend  
    arrya.push(info)
    const baseUrl = '/';
    console.log(arrya);
    post(arrya, baseUrl)



    location.reload()



    arrya = []
    localStorage.setItem("kot", JSON.stringify(arrya));
    basket = [];

    localStorage.setItem("data", JSON.stringify(basket));




}
async function post(arrya, baseUrl) {

    const res = await fetch(baseUrl, {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    pp: arrya
                })
            }


        ).then(response => {
            if (!response.ok) { // ***
                console.log("HTTP error " + response.status); // ***
            } // ***
            // ...use `response.json`, `response.text`, etc. here
        })
        .catch(error => {
            console.log(error);
        });

}