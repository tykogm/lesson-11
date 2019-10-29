/**
 * Задача 3.
 *
 * Улучшите функцию createFibonacciGenerator() из предыдущего примера.
 *
 * Теперь вызов функции createFibonacciGenerator() должен возвращать объект, который содержит два метода:
 * - print — возвращает число из последовательности Фибоначчи;
 * - reset — обнуляет последовательность и ничего не возвращает.
 *
 * Условия:
 * - Задачу нужно решить с помощью замыкания.
 */

// Решение
function createFibonacciGenerator() {
    let f1 = 1;
    let f2 = 1;
    let iterator = 0;

    return {
        print: function() {
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
        },
        reset: function() {
            f1 = 1;
            f2 = 1;
            iterator = 0;
        }
    }
}

const generator1 = createFibonacciGenerator();

console.log(generator1.print()); // 1
console.log(generator1.print()); // 1
console.log(generator1.print()); // 2
console.log(generator1.print()); // 3
console.log(generator1.reset()); // undefined
console.log(generator1.print()); // 1
console.log(generator1.print()); // 1
console.log(generator1.print()); // 2

const generator2 = createFibonacciGenerator();

console.log(generator2.print()); // 1
console.log(generator2.print()); // 1
console.log(generator2.print()); // 2

exports.createFibonacciGenerator = createFibonacciGenerator;
