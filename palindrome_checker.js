function reduceString(str) {
    var reducedString = "";
    for (var i = 0; i < str.length; i++) {
        var ascii = str.charCodeAt(i);
        if ((ascii >= 48 && ascii <= 57) || (ascii >= 97 && ascii <= 122)) {
            reducedString += str[i];
        }
    }
    return reducedString;
}

function palindrome(str) {
    var flag = true;
    str = reduceString(str.toLowerCase());
    for (var i = 0, j = str.length - 1; i < str.length, j >= 0; i++, j--) {
        if (str[i] != str[j]) {
            flag = false;
            break;
        }
    }
    return flag;
}

palindrome("eye");