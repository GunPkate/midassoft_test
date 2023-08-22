let a1: Array<string>  = ["BATHROOM", "BATH SALTS", "BLOODBATH"];
let a2: Array<string>  = ["BEFRIEND", "GIRLFRIEND", "FRIENDSHIP"];
function getQuestionPart(phrases: Array<string>){
  
  let vowels = ["A","E","I","O","U"];
  
  interface checkVowels  {
    vowel: string,
    index: Array<number>
  }


  let dataCheck: Array<checkVowels> = [];

  for(let i:number =0; i < phrases.length; i++ ){


    for(let y: number = 0; y <vowels.length; y++){
      let vowlesPointer: checkVowels = {
        vowel: "",
        index: []
      }
      for(let z:number =0; z < phrases[i].length; z++ ){
        if(vowels[y] == phrases[i][z]){
          vowlesPointer.vowel = vowels[y];
          vowlesPointer.index.push(z);
        }

      }
      vowlesPointer.vowel != "" ? dataCheck.push(vowlesPointer) : "";
    } 

  }
  console.log(dataCheck)

  let b = [[1], [1, 6], [6]] 
let a1  = ["BATHROOM", "BATH SALTS", "BLOODBATH"]; 

let c = 0
let w1 = ""
let w2 = ""
let w3 = ""

let result :Boolean = true;
function checkForward(){
    while (true) {
    
    w1 += a1[0][1+c]
    w2 += a1[1][1+c]
    w3 += a1[2][1+c]
    console.log(w1,w2)
    if(w1 != w2 || 1+c > a1[0].length || 1+c > a1[1].length ){
        result = false;
        break;
        // console.log("break")
    }
    c++
} 
return result
}

console.log(result)
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
checkForward()


  let aaa = "BATH";

  let awnserVowel: Array<string> = [];
  let indexSet: Array<Array<number>> = [];

  for(let y: number = 0; y <vowels.length; y++){
    let c = dataCheck.filter(data=>data.vowel == vowels[y])
    if(c.length== 3){
      indexSet = c.map(data=>data.index);
      console.log(indexSet)
    }
  }


  let question:string = "BATH"
  for(let i:number =0; i < phrases.length; i++ ){
    phrases[i] = phrases[i].replace(question,"");
    phrases[i] = phrases[i].replace(" ","");
  }

  // console.log(dataCheck)
  // console.log(phrases)
  return phrases
}

// getQuestionPart(a1);
getQuestionPart(a2);