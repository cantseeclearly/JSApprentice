axios.defaults.headers.common['Authorization'] = 'Bearer FGNxSHqDPDeR60YZ1FyxjchT85ogleljBY4V81WNVreVQRjDfXWoL5ElvAu';
axios.defaults.headers.common['accept'] = 'application/json';

const url = 'https://challenge.thef2e.com/api/thef2e2019/stage6/rooms';
let select = document.querySelector('#roomType');
let ul = document.querySelector('#roomInfo');

let api = {
    allRoom: () => {
        axios.get(url)
    },
    roomInfo: (id) => {
        axios.get(`https://challenge.thef2e.com/api/thef2e2019/stage6/room/${id}`)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }
}

axios.get(url)
    .then(res => {
        if(res.data) {
            console.log(res.data);
            if(res.data.success) console.log('取得房型資訊');
            if(res.data.items) {
                let firstId = '';
                let opt = document.createElement('option');
                opt.value = ''; opt.text = '請選擇';
                select.appendChild(opt);
                res.data.items.forEach((i, idx) => {
                    opt = document.createElement('option');
                    opt.value = i.id;
                    opt.text = i.name;
                    console.log(opt);
                    select.appendChild(opt);
                });
            }
            //set first room info
        }
    });

select.addEventListener('change', (e) => {
    let path = location.pathname.replace('index', 'view/roomInfo');
    location.href = `${path}?id=${e.target.value}`;
});