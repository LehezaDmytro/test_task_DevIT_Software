//1. Напишите функцию deepEqual для проверки двух обьектов на идентичность.

//Створюємо три обєкти для перевірки нашої функції
const user = {
  name: "Dmitro",
  age: 25,
};

const user2 = {
  name: "Olha",
  age: 22,
};

const user3 = {
  name: "Dmitro",
  age: 25,
};

//Оголошуємо функцію з двома параметрами. Параметри убдуть приймати аргументи значенням кожного з них має бути обєкт.
function deepEqual(object1, object2) {
  //Перевірка аргументів на те чи є їх значенням обєкт
  if (typeof object1 !== "object") {
    throw new TypeError("Перший аргумент не є обєктом");
  } else if (typeof object2 !== "object") {
    throw new TypeError("Другий аргумент не є обєктом");
  }

  //Порівняння обєктів
  //За допомогою JSON.stringify() перетвоюємо обєкти в строки і порівнюємо їх
  if (JSON.stringify(object1) === JSON.stringify(object2)) {
    //Якщо обєкти ідентичні, функція повертає true
    return true;
  } else {
    //Якщо обєкти не ідентичні, функція повертає false
    return false;
  }
}

console.log(deepEqual(user, user3)); // true
console.log(deepEqual(user, user2)); // false
