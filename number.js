function Random() {
        let Random = Math.floor(Math.random() * 10) + 1;
        let userNumber = Number(prompt("Угадайте число от 1 до 10:"));
        if (userNumber == Random) {
            console.log("Вы угадали, загаданное число было", Random);
        }
        else {
            console.log("Вы не угадали");
            console.log("Загаданное число:", Random);
        }
    }

    Random();
