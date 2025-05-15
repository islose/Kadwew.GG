let a = 10;
let b = 3;
let resultat = calcul(a, b);

function calcul(a, b) {
  let somme = a + b;
  let produit = a * b;
  let div = a / b;
  let restDiv = a % b;
  return { somme, produit, div, restDiv };
}


console.log(calcul(a, b));
console.log("somme: " + resultat.somme);
console.log("produit: " + resultat.produit);

function saluer(nom) {
    console.log("Bonjour," + nom + "!");
}
  
saluer("Ali");


let fruits = ["pomme", "banane", "fraise", "orange"];

function add(fruit){
    fruits.push(fruit);
    console.log(fruits);
}
add("mangue");

function remove(fruit){
    let index = fruits.indexOf(fruit);
    if (index > -1) {
        fruits.splice(index, 1);
    }
    console.log(fruits);
}
remove("banane");

function length(fruit){
    console.log(fruits.length);
}
length();

function get(fruit){
    let index = fruits.forEach((fruit, index) => {
        console.log(index + ": " + fruit);
    });
}
get();

let tasks = ["tache 1", "tache 2", "tache 3"];

function addTask(task) {
    tasks.push(task);
    console.log(`Tache ajoutée: ${task}`);
}
addTask("tache 4");

function prioriserTask(task) {
    tasks.unshift(task);
    console.log(tasks);
}
prioriserTask("tache 0");

function removeTask(task) {
    let index = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
    }
    console.log(tasks);
}
removeTask("tache 2");

let utilisateurs = [
    { nom: "Ali", age: 25},
    { nom: "Sara", age: 30},
    { nom: "Lina", age: 28},
];

for (let utilisateur of utilisateurs) {
    console.log("Nom: " + utilisateur.nom);
}

function addUser(nom, age) {
    let utilisateur = { nom, age};
    utilisateurs.push(utilisateur);
    console.log(utilisateurs);
}
addUser("Salim", 23);

function findUser(nom) {
    let utilisateur = utilisateurs.find(u => u.nom === nom);
    if (utilisateur) {
        console.log("Utilisateur trouvé: " + utilisateur.nom);
    }
    else {
        console.log("Utilisateur non trouvé");
    }
};
findUser("Salim");

function removeUser(nom) {
    let index = utilisateurs.findIndex(u => u.nom === nom);
    if (index > -1) {
        utilisateurs.splice(index, 1);
        console.log("Utilisateur supprimé: " + nom);
    }
};
removeUser("Salim");

function majeurUser() {
    let majeurs = utilisateurs.filter(u => u.age >= 18);
    console.log("Utilistaeurs majeurs:" + majeurs.length);
};
majeurUser();




// Problème 1 : Modifier l'âge de "Ali" à 26
function updateAge() {
    utilisateurs.nom = "Ali".age = 26;
    console.log("L'age de Ali a était modfié a 26 ans");
}

// Problème 2 : Ajouter un utilisateur avec nom et age
function addUtilisateur(nom, age) {
    utilisateurs.push(nom, age);
    console.log("Utilisateur ajouté: " + nom + ", age: " + age);
}

// Problème 3 : Supprimer un utilisateur par son nom
function deleteUtilisateur(nom) {
    let index = utilisateurs.find(u => u.nom === nom);
    utilisateurs.splice(index, 1);
    console.log("Utilisateur supprimé sont: " + nom);
}

// Problème 4 : Afficher les utilisateurs majeurs (age >= 18)
function displayMajeurs() {
    let majeurs = utilisateurs.filter(u => u.age >= 18);
    console.log("Utilisateurs majeurs sont: ");
    majeurs.forEach(u => console.log("- "+ u.nom));
}

updateAge();
addUtilisateur("Sami", 35);
deleteUtilisateur("Sara");
displayMajeurs();


