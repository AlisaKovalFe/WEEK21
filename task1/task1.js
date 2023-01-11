function onSearch() {
    let getGif = document.querySelector('#getGif').value
    console.log(getGif);

    fetch('https://api.giphy.com/v1/gifs/search?api_key=ILy7aNThR6MbeADiAl9PV4SlwkYtad2B&q=' + getGif + '&limit=5&offset=0&rating=g&lang=en')
    .then (response => response.json())
    .then (gif => {
        console.log(gif)

        let firstImage = document.querySelector('#firstImage')
        firstImage.src = gif.data[2].url

    })
    .catch(err => console.log(err))
}