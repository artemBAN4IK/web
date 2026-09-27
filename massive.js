function massiveNumbers() {
    const numbers = [4, 8, 15, 16, 23, 42];
    const greaterThan10 = [];
    let sumNumbers = 0;
    let best = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const now = numbers[i];
        sumNumbers += now;
        if (now > 10) {
            greaterThan10.push(now);
        }
        if (now > best) {
            best = now;
        }
    }
    console.log(sumNumbers, best, greaterThan10);
}

massiveNumbers();
