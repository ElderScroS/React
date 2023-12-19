let request;

if (window.XMLHttpRequest){
    request = new XMLHttpRequest()
}
else{
    request = ActiveXObject('Microsoft.XMLHTTP')
}

// .open(method, URL [, async, user, password])

// onreadybystatechange
// 0 - request non initialize
// 1 - request initialize
// 2 - request is sent
// 3 - request is handling
// 4 - request handle is ready, server response received

let imag = document.getElementById('image')

request.open("GET" , "http://www.omdbapi.com/?t=Avatar&apikey=124df000")

request.responseType = 'json'
request.onreadystatechange = ()=>{
    console.log(`state = ${request.readyState} - status = ${request.status}`)
    if (request.readyState === 4 && request.status === 200){
        let movie = request.response
        console.log(movie.Title)
        console.log(movie.Year)
        imag.src = movie.Poster
    }
}

request.send();
