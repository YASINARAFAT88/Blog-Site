let icon = document.getElementById('icon')
icon.onclick = function () {
    document.body.classList.toggle('dark-theme')
    if (document.body.classList.contains('dark-theme'))
        icon.src = "./dark theme icon/sun.png";
    else {
        icon.src = "./dark theme icon/moon.png";
    }
}

// Gallery Part 

let fullImgBox = document.getElementById('fullImgBox')
let fullImg = document.getElementById('fullImg')

function openFullImg(pic) {
    fullImgBox.style.display = "flex"
    fullImg.src = pic
}
function closeFullImg() {
    fullImgBox.style.display = 'none'
}

// Blog Adding Part 