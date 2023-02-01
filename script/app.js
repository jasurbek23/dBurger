const product = {
    'crazy': {
        name: 'Crazy',
        price: 31000,
        img: 'images/products/burger-1.png',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },
    'light': {
        name: 'Light',
        price: 26000,
        img: 'images/products/burger-2.png',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },
    'cheeseburger': {
        name: 'CheeseBurger',
        price: 29000,
        img: 'images/products/burger-3.png',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },
    'dburger': {
        name: 'dBurger',
        price: 31000,
        img: 'images/products/burger-4.png',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },
}


const navbarBtn = document.querySelector('.wrapper__navbar-btn');
const navbarCount = document.querySelector('.warapper__navbar-count')
const navbarBasket = document.querySelector('.wrapper__navbar-basket');
const navbarPrice = document.querySelector('.wrapper__navbar-totalprice');
const navbarClose = document.querySelector('.wrapper__navbar-close');
const listBtn = document.querySelectorAll('.wrapper__list-btn');

navbarBtn.addEventListener('click', () => {
    if (navbarBasket.classList.contains('active')) {
        navbarBasket.classList.remove('active')
    } else {
        navbarBasket.classList.add('active')
    }
})
navbarClose.addEventListener('click', () => {
    navbarBasket.classList.remove('active')
})
listBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        wrapper__list(btn)  
    })
})

function wrapper__list(btn) {
    let parrent = btn.closest('.wrapper__list-card')
    let parrentID = parrent.getAttribute('id')
    product[parrentID].amount++
    basket()
}

function basket() {
    let productArr = []
    for (const key in product) {
        let prKey = product[key]
        let prCard = document.querySelector(`#${key}`)
        let prIndecator = prCard.querySelector('.wrapper__list-count')
        if (prKey.amount) {
            productArr.push(prKey)
            prIndecator.classList.add('active')
            prIndecator.innerHTML = prKey.amount
        } else {
            prIndecator.classList.remove('active')
            prIndecator.innerHTML = ''
        }
        
    }
    const allCount = totalCountProduct()
    if (allCount) {
        navbarCount.classList.add('active')
    } else {
        navbarCount.classList.remove('active')
    }
    navbarCount.innerHTML = allCount.toLocaleString()
    navbarPrice.innerHTML = countProductTotalPrice() + ' сум'
}

function totalCountProduct() {
    let total = 0
    for (const key in product) {
        total += product[key].amount > 0 ? 1 : 0
    }
    return total
}
function countProductTotalPrice() {
    let total = 0
    for (const key in product) {
        total += product[key].totalSum
    }
    return total.toLocaleString()
}