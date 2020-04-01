// Задачи по отладке 

//Задача №1 и №2

function filter(input, than) {
  var newArray = [];
  if (input.length == 0) {
    throw new Error("Массив пустой. Введите числовой массив!")
  } else {
    for (var elem of input) {
      if (!isFinite(elem)) {
        throw new Error("Введен не числовой массив. Все элементы должны быть числами!")
      } else if (elem < 0) {
        throw new Error("Введено отрицательное число. Все элементы должны быть положительными числами")
      } else if (elem > than) {
        newArray.push(elem);
      }
    }
  }

  return newArray;
}

try {
  var array = [12, 100, 34, 65, 10];
  var result = filter(array, 60);
  console.log(result); //[100,65]

  result = filter(array, 20);
  console.log(result); //[100,34,65]
} catch (e) {
  console.log(e.message)
}
