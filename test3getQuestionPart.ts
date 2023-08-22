let a1: Array<string>  = ["BATHROOM", "BATH SALTS", "BLOODBATH"];
let a2: Array<string>  = ["BEFRIEND", "GIRLFRIEND", "FRIENDSHIP"];
function getQuestionPart(phrases: Array<string>){
  
  let vowels = ["A","E","I","O","U"];
  
  interface checkVowels  {
    vowel: string,
    count: number,
    index: Array<number>
  }

  interface wordMapping{
    word: string,
    vowels: checkVowels[]
  }

  let dataCheck: Array<wordMapping> = [];
  let random: Array<number> = [];

  for(let i:number =0; i < phrases.length; i++ ){

    let tempData: wordMapping = {
      word: phrases[i],
      vowels: []
    }

    for(let y: number = 0; y <vowels.length; y++){
      let vowlesPointer: checkVowels = {
        vowel: "",
        count: 0,
        index: []
      }
      for(let z:number =0; z < phrases[i].length; z++ ){
        if(vowels[y] == phrases[i][z]){
          vowlesPointer.count +=1;
          vowlesPointer.vowel = vowels[y];
          vowlesPointer.index.push(z);
          random.push(z);
        }

      }
      vowlesPointer.vowel != "" ? tempData.vowels.push(vowlesPointer) : "";
    } 

    dataCheck.push(tempData)
  }



  let awnser: wordMapping
  let temp:Array<string> = [];
  let countVowels: Array<wordMapping> = [];
  for(let x: number =0; x < vowels.length; x++){
    countVowels = dataCheck.filter(data => data.vowels.find(item => item.vowel == vowels[x]));
    if(countVowels.length==3){
      temp.push(vowels[x]);
      let aa = countVowels.map(data=>data.vowels.find(x=>x.vowel));
        for(let i of aa){
          // console.log(i.index)
          for(let y of i.index){
            console.log(y)
          }
        }
        console.log(aa)
    }
  }
  // console.log(countVowels )

  // console.log(temp)

  for(let x: number =0; x < vowels.length; x++){

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

getQuestionPart(a1);
getQuestionPart(a2);