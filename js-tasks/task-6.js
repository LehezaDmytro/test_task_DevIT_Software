// 6. Есть функция primitiveMultiply, которая умножает числа, но случайным образом может выбрасывать исключения типа: NotificationException, ErrorException. Задача написать функцию обертку которая будет повторять вычисление при исключении NotificationException, но прекращать работу при исключениях ErrorException

function NotificationException() {}
function ErrorException() {}

function primitiveMultiply(a, b) {
  const rand = Math.random();
  if (rand < 0.5) {
    return a * b;
  } else if (rand > 0.85) {
    throw new ErrorException();
  } else {
    throw new NotificationException();
  }
}

// Створюємо функцію обгортку reliableMultiply
function reliableMultiply(a, b) {
  // Перевірка чи є вхідні дані числами
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Обидва аргументи повинні бути числами");
  }
  //Використовуємо цикл while для того щоб при отриманні помилки NotificationException виконувати обчислення повторно
  while (true) {
    //Використовуємо конструкцію try...catch для відловлювання і обробки помилок
    try {
      return primitiveMultiply(a, b);
    } catch (error) {
      if (error instanceof ErrorException) {
        //За допомогою instanceof перевіряємо чи error є екземпляром класу ErrorException
        // Якщо сталася помилка ErrorException, то завершуємо виконання
        throw error;
      } else if (error instanceof NotificationException) {
        //За допомогою instanceof перевіряємо чи error є екземпляром класу NotificationException
        // Якщо сталася помилка NotificationException, то виводимо повідомлення і продовжуємо цикл
        console.log("Повторюємо вирахування...");
      } else {
        // Якщо виникла інша помилка, просто викидаємо її
        throw error;
      }
    }
  }
}
// Виводимо результат в консоль для перевірки.
console.log(reliableMultiply(6, 8));
