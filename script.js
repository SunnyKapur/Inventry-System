let defaultItem = [{
        name: "Notebook",
        category: "Stationery",
        owner: "Office",
        priority: "Medium",
        price: 80,
        createdOn: "2026-01-05"
    },
    {
        name: "Water Bottle",
        category: "Utility",
        owner: "Staff",
        priority: "Low",
        price: 450,
        createdOn: "2026-01-12"
    },
    {
        name: "Office Chair",
        category: "Furniture",
        owner: "Admin",
        priority: "High",
        price: 5200,
        createdOn: "2026-01-20"
    }
]

let items = [];

if (localStorage.getItem('items')) {
    items = JSON.parse(localStorage.getItem('items'))
} else {
    console.log("itemsList is empty")
}


let allData = document.querySelector('.all_data')
let form = document.querySelector('form')

function renderData() {
    let sum = ''
    let final = [...items, ...defaultItem]
    final.forEach(function (e, idx) {
        sum = sum + `<div class="items">
                    <h3>${e.name}</h3>
                    <h4>Category: <span>${e.category}</span></h4>
                    <h4>Owner: ${e.owner}</h4>
                    <h4>Priority: ${e.priority}</h4>
                    <h4>Price: ₹<span>${e.price}</span></h4>
                    <h4>createdOn: ${e.createdOn}</h4>
                    <div>
                        <button id="${idx}">Edit</button>
                        ${idx >= defaultItem.length ? `<button id="${idx - defaultItem.length}">Remove</button>` : ""}
                    </div>
                </div>`
    })

    allData.innerHTML = sum
}

renderData()

form.addEventListener('submit', function (elem) {
    elem.preventDefault()
    let newProduct = {
        name: form.childNodes[1].value,
        category: form.childNodes[3].value,
        owner: form.childNodes[5].value,
        priority: form.childNodes[7].value,
        price: form.childNodes[9].value,
        createdOn: form.childNodes[11].value
    }
    document.querySelectorAll('form input').forEach(function (elem) {
        elem.value = ''
    })

    // form.reset()

    items.push(newProduct)
    localStorage.setItem("items", JSON.stringify(items))
    renderData()
})

allData.addEventListener('click', function (dets) {
    if (dets.target.id && dets.target.innerHTML == 'Remove') {
        items.splice(dets.target.id, 1)

        localStorage.setItem("items", JSON.stringify(items))

        renderData()
    }
})



    /* <button id="${idx}">Remove</button> */ 