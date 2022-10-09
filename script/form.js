// form-authorization
function ValidForm() {
    let inputValue = document.querySelector('.form__tel');
    let checkName = document.querySelector('.form__name');
    let checkValue = document.querySelector('.form__chekbox');
    if (checkName.value.length == 0){
        document.querySelector('.block-name').classList.add('error-active');
    }
    if (checkName.value.length >= 1) {
        document.querySelector('.block-name').classList.remove('error-active');
    }
    if (inputValue.value.length < 17){
        document.querySelector('.block-tel').classList.add('error-active');
    }
    if (inputValue.value.length >= 17) {
        document.querySelector('.block-tel').classList.remove('error-active');
    }
    if (checkValue.checked == false) {
        document.querySelector('.form__acceptance').classList.add('modal__checkbox_error');
    }
    if (checkValue.checked == true) {
        document.querySelector('.form__acceptance').classList.remove('modal__checkbox_error');
    }
    if(checkName.value.length >= 1) {
        if (inputValue.value.length >= 17) {
            if (checkValue.checked == true) {
                document.querySelector('.modal-start').classList.add('d-none');
                document.querySelector('.modal-thx').classList.add('d-block');
            }
        }
    }
}

let goForm = document.querySelector(".form__btn");
goForm.onclick = ValidForm;