function getHandScore(input) {
    var data = input.split(" ");
    data.sort();
    var sum = 0;
    var cardSet = [];
    var checkSuite = [];
    var threeOfKind = [];
    for (var i = 0; i < data.length; i++) {
        var suitesData = data[i].charAt(0);
        var numValue = 0;
        var numTemp = "";
        numTemp = data[i].replace(suitesData, "");
        numTemp == "A" ? numValue = 11 : (numTemp == "J" || numTemp == "Q" || numTemp == "K" ? numValue = 10 : numValue = +numTemp);
        var tempData = { suites: suitesData, value: numValue };
        // if(!checkSuite.includes(suitesData)){
        checkSuite.push(suitesData);
        // }
        // if(!threeOfKind.includes(numValue)){
        threeOfKind.push(numValue);
        // }
        cardSet.push(tempData);
    }
    // console.log(checkSuite);
    // console.log(threeOfKind);
    // console.log(cardSet);
    if (threeOfKind[0] == threeOfKind[1] && threeOfKind[1] == threeOfKind[2]) {
        sum = cardSet.map(function (data) { return data.value; }).reduce(function (nextValue, previousValue) { return previousValue + nextValue; });
    }
    var count = [];
    var _loop_1 = function (i) {
        count = cardSet.filter(function (data) { return data.suites == checkSuite[i]; });
        // console.log("count",count)
        if (count.length == 1) {
            // break;
        }
        else {
            sum = count.map(function (data) { return data.value; }).reduce(function (nextValue, previousValue) { return previousValue + nextValue; });
        }
    };
    for (var i = 0; i < checkSuite.length; i++) {
        _loop_1(i);
    }
    console.log("Test#2", sum);
    return sum;
}
getHandScore("S8 S10 CA");
getHandScore("SK D10 CA");
getHandScore("SK DJ DA");
getHandScore("S8 D8 C8");
getHandScore("SA DA CA");
