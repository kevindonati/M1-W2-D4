/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
console.log("ESERCIZIO 1")

const area = function (l1, l2) {
  let areaCalcolata = l1 * l2
  console.log(areaCalcolata)
}

area(5, 7)

/* ESERCIZIO 2
Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
la loro somma moltiplicata per tre.
*/
console.log("ESERCIZIO 2")

const crazySum = function (num1, num2) {
  let somma = num1 + num2
  if (num1 === num2) {
    somma *= 3
  }
  console.log(somma)
}

crazySum(3, 3)

/* ESERCIZIO 3
Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
console.log("ESERCIZIO 3")

const crazyDiff = function (num1) {
  let risultato = Math.abs(num1 - 19)
  if (num1 > 19) {
    console.log("Valore moltiplicato per 3:", risultato * 3)
  }

  console.log("Differenza assoluta:", risultato)
}

crazyDiff(28)

/* ESERCIZIO 4
Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
se n è uguale a 400.
*/
console.log("ESERCIZIO 4")

const boundary = function (n) {
  if ((n > 20 && n <= 100) || n === 400) {
    console.log(true)
  } else {
    console.log(false)
  }
}

boundary(80)

/* ESERCIZIO 5
Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
ritornare la stringa originale senza alterarla.
*/
console.log("ESERCIZIO 5")

const epify = function (stringa) {
  let checkStringa = stringa.indexOf("EPICODE")
  if (checkStringa === -1) {
    console.log("EPICODE " + stringa)
  } else {
    console.log(stringa)
  }
}

epify("C'era una volta")

/* ESERCIZIO 6
Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
console.log("ESERCIZIO 6")

const check3and7 = function (numPositivo) {
  if (numPositivo % 3 === 0 || numPositivo % 7 === 0) {
    console.log("Il numero è multiplo di 3 o di 7")
  } else {
    console.log("Il numero non è multiplo di 3 o di 7")
  }
}

check3and7(14)

/* ESERCIZIO 7
Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
console.log("ESERCIZIO 7")

const reverseString = function (stringa) {
  console.log(stringa.split("").reverse().join(""))
}
reverseString("Ciaociao")

/* ESERCIZIO 8
Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
console.log("ESERCIZIO 8")

const upperFirst = function (stringa) {
  console.log(
    stringa
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
  )
}

upperFirst("ciao come va?")

/* ESERCIZIO 9
Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
della stringa originale.
*/
console.log("ESERCIZIO 9")

const cutString = function (stringa) {
  let stringaTagliata = stringa.slice(1, -1)

  console.log(stringaTagliata)
}

cutString("ciao come va")

/* ESERCIZIO 10
Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
console.log("ESERCIZIO 10")

let array = []

const giveMeRandom = function (n) {
  for (let i = 0; i < n; i++) {
    let randomNumber = Math.floor(Math.random() * 11)
    array.push(randomNumber)
  }
  console.log(array)
}

giveMeRandom(8)

// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/
console.log("ESERCIZIO EXTRA 1")

let sommaNumeriMaggiori5 = 0

const checkArray = function () {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 5) {
      console.log("Il numero è maggiore di 5")
      sommaNumeriMaggiori5 = sommaNumeriMaggiori5 + array[i]
    } else {
      console.log("Il numero è minore di 5")
    }
  }
  console.log("La somma dei numeri maggiori di 5 è:", sommaNumeriMaggiori5)
}

checkArray()

/* EXTRA 2
Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/
console.log("ESERCIZIO EXTRA 2")

let shoppingCart = [
  {
    price: 650,
    name: "Iphone 13",
    id: 25648,
    quantity: 4,
  },
]

let totaleCarrello = 0

const shoppingCartTotal = function () {
  if (shoppingCart[0].quantity > 1) {
    totaleCarrello = shoppingCart[0].price * shoppingCart[0].quantity
    console.log(totaleCarrello)
  } else {
    totaleCarrello = shoppingCart[0].price
    console.log(totaleCarrello)
  }
}

shoppingCartTotal()

/* EXTRA 3
Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/
console.log("ESERCIZIO EXTRA 3")

let newOrder = {
  price: 900,
  name: "pc",
  id: 21548,
  quantity: 2,
}

const addToShoppingCart = function () {
  shoppingCart.push(newOrder)
  console.log(shoppingCart.length)
}

addToShoppingCart()

/* EXTRA 4
Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/
console.log("ESERCIZIO EXTRA 4")

let maxPrice = 0
let maxOrder

const maxShoppingCart = function () {
  for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i].price > maxPrice) {
      maxPrice = shoppingCart[i].price
      maxOrder = shoppingCart[i]
    }
  }
  console.log(maxOrder)
}

maxShoppingCart()

/* EXTRA 5
Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/
console.log("ESERCIZIO EXTRA 5")

let lastOrder

const latestShoppingCart = function () {
  let findLastOrder = shoppingCart.length - 1
  lastOrder = shoppingCart[findLastOrder]
  console.log(lastOrder)
}

latestShoppingCart()

/* EXTRA 6
Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/
console.log("ESERCIZIO EXTRA 6")

const loopUntil = function (x) {
  let i = 0
  while (i < 3) {
    let numRandom = Math.floor(Math.random() * 10)
    console.log(numRandom)
    if (x > numRandom) {
      i++
    } else {
      i = 0
    }
  }
}

loopUntil(8)

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/
console.log("ESERCIZIO EXTRA 7")

const array2 = [3, 4, 6, "ciao", "3", 10]

let arrayOnlyNumber = []

let sommaArray = 0

const average = function () {
  for (let i = 0; i < array2.length; i++) {
    if (typeof array2[i] === "number") {
      arrayOnlyNumber.push(array2[i])
      sommaArray += array2[i]
    }
  }
  console.log("media aritmetica:", sommaArray / arrayOnlyNumber.length)
}

average()

/* EXTRA 8
Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/
console.log("ESERCIZIO EXTRA 8")

const arrayStringhe = [
  "tra poco arrivo",
  "ciao ",
  "ciao come va",
  "ciaociaociaociaociao",
]

let caratteriLongestString = 0

let longestString = []

const longest = function () {
  for (let i = 0; i < arrayStringhe.length; i++) {
    if (arrayStringhe[i].length > caratteriLongestString) {
      caratteriLongestString = arrayStringhe[i].length
      longestString.pop()
      longestString.unshift(arrayStringhe[i])
    }
  }
  console.log(longestString)
}

longest()

/* EXTRA 9
Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/
console.log("ESERCIZIO EXTRA 9")

const emailAntiSpam = function (emailContent) {
  if (emailContent.includes("SCAM") || emailContent.includes("SPAM")) {
    return false
  } else {
    return true
  }
}

console.log(emailAntiSpam("Ciao, questa è una mail SCAM"))

/* EXTRA 10
Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/
console.log("ESERCIZIO EXTRA 10")

const date = Date()
const today = date.getDate()

// const differenzaGiorni = (data) {()

// }

console.log(today)

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
