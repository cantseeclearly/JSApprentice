axios.defaults.headers.common['Authorization'] = 'Bearer FGNxSHqDPDeR60YZ1FyxjchT85ogleljBY4V81WNVreVQRjDfXWoL5ElvAu';
axios.defaults.headers.common['accept'] = 'application/json';

const url = 'https://challenge.thef2e.com/api/thef2e2019/stage6/rooms';
let select = document.querySelector('#roomType');
let ul = document.querySelector('#roomInfo');
let list = document.querySelector('.list');

axios.get(url)
    .then(res => {
        if(res.data) {
            if(res.data.success) console.log('取得房型資訊');
            if(res.data.items) {
                let opt = document.createElement('option');
                opt.value = ''; opt.text = '請選擇';
                select.appendChild(opt);
                let str = '';
                res.data.items.forEach((i, idx) => {
                    opt = document.createElement('option');
                    opt.value = i.id;
                    opt.text = i.name;
                    console.log(opt);
                    select.appendChild(opt);

                    str += `
                    <div class="card h-100 my-4 mx-3" style="width: 18rem;">
                      <div class="bg-cover" style="background-image:url('${i.imageUrl}')"></div>
                      <div class="card-body">
                        <h5 class="card-title">${i.name}</h5>
                        <button class="btn btn-danger" onclick=goDetail('${i.id}')>detail</button>
                      </div>
                    </div>
                    `;
                });
                list.innerHTML = str;
            }
        }
    });

select.addEventListener('change', (e) => {
    let path = location.pathname.replace('index', 'view/roomInfo');
    location.href = `${path}?id=${e.target.value}`;
});

function goDetail(id) {
    let path = location.pathname.replace('index', 'view/roomInfo');
    location.href = `${path}?id=${id}`;
}