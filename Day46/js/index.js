const hexSchoolUrl = 'https://www.hexschool.com/';
let googleBtn;
let yahooBtn;
let param;
let setSingleParamUrl = () => {};
let setMultiParamUrl = () => {};
let getParam = () => {};

window.onload = () => 
{
    googleBtn = document.querySelector('.google');
    let googleId = googleBtn.getAttribute('data-id');
    googleBtn.addEventListener('click', () => {
        location.href = `${hexSchoolUrl}?recommend=${googleId}`;
    });

    yahooBtn = document.querySelector('.yahoo');
    let yahooId = yahooBtn.getAttribute('data-id');
    yahooBtn.addEventListener('click', ()=> {
        location.href = `${hexSchoolUrl}?recommend=${yahooId}`;
    });
    
    setSingleParamUrl = () => {
        location.href = location.pathname + '?recommend=userName';
    }
    
    setMultiParamUrl = () => {
        location.href = location.pathname + '?recommend=userName&param2=88&param3=abc'
    }

    getParam = () => {
        param = document.querySelector('.param');
    
        alert('使用 location.search 可以從網址?開始取得一串字串這些就是網址參數，再對這串字串進行調整就可以取得網址參數的值');
        let paramsStr = location.search.replace('?', '');
        let params = paramsStr.split('&');
        if(params.length > 0) {
            let liStr = '';
            params.forEach(i => {
               let x = i.split('=');
                liStr +=`<li>參數 ${x[0]} 其值為 ${x[1]}</li>`;
            });

            param.innerHTML = liStr;
        }
    }
}

