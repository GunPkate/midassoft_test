let a:string = "9:00";
let b:string = "18:01";
// let c:string = "12:00";
let c:string = "17:30";

function getAngleClock(hh_mm: string){
  let tempTime = hh_mm.split(":")
  let h :number = +tempTime[0];
  h >= 12?h=  (h - 12) : h;

  let m :number = +tempTime[1];
 
  //  console.log(h,m);

  let angleM: number = (m/60)*360;
  let angleH: number = ((h + (m/60))/12*360);
  // console.log(angleH,angleM);
  
  let diff:number  = (angleM - angleH);
  diff< 0? diff *=-1: diff;
  diff > 180? diff -= 180: diff; //convert to short angle
  console.log("Test#1 =",diff);
  return diff;
}

getAngleClock(a);
getAngleClock(b);
getAngleClock(c);
