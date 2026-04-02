var dishDescription = document.querySelector("#dish-description");
var slider = document.querySelector(".slider");

function handleSliderClick(event, text, targetId) {
    event.preventDefault();

    dishDescription.textContent = text;

    const target = document.querySelector(targetId);

    slider.scrollTo({ left: target.offsetLeft, behavior: 'smooth' });

}

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



var menuDishDescription = document.querySelector("#menu-dish-description p"); 
var menuSlider = document.querySelector(".menu-slider");

var dishName = document.querySelector("#dish-name")
var ratingImg = document.querySelector("#rating-img")
var score = document.querySelector("#score")
var price = document.querySelector("#price")
var premiumDish = document.querySelector("#premium")
var premiumExclusive = document.querySelector("#premiumExclusive")

function handleMenuSliderClick(event, text, targetId, name, rating, score, price, premium, exclusive) {
    event.preventDefault();
    
    menuDishDescription.textContent = text;
    
    const target = document.querySelector(targetId);
    if (target) {
        menuSlider.scrollTo({
            left: target.offsetLeft - menuSlider.offsetLeft,
            behavior: 'smooth'
        });
    }

    dishName.textContent = name;
    ratingImg.src = rating;
    ratingScore.textContent = score;
    dishPrice.textContent = price;
    premiumDish.style.display = premium;
    premiumExclusive.style.display = exclusive


}


document.querySelector("#menuSliderBtn1").addEventListener("click", (e) => {
    handleMenuSliderClick(e, 'Um clássico atemporal da culinária italiana. Spaghetti artesanal envolvido em um molho pomodoro de tomates frescos, finalizado com manjericão recém-colhido, azeite extravirgem e uma delicada camada de queijo Parmigiano Reggiano maturado. Simples, aromático e absolutamente irresistível.', '#i1', 'Spaghetti al Pomodoro e Basilico', '../assets/imgs/rating-48.png', '(4.8)', 'R$ 58,00', 'none', 'none');
});

document.querySelector("#menuSliderBtn2").addEventListener("click", (e) => {
    handleMenuSliderClick(e, 'Uma combinação sofisticada que surpreende a cada garfada. Penne perfeitamente al dente envolvido em um molho cremoso de nozes, rico e levemente adocicado, preparado com creme fresco e um toque de manteiga. Finalizado com lascas de queijo Parmigiano Reggiano, ervas aromáticas e um fio de azeite extravirgem que realça seus sabores.', '#i2', 'Penne Alla Crema de Nozes', '../assets/imgs/rating-45.png', '(4.5)', 'R$ 52,00', 'none', 'none');
});

document.querySelector("#menuSliderBtn3").addEventListener("click", (e) => {
    handleMenuSliderClick(e, 'Um ícone absoluto da tradição italiana. Camadas generosas de massa fresca intercaladas com um autêntico ragù alla bolognese, preparado lentamente com carnes selecionadas, tomates maduros e ervas aromáticas, envolvidas por um aveludado molho bechamel.', '#i3', 'Lasagna alla Bolognese', '../assets/imgs/rating-475.png', '(4.75)', 'R$ 56,00', 'none', 'none');
});

document.querySelector("#menuSliderBtn4").addEventListener("click", (e) => {
    handleMenuSliderClick(e, 'Um prato que traduz frescor e sofisticação em cada detalhe. Fettuccine artesanal envolto em um delicado molho al limone, onde a acidez suave do limão se equilibra perfeitamente com a cremosidade da manteiga e do creme. Finalizado com camarões premium salteados no ponto ideal, perfumados com alho e ervas frescas, além de um toque de raspas de limão siciliano e queijo Parmigiano Reggiano.', '#i4', 'Fettuccine al Limone com Camarões', '../assets/imgs/rating-48.png', '(4.8)', 'R$ 72,00', 'flex', 'flex');
});

document.querySelector("#menuSliderBtn5").addEventListener("click", (e) => {
    handleMenuSliderClick(e, 'Uma verdadeira joia da gastronomia italiana. Ravioli delicadamente recheado, envolto em um molho cremoso e sofisticado, preparado com ervas finas, um toque de manteiga dourada e notas sutis de alho. Finalizado com folhas frescas de manjericão, lascas de queijo parmesão e um fio de azeite extravirgem. Elegante, reconfortante e simplesmente inesquecível.', '#i5', 'Ravioli alla Crema Suprema', '../assets/imgs/rating-49.png', '(4.9)', 'R$ 70,00', 'flex', 'flex');
});
