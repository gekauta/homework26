// Метод indexOf() возвращает первый индекс, по которому данный элемент может быть
// найден в массиве или -1,если такого индекса нет.
//     let arr = [1,3,5,2,5];
//
//
//
// console.log()
//
//
//
// function f(arr,x){
//     for (let )
// }


// function indexOf(array, value, fromIndex = 0) {
//     let count = array.length;
//     if (fromIndex < -count + 1) fromIndex = 0;
//     if (fromIndex < 0) fromIndex += count;
//     for (i = fromIndex; i < count; i++)
//         if (array[i] === value)  return i;
//
//     return - 1;
// }
//
// const numbers = [5, 6, 1, 4, 2, 5];
//
// // console.log(indexOf(numbers, 5) === 0);
// // console.log(indexOf(numbers, 7) === -1);
// // console.log(indexOf(numbers, 1, 3) === -1);
// // console.log(indexOf(numbers, 5, -2) === 5);
//
//
// console.log(indexOf(numbers, 5)) ;
// console.log(indexOf(numbers, 7) );
// console.log(indexOf(numbers, 1, 3) );
// console.log(indexOf(numbers, 5, -2) );
//
//
//
function indexOf(array, value, fromIndex = 0) {
    let count = array.length;
    let u;
    if (fromIndex < -count + 1) fromIndex = 0;
    if (fromIndex < 0) fromIndex += count;
    for (i = fromIndex; i < count; i++){
        if (array[i] === value)  {u=i}
        else {u=-1}

    }
return u;

}

const numbers = [5, 6, 1, 4, 2, 5];

// console.log(indexOf(numbers, 5) === 0);
// console.log(indexOf(numbers, 7) === -1);
// console.log(indexOf(numbers, 1, 3) === -1);
// console.log(indexOf(numbers, 5, -2) === 5);


console.log(indexOf(numbers, 5)) ;
console.log(indexOf(numbers, 7) );
console.log(indexOf(numbers, 1, 3) );
console.log(indexOf(numbers, 5, -2) );