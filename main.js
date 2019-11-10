//HOME TASK
/*
1. Подсчитать сумму всех чисел в заданном пользователем диапазоне.

2. Запросить 2 числа и найти только наибольший общий делитель.

3. Запросить у пользователя число и вывести все делители этого числа.

4. Определить количество цифр в введенном числе.

5. Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, 
   отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

6. Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, 
   вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.

7. Запросить у пользователя число и на сколько цифр его сдвинуть. 
   Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).

8. Зациклить вывод дней недели таким образом: «День недели. 
   Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.

9. Вывести таблицу умножения для всех чисел от 2 до 9.
   Каждое число необходимо умножить на числа от 1 до 10.

10. Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 
    и отгадать его следующим способом: каждую итерацию цикла делите диапазон 
    чисел пополам, записываете результат в N и спрашиваете у пользователя 
    «Ваше число > N, < N или == N?». В зависимости от того, что указал пользователь, 
    уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. 
    Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. 
    И так до тех пор, пока пользователь не выберет == N.
*/

//Task1
/*
const start = +prompt('Enter start of range');
const end = +prompt('Enter end of range');
let sum = 0;
if (start % 1 != 0 || end % 1 != 0){
    alert('Error');
    console.error('Error');
} else {
    for(let i = start; i <= end; i++){
        sum += i;
    }
    alert(`The sum of all number from ${start} to ${end} is ${sum}`);
}
*/

//Task2
/*
const num1 = +prompt('Enter first number',0);
const num2 = +prompt('Enter second number',0);
const minNum = Math.min(num1, num2);
if(isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0){
    alert('Error');
} else {
    for(let i = minNum; i > 0; i--){
        if(num1 % i == 0 && num2 % 2 == 0){
            alert(`${i} is greatest common divisor`);
            break;
        }
    }
}
*/

//Task3
/*
const num = +prompt('Enter a number',0);
let arr = new Array();

if (isNaN(num) || num < 0){
    alert('Error');
} else {
    for(let i = 0; i <= num; i++){
            if (num % i == 0){           
                arr.push(i);
            }
    }
    alert(`All divisors for ${num} is ${arr}`);
}
*/

//Task4
/*
const num = prompt('Enter a number',0);
if(isNaN(num)){
    alert('Error');
} else {
   const num1 =  num.length;
   alert(`num has a ${num1} digits`);
}
*/

//Task5
/*
let count = 0;
let arr = new Array();
for (let i = 0; i <= 10; i++){
    arr.push(prompt('Enter a number', 0));
    if (arr[i] >= 0){
        count++;
    }
    if (isNaN(arr[i])){
        alert('Error');
        break;
    }
}
alert(`You have entered ${count} numbers that is positive`);
*/

//Task6
/*
while(true){
    const newLocal = prompt('Do you want to continue: "1 - yes", "anything else - no"', 0);
    if(newLocal == 1){
        let op = prompt('Enter operation + - / % *', '+');
        let num = +prompt('Enter first number',0);
        let num1 = +prompt('Enter second number',0);
        let res = 0;
        if (isNaN(num) || isNaN(num1)){
            alert('Error');
        } else{
            switch (op){
                case '+':
                    res = num + num1;
                    break;
                case '-':
                    res = num - num1;
                    break;
                case '/':
                    res = num / num1;
                    break;
                case '%':
                    res = num % num1;
                    break;
                case '*':
                    res = num * num1;
                    break;
                default:
                    alert('Error');
            }
        }
        alert(`${num}${op}${num1} = ${res}`);
    } else if(newLocal != 1) {
        break;
    }
}
*/

//Task7
/*
const num = prompt('Enter a number', 0);
const sliceNum = prompt('Enter a shift number',0);

if(isNaN(num) || isNaN(sliceNum)){
    alert('Error');
} else {
    alert(`Result number is ${num.slice(sliceNum) + num.slice(0, sliceNum)}`);
}
*/

//Task8
/*
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let currDay = 0;
while(confirm(`${days[currDay]}. Do you want to see the next day?`)){
    currDay = (currDay + 1) % days.length;
}
*/

//Task9
/*
for(let i = 1; i < 10; i++){
    document.write('<div style="float: left; width: 100px; margin-bottom: 10px">');
    for(let j = 1; j < 10; j++){
        document.write(i + '*' + j + '=' + (i * j) + '<br>');
    }
    document.write('</div>');
}
*/


//Task10
/*
const n = 0;
const m =100;
let start = n;
let end = m;

while (true){ 
    let num = Math.floor((start + end) / 2);
    let answr = prompt(num + ' Is it your number ? - y (yes), - b (biger), -  l (lower)');
    if (answr == 'y'){
        alert('I guess, cool!!!');
        break;
    } 
    if (answr == 'l'){
        end = num - 1;
    } 
    if (answr == 'b'){
        start = num + 1;
    }
}
*/

//-----------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------
// WHILE 

// 1 Пользователь ввел число, а на экран вывелись все числа от введенного до 0.

// 2 Запросить число и степень. Возвести число в указанную степень и вывести результат.

// 3 Запросить 2 числа и найти все общие делители.

// 4 Посчитать факториал введенного пользователем числа.


// DO WHILE

// 5 Предлагать пользователю решить пример 2 + 2 * 2 до тех пор, пока он не решит его правильно.

// 6 Делить число 1000 на 2 до тех пор, пока не получится число меньше 50. Вывести это число и сколько делений произвели.


// FOR 

// 7 Вывести все числа от 1 до 100, которые кратные указанному пользователем числу.

// 8 Вывести каждый 4-й элемент из указанного пользователем диапазона. Пользователь указывает минимальное и максимальное значения диапазона.

// 9 Запросить число и проверить, простое ли оно. Простое число делится без остатка только на себя и на единицу.

//Task1
/*
const n = +prompt('Enter a number',0);
for(let i = n; i > 0; i--) console.log(i);
*/

//Task2
/*
const n = +prompt('Enter a number',0);
const m = +prompt('Enter a degree',0);
let p = 1;
 for (let i = 1; i < m; i++){
    p = n * n;
 }
 console.log(p);
*/

//Task3
/*
const n = +prompt('Enter first number', 0);
const m = +prompt('Enter second number', 0);

let minNum = Math.min(n, m);
console.log(`Common divisors for ${n} ${m} is: `)
for (let i = minNum; i > 0; i--){
    if (n % i == 0 && m % i == 0){
        console.log(i);
    }
}
*/

//Task4
/*
const n = +prompt('Enter a number',0);
let s = 1;
for (let i = 1; i <= n; i++){
    s*=i;
}
alert(`Factorial of the ${n} is ${s}`);
*/

//Task5
/*
const n = 2 + 2*2;
let m;
alert('Calculate math expresion 2 + 2*2');
do{
    m = prompt('Enter result here');
} while(m != n);
*/

//Task6
/*
let n = 1000;
const m = 2;
const l = 50;
let count = 0;

do{
    n /= m;
    count++;
    console.log(n);
} while(n > l);
console.log(count);
*/

//Task7 Вывести все числа от 1 до 100, которые кратные указанному пользователем числу.
/*
const n = +prompt('Enter a number', 0);
const start = 1;
const end = 100;
console.log('numbers from 1 to 100 which are multiples of n: ');
for (let i = start; i <= end; i++){
    if(i % n == 0){
        console.log(i);
    }
}
*/

//Task8 Вывести каждый 4-й 
//элемент из указанного пользователем диапазона. 
//Пользователь указывает минимальное и максимальное значения диапазона.
/*
const n = +prompt('Enter start of range',0);
const m = +prompt('Enter end of range', 100);
const devisor = 4;

console.log('Every forth number in range:');
for (let i = n + 4; i <= m; i+=4){
    
    console.log(i);
}
*/

//Task9 Запросить число и проверить, простое ли оно. Простое число делится без остатка только на себя и на единицу.

const n = +prompt('Enter a number', 0);
let count = 0;
for (let i = 1; i <= n; i++){
    if (n % i == 0){
        count ++;
    }
}
if (count == 2){
    alert('Entered number is simple');
} else {
    alert('Entered number is not simple');
}
