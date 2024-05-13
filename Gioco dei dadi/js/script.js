const computerNumber = Math.floor(Math.random() * 6) + 1;
const userNumber = Math.floor(Math.random() * 6) + 1;

if (computerNumber < userNumber) {
    console.log('complimenti! hai vinto! il tuo numero fortunato è stato ' + userNumber + ' quello del computer era: ' + computerNumber)
} else if (computerNumber > userNumber) {
    console.log('complimenti! hai perso! il tuo numero sfortunato è stato ' + userNumber + ' quello del computer era: ' + computerNumber)
} else {
    console.log('azz, qui ce un pareggio! vi è capitato ad entrambi il ' + userNumber)
}

console.log(computerNumber, userNumber)