function simulate(n) {
    // Генерация случайных значений: 0 - красный, 1 - черный, 2 - белый
    function generateRandomColor() {
        return Math.floor(Math.random() * 3);
    }

    // Заполнение массива случайными значениями
    let sequence = [];
    for (let i = 0; i < n; i++) {
        sequence.push(generateRandomColor());
    }

    // Поиск самой длинной последовательности
    let longestSequenceLength = 1;
    let currentSequenceLength = 1;
    let longestSequenceColor = sequence[0];
    let currentColor = sequence[0];

    for (let i = 1; i < n; i++) {
        if (sequence[i] === currentColor) {
            currentSequenceLength++;
        } else {
            if (currentSequenceLength > longestSequenceLength) {
                longestSequenceLength = currentSequenceLength;
                longestSequenceColor = currentColor;
            }
            currentSequenceLength = 1;
            currentColor = sequence[i];
        }
    }

    // Проверка последней последовательности
    if (currentSequenceLength > longestSequenceLength) {
        longestSequenceLength = currentSequenceLength;
        longestSequenceColor = currentColor;
    }

    return { length: longestSequenceLength, color: longestSequenceColor };
}

// Запуск симуляции и вывод результата
const result = simulate(1000000);
console.log("Самая длинная последовательность: " + result.length);
console.log("Цвет этой последовательности: " + result.color);