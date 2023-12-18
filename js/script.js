function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if username or password is '123'
    if (username === '123' || password === '123') {
        alert('Password benar');
        return;
    } else {
        alert('password salah!');
    }
}
