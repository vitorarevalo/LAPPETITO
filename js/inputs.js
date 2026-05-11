const telInput = document.querySelector('#telefone');

telInput.addEventListener('keyup', (e) => {
    let value = e.target.value;
    
    value = value.replace(/\D/g, "");
    
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
    
    e.target.value = value.substring(0, 15);
});


const dateInput = document.querySelector('#data');

const hoje = new Date();

const hojeFormatado = hoje.toISOString().split('T')[0];

dateInput.setAttribute('min', hojeFormatado);



const form = document.querySelector('.reservation-form');
const confirmDiv = document.querySelector('.confirm');
const progressBarStat = document.querySelector('.progress-bar-stat');

let timerRedirecionamento;

form.addEventListener('submit', (e) => {

    e.preventDefault();

    confirmDiv.style.display = 'flex';

    progressBarStat.classList.add('animate-progress');

    timerRedirecionamento = setTimeout(() => {
        window.location.href = "index.html";
    }, 5000);
});

document.querySelector('.close-btn').addEventListener('click', () => {
    clearTimeout(timerRedirecionamento)
    confirmDiv.style.display = 'none';
    progressBarStat.classList.remove('animate-progress');

    location.reload()
});