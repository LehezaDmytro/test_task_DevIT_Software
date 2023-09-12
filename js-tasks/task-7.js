// 7.  Напишите функцию, которая берет объект любой вложенности и преобразует ее в единую плоскую карту с разными уровнями, разделенными косой чертой ( '/').

// Створюємо функцію mapObject.
// obj - вхідний об'єкт, parentKey (необов'язковий параметр) - використовується для передачі імені ключа в рекурсії.
function mapObject(obj, parentKey = "") {
  // Перевірка, чи obj є об'єктом.
  if (typeof obj !== "object" || obj === null) {
    throw new TypeError("Вхідні дані повинні бути об'єктом.");
  }

  // Використовуємо Object.keys() для отримання масиву ключів об'єкта.
  return Object.keys(obj).reduce((result, key) => {
    // Складаємо новий ключ, додаючи роздільник "/", якщо parentKey не пустий.
    const newKey = parentKey ? `${parentKey}/${key}` : key;

    // Перевірка, чи значення об'єкта є об'єктом і не є масивом.
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      // Рекурсивно викликаємо функцію для обробки вкладеного об'єкта.
      Object.assign(result, mapObject(obj[key], newKey));
    } else {
      // Зберігаємо значення за новим ключем у результуючому об'єкті.
      result[newKey] = obj[key];
    }

    return result;
  }, {});
}
// Приклад об'єкта для перевірки роботи функції.
const obj = {
  a: {
    b: {
      c: 12,
      d: "Hello World",
    },
    e: [1, 2, 3],
    f: "Dmitro",
  },
};

// Виводимо результат у консоль для перевірки.
console.log(mapObject(obj));
