let start_btn = document.getElementById("start-btn")
let el = document.getElementById("el")

el.style.display = "none"

start_btn.onclick = function (e) {
    el.style.display = "block"
    start_btn.style.display = "none "
}

post_search.onsubmit = function (e) {
    e.preventDefault()
    let input = document.forms["post_search"]["search"].value
    let url_redirect = "https://www.google.fr/#q="
    if (input == "") {
        alert("Veuillez entrer votre recherche")
    }else{
        let search = input.split(" ")
        for (let i = 0; i < search.length; i++) {
            url_redirect += search[i]+"+"
        }
        url_redirect = url_redirect.slice(0,(url_redirect.length - 1))
        document.location.href = url_redirect
    }
}

setTimeout(function () {
    alert("Coucou")
},5000)