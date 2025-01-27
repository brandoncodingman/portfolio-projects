let isClicked = { 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false, 11: false, 12: false };

for (let i = 1; i <= 12; i++) {
    let cards = document.getElementById('c' + i);
    if (cards) {
        cards.addEventListener('click', function () {
            toggleImageOrText(i);
        });
    }
}

function toggleImageOrText(id) {
    let clickedCard = document.getElementById('c' + id);
    let topText = document.getElementById('tt' + id);
    let bottomText = document.getElementById('bt' + id);

    if (!isClicked[id]) {
        changeToText(id, clickedCard, topText, bottomText);
    } else {
        showImage(id, clickedCard, topText, bottomText);
    }

    isClicked[id] = !isClicked[id];
}

function changeToText(id, clickedCard, topText, bottomText) {
    let infoText = '';

    switch (id) {
        case 1:
            infoText = "White Tigers are rare Bengal Tigers with a white coat. They are endangered due to habitat loss and are often found in zoos for conservation efforts.";
            break;
        case 2:
            infoText = "Red Pandas are endangered tree-dwelling mammals native to the Himalayas. They are known for their reddish-brown fur and bushy tails.";
            break;
        case 3:
            infoText = "Golden Eagles are powerful birds of prey with excellent vision. They hunt mammals and birds, and their wingspan can reach up to 2.3 meters.";
            break;
        case 4:
            infoText = "Owls are nocturnal birds of prey with excellent hearing and vision. They are known for their ability to rotate their heads up to 270 degrees.";
            break;
        case 5:
            infoText = "Tortoises are slow-moving reptiles that live in deserts, forests, and grasslands. Some species can live over 100 years and have protective shells.";
            break;
        case 6:
            infoText = "Giraffes are the tallest land animals, standing up to 5.5 meters tall. They feed on leaves from the tops of trees and have long, distinctive necks.";
            break;
        case 7:
            infoText = "Elephants are the largest land animals, known for their large ears and trunks. They live in complex social groups and have strong memories.";
            break;
        case 8:
            infoText = "Chimpanzees are highly intelligent primates. They use tools and live in social groups. They share over 98% of their DNA with humans.";
            break;
        case 9:
            infoText = "Gorillas are gentle, intelligent primates living in family groups. They are known for their strength and their close-knit social structure.";
            break;
        case 10:
            infoText = "Hippos are large, semi-aquatic mammals found in sub-Saharan Africa. They spend most of their time in water to stay cool and protect their skin.";
            break;
        case 11:
            infoText = "Orangutans are critically endangered primates from Southeast Asia. They have reddish-brown fur and are highly intelligent, often using tools to help them in the wild.";
            break;
        case 12:
            infoText = "Squirrel Monkeys are small, agile primates native to South America. They are social animals and use their long tails for balance in the trees.";
            break;
        default:
            infoText = "No information available.";
            break;
    }

    clickedCard.style.backgroundImage = '';
    clickedCard.style.backgroundColor = 'black';
    clickedCard.style.color = 'black';

    topText.innerHTML = infoText;
    bottomText.innerHTML = '';
}

function showImage(id, clickedCard, topText, bottomText) {
    const imageData = [
        'whitetigercard.jpg', 'redpandacard.jpg', 'goldeneaglecard.jpg', 'owlcard.jpg',
        'tortiosecard.jpg', 'giraffecard.webp', 'elephant.jpg', 'chimpcard.webp',
        'gorillacard.jpg', 'hippocard.jpg', 'orangcard.png', 'squirrelmonkeycard.jpg'
    ];
    const topTextContent = [
        "White Tiger", "Red Panda", "Golden Eagle", "Owl", "Tortoise", "Giraffe", "Elephant", "Chimpanzee",
        "Gorilla", "Hippopotamus", "Orangutan", "Squirrel Monkey"
    ];

    const bottomTextContent = [
        "From India", "From China", "From America", "From England", "From Hawaii", "From Africa", "From Thailand",
        "From the Amazon", "From Africa", "From Sub-Saharan Africa", "From Indonesia", "From Brazil"
    ];

    clickedCard.style.backgroundImage = `url(./image/${imageData[id - 1]})`;
    topText.innerHTML = topTextContent[id - 1];
    bottomText.innerHTML = bottomTextContent[id - 1];
}
