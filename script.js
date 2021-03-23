let linku = document.getElementById('yt-id')
let button = document.getElementById('btn-submit')
let form = document.getElementById('form')



form.addEventListener('submit', (e) => {
    e.preventDefault()

    let newtext = linku.value
    
    let link = document.createElement("h5");   
link.innerHTML = "https://img.youtube.com/vi/" + newtext + "/hqdefault.jpg";                   
   

let img = document.getElementById("myImage");
img.src = "https://img.youtube.com/vi/" + newtext + "/hqdefault.jpg"

})

