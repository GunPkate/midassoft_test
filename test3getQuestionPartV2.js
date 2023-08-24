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
    var forward1 = "";
    var forward2 = "";
    /// Start///
    var matchForward = findword(phrases, indexSet, "Forward");
    /// Start///
    //////// Functions 1//////
    function findword(words, positions, movingWord) {
        var match = false;
        try {
            for (var i = 0; i < words.length - 1; i++) {
                var j = 0;
                if (match == false) {
                    for (var j_1 = 0; j_1 < positions[i].length; j_1++) {
                        for (var k = 0; k < positions[i + 1].length; k++) {
                            movingWord == "Forward" ? checkForward(words, i, positions[i][j_1], positions[i + 1][k]) : 0;
                            if (forward1 == forward2) {
                                match = true;
                                console.log(forward1, forward2, forward1 == forward2);
                                return match;
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
    function checkForward2(wordsArray, wordIndex, w1Vowel, w2Vowel) {
        var count = 0;
        while (true) {
            forward1 += wordsArray[wordIndex].substring(1, w1Vowel + count);
            forward2 += wordsArray[wordIndex + 1].substring(1, w2Vowel + count);
            console.log(forward1, forward2);
            if (forward1 != forward2 || 1 + count == 0) {
                break;
            }
            count--;
        }
    }
    //////// Functions 3//////
    var question = forward1;
    for (var i = 0; i < phrases.length; i++) {
        phrases[i] = phrases[i].replace(question, "");
        phrases[i] = phrases[i].replace(" ", "");
    }
    // console.log(dataCheck)
    // console.log(phrases)
    return phrases;
}
// getQuestionPart(a1);
getQuestionPart(a2);
