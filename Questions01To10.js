//-------------------Questions01-------------------//
const showTimeAndDay = () => {
    const now = new Date();
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });
    const time = now.toLocaleTimeString();
    console.log(`Today is ${day}, Time is ${time}`);
};

console.log("-------------------Questions01-------------------")
showTimeAndDay();

//-------------------Questions02-------------------//
const calculate = (num1, num2) => {
    console.log(`Multiplication: ${num1 * num2}`);
    console.log(`Division: ${num1 / num2}`);
};

console.log("-------------------Questions02-------------------")
calculate(10, 5); 

//-------------------Questions03-------------------//
const findLargestWord = (str) => {
    const words = str.split(' ');
    return words.reduce((longest, word) => word.length > longest.length ? word : longest, '');
};

console.log("-------------------Questions03-------------------")
console.log(findLargestWord("React Native is amazing"));

//-------------------Questions04-------------------//
const power = (b, n) => {
    return Math.pow(b, n);
};

console.log("-------------------Questions04-------------------")
console.log(power(2, 3));


//-------------------Questions05-------------------//
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}

console.log("-------------------Questions05-------------------")
const rect = new Rectangle(10, 5);
console.log(`Area: ${rect.area()}, Perimeter: ${rect.perimeter()}`);

//-------------------Questions06-------------------//

const checkInteger = (num) => {
    if (!Number.isInteger(num)) {
        throw new Error('Input is not an integer');
    }
    return `${num} is an integer`;
};

console.log("-------------------Questions06-------------------")
try {
    console.log(checkInteger(10.5));
} catch (error) {
    console.log(error.message);
}

//-------------------Questions07-------------------//

const isFirstCharUppercase = (str) => /^[A-Z]/.test(str);

console.log("-------------------Questions07-------------------")
console.log(isFirstCharUppercase("Hello"));
console.log(isFirstCharUppercase("hello")); 

//-------------------Questions08-------------------//

const isValidIP = (ip) => {
    const regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(\1\.){2}\1$/;
    return regex.test(ip);
};

console.log("-------------------Questions08-------------------")
console.log(isValidIP("192.168.1.1")); 
console.log(isValidIP("999.999.999.999"));

//-------------------Questions09-------------------//

const isHTML = (value) => /^<.+>$/.test(value.trim());

console.log("-------------------Questions09-------------------")
console.log(isHTML("<div></div>")); // true
console.log(isHTML("Text"));

//-------------------Questions10-------------------//

const circleProperties = (radius) => {
    const area = Math.PI * radius ** 2;
    const perimeter = 2 * Math.PI * radius;
    return { area, perimeter };
};

console.log("-------------------Questions10-------------------")
const result = circleProperties(5);
console.log(`Area: ${result.area}, Perimeter: ${result.perimeter}`);