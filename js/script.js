// creo un oggetto studente
var objectStudent = {
  firstName: 'Pinco',
  lastName: 'Pallo',
  age: 22
};

// creo un ciclo for-in per stampare tutte le proprietà dell'oggetto
for (var key in objectStudent) {
  console.log("Proprietà: " + key + " || Valore: " + objectStudent[key]);
}
console.log('--------');

// creo un array di oggetti
var arrStudents = [
  {
    firstName: 'Giallo',
    lastName: 'Brillante',
    age: 34
  },
  {
    firstName: 'Verde',
    lastName: 'Smeraldo',
    age: 45
  },
  {
    firstName: 'Rosso',
    lastName: 'Vino',
    age: 29
  },
  {
    firstName: 'Blu',
    lastName: 'Mezzanotte',
    age: 52
  }
];

// invoco la funzione addStudent con target arrStudents
addStudent(arrStudents);

// utilizzo un ciclo for-of con un for-in per stampare tutti i valori di tutti gli oggetti nell'array
for (var student of arrStudents) {
  for (var key in student) {
    console.log(student[key]);
  }
  console.log('--------');
}

console.log("<<<<<- ciclo-for con aggiunta prefissi ->>>>>");
console.log('--------');

// con un ciclo for-of stampo i valori di tutti gli oggetti nell'array con l'aggiunta dei prefissi: "nome", "cognome", "età".
for (var student of arrStudents) {
  console.log("nome: " + student['firstName']);
  console.log("cognome: " + student['lastName']);
  console.log("età: " + student['age']);
  console.log('--------');
}

 // creo la funzione addStudent per inserire un nuovo studente nell'array, ad essa aggiungo target.push per pushare l'oggetto con le proprietà che inserisce l'utente attraverso dei prompt
function addStudent(target) {
  target.push(
    {
      firstName: prompt("Inserisci il tuo nome:"),
      lastName: prompt("Inserisci il tuo cognome:"),
      age: parseInt(prompt("Inserisci la tua età:"))
    }
  );
}