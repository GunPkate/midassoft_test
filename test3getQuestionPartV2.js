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
    console.log(dataCheck);
    var b = [[1], [1, 6], [6]];
    var a1 = ["BATHROOM", "BATH SALTS", "BLOODBATH"];
    var c = 0;
    var w1 = "";
    var w2 = "";
    var w3 = "";
    var result = true;
    function checkForward() {
        while (true) {
            w1 += a1[0][1 + c];
            w2 += a1[1][1 + c];
            w3 += a1[2][1 + c];
            console.log(w1, w2);
            if (w1 != w2 || 1 + c > a1[0].length || 1 + c > a1[1].length) {
                result = false;
                break;
                // console.log("break")
            }
            c++;
        }
        return result;
    }
    console.log(result);
    //checkForward()
    // function checkForward2(){
    //     let c = 0
    //     while (true) {
    //     w1 += a1[0].substring(1,1+c)
    //     w2 += a1[1].substring(1,1+c)
    //     w3 += a1[2].substring(1,1+c)
    //     console.log(w1,w2)
    //     if(w1 != w2 ||  1+c == 0){
    //         break;
    //         console.log("break")
    //     }
    //     c--
    // } 
    // }
    // checkForward2()
    checkForward();
    var aaa = "BATH";
    var awnserVowel = [];
    var indexSet = [];
    var _loop_1 = function (y) {
        var c_1 = dataCheck.filter(function (data) { return data.vowel == vowels[y]; });
        if (c_1.length == 3) {
            indexSet = c_1.map(function (data) { return data.index; });
            console.log(indexSet);
        }
    };
    for (var y = 0; y < vowels.length; y++) {
        _loop_1(y);
    }
    var question = "BATH";
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
