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
