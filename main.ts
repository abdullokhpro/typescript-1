
// 1
function narcissistic(value: number): boolean {
  let val: string[] = (value + '').split(''); 
  let sum: number = 0;

  for (let v of val) {
    const num: number = parseInt(v, 10); 
    sum += Math.pow(num, val.length); 
  }

  return sum === value; 
}


// 2
function persistence(num: number): number {
  let count: number = 0;

  while (num.toString().length > 1) {
    num = num.toString().split('').reduce((acc, el) => acc *= +el, 1);
    count++;
  }

  return count;
}

// 3

function findOdd(A: number[]): number {
  const count = (arr: number[], val: number): number => arr.filter(item => item === val).length;
  let target: number = 0;

  A.forEach((arrnum: number) => {
    if (count(A, arrnum) % 2 !== 0) {
      target = arrnum;
    }
  });

  return target;
}

// 4

function toCamelCase(str: string): string {
  let chars: string[] = str.split('');

  return chars.map((el, i) => {
    if (el === '-' || el === '_') {
      chars[i + 1] = chars[i + 1].toUpperCase();
      return '';
    } else {
      return el;
    }
  }).join('');
}

// 5

function duplicateCount(text: string): number {
  return text
    .toLowerCase()
    .split('')
    .filter((val, i, arr) => {
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}


// 6

function digitalRoot(n: number): number {
  if (n < 10) {
    return n;
  }

  while (n > 9) {
    let digits: number[] = String(n).split("").map(Number);
    n = digits.reduce((sum, current) => sum + current);
  }

  return n;
}

// 7

function updateLight(current: 'green' | 'yellow' | 'red'): 'green' | 'yellow' | 'red' {
  return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
}



// 8

function friend(friends: string[]): string[] {
  return friends.filter(value => value.length === 4);
}


// 9 

function switchItUp(number: number): string {
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
function square(number: number): number {
  return number ** 2;
}
