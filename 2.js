/**
 * Задача 2.
 *
 * Создайте функцию createFibonacciGenerator(),
 * которая вернёт ещё одну функцию,
 * каждый вызов которой будет возвращать число из последовательности Фибоначчи.
 *
 * Условия:
 * - Задачу нужно решить с помощью замыкания.
 */

// Решение
function createFibonacciGenerator() {
    let f1 = 1;
    let f2 = 1;
    let iterator = 0;

    return function() {
        let res;
        if (iterator === 0) {
            res = f1;
        } else if (iterator === 1) {
            res = f2;
        }
        else {
            res = f1 + f2;
            f1 = f2;
            f2 = res;
        }
        iterator++;
        return res;
    }
}

const generateFibonacciNumber = createFibonacciGenerator();

console.log(generateFibonacciNumber()); // 1
console.log(generateFibonacciNumber()); // 1
console.log(generateFibonacciNumber()); // 2
console.log(generateFibonacciNumber()); // 3
console.log(generateFibonacciNumber()); // 5
console.log(generateFibonacciNumber()); // 8
console.log(generateFibonacciNumber()); // 13

exports.createFibonacciGenerator = createFibonacciGenerator;
