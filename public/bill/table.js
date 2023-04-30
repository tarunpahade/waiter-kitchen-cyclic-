let table = JSON.parse(localStorage.getItem("table")) || []
const previous = JSON.parse(localStorage.getItem("previousOrders"))
if (previous.orders === 'no previous orders') {
    window.location = '/menu'
}

document.querySelector('.navbar-fostrap').addEventListener('click', () => {
    document.querySelector('.nav-fostrap').classList.toggle('visible')

})
document.querySelector('.fa-circle-xmark').addEventListener('click', () => {
    document.querySelector('.nav-fostrap').classList.toggle('visible')

})


var billno = 0
const tax = []
const p = document.querySelector('.haha')

document.querySelector('#viewOrder').addEventListener('click', () => {
    console.log('hii');

    if (previous === 'no Previous Orders') {
        alert('no orders')
    } else {


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

        const saleForToday = []
        previous.orderedFood.map((y) => {

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





        gridContainer.append(theadaa)
        document.body.append(gridContainer)
    }
})

function addOrder() {
    window.location = '/menu'
}


function printKot() {
    const th1 = document.createElement('th')
    th1.innerText = 'time' + new Date().getHours() + ':' + new Date().getMinutes()
    console.log(new Date().getHours() + ':' + new Date().getMinutes());
    const th2 = document.createElement('th')
    th2.innerText = 'table' + previous.table

    const thead = document.createElement('thead')
    thead.append(th1, th2)
    const theadaa = document.createElement('tbody')
    var gridContainer = document.createElement('table')
    gridContainer.classList.add('kot')
    gridContainer.setAttribute('id', 'kot')
    previous.orderedFood.map((y) => {

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
    gridContainer.append(thead, theadaa)
    console.log(gridContainer);
    document.body.append(gridContainer)
    const kot = document.querySelector('.kot')
    console.log(kot);
    printJS('kot', 'html')
    kot.style.display = 'none'
}
//button in after click
function printBill() {
    document.body.innerHTML = `
    <div class="generateBill card rounded-0" style="display: flex;"> <div class="flexoid"><i id="cross" class="fa-regular fa-circle-xmark" onclick="none()"></i></div><table class="table text-black" style="display: none;"><thead><th class="grid-item">Item</th><th class="grid-item">Quantity</th><th class="grid-item">Amount</th></thead><tbody><tr><td class="grid-item">Shevga Rassa</td><td class="grid-item">2</td><td class="grid-item">254</td></tr><tr><td class="grid-item">Baingan Rassa</td><td class="grid-item">2</td><td class="grid-item">230</td></tr></tbody></table><div class="total"><h4 class="mb-4">Amount to Pay ₹<strong>   968</strong></h4></div><a class="limk" style="color: black;">View orders</a><div>
    <div class="form-group">
                                                <label class="font-w600">Customer Info</label>
                                                <input type="text" class="form-control solid" id="customerName" placeholder="Enter Full Name">
                                            </div>
                        
                        <div class="form-group">
                                                <input type="text" class="form-control solid" id="PhoneNumber" placeholder="Enter Phone Number">
                                            </div>
                      
    
                        
                        <div class="form-group" style="display:flex">
                                                <input type="text" class="form-control solid" id="discount" placeholder="Enter discount" style="width:60%">
                          <select style="width:50" id="percent"><option id="₹">₹</option> <option id="%">%</option></select>
                                            </div>
                    
    
    </div><div>
            <div class="flex">
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
    
    </div></div>
    <div class="buttondiv">
    <button onclick='whatsapp()'>Whatsapp</button>
    <button onclick='remove()'>Remove</button><button onclick='sms()'>sms</button>
    <button onclick='printButton()'>Print</button></div></div>
`
}

function whatsapp() {
    printbill(previous)
    document.querySelector('.haha').style.display = 'block'

    document.querySelector('#table' + previous.table).classList.remove('bookedTable')

}

//to send whatsapp bill
const printbill = (data) => {
    if (data.length !== 0) {

        // var emailContent = document.getElementsByTagName('table').textContent;



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
        table.innerText = 'table: ' + data.table
        table.classList.add('tableNumber')

        const date = document.createElement('p')
        date.innerText = "date: " + data.time

        const time = document.createElement('p')
        time.innerText = 'time: ' + data.hours
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

        vic.setAttribute('id', 'bill' + data.table)

        var foodmsg = [];
        var foodlist = []


        data.orderedFood.map((x) => {
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
        var finalAMT = Math.round(discountedamt + discountedamt / 100 * 2.5 + discountedamt / 100 * 2.5)

        totalAmt.innerText = finalAMT
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


        //        document.querySelector('#bill' + data.table).style.display = 'block';

        const finaldata = document.querySelector('#PhoneNumber').value
        console.log(p);

        // Find the HTML element you want to capture as an image
        //    const element = document.querySelector('#bill' + data.table);
        const url = new URL(window.location.href)
        url.pathname = '/feedback'

        url.searchParams.set('name', n.value)
        url.searchParams.set('orders', foodlist)
        url.searchParams.set('number', number)

        console.log(url.search)
        console.log(url)

        async function sendApi() {
            console.log('hohoh');
            const json = {
                html: p.innerHTML,
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

            await fetch('https://hcti.io/v1/image', options)
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    } else {
                        return Promise.reject(res.status);
                    }
                })
                .then(async (data) => {
                    // Image URL is available here
                    console.log(data);

                    const url = new URL(window.location.href)
                    url.pathname = '/feedback'

                    url.searchParams.set('name', n.value)
                    url.searchParams.set('orders', foodlist)
                    url.searchParams.set('number', number)

                    console.log(url.search)
                    console.log(data.url)
                    const res = await fetch('/fbtoken', {
                            method: 'GET',
                        }

                    )


                    const bearertoken = await res.json()

                    console.log(bearertoken)

                    const postdata = {
                        number,
                        image: data.url,
                        name,
                        totalcost: discountedamt,
                        feedback: url.search,


                    }
                    // post(postdata, '/number')
                    console.log(postdata);

                    var myHeaders = new Headers();
                    myHeaders.append("Content-Type", "application/json");
                    myHeaders.append("Authorization",
                        `Bearer ${bearertoken}`
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
                                    "text": `${finalAMT}`
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

        var discountant;
        // const name = document.querySelector('#customerName')
        // const discount = document.querySelector('#discount').value

        // const e = document.querySelector('#percent')

        var text = e.options[e.selectedIndex].id;

        console.log(discount, text);
        if (text === '%') {
            console.log(text);
            const total = document.querySelector('.mb-4').children.childNodes[0].data

            discountant = total * discount / 100
        } else {
            discountant = discount

        }
        var search9 = data.find((O) => O.kot === x.kot);
        search9.number = finaldata
        food.push(search9.orderedFood)

        const yearr = data.year
        const week = data.week


        const month = data.month
        const minutes = x.min
        var billData = {
            name: name.value,
            number: number,
            table: data.table,
            hours: data.hours,
            date: data.time,
            orders: food,
            status: data.status,
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



        const baseUrll = '/bill';
        post(billData, baseUrll)

        const baseUrl = '/delete'
        post(search9, baseUrl)



        document.querySelector('.generateBill').innerHTML = ''

        //remves bill1 from .haha
        //const removePrevious = document.querySelector('#bill' + data.table)

        // removePrevious.remove()

        location.reload()
    } else {
        p.innerHTML =
            `
        <h2>No orders yet</h2>
        `
    }


}

function remove() {
    post(previous, '/delete')
}

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

function sms() {
    const number = document.querySelector('#PhoneNumber')
    post(number, '/sms')
    location.reload()
}

function printButton() {

    const data = previous
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
    var billnumber = document.createElement('p')
    billnumber.innerText = "Bill number: " + billno

    var table = document.createElement('p')
    table.innerText = 'table: ' + data.table
    table.classList.add('tableNumber')

    const date = document.createElement('p')
    date.innerText = "date: " + data.time

    const time = document.createElement('p')
    time.innerText = 'time: ' + data.hours
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
    vic.setAttribute('id', 'vic')
    vic.append(restrauntName, customerName, table, billnumber, date, time)

    vic.setAttribute('id', 'bill' + data.table)

    var foodmsg = [];
    var foodlist = []


    data.orderedFood.map((x) => {
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
    var finalAMT = Math.round(discountedamt + discountedamt / 100 * 2.5 + discountedamt / 100 * 2.5)

    totalAmt.innerText = finalAMT
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




    const finaldata = document.querySelector('#PhoneNumber').value


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

    var discountant;


    var text = e.options[e.selectedIndex].id;

    console.log(discount, text);
    if (text === '%') {
        console.log(text);
        const total = document.querySelector('.mb-4').children[0].childNodes[0].data

        discountant = total * discount / 100
    } else {
        discountant = discount

    }

    food.push(data.orderedFood)

    const yearr = data.year
    const week = data.week


    const month = data.month
    const minutes = data.min
    var billData = {
        name: name.value,
        number: number,
        table: data.table,
        hours: data.hours,
        date: data.time,
        orders: food,
        status: data.status,
        year: yearr,
        week: week,
        month: month,
        minutes: minutes,
        paymentMethod: method,
        orderType: type,
        discount,
    }
    console.log(method, type);



    document.body.append(vic)

    printJS('bill' + data.table, 'html')


    const baseUrll = '/bill';
    post(billData, baseUrll)
    const baseUrl = '/delete'

    post(search9, baseUrl)





    location.reload()




}