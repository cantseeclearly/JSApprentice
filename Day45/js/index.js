/*
<button class="google">連到 Google</button>
<button class="yahoo">連到 Yahoo</button>
*/

window.onload = () => {
    let googleBtn = document.querySelector('.google');
    let yahooBtn = document.querySelector('.yahoo');
    let arrLink = ['http://www.google.com', 'http://tw.yahoo.com'];
    console.log(googleBtn);

    googleBtn.addEventListener('click', () => {
        location.href = arrLink[0];
    });
    yahooBtn.addEventListener('click', function() {
        location.href = arrLink[1];
    });
}


