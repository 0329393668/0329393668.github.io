const accounts = [
    {
        username: 'admin',
        email: 'admin@example.com',
        password: '123456',
    },
    {
        username: 'user1',
        email: 'user1@example.com',
        password: 'password1',
    },
    {
        username: 'user2',
        email: 'user2@example.com',
        password: 'password2',
    },
];
const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const account = accounts.find((account) => account.username === username);
    console.log(account)
    // Kiểm tra tên đăng nhập và mật khẩu
    if (account && account.password === password) {
        alert('Đăng nhập thành công!');
    } else {
        alert('Tên đăng nhập hoặc mật khẩu không chính xác!');
    }
});

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.querySelector('#username1').value;
    const password = document.querySelector('#password1').value;
    const password1 = document.querySelector('#password2').value;
    const account = accounts.find((account) => account.username === username);

    // Kiểm tra tên đăng nhập và mật khẩu
    if (!account && password === password1) {
        createAccount(username, password, password1);
        function createAccount(username, email, password) {
            // Tạo đối tượng chứa thông tin của tài khoản mới
            const newAccount = {
                username: username,
                email: email,
                password: password,
            };
            // Thêm tài khoản mới vào mảng bằng phương thức push()
            accounts.push(newAccount);
            alert('Tài khoản đã được tạo thành công!');
        }
        form.reset();
        console.log(accounts)

    } else {
        alert('Tên đăng nhập hoặc mật khẩu không hợp lệ. Vui lòng thử lại!');
    }
});

