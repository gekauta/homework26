function arr_to_str(arr){

    var b = arr[0].join('');

    for(var i = 1; i < arr.length; i++){

        b += '' + a[i].join( '');

    }

    return b;

}

//------И сразу же можно проверить работу функции ---------

var a = [

        [1, 2, 3],

        [4, 5, 6],

        [7, 8, 9],

];

console.log(arr_to_str(a));

