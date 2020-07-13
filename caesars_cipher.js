function rot13(str) {
    var decodedString = "";
    for (var i = 0; i < str.length; i++) {
        var ascii = str.charCodeAt(i);
        if (ascii >= 65 && ascii <= 90) {
            var decodedAscii = ascii + 13;
            if (decodedAscii > 90) {
                decodedAscii -= 26;
            }
            decodedString += String.fromCharCode(decodedAscii);
        } else {
            decodedString += str[i];
        }
    }
    console.log(decodedString);
    return decodedString;
}

rot13("SERR PBQR PNZC");