// 1
function narcissistic(value) {
    var val = (value + '').split('');
    var sum = 0;
    for (var _i = 0, val_1 = val; _i < val_1.length; _i++) {
        var v = val_1[_i];
        var num = parseInt(v, 10);
        sum += Math.pow(num, val.length);
    }
    return sum === value;
}
// 2
function persistence(num) {
    var count = 0;
    while (num.toString().length > 1) {
        num = num.toString().split('').reduce(function (acc, el) { return acc *= +el; }, 1);
        count++;
    }
    return count;
}
// 3
function findOdd(A) {
    var count = function (arr, val) { return arr.filter(function (item) { return item === val; }).length; };
    var target = 0;
    A.forEach(function (arrnum) {
        if (count(A, arrnum) % 2 !== 0) {
            target = arrnum;
        }
    });
    return target;
}
// 4
function toCamelCase(str) {
    var chars = str.split('');
    return chars.map(function (el, i) {
        if (el === '-' || el === '_') {
            chars[i + 1] = chars[i + 1].toUpperCase();
            return '';
        }
        else {
            return el;
        }
    }).join('');
}
// 5
function duplicateCount(text) {
    return text
        .toLowerCase()
        .split('')
        .filter(function (val, i, arr) {
        return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}
// 6
function digitalRoot(n) {
    if (n < 10) {
        return n;
    }
    while (n > 9) {
        var digits = String(n).split("").map(Number);
        n = digits.reduce(function (sum, current) { return sum + current; });
    }
    return n;
}
// 7
function updateLight(current) {
    return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
}
// 8
function friend(friends) {
    return friends.filter(function (value) { return value.length === 4; });
}
// 9 
function switchItUp(number) {
    switch (number) {
        case 0:
            return "Zero";
        case 1:
            return "One";
        case 2:
            return "Two";
        case 3:
            return "Three";
        case 4:
            return "Four";
        case 5:
            return "Five";
        case 6:
            return "Six";
        case 7:
            return "Seven";
        case 8:
            return "Eight";
        case 9:
            return "Nine";
        default:
            return "Number";
    }
}
// 10
function square(number) {
    return Math.pow(number, 2);
}
