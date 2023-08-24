var a1 = ["BATHROOM", "BATH SALTS", "BLOODBATH"];
var a2 = ["BEFRIEND", "GIRLFRIEND", "FRIENDSHIP"];
function getQuestionPart(phrases) {
    var vowels = ["A", "E", "I", "O", "U"];
    var dataCheck = [];
    for (var i = 0; i < phrases.length; i++) {
        for (var y = 0; y < vowels.length; y++) {
            var vowlesPointer = {
                vowel: "",
                index: []
            };
            for (var z = 0; z < phrases[i].length; z++) {
                if (vowels[y] == phrases[i][z]) {
                    vowlesPointer.vowel = vowels[y];
                    vowlesPointer.index.push(z);
                }
            }
            vowlesPointer.vowel != "" ? dataCheck.push(vowlesPointer) : "";
        }
    }
    //  console.log(dataCheck)
    var indexSet = [];
    var _loop_1 = function (y) {
        var c = dataCheck.filter(function (data) { return data.vowel == vowels[y]; });
        if (c.length == 3) {
            indexSet = c.map(function (data) { return data.index; });
            console.log(indexSet);
        }
    };
    for (var y = 0; y < vowels.length; y++) {
        _loop_1(y);
    }
    /// Start///
    var forward1 = "";
    var forward2 = "";
    var backward1 = "";
    var backward2 = "";
    var awnser = "";
    /// Start///
    var matchForward = findword(phrases, indexSet, "Forward");
    if (matchForward == true) {
        var matchBackward = findword(phrases, indexSet, "Backward");
        if (matchForward == matchBackward) {
            awnser = backward1 + forward1;
        }
    }
    console.log("awnser", awnser);
    for (var i = 0; i < phrases.length; i++) {
        phrases[i] = phrases[i].replace(awnser, "");
        phrases[i] = phrases[i].replace(" ", "");
    }
    /// End///
    //////// Functions 1//////
    function findword(words, positions, movingWord) {
        var match = false;
        try {
            for (var i = 0; i < words.length - 1; i++) {
                var j = 0;
                if (match == false) {
                    for (var j_1 = 0; j_1 < positions[i].length; j_1++) {
                        for (var k = 0; k < positions[i + 1].length; k++) {
                            if (movingWord == "Forward") {
                                checkForward(words, i, positions[i][j_1], positions[i + 1][k]);
                                if (forward1 == forward2) {
                                    match = true;
                                    console.log("BB", forward1, forward2, forward1 == forward2);
                                    return match;
                                }
                            }
                            else if (movingWord == "Backward") {
                                checkBackward(words, i, positions[i][j_1], positions[i + 1][k]);
                                if ((backward1 == backward2) && backward1 != "") {
                                    match = true;
                                    if (backward1 == backward2 && backward1 != "") {
                                        var temp = "";
                                        for (var p = backward1.length - 1; p > 0; p--) {
                                            temp += backward1[p];
                                        }
                                        console.log(temp);
                                    }
                                    return match;
                                }
                            }
                        }
                    }
                }
            }
            return match;
        }
        catch (err) {
            console.error(err);
            return match;
        }
    }
    //////// Functions 1//////
    //////// Functions 2//////
    function checkForward(wordsArray, wordIndex, w1Vowel, w2Vowel) {
        var count = 0;
        forward1 = "";
        forward2 = "";
        while (true) {
            if (forward1 != forward2 ||
                count == a1[wordIndex].substring(w1Vowel).length ||
                count == a1[wordIndex + 1].substring(w2Vowel).length) {
                console.log(forward1, forward2);
                break;
            }
            forward1 += wordsArray[wordIndex][w1Vowel + count];
            forward2 += wordsArray[wordIndex + 1][w2Vowel + count];
            count++;
        }
    }
    //////// Functions 2//////
    //////// Functions 3//////
    function checkBackward(wordsArray, wordIndex, w1Vowel, w2Vowel) {
        var count = 0;
        backward1 = "";
        backward2 = "";
        while (true) {
            backward1 += wordsArray[wordIndex].substring(w1Vowel - 1 + count, w1Vowel + count);
            backward2 += wordsArray[wordIndex + 1].substring(w2Vowel - 1 + count, w2Vowel + count);
            console.log(backward1, " ", backward2);
            console.log(w1Vowel - 1 + count, " ", w2Vowel + count);
            if (backward1 != backward2) {
                backward1 = backward1.substring(0, backward1.length - 1);
                backward2 = backward2.substring(0, backward2.length - 1);
                // console.log(backward1 == backward2)
                // console.log(backward1, " ", backward2)
                break;
            }
            if (backward1 == wordsArray[wordIndex][0] || backward2 == wordsArray[wordIndex + 1][0] && backward1 == backward2) {
                console.log("Blank", backward1 == backward2);
                console.log("Blank", backward1, " ", backward2);
                break;
            }
            count--;
        }
    }
    //////// Functions 3//////
    // console.log(dataCheck)
    console.log(phrases);
    return phrases;
}
// getQuestionPart(a1);
getQuestionPart(a2);
