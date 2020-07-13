function convertToRoman(num) {
    var romanValue = "";
    while (num >= 1000) {
        romanValue += 'M';
        num -= 1000;
    }
    while (num >= 900) {
        romanValue += 'CM';
        num -= 900;
    }
    while (num >= 500) {
        romanValue += 'D';
        num -= 500;
    }
    while (num >= 400) {
        romanValue += 'CD';
        num -= 400;
    }
    while (num >= 100) {
        romanValue += 'C';
        num -= 100;
    }
    while (num >= 90) {
        romanValue += 'XC';
        num -= 90;
    }
    while (num >= 50) {
        romanValue += 'L';
        num -= 50;
    }
    while (num >= 40) {
        romanValue += 'XL';
        num -= 40;
    }
    while (num >= 10) {
        romanValue += 'X';
        num -= 10;
    }
    while (num >= 9) {
        romanValue += 'IX';
        num -= 9;
    }
    while (num >= 5) {
        romanValue += 'V';
        num -= 5;
    }
    while (num >= 4) {
        romanValue += 'IV';
        num -= 4;
    }
    while (num >= 1) {
        romanValue += 'I';
        num -= 1;
    }
    return romanValue;
}

convertToRoman(36);