//2. Напишите функцию генератор chunkArray, которая возвращает итератор возвращающий части массива указанной длинны.

//Оголошуємо функцію генератор яка першим аргументом приймає масив, а другим число
function* chunkArray(arr, chunkSize) {
  //Перевіряємо передані аргументи на відповідність типам даних
  if (!Array.isArray(arr)) {
    throw new TypeError("Error! Першим аргументом потрібно передати масив!!!");
  } else if (typeof chunkSize !== "number") {
    throw new TypeError("Error! Другим аргументом потрібно передати число!!!");
  }

  //Створюємо змінну в яку буде записуватись індекс початку кожної нової частини вхідного масиву
  let index = 0;

  //Створюємо цикл який пілся кожного наступного запуску ітератора буде повертати частину вхідного масиву
  while (index < arr.length) {
    const chunk = arr.slice(index, index + chunkSize);
    index += chunkSize;
    //Зупиняємо виконання функції за допомогою опереатора yield і повертаємо частину масиву
    yield chunk;
  }
}
//Створюємо масив для перевірки роботи функції
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
//Створюємо ітератор
const iterator = chunkArray(arr, 3);
// Виводимо результат виконання в консоль
console.log(iterator.next()); //Запускаємо виконання функції chunkArray викликом метода next() на ітераторі
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
