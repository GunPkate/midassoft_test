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
  //  console.log(dataCheck)



  let indexSet: Array<Array<number>> = [];

  for(let y: number = 0; y <vowels.length; y++){
    let c = dataCheck.filter(data=>data.vowel == vowels[y])
    if(c.length== 3){
      indexSet = c.map(data=>data.index);
      console.log(indexSet)
    }
  }

  


    let w1 = ""
    let w2 = ""
    /// Start///
    findword(phrases,indexSet)
    /// Start///


    //////// Functions 1//////
    function findword(words: Array<string>,positions: Array<Array<number>>){
        for(let i = 0; i < words.length-1; i++){
          let match = false
          let j =0
            if(match == false){
            let j = 0;
            let k = 0;
            while(true){
          checkForward(words,i,positions[i][j],positions[i+1][k])
              if(w1 == w2){
                          match = true
                          console.log(w1,w2, w1 == w2)
                          break;
                  }
              k++
              if(k>positions[i+1].length){
                j++
                k =0
              } 
            }
          }
        }  
    }
    //////// Functions 1//////

    //////// Functions 2//////
    function checkForward(wordsArray: Array<string>,wordIndex: number,w1Vowel : number,w2Vowel : number){
        let count = 0
        w1 = ""
        w2 = ""
       
        while (true) {
          if(w1 != w2 || 
            count == a1[wordIndex].substring(w1Vowel).length ||
            count == a1[wordIndex+1].substring(w2Vowel).length
            ){
              console.log(w1,w2)        
              break;
          }
          
          w1 += wordsArray[wordIndex][w1Vowel+count]
          w2 += wordsArray[wordIndex+1][w2Vowel+count]
          count++
        } 

    }
    //////// Functions 2//////

    //////// Functions 3//////
    function checkForward2(wordsArray: Array<string>,wordIndex: number,w1Vowel : number,w2Vowel : number){
        let count = 0
        while (true) {
        
        w1 += wordsArray[wordIndex].substring(1,w1Vowel+count)
        w2 += wordsArray[wordIndex+1].substring(1,w2Vowel+count)

        console.log(w1,w2)
        if(w1 != w2 ||  1+count == 0){
            break;

        }
        count--
    } 
    }
    //////// Functions 3//////


  let question:string = w1
  for(let i:number =0; i < phrases.length; i++ ){
    phrases[i] = phrases[i].replace(question,"");
    phrases[i] = phrases[i].replace(" ","");
  }

  // console.log(dataCheck)
  // console.log(phrases)
  return phrases
}

getQuestionPart(a1);
// getQuestionPart(a2);