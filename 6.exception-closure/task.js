// Задача 1

function parseCount(inputValue){
    let number;

    number = Number.parseFloat(inputValue);

    if (isNaN(number)){
        throw new Error('Невалидное значение');
    }
    else {
        return number;
    }
}

function validateCount(inputValue){
    try {
        return parseCount(inputValue);
    }
    catch (error) {
        return error;
    }
}

// Задача 2

class Triangle {
    constructor(a, b, c){
        if ((a >= (b + c)) || (b >= (a + c)) || (c >= (a + b))) {
            throw new Error('Треугольник с такими сторонами не существует');
            return;
        }

        this.a = a;
        this.b = b;
        this.c = c;

    }

    get perimeter(){
        return this.a + this.b + this.c;
    }

    get area(){
        let semiPerimetr, area;

        semiPerimetr = this.perimeter/2;
        area = Math.sqrt(semiPerimetr * (semiPerimetr - this.a) * (semiPerimetr - this.b) * (semiPerimetr - this.c));

        return Number(area.toFixed(3));
    }
}

function getTriangle(a, b, c){
    const errMessage = 'Ошибка! Треугольник не существует';
    try {
        return new Triangle(a, b, c);
    }
    catch {
        return {get perimeter() {return errMessage}, get area(){return errMessage}};
    }
}