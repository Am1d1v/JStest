/*let a = +prompt('First argument');
let b = +prompt('Second argument');


function sum(){
    let j = a * b;
    alert(j);
}

sum(a, b);

function ret() {
    let num = 50;
    return num;
}

let num = ret();


alert(num); */

/* 
let calc = (a, b) => {
    let d = a + b;
    alert(d);
};
calc(3, 3);
*/

/* 

let usdCurr = 3;
let discount = 0.9

function convert(amount, curr) {
    return curr * amount;
}

function promotion(result){
    console.log(result * discount);
}

let res = convert(600, usdCurr);

promotion(res)


*/


/*

function test(){
    for (let i = 0; i < 10; i++){
        console.log(i);
        if(i === 3) {
            return;
        };
    }
}

test();

*/

/* 

function doNothing(){}

console.log(doNothing() === undefined);

*/

/* 

let str = 'test';

let array = [1, 2, 3];

let fruit = 'Some fruit';

console.log(fruit.indexOf('q'));

*/

/* 

let logg = 'Hello World';

console.log(logg.slice(6));

console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5));

*/

/*

const num = 18.9;

console.log(Math.round(num));

const test = '19.8px';

console.log(parseInt(test));

console.log(parseFloat(test));

console.log(typeof(parseInt(test)));

*/

/* 

let trimTest = prompt('Your film');

console.log(trimTest.trim());

*/

/*

function First(){
    setTimeout(function(){
        alert('First');
    },3000);
}

function Second(){
    alert('Second');
}

First();
Second();

*/

/* Callback-функции */

/*

function learnJS(lang, callback) {
    alert(`I am learning ${lang}`);
    callback();
}

learnJS('JS', function(){
    alert('Hi');
})

*/

/*

function learnJS(lang, callback) {
    alert(`I am learning ${lang}`);
    callback();
}

function done() {
    alert('Hi');
}

learnJS('JS', done);

*/

/* Objects */

/*

console.log(options.name);

delete options.name; 

console.log(options);

/*

console.log(options['colors']['border']);

*/

/*

let options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'blue'
    },
    makeTest: function(){
        console.log('Test');
    }
};

options.makeTest();

let {border, bg} = options.colors;

console.log(border);
console.log(bg);

*/

/*

let counter = 0;

for (let key in options){
    if (typeof(options[key]) === 'object') {
        for(let i in options[key]) {
            console.log(`Value ${i} in ${options[key][i]} `);
        }
    } else {
    console.log(`Value ${key} in ${options[key]} `);
    counter++;
    }
}

console.log(counter);

console.log(Object.keys(options).length);

*/ 

/* Array */

/*

let arr = [1, 2, 3];

arr.push('Dima');

console.log(arr);

arr.pop();

console.log(arr);

*/

/*

let obj = {
    color: 'blue',
    bg: 'black',
};

let arr = [0, 1, obj];

console.log(arr[2]);

*/

/* Перебор массива */

/* 

let arr = [0, 1, 2, 3, 4, 5];

for (i = 0; i < arr.length; i++){
    alert(arr[i]);
} 

*/

/*

let arr = [0, 1, 2, 3, 4, 5];

for (let value of arr) {
    alert(value);
}

*/

/*

let arr = [0, 1, 2, 3, 4, 5];

arr.forEach(function(item, i, arr){
    console.log(`${i}: ${item} inside array ${arr}`);
});

*/

/*

let str = prompt('','');

let products = str.split(', ');

console.log(products.join('; '));

*/

/*

let str = prompt('','');

let products = str.split(', ');
products.sort();

console.log(products.join('; '));

*/

/*

let arr = [30, 22, 31, 6, 4, 5];

arr.sort(compareNum);

console.log(arr);

function compareNum(a, b){
return a - b;
}

*/

/*

let obj = {
    a: 6,
    b: 3
};


let copy = obj;
/* передаёт ссылку на объект

copy.a = 10;

console.log(copy.a);
console.log(obj);

*/

//* Поверхностная копия объекта

function copy(mainObj){
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj;
    }
    return objCopy;
}

let numbers = {
    a: 2,
    b: 5,
    c: {
        x: 6,
        y: 9
    }
};

let newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);


// object.assign()

let add = {
    d: 18,
    i: 3,
};

console.log(Object.assign(numbers, add));
let clone = Object.assign({}, add); //Получаем отдельную копию

clone.d = 9;
console.log(add);
console.log(clone);

let oldArray = ['a', 'b', 'c'];
//let newArray = oldArray; //newArray будет ссылаться на oldArray
let newArray = oldArray.slice();

newArray[1] = 'Hello';
console.log(newArray);
console.log(oldArray);

//spread-оператор

let video = ['YouTube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video,...blogs, 'vk'];

    console.log(internet);

    function log(q, o, p){
        console.log(q);
        console.log(o);
        console.log(p);
    }

    let num = [1, 2, 3];

    log(...num);

    let array = ['a', 'b'];

    let newAaray = [...array]; // В переменной newAaray лежит копия массива array

    newAaray[0] = 3;

    console.log(newAaray);
    console.log(array);

    let l = {
        one: 1,
        two: 2
    };

    let newest = {...l};

    console.log(newest);