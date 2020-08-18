axios.defaults.headers.common['Authorization'] = 'Bearer FGNxSHqDPDeR60YZ1FyxjchT85ogleljBY4V81WNVreVQRjDfXWoL5ElvAu';
axios.defaults.headers.common['accept'] = 'application/json';

const url = 'https://challenge.thef2e.com/api/thef2e2019/stage6/room/';
let ul = document.querySelector('#roomInfo');
let id = location.search.split('=')[1];

window.onload = function() {
let header = {
    
}
axios.get(`${url}${id}`)
    .then(res => {
        console.log(res);
        if(res.data.success) 
        {
            room = res.data.room;
            let str = '';
            console.log(room);
            room.forEach(i => {
                str += `
                    <div class="card h-100 my-4 mx-3" style="width: 30rem;">
                    <button class="btn btn-primary" id='toIndex' onclick=goHome()>Go Index Page</button>
                      <div class="card-body">
                        <h5 class="card-title">${i.name}</h5>
                        <h6 class="card-text">${i.description}</h6>
                        <table class='table table-striped .table-responsive'>
                            <thead>    
                                <tr>
                                    <th>房型資訊</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>入房時間</th>
                                    <td>${i.checkInAndOut['checkInEarly']}~${i.checkInAndOut['checkInLate']}</td>
                                </tr>
                                <tr>
                                    <th>退房時間</th>
                                    <td>${i.checkInAndOut['checkOut']}</td>
                                </tr>
                                <tr>
                                    <th>平日價格</th>
                                    <td>${i.normalDayPrice}</td>
                                </tr>
                                <tr>
                                    <th>假日價格</th>
                                    <td>${i.holidayPrice}</td>
                                </tr>
                                <tr>
                                    <td colspan=2>
                                        <img class='img-thumbnail' src='${i.imageUrl[0]}' />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                      </div>
                    </div>
                    `;
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

