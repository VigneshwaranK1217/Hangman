let wordList = ["apple", "ball", "cat", "dog", "fish", "chair", "table", "phone", "book", "mouse", "school", "tree", "flower", "water", "pizza", "orange", "bread", "shirt", "light", "music", "smile", "happy", "dance", "sleep", "dream", "movie", "beach", "cloud", "rain", "game",
    "computer", "bicycle", "camera", "window", "teacher", "jungle", "planet", "travel", "mirror", "desert", "candle", "pocket", "energy", "family", "dragon", "island", "moment", "castle", "bridge", "kitchen", "rocket", "forest", "diamond", "galaxy", "crystal", "library", "monster", "thunder", "secret", "courage", "fortune", "kingdom", "leopard", "journey", "science", "compass", "justice", "temple", "engine", "volcano"
    ]

let index = Math.floor(Math.random()*30);
let randomWord = wordList[index];
let wordLen = randomWord.length;

for(let i=0; i<wordLen; i++){
    let newDiv = document.createElement('div');

    let divClass = `box${i}`;
    newDiv.classList.add(divClass);
    newDiv.classList.add("box");

    const container = document.querySelector(".innerContainer");
    container.appendChild(newDiv);

    let newPara = document.createElement('p');
    // newPara.textContent = randomWord[i];

    let paraClass = `p${i}`;
    newPara.classList.add(paraClass);
    newPara.classList.add('p');

    const innerContainer = document.querySelector(".box" + i);
    innerContainer.appendChild(newPara);
}

document.addEventListener("keypress", function(event){
    let alpha = event.key;
    let val = false;
    
    for (let i = 0; i < wordLen; i++) {
        if (alpha == randomWord[i]){
            const pAlpha = document.querySelector(`.p${i}`);            
            pAlpha.textContent = alpha;
            val = true;
        }
        
    }

});

for (let i = 0; i < 26; i++) {
    document.querySelectorAll(".alpha")[i].addEventListener("click", function(event){
    let clickAlpha = event.target.innerHTML;    
        for (let i = 0; i < wordLen; i++) {
            if (clickAlpha == randomWord[i]){
                const pAlpha = document.querySelector(`.p${i}`);            
                pAlpha.textContent = clickAlpha;
                val = true;
            }
        
        }
    
});
    
}
