let button = document.getElementById("btn")
let progress = document.getElementById("progressBar");

let value = 0;
let min = 1;
let max = 10;

button.addEventListener("click", () => {

    if (value < 100) {
        let randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
        value += randomValue;
        if (value > 100) value = 100;
        progress.style.width = value + "%";
    }
    else if (value = 100) {
        value = 0;
    }

});

function groupeAnagrams(strs) {
    let map = {};

    for (let str of strs) {
        let sorted = str.split("").sort().join("");

        if (!map[sorted]) {
            map[sorted] = [];
        }
        map[sorted].push(str);
    }
    return Object.values(map)
}

console.log(groupeAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

function topKfrequent (nums, k) {
    let map = {};

    for (let num of nums) {
        if (!map[num]) {
            map[num] = 1;
        }
        else {
            map[num]++;
        }
    }

    let sort = Object.entries(map).sort((a, b) => b[1] - a[1]);

    let topK = sort.slice(0, k);
    let result = topK.map(entry => Number(entry[0]));

    return result;
}

console.log(topKfrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKfrequent([1, 1, 2, 2, 2, 3, 4, 5, 5, 5, 5, ], 1));
console.log(topKfrequent([1, 1, 1, 1, 2, 2, 3, 3, 4, 5, 5, 5, 6, 6, 6,], 3));


const user = {
    name: "Kadwew",
    age: 25,
    city: "Alger"
};


for (let [key, value] of Object.entries(user)) {
    console.log(`${key} => ${value}`);
}

const utilisateur = {
    karim: 10,
    hmdio: 25,
    osman: 30,
    kader: 15,
    hmed: 5,
    kadwew: 105,
    mouloud: 50,
    mezyan: 45,
    achor: 33,
    sebti: 30
};
/*
let index = 0;
let mini = 0;
let maxi = 200;

let randomScores = Object.entries(utilisateur).map(([nom]) => {
    let randomScore = Math.floor(Math.random() * (maxi - mini + 1)) + mini;
    return [nom, randomScore];
});

randomScores.sort((a, b) => b[1] - a[1]);


function afficherClassement() {
    if (index >= randomScores.length) return;

    const [nom, score] = randomScores[index];
    console.log(`${index + 1}) ${nom} : ${score} Points.`);

    index++;

    let randomDelay = Math.floor(Math.random() * 500);
    setTimeout(afficherClassement, randomDelay);
}

afficherClassement();
*/

let index = 0;
let mini = 0;
let maxi = 100;

let randomScores = Object.entries(utilisateur).map(([nom]) => {
    let randomScores = Math.floor(Math.random() * (maxi - mini + 1)) + mini;
    return [nom, randomScores];
});

randomScores.sort((a, b) => b[1] - a[1]);

function afficherClassement() {
    if (index >= randomScores.length) return;

    const [nom, score] = randomScores[index];
    if ([nom = index[1]]) {
        console.log(`Or ${nom} : ${score} Points`);
    }
    console.log(`${index + 1}) ${nom} : ${score} Points.`);

    index++;

    let randomDelay = Math.floor(Math.random() * 500);
    setTimeout(afficherClassement, randomDelay);
}

afficherClassement();