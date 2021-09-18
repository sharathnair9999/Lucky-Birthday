var dateOfBirth = document.querySelector("#dob")
var luckyNumber = document.querySelector("#lucky-num")
var checkBtn = document.querySelector("#check")
var outputMsg = document.querySelector("#output-msg")

function calculateSum(date){
  var dob = date.replaceAll("-","")
  var sum =0;
  for(let i=0;i<dob.length;i++){
    sum=sum+Number(dob.charAt(i))
  }
  return sum;
  
}

function compareValues(sum, luckynum){
  if(sum%luckynum===0){
    outputMsg.innerHTML = "Yes the Birthday is Lucky!!"
  }
  else{
    outputMsg.innerHTML = "Oops! Your Birthday is not Lucky.."
  }
}

function checkLuckyBirthday(){
 const dob = dateOfBirth.value
const sum = calculateSum(dob)
compareValues(sum, Number(luckyNumber.value))
  
}

checkBtn.addEventListener("click", checkLuckyBirthday)