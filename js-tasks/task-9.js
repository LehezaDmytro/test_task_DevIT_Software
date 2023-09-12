// 9.  Напишите функцию add, которая бы работала следующим образом add(1)(2)(7)...(n). Количество последовательных визовов неограничено.

// Оголошуємо функцію add
function add(x) {
  // Перевірка чи є вхідні дані числами
  if (typeof num !== "number") {
    throw new TypeError("Вхідний аргумент повинен бути числом!");
  }

  let sum = x;
  // Оголошуємо функцію innerAdd
  function innerAdd(y) {
    // Додаємо y до суми sum.
    sum += y;
    // Повертаємо саму себе (innerAdd) для можливості подальших викликів.
    return innerAdd;
  }

  innerAdd.valueOf = function () {
    // Перевизначаємо метод valueOf для innerAdd.
    // Він повертає поточне значення sum.
    return sum;
  };

  // Повертаємо innerAdd для можливості подальших викликів.
  return innerAdd;
}
// Виводимо результат в консоль для перевірки.
console.log(Number(add(1)(2)(3)(4)(5)));
