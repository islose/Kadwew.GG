const box = document.getElementById('box');
const info = document.getElementById('info');

function updateInfo() {
    const rect = box.getBoundingClientRect();
    const offsetTop = box.offsetTop;

    info.innerHTML = `
    <strong>getBoundingClientRect():</strong><br>
    top: ${Math.round(rect.top)}px<br>
    left: ${Math.round(rect.left)}px<br>
    width: ${Math.round(rect.width)}px<br>
    height: ${Math.round(rect.height)}px<br><br>

    <strong>offsetTop:</strong><br>
    ${offsetTop}px (dans le document)
    `;
}

    // Met à jour les infos au scroll et au resize
window.addEventListener('scroll', updateInfo);
window.addEventListener('resize', updateInfo);
window.addEventListener('DOMContentLoaded', updateInfo);

function countLetters(word) {
    let counter = {};
    for (let letter of word) {
        if(!(letter in counter)) {
            counter[letter] = 1;
        }
        else {
            counter[letter]++;
        }
    }
    return counter;
}

console.log(countLetters("helllohlo"));

function isPalindrome (word) {
    const reversedWord = word.toLowerCase().split("").reverse().join("");
    return (reversedWord === word.toLowerCase());
}

console.log(isPalindrome("radar"));
console.log(isPalindrome("kayak"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("mAdaM"));

function matchPattern (pattern, phrase) {
    const mapPatternToPhrase = {};
    const mapPhraseToPattern = {};
    const words = phrase.split(" ");

    for (let i = 0; i < pattern.length; i++) {
        const letter = pattern[i];
        const word = words[i];

        if (letter in mapPatternToPhrase && mapPatternToPhrase[letter] !== word) return false;
        if (word in mapPhraseToPattern && mapPhraseToPattern[word] !== letter) return false;

        mapPatternToPhrase[letter] = word;
        mapPhraseToPattern[word] = letter;
    }
    return true;
}
console.log(matchPattern("abba", "chat chien chien chat"));
console.log(matchPattern("abba", "chat chien chien souris"));
console.log(matchPattern("aaaa", "chat chat chat chat"));
console.log(matchPattern("ab", "chat chat"));

function matchFirstLetterPattern (pattern, phrase) {
    const mapPatternToPhrase = {};
    const mapPhraseToPattern = {};
    const words = phrase.split(" ");

    for (let i = 0; i < pattern.length; i++) {
        const letter = pattern[i];
        const firstLetter = words[i][0];

        if (letter in mapPatternToPhrase && mapPatternToPhrase[letter] !== firstLetter) return false;
        if (firstLetter in mapPhraseToPattern && mapPhraseToPattern[firstLetter] !== letter) return false;

        mapPatternToPhrase[letter] = firstLetter;
        mapPhraseToPattern[firstLetter] = letter;
    }
    return true;
}

console.log(matchFirstLetterPattern("abba", "chat chien chien chat"));
console.log(matchFirstLetterPattern("abba", "carte photo photo carte"));
console.log(matchFirstLetterPattern("abba", "soleil ciel ciel soleil"));
console.log(matchFirstLetterPattern("ab", "chat chat"));