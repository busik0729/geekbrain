// 1 задание
var a = 1, b = 1, c, d;
c = ++a;
alert(c);           // 2 потому, что префиксная форма инкремента возвращает новое значение
d = b++;
alert(d);           // 1 потому, что постфиксная форма инкремента возвращает старое значение
c = (2 + ++a);
alert(c);      // 5 префиксная форма инкремента
d = (2 + b++);
alert(d);      // 4 постфиксная форма инкремента
alert(a);                    // 3 инкрементируемая переменная вызывалась 2 раза, поэтому к инициированной переменной прибавилось по 1
alert(b);                    // 3 инкрементируемая переменная вызывалась 2 раза, поэтому к инициированной переменной прибавилось по 1


// 2 задание
a = 2;
var x = 1 + (a *= 2); // будет равно 5


//3 задание
if (a > 0 && b > 0) {
    alert(a - b);
} else if (a < 0 && b < 0) {
    alert(a * b);
} else {
    alert(a + b);
}

//5 задание
function sum (a, b) {
    return a + b;
}

function minus (a, b) {
    return a - b;
}

function multipl (a, b) {
    return a * b;
}

function div (a, b) {
    return a / b;
}

// 6 задание
function mathOperation (arg1, arg2, operation) {
    switch (operation) {
        case 'sum':
            return sum(arg1, arg2);
        case 'minus':
            return minus(arg1, arg2);
        case 'multipl':
            return multipl(arg1, arg2);
        case 'div':
            return div(arg1, arg2);
    }
}

//7 задание null означает пустое место(отсутствие значения), 0 имеет значение

