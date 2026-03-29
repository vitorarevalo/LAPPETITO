var dishDescription = document.querySelector("#dish-description");
var slider = document.querySelector(".slider");


function handleSliderClick(event, text, targetId) {
    event.preventDefault();
    
    dishDescription.textContent = text;
    
    const target = document.querySelector(targetId);
    slider.scrollTo({
        left: target.offsetLeft,
        behavior: 'smooth'
    });
}

// Configurando os botões
document.querySelector("#sliderBtn1").addEventListener("click", (e) => {
    handleSliderClick(e, 'Experimente nosso Fettuccine al Limone com Camarões Premium: massa fresca envolvida em um cremoso molho de limão e parmesão, acompanhada de camarões salteados e tomates confitados. Finalizado com manjericão fresco e raspas de limão, é um prato leve, aromático e sofisticado — perfeito para quem aprecia o melhor da cozinha italiana gourmet.', '#s1');
});

document.querySelector("#sliderBtn2").addEventListener("click", (e) => {
    handleSliderClick(e, 'Descubra o conforto e a intensidade do nosso Spaghetti al Pomodoro e Basilico: massa al dente envolvida em um robusto molho artesanal de tomates selecionados e carnes nobres cozidas lentamente. Acompanhado de tomates cereja frescos e generosamente finalizado com queijo parmesão ralado na hora e manjericão orgânico, este prato equilibra textura e sabor de forma magistral.', '#s2');
});

document.querySelector("#sliderBtn3").addEventListener("click", (e) => {
    handleSliderClick(e, 'Desfrute da indulgência pura com o nosso Penne Alla Crema de Nozes: massa penne cozida na perfeição, envolta num molho cremoso e rico, que combina a intensidade do queijo parmesão com a textura aveludada do creme e o sabor único das nozes torradas. Acompanhado de pedacinhos de pancetta crocante e finalizado com um toque generoso de queijo parmesão ralado na hora e manjericão fresco.', '#s3');
});

document.querySelector("#sliderBtn4").addEventListener("click", (e) => {
    handleSliderClick(e, 'Experimente a autêntica Lasagna alla bolognese: camadas de massa fresca intercaladas com um molho à bolonhesa encorpado, cozido em fogo brando com carnes bovina e suína, legumes e especiarias. O molho bechamel cremoso e a cobertura de queijo parmesão ralado na hora completam a experiência, criando um prato irresistível e saboroso.', '#s4');
});