function toggleMenu () {
    // console.log(document.getElementById("primaryNav").classList);
    document.getElementById("primaryNav").classList.toggle("hide")
}

document.getElementById("year").innerHTML = (new Date().getFullYear())
document.getElementById("updated").innerHTML = document.lastModified;