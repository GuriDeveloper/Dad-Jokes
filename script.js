const joke = document.getElementById('joke')
const btnId = document.getElementById('jokebtn')
function nextJoke() {
    const setHeaders = {
        headers: {
            Accept: 'application/json'
        }
    }
    joke.innerHTML = `<div id="joke" class="joke">Awesome Joke is loading...</div>`
    btnId.innerText = 'Loading...'
    fetch('https://icanhazdadjoke.com/', setHeaders)
        .then((res) => {
            res.json().then((res) => {
                joke.innerHTML = `<div id="joke" class="joke">${res.joke}</div>`
                btnId.innerText = 'Next Joke'
            })
        }).catch((err) => {
            console.log('error is : ', err)
        })
}
btnId.addEventListener('click', nextJoke)
nextJoke()
