let requestUrl = 'https://api.github.com/users/hiteshchoudhary'
let xhr = new XMLHttpRequest()
xhr.open('GET', requestUrl)
// console.log('reached')

xhr.onreadystatechange = function () {
    console.log(xhr.readyState)
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText)
        console.log(data.avatar_url)
        console.log(data.name)
        console.log(data.followers)
        const userDetails = function () {
            document.querySelector('.canvas').innerHTML = `   <div class="img">
            <img src="${data.avatar_url}"
                alt="user image">
        </div> 
        <div class="text">
            <h2>Name: ${data.name}</h2>
            <h3>Followers: ${data.followers}</h3>
        </div> `
            const btn = document.querySelector('#view')
            btn.style.display = 'none'
        }

        document.querySelector('#view').addEventListener('click', userDetails);
    }
}
xhr.send()

