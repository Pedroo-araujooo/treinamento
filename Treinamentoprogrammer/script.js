function move() {
    var noob = document.getElementById('button')
    noob.style.position='absolute';
    noob.style.left=Math.random()*80+"vw";
    noob.style.top=Math.random()*80+"vh";
}

document.getElementById('button').addEventListener('click', move)