axios.defaults.headers.common['Authorization'] = 'Bearer FGNxSHqDPDeR60YZ1FyxjchT85ogleljBY4V81WNVreVQRjDfXWoL5ElvAu';
axios.defaults.headers.common['accept'] = 'application/json';

const url = 'https://challenge.thef2e.com/api/thef2e2019/stage6/room/';
let ul = document.querySelector('#roomInfo');
let id = location.search.split('=')[1];

window.onload = function() {
axios.get(`${url}${id}`)
    .then(res => {
        console.log(res);
        if(res.data.success) 
        {
            room = res.data.room;
            let str = '';
            room.forEach(i => {
                str += `
                    <li class='li'>
                        <div>id:${i.id}</div>\n
                        <div>name:${i.name}</div>\n
                        <div>holidayPrice:${i.holidayPrice}</div>\n
                        <div>normalDayPrice:${i.normalDayPrice}</div>\n
                        <div><img src='${i.imageUrl}' alt='${i.name}' width=300 height=300 /></div>\n
                    </li>`;
            });
            ul.innerHTML = str;
        }
    })
    .catch(err => {
        console.log(err);
    })
}

function goHome() {
    let path = location.pathname.replace('view/roomInfo', 'index');
    location.href = path;
}

