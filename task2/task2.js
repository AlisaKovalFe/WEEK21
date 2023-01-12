document.querySelector('button'). addEventListener('click', (event) => {
    event.preventDefault();

    let user = {
        name: document.querySelector('#name').value,
        surname: document.querySelector('#surname').value,
        age: document.querySelector('#age').value,
        town: document.querySelector('#town').value,
        tel: document.querySelector('#tel').value,
        email: document.querySelector('#email').value,
        password: document.querySelector('#password').value,
        repeatPassword: document.querySelector('#repeatPassword').value,
    }
    console.log(user);
    // 1A!kYuPo

    fetch ('https://httpbin.org/post', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    })
    .then (response => response.json())
    .then (user => console.log(user))
    .catch (err => console.log(err))
})




// Валидация из старого дз
let errors = [];

function checkValidity(input) {
    
    let validity = input.validity
    input.min = 12
    input.max = 100
    if (validity.valueMissing) {
        errors.push('Поле ' + input.placeholder + ' не заполнено');
    }

    if (input.id === 'name' && !validity.valueMissing) {
        let person = document.getElementById('name')  
        let personFormat = /^[а-яА-ЯёЁa-zA-Z]+$/ 
        if (!person.value.match(personFormat) ) {
            errors.push('Неверный формат ввода имени');
        }
    }

    if (input.id === 'surname' && !validity.valueMissing) {
        let surname = document.getElementById('surname')  
        let personFormat = /^[а-яА-ЯёЁa-zA-Z]+$/ 
        if (!surname.value.match(personFormat) ) {
            errors.push('Неверный формат ввода имени');
        }
    }

    if (input.id === 'town' && !validity.valueMissing) {
        let town = document.getElementById('town')  
        let townFormat = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/ 
        if (!town.value.match(townFormat) ) {
            errors.push('Неверный формат ввода имени');
        }
    }

    if (validity.rangeUnderflow) {        
        errors.push('Возраст должен быть не менее чем ' + input.min)
    }

    if (validity.rangeOverflow) {        
        errors.push('Возраст должен быть не менее чем ' + input.max)
    }

    if (validity.patternMismatch) {
        errors.push('Неверный формат номера телефона')
    }

    if (input.id === 'email' && !validity.valueMissing) {
        let email = document.getElementById('email')
        let mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
        if (!email.value.match(mailFormat)) {
            errors.push('Неверный формат e-mail');
        }        
    }

    if (input.id === 'password' && !validity.valueMissing ) {
        let password = document.getElementById('password')
        let passwordFormat = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
        password.minLength = 3
        password.maxLength = 12
        if (validity.tooShort) {
                errors.push('Пароль не должен быть короче чем ' + password.minLength)            
        }

        if (validity.tooLong) {
            errors.push('Пароль не должен быть длинне чем ' + password.maxLength)            
    }

        if (!password.value.match(passwordFormat)) {
            errors.push('Неверный формат пароля')
        }
    }

    if (input.id === 'repeatPassword' && !validity.valueMissing) {
        let password = document.getElementById('password')
        let repeatPassword = document.getElementById('repeatPassword')
        if (repeatPassword.value !== password.value) {
            errors.push('Проверка пароля не прошла') 
        }
    }
}

function check() {
    errors = [];

    let inputs = document.querySelectorAll('input');

    for (let input of inputs) {
        checkValidity(input);
    }

    document.getElementById('errorMessage').innerHTML = errors.join('. <br>')    

    let person = document.getElementById('name').value 
    if (localStorage.getItem('personKey') == null) {
        localStorage.setItem('personKey', person) 
    }
    
}

document.addEventListener('DOMContentLoaded', function() {
    let personSave = localStorage.getItem('personKey')
    if (personSave != null )
    document.querySelector('input').value = personSave
})

