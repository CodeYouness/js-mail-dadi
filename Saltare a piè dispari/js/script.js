const numberEven = []

for (let i = 0; i < 6; i++) {
    let userNumber = Number.parseInt(prompt('Scegli un numero'), 10);
    if (userNumber % 2 == 0) {
        numberEven.push(userNumber)
    }
}

console.log(numberEven)