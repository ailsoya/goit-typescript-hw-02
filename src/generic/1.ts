/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

function getPromise () {
  return new Promise((resolve) => {
    resolve(['Text', 50]);
  });
}

getPromise()
.then(<T extends Array<string>>(data: T) => {
  console.log(data);
});

export {};