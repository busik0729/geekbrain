//1 задание
var i = 0;
while (i <= 100) {
    console.log(i);
    if (i === 100) {
        break;
    }

    i++;
}

//3 задание
var basket = [
    {
        id: 1,
        name: 'товар 1',
        price: 50
    },
    {
        id: 2,
        name: 'товар 2',
        price: 50
    },
];

function countBasketPrice () {
    let countResult = 0;
    basket.map(function (item) {
        countResult += item.price;
    });

    console.log("count result: " + countResult);
    return countResult;
}

countBasketPrice();


//4 задание
for (let i = 0; i <= 9; console.log(i++)) {

}

//5 задание
var array = [];
for (let i = 1; i <= 20; i++) {
    for (let j = 0; j < i; j++) {
        array.push('*');
    }
    console.log(array.join(''));
    array = [];
}