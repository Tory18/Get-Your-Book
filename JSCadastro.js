let nome = document.querySelector("#nome");
let labelNome = document.querySelector("#labelNome");
let validNome = false;

let email = document.querySelector("#email");
let labelEmail = document.querySelector("#labelEmail");
let validEmail = false;

let senha = document.querySelector("#senha");
let labelSenha = document.querySelector("#labelSenha");
let validSenha = false;

let SenhaConf = document.querySelector("#senhac");
let labelConfSenha = document.querySelector("#labelConfSenha");
let validConfNome = false;

let btn = document.querySelector('#Cadastrar');

nome.addEventListener('keyup', () => {
    if (nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color: red');
        labelNome.innerHTML = 'Nome *Insira no mínimo 3 caracteres';
        nome.setAttribute('style', 'border-color: red');
        validNome = false;
    } else {
        labelNome.setAttribute('style', 'color: green');
        labelNome.innerHTML = 'Nome';
        nome.setAttribute('style', 'border-color: green');
        validNome = true;
    }
});

senha.addEventListener('keyup', () => {
    if (senha.value.length <= 5) {
        labelSenha.setAttribute('style', 'color: red');
        labelSenha.innerHTML = 'Senha *Insira no mínimo 6 caracteres';
        senha.setAttribute('style', 'border-color: red');
        validSenha = false;
    } else {
        labelSenha.setAttribute('style', 'color: green');
        labelSenha.innerHTML = 'Senha';
        senha.setAttribute('style', 'border-color: green');
        validSenha = true;
    }
});

SenhaConf.addEventListener('keyup', () => {
    if (senha.value !== SenhaConf.value) {
        labelConfSenha.setAttribute('style', 'color: red');
        labelConfSenha.innerHTML = 'Confirmar Senha *As senhas não conferem';
        SenhaConf.setAttribute('style', 'border-color: red');
        validConfNome = false;
    } else {
        labelConfSenha.setAttribute('style', 'color: green');
        labelConfSenha.innerHTML = 'Confirmar Senha';
        SenhaConf.setAttribute('style', 'border-color: green');
        validConfNome = true;
    }
});

btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha');

    if (inputSenha.getAttribute('type') === 'password') {
        inputSenha.setAttribute('type', 'text');
    } else {
        inputSenha.setAttribute('type', 'password');
    }
});

function cadastrar() {
    if (validNome && validEmail && validSenha && validConfNome) {
        const usuarios = {
            nome: nome.value,
            email: email.value,
            senha: senha.value
        }
        const listaUser = JSON.parse(localStorage.getItem('usuarios')) || [];
        listaUser.push(usuarios);
        localStorage.setItem('usuarios', JSON.stringify(listaUser));

        window.location.href = 'TelaLogin.html';
    }
}
