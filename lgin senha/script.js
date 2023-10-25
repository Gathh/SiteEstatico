let usuario = JSON.parse(localStorage.getItem("logado"));
document.getElementById("titulo").innerHTML = "Bem vindo, "+usuario.login+"!";

let campoLogin = document.getElementById("login")
let campoSenha = document.getElementById("password")
let campoNovoLogin = document.getElementById("novoLogin")
let campoNovaSenha = document.getElementById("novaSenha")
let campoRepSenha = document.getElementById("repSenha")
let nome = document.getElementById("nome")


function cadastra() {
    if (campoNovaSenha.value == campoRepSenha.value) {
        const usuario = {
            login: campoNovoLogin.value,
            senha: campoNovaSenha.value
        };

        let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
        if (bancoDeDados == null) {
            bancoDeDados = [];
        }
        bancoDeDados.push(usuario);
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
        alert("Usuario cadastrado com sucesso!");

    } else {
        alert("Senhas não coincidem");
    }
}
function login() {
    let login = campoLogin.value;
    let senha = campoSenha.value;
    let mensagem = "Usuario ou senha incorreta!";
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
    if (bancoDeDados == null) {
        mensagem = "Nenhum usuário cadastrado até o momento";
    } else {
        for (let usuario of bancoDeDados) {
            if (usuario.login == login && usuario.senha == senha) {
                mensagem = "Logado com sucesso!"
                window.location.href = "./home page/home.html";
                break;
            }
        }
    }
    alert(mensagem);
}