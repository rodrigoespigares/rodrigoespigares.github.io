window.onload = () => {
    let easyBtn = document.getElementById("easy");
    let hardBtn = document.getElementById("hard");
    easyBtn.style.backgroundColor = "transparent"
    hardBtn.style.backgroundColor = "darkseagreen"
    win();
    jugar();
    let footer = document.querySelector("footer");
    year = new Date()
    footer.innerHTML=`© ${year.getFullYear()}~${year.getFullYear()+1} Rodrigo Espigares Fernandez`
}