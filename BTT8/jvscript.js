const form = document.querySelector('form');


function createAccount(username, password) {
    const newAccount = {
        username: username,
        password: password,
    };
    const newAccounts = JSON.stringify(newAccount);
    localStorage.setItem('newAccount', newAccounts);
}

function login() {
    window.location.replace('/BTT8/index.html');
}

function sign() {
    window.location.replace('/BTT8/index1.html');
}
function home() {
    window.location.replace('/BTT8/index2.html');
}


form.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const newAccount = localStorage.getItem('newAccount');
    const data = JSON.parse(newAccount);
    if (data.username === username && data.password === password) {
        alert('Đăng nhập thành công!');
        window.location.replace('/BTT8/index2.html');
    } else {
        alert('Tên đăng nhập hoặc mật khẩu không chính xác!');
    }
});

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.querySelector('#username1').value;
    const password = document.querySelector('#password1').value;
    const password1 = document.querySelector('#password2').value;
    if (username.length !== 0 && password === password1) {
        createAccount(username, password);
        alert('Tài khoản đã được tạo thành công!');
        window.location.replace('/BTT8/index.html');
        form.reset();
    } else {
        alert('Tên đăng nhập hoặc mật khẩu không hợp lệ. Vui lòng thử lại!');
    }
});


