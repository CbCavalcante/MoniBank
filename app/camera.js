const botaoIniciarMidia = document.querySelector("[data-video-botao]")
const campoCamera = document.querySelector("[data-camera]")
const video = document.querySelector("[data-video]")
const botaoTirarFoto = document.querySelector("[data-tirar-foto]")
const canvas  = document.querySelector("[data-video-canvas]")
const mensagem = document.querySelector("[data-mensagem]")
const botaoEnviarFoto = document.querySelector("[data-enviar]")

let imagemURL = ''

botaoIniciarMidia.addEventListener("click", async function(){
    const iniciarVideo = await navigator.mediaDevices.getDisplayMedia({video: true, audio: false})

    botaoIniciarMidia.style.display = "none"
    campoCamera.style.display = "block"

    video.srcObject = iniciarVideo;
})

botaoTirarFoto.addEventListener("click", function(){
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    imagemURL = canvas.toDataURL('imagem/jpeg')

    campoCamera.style.display = "none"
    mensagem.style.display = "block"
})

botaoEnviarFoto.addEventListener('click', () => {
    const receberDadosExistentes = localStorage.getItem("cadastro");
    const converteRetorno = JSON.parse(receberDadosExistentes);

    converteRetorno.imagem = imagemURL;

    localStorage.setItem('cadastro', JSON.stringify(converteRetorno))

    window.location.href = '../pages/abrir-conta-form-3.html';
})
