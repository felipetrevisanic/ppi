const btn = document.getElementById("btnLogin");

btn.addEventListener('click', function(e) {
    e.preventDefault();

    const login = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    
    if(login === 'admin' && pass==='123'){
        window.location.href = './Order.html'
    }else{
        alert('Usuário ou senha estão incorretos')
    }
})