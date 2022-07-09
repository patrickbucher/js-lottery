"use strict";

document.addEventListener("DOMContentLoaded", main);

function main() {
    const clearButton = document.getElementById("clear");
    const guessInput = document.getElementById("guess");
    const playButton = document.getElementById("play");
    const outputContainer = document.getElementById("winning-numbers");
    const outputCorrectNumbers = document.getElementById("correct");
    const outputWinAmount = document.getElementById("win");
    const outputBalance = document.getElementById("balance");

    const costOfGame = 2;

    clearButton.addEventListener("click", () => {
        guessInput.value = "";
    });

    playButton.addEventListener("click", () => {
        let balance = Number.parseInt(outputBalance.innerHTML);
        if (balance < costOfGame) {
            window.alert(`Your balance (${balance}) is too low.`);
            return;
        } else {
            balance -= costOfGame;
        }
        const rawInput = guessInput.value;
        const parsedInput = parseGuess(rawInput);
        if (parsedInput.length != 6) {
            window.alert("Please enter 6 unique numbers in the range 1..45!");
            return;
        };
        const winningNumbers = generateUniqueRandomNumbers(6, 1, 45);
        const matching = getNumberOfMatchingNumbers(parsedInput, winningNumbers);
        const winAmount = determineWinAmount(matching);
        balance += winAmount;
        displayWinningNumbers(outputContainer, winningNumbers);
        outputCorrectNumbers.innerHTML = `${matching}`;
        outputWinAmount.innerHTML = `${winAmount}`;
        outputBalance.innerHTML = `${balance}`;
    });
}

function displayWinningNumbers(container, numbers) {
    while (container.hasChildNodes()) {
        const child = container.childNodes[0];
        container.removeChild(child);
    }
    numbers.sort((a, b) => {
        return a > b;
    });
    for (const number of numbers) {
        const ball = document.createElement("span");
        ball.innerHTML = `${number}`;
        ball.setAttribute("class", "ball");
        container.appendChild(ball);
    }
}

function determineWinAmount(nMatchingNumbers) {
    switch (nMatchingNumbers) {
        case 2:
            return 5;
        case 3:
            return 10;
        case 4:
            return 500;
        case 5:
            return 50000;
        case 6:
            return 1000000;
        default:
            return 0;
    }
}

function getNumberOfMatchingNumbers(inputNumbers, winningNumbers) {
    return intersect(inputNumbers, winningNumbers).length;
}

function intersect(a, b) {
    const intersection = new Array();
    for (const x of a) {
        if (b.includes(x)) {
            intersection.push(x);
        }
    }
    return intersection;
}

function generateUniqueRandomNumbers(n, min, max) {
    const nNumbersInRange = max - min + 1;
    if (n > nNumbersInRange) {
        throw new Error(`cannot find ${n} unique random numbers in a range of size ${nNumbersInRange}!`);
    }
    const randomNumbers = new Array();
    while (randomNumbers.length < n) {
        // 0..1 -> 1..45
        const randomNumber = Math.floor(Math.random() * nNumbersInRange) + min;
        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber);
        }
    }
    return randomNumbers;
}

function parseGuess(rawInput) {
    const numbers = new Array();
    const elements = rawInput.split(",");
    for (const element of elements) {
        const parsedElement = Number.parseInt(element);
        if (Number.isNaN(parsedElement)) {
            continue;
        }
        if (parsedElement < 1 || parsedElement > 45) {
            continue;
        }
        if (numbers.includes(parsedElement)) {
            continue;
        }
        numbers.push(parsedElement);
    }
    return numbers;
}