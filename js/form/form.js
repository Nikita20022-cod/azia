// form-call
let goCall = document.querySelector(".modal-call .form__btn")
goCall.onclick = ValidForm

function ValidForm() {
    let inputValue = document.querySelector('.modal-call .form__tel'),
        checkName = document.querySelector('.modal-call .form__name'),
        checkValue = document.querySelector('.modal-call .form__chekbox'),
        nameValue = document.querySelector('.modal-call .block-name'),
        telValue = document.querySelector('.modal-call .block-tel'),
        boxValue = document.querySelector('.modal-call .form__acceptance')

    if (checkName.value.length == 0){
        nameValue.classList.add('error-active')
    }
    if (checkName.value.length >= 1) {
        nameValue.classList.remove('error-active')
    }
    if (inputValue.value.length < 17){
        telValue.classList.add('error-active')
    }
    if (inputValue.value.length >= 17) {
        telValue.classList.remove('error-active')
    }
    if (checkValue.checked == false) {
        boxValue.classList.add('modal__checkbox_error')
    }
    if (checkValue.checked == true) {
        boxValue.classList.remove('modal__checkbox_error')
    }
    if(checkName.value.length >= 1) {
        if (inputValue.value.length >= 17) {
            if (checkValue.checked == true) {
                document.querySelector('.modal-call .modal-start').classList.add('d-none')
                document.querySelector('.modal-call .modal-thx').classList.add('d-block')
            }
        }
    }
}

let closeCall = document.querySelector(".modal-call button.js-modal-close")
closeCall.onclick = orderCall

function orderCall() {
    document.querySelector('.modal-call .modal-start').classList.remove('d-none')
    document.querySelector('.modal-call .modal-thx').classList.remove('d-block')
}

// form-order
let goOrder = document.querySelector(".modal-order .form__btn")
goOrder.onclick = ValidOrder

function ValidOrder() {
    let inputValue = document.querySelector('.modal-order .form__tel'),
        checkName = document.querySelector('.modal-order .form__name'),
        checkValue = document.querySelector('.modal-order .form__chekbox'),
        nameValue = document.querySelector('.modal-order .block-name'),
        telValue = document.querySelector('.modal-order .block-tel'),
        boxValue = document.querySelector('.modal-order .form__acceptance')

    if (checkName.value.length == 0){
        nameValue.classList.add('error-active')
    }
    if (checkName.value.length >= 1) {
        nameValue.classList.remove('error-active')
    }
    if (inputValue.value.length < 17){
        telValue.classList.add('error-active')
    }
    if (inputValue.value.length >= 17) {
        telValue.classList.remove('error-active')
    }
    if (checkValue.checked == false) {
        boxValue.classList.add('modal__checkbox_error')
    }
    if (checkValue.checked == true) {
        boxValue.classList.remove('modal__checkbox_error')
    }
    if(checkName.value.length >= 1) {
        if (inputValue.value.length >= 17) {
            if (checkValue.checked == true) {
                document.querySelector('.modal-order .modal-start').classList.add('d-none')
                document.querySelector('.modal-order .modal-thx').classList.add('d-block')
            }
        }
    }
}

let closeOrder = document.querySelector(".modal-order button.js-modal-close")
closeOrder.onclick = orderClose

function orderClose() {
    document.querySelector('.modal-order .modal-start').classList.remove('d-none')
    document.querySelector('.modal-order .modal-thx').classList.remove('d-block')
}

// -----------------basket------------------
let arrange = document.querySelector(".go-arrange"),
    arrangeBlock = document.querySelector(".basket-modal .modal-contact"),
    goArrange = document.querySelector(".go-arrange .shop-btn"),
    basketBuy = document.querySelector(".basket-buy"),
    basketThx = document.querySelector(".basket-thx"),
    goBuy = document.querySelector(".go-buy"),
    buyInput = document.querySelectorAll(".basker-input.necessarily"),
    buyPhone = document.querySelector(".basket-buy .form__tel")

goArrange.onclick = function() {
    arrange.classList.add("d-none")
    arrangeBlock.classList.add("d-none")
    basketBuy.classList.add("flex")
}

goBuy.onclick = function() {
    let checkBuy = document.querySelector('.basket-buy .form__acceptance'),
        valueBuy = document.querySelector('.basket-buy .form__chekbox')
    let quantity = 0
    
    for (let i = 0; i < buyInput.length; i++) 
        if (buyInput[i].value == "") 
            buyInput[i].parentNode.classList.add("error-active")
        else 
            buyInput[i].parentNode.classList.remove("error-active")

    for (let i = 0; i < buyInput.length; i++) 
        if (buyInput[i].parentNode.classList.contains("error-active")) 
            quantity ++;

    if (buyPhone.value.length < 17){
        buyPhone.parentNode.classList.add("error-active")
    }

    if (buyPhone.value.length >= 17) {
        buyPhone.parentNode.classList.remove("error-active")
    }
    if (valueBuy.checked == false) {
        checkBuy.classList.add('modal__checkbox_error')
    }
    if (valueBuy.checked == true) {
        checkBuy.classList.remove('modal__checkbox_error')
    }
    if (buyPhone.value.length >= 17) {
        if(quantity == 0) {
            if (valueBuy.checked == true) {
                basketBuy.classList.remove("flex")
                basketThx.classList.add("flex")
                console.log("Спасибо")
            }
        }
    }
}

// close-basket

let closeBasket = document.querySelector(".basket-modal button.js-modal-close")
closeBasket.onclick = orderBasket

function orderBasket() {
    arrange.classList.remove("d-none")
    arrangeBlock.classList.remove("d-none")
    basketBuy.classList.remove("flex")
    basketThx.classList.remove("flex")
}

// form-contacts 
let contactsCall = document.querySelector(".contacts_form .form__btn")
if (contactsCall) {
    contactsCall.onclick = contactsForm
}

function contactsForm() {
    let inputValue = document.querySelector('.contacts_form .form__tel'),
        checkName = document.querySelector('.contacts_form .form__name'),
        checkValue = document.querySelector('.contacts_form .form__chekbox'),
        nameValue = document.querySelector('.contacts_form .block-name'),
        telValue = document.querySelector('.contacts_form .block-tel'),
        boxValue = document.querySelector('.contacts_form .form__acceptance')

    if (checkName.value.length == 0){
        nameValue.classList.add('error-active')
    }
    if (checkName.value.length >= 1) {
        nameValue.classList.remove('error-active')
    }
    if (inputValue.value.length < 17){
        telValue.classList.add('error-active')
    }
    if (inputValue.value.length >= 17) {
        telValue.classList.remove('error-active')
    }
    if (checkValue.checked == false) {
        boxValue.classList.add('modal__checkbox_error')
    }
    if (checkValue.checked == true) {
        boxValue.classList.remove('modal__checkbox_error')
    }
    if(checkName.value.length >= 1) {
        if (inputValue.value.length >= 17) {
            if (checkValue.checked == true) {
                document.querySelector('.contacts_form .contacts__thx').classList.remove('d-none')
                document.querySelector('.contacts_form .form').classList.add('d-none')
                setTimeout(() => {
                    document.querySelector('.contacts_form .contacts__thx').classList.add('d-none')
                    document.querySelector('.contacts_form .form').classList.remove('d-none')
                }, 4000);
            }
        }
    }
}


// basket-quantity 
function quantity() {
    const block = document.querySelectorAll('.quantity')
    if (block)
        for (let i = 0; i < block.length; i++) {
            const btnMinus = block[i].querySelector('.quantity__del'),
                btnPlus = block[i].querySelector('.quantity__add');
            btnMinus.addEventListener('click', () => {
                let count = +block[i].querySelector('.quantity__number').innerHTML
                if (count === 1) {
                    return
                } else {
                    count--
                    block[i].querySelector('.quantity__number').innerHTML = count

                }
            })
            btnPlus.addEventListener('click', () => {
                let count = +block[i].querySelector('.quantity__number').innerHTML
                count++
                block[i].querySelector('.quantity__number').innerHTML = count
            })
        }
}
quantity()