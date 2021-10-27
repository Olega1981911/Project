


function testWebP(callback) {
    var webP = new Image(); webP.onload = webP.onerror = function () { callback(webP.height == 2); }; webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";

}

testWebP(function (support) {
    if (support == true) { document.querySelector('body').classList.add('webp'); } else { document.querySelector('body').classList.add('no-webp'); }

});


//обработчик аккордиона
document.addEventListener('click', e => {
    if (e.target.closest('.container')) {

        this.classList.add('search__active');
    }
    console.log(e.target.closest('.container'));
});
document.addEventListener('click', e => {
    if (e.target.closest('.acor-summary .button-close')) {
        if (e.target.closest('.acor-details').getAttribute('open') === 'open') {
            e.target.closest('.acor-details').removeAttribute('open')
        } else {
            e.target.closest('.acor-details').setAttribute('open', 'open')
        }
    }
});



const initModal = () => {
      let modal = document.querySelector('.modal__link'),
        popup = document.querySelector('.modal__win'),
        close = document.querySelector('.modal-close'),
        login = popup.querySelector('.appointment-name'),
        phone = popup.querySelector('.appointment-phone'),
        form = popup.querySelector('.popup');
    modal.addEventListener('click', function (e) {
        e.preventDefault();
        popup.classList.add('modal-active');
        
        if (storage) {
            login.value = storage;
            phone.focus();
        } else {
            login.focus();
        }
        
    });

    close.addEventListener('click', function (e) {
        e.preventDefault();
        popup.classList.remove('modal-active');
    });

    form.addEventListener('submit', function (e) {
        if (!login.value || !phone.value) {
            e.preventDefault();
            console.log('Обязательное поле');
            
        } else {
            localStorage.setItem("name", login.value);
        }
    })
};

document.addEventListener('DOMContentLoaded', () => {
  initModal();    
});