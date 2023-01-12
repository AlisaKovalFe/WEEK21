let form = document.querySelector('form')

// здесь в учебных целях навесила на форму прослушку ее отправки (вместо клика на кнопке)
form.addEventListener('submit', (event) => {
    event.preventDefault();

    fetch ('https://httpbin.org/post', {
        method: 'POST',
        body: new FormData(form),
    })
    .then (response => response.json())
    .then (response => console.log(response))
    .catch (err => console.log(err))
})





// это старое дз по классам
let nicname = document.querySelector('#nicname')
let officialName = document.querySelector('#officialName')
let date = document.querySelector('#date')
let years = document.querySelector('#years')

let breed = document.querySelector('#breed')
let feed = document.getElementsByName('feed')
let sex = document.getElementsByName('sex')
let characters = document.querySelector('datalist')

let nameOwner = document.querySelector('#nameOwner')
let phone = document.querySelector('#phone')
let eMail = document.querySelector('#eMail')
let comments = document.querySelector('#comments')

let petCharacter = document.querySelector('#petCharacter')


class Cat {
    constructor (nicname, officialName, date, years, breed, feed, sex, petCharacter, nameOwner, phone, eMail, comments) {
        this.nicname = nicname
        this.officialName = officialName
        this.date = date
        this.years = years

        for (let selectBreed of breed) {
            if (selectBreed.selected) {
                this.breed = selectBreed.value
            }
        }

        let arr = []
        for (let feedChoice of feed) {              
            if (feedChoice.checked) {
                arr.push(feedChoice.value)                
                this.feed = arr               
            }
        }

        for (let sexChoice of sex) {            
            if (sexChoice.checked) {
                this.sex = sexChoice.value                
            }
        }

        this.petCharacter = petCharacter
        this.nameOwner = nameOwner
        this.name = phone
        this.eMail = eMail
        this.comments = comments        
    }    

    print() {
        console.log(this);
    }
}

button.addEventListener('click', () => {
    let cat1 = new Cat (nicname.value, officialName.value, date.value, years.value, breed, feed, sex, petCharacter.value, nameOwner.value, phone.value, eMail.value, comments.value)
    cat1.print()
})