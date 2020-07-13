function telephoneCheck(str) {

    var pattern1 = "^[0-9]{3}-[0-9]{3}-[0-9]{4}$";
    var pattern2 = "^\\([0-9]{3}\\)[0-9]{3}-[0-9]{4}$";
    var pattern3 = "^\\([0-9]{3}\\) [0-9]{3}-[0-9]{4}$";
    var pattern4 = "^[0-9]{3} [0-9]{3} [0-9]{4}$";
    var pattern5 = "^[0-9]{10}$";
    var pattern6 = "^1 [0-9]{3} [0-9]{3} [0-9]{4}$";
    var pattern7 = "^1 [0-9]{3}-[0-9]{3}-[0-9]{4}$";
    var pattern8 = "^1 \\([0-9]{3}\\) [0-9]{3}-[0-9]{4}$";
    var pattern9 = "^1\\([0-9]{3}\\)[0-9]{3}-[0-9]{4}$";

    return str.match(pattern1) != null ||
        str.match(pattern2) != null ||
        str.match(pattern3) != null ||
        str.match(pattern4) != null ||
        str.match(pattern5) != null ||
        str.match(pattern6) != null ||
        str.match(pattern7) != null ||
        str.match(pattern8) != null ||
        str.match(pattern9) != null;
}

telephoneCheck("555-555-5555");