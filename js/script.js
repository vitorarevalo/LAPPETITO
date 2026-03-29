var dishDescription = document.querySelector("#dish-description");

var sliderBtn1 = document.querySelector("#sliderBtn1");
var sliderBtn2 = document.querySelector("#sliderBtn2");
var sliderBtn3 = document.querySelector("#sliderBtn3");
var sliderBtn4 = document.querySelector("#sliderBtn4");



sliderBtn1.addEventListener("click", function() {
    dishDescription.textContent = 'Experimente nosso Fettuccine al Limone com Camarões Premium: massa fresca envolvida em um cremoso molho de limão e parmesão, acompanhada de camarões salteados e tomates confitados. Finalizado com manjericão fresco e raspas de limão, é um prato leve, aromático e sofisticado — perfeito para quem aprecia o melhor da cozinha italiana gourmet.'
})

sliderBtn2.addEventListener("click", function() {
    dishDescription.textContent = 'Descubra o conforto e a intensidade do nosso Spaghetti al Pomodoro e Basilico: massa al dente envolvida em um robusto molho artesanal de tomates selecionados e carnes nobres cozidas lentamente. Acompanhado de tomates cereja frescos e generosamente finalizado com queijo parmesão ralado na hora e manjericão orgânico, este prato equilibra textura e sabor de forma magistral.'
})

sliderBtn3.addEventListener("click", function() {
    dishDescription.textContent = 'Desfrute da indulgência pura com o nosso Penne Alla Crema de Nozes: massa penne cozida na perfeição, envolta num molho cremoso e rico, que combina a intensidade do queijo parmesão com a textura aveludada do creme e o sabor único das nozes torradas. Acompanhado de pedacinhos de pancetta crocante e finalizado com um toque generoso de queijo parmesão ralado na hora e manjericão fresco.'
})

sliderBtn4.addEventListener("click", function() {
    dishDescription.textContent = 'Experimente a autêntica Lasagna alla bolognese: camadas de massa fresca intercaladas com um molho à bolonhesa encorpado, cozido em fogo brando com carnes bovina e suína, legumes e especiarias. O molho bechamel cremoso e a cobertura de queijo parmesão ralado na hora completam a experiência, criando um prato irresistível e saboroso.'
})


