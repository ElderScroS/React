fetch("http://www.omdbapi.com/?t=Mark&apikey=124df000")
    .then((result)=>{
        console.log(result.status)
        return result.json()
    })
    .then((body)=>{
        console.log(body.Poster)
        document.getElementById('image').src = body.Poster
    })
