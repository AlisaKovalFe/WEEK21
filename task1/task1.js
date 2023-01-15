function onSearch() {
    let getGif = document.querySelector('#getGif')

    fetch('https://api.giphy.com/v1/gifs/search?api_key=ILy7aNThR6MbeADiAl9PV4SlwkYtad2B&q=' + getGif.value + '&limit=5&offset=0&rating=g&lang=en')
    .then (response => response.json())
    .then (gif => {
        console.log(gif)

        let gifs = [document.querySelector('#firstImage'), document.querySelector('#secondImage'), document.querySelector('#thirdImage'), document.querySelector('#fourthImage'), document.querySelector('#fifthImage')]
        for (let gifNumber = 0; gifNumber < gif.data.length; gifNumber++) {
            gifs[gifNumber].src = gif.data[gifNumber].images.original.url
            gifs[gifNumber].classList.add('imgSize')
        }

        getGif.value = ''
        // let gifURL = gif.data[0].images.original.url.split('?')[0]
    })
    .catch(err => console.log(err))
}

button.addEventListener('click', onSearch)
document.addEventListener('keydown', (event) => {
    if (event.code=='Enter') {
        onSearch()
    }
})
    


