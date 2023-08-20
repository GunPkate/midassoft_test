function getHandScore(input: string) : number {
  let data: Array<string> = input.split(" ")
  data.sort();
  let sum:number = 0 

  interface cardType {
    suites: string,
    value: number
  }

  let cardSet: Array<cardType> = [];
  let checkSuite: Array<string> =[];
  let threeOfKind: Array<number> =[];

  for(let i: number = 0; i<data.length; i++){

    let suitesData:string = data[i].charAt(0);
    let numValue: number = 0;
    let numTemp: string = "";

    numTemp = data[i].replace(suitesData,"");
    numTemp == "A" ? numValue = 11 : (numTemp == "J" || numTemp == "Q" || numTemp == "K"  ? numValue = 10 : numValue = + numTemp);

    let tempData: cardType = {suites: suitesData, value: numValue};

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


  if(threeOfKind[0]== threeOfKind[1] && threeOfKind[1] == threeOfKind[2]){
    sum = cardSet.map(data=>data.value).reduce((nextValue,previousValue)=>previousValue+nextValue);
  }

  let count: Array<cardType> = []
  for(let i: number =0; i< checkSuite.length; i++){
    count = cardSet.filter(data=> data.suites==checkSuite[i])
    
    // console.log("count",count)
    if(count.length == 1){
      // break;
    }else{
      sum = count.map(data=>data.value).reduce((nextValue,previousValue)=>previousValue+nextValue)
    }
  }

  console.log("Test#2",sum)
  return sum;
}

getHandScore("S8 S10 CA"); 
getHandScore("SK D10 CA"); 
getHandScore("SK DJ DA"); 
getHandScore("S8 D8 C8"); 
getHandScore("SA DA CA"); 

