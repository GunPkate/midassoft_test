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

  

    /// Start///

    let forward1 = ""
    let forward2 = ""
    let backward1 = ""
    let backward2 = ""
      let awnser:string = ""
    /// Start///
    let matchForward :boolean = findword(phrases,indexSet,"Forward");
    if(matchForward == true){     
      let matchBackward :boolean = findword(phrases,indexSet,"Backward");
      if(matchForward ==  matchBackward){
        awnser = backward1 + forward1 
      }
    }
    console.log(awnser)
    for(let i:number =0; i < phrases.length; i++ ){
      phrases[i] = phrases[i].replace(awnser,"");
      phrases[i] = phrases[i].replace(" ","");
    }
    
    /// End///


    //////// Functions 1//////
    function findword(words: Array<string>,positions: Array<Array<number>>, movingWord: string): boolean{
        let match = false
        try{
          for(let i = 0; i < words.length-1; i++){

            let j =0
              if(match == false){
              for(let j = 0; j < positions[i].length; j++){
                  for(let k = 0; k < positions[i+1].length; k ++){

                    if(movingWord == "Forward"){
                      checkForward(words,i,positions[i][j],positions[i+1][k]) 
                      if(forward1 == forward2){
                              match = true
                              console.log(forward1,forward2, forward1 == forward2)
                          return match;
                      } 
                    } else if(movingWord == "Backward"){
                      checkBackward(words,i,positions[i][j],positions[i+1][k]) 
                      if(backward1 == backward2){
                          match = true
                          console.log(backward1,backward2, backward1 == backward2)
                          return match;
                      } 
                    }
                  }
              }
            }
          }  
          return match;
        } catch (err){
          console.error(err);
          return match;
        }
    }
    //////// Functions 1//////

    //////// Functions 2//////
    function checkForward(wordsArray: Array<string>,wordIndex: number,w1Vowel : number,w2Vowel : number){
        let count = 0
        forward1 = ""
        forward2 = ""
       
        while (true) {
          if(forward1 != forward2 || 
            count == a1[wordIndex].substring(w1Vowel).length ||
            count == a1[wordIndex+1].substring(w2Vowel).length
            ){
              console.log(forward1,forward2)        
              break;
          }
          
          forward1 += wordsArray[wordIndex][w1Vowel+count]
          forward2 += wordsArray[wordIndex+1][w2Vowel+count]
          count++
        } 

    }
    //////// Functions 2//////

    //////// Functions 3//////
    function checkBackward(wordsArray: Array<string>,wordIndex: number,w1Vowel : number,w2Vowel : number){
        let count = 0
        backward1 = ""
        backward2 = ""
        while (true) {
        
        	backward1 += wordsArray[wordIndex].substring(w1Vowel-1 + count,w1Vowel+count)
        	backward2 += wordsArray[wordIndex+1].substring(w2Vowel-1 + count,w2Vowel+count)

        	console.log(backward1, " ", backward2)
        	console.log(w1Vowel-1 + count, " ", w2Vowel+count)

	        if(backward1 != backward2 ){
        	    	backward1 = backward1.substring(0,backward1.length-1)
                backward2 = backward2.substring(0,backward2.length-1)
                    console.log(backward1 == backward2)
                    console.log(backward1, " ", backward2)
          if(backward1 == backward2 && backward1 != ""){
            let temp = ""
            for(let p = backward1.length -1; p >0; p--){
              temp += backward1[p]
            }
            console.log(temp)
          }
          break;
		
	        }
          if(backward1 == wordsArray[wordIndex][0] || backward2 == wordsArray[wordIndex+1][0]){
                console.log(backward1 == backward2)
                console.log(backward1, " ", backward2)
          break;
          }
        	count--
    	  } 
    } 
    //////// Functions 3//////




  // console.log(dataCheck)
  // console.log(phrases)
  return phrases
}

getQuestionPart(a1);
// getQuestionPart(a2);