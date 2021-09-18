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
var notLuckyColor= '#EF4444'
var luckyColor='#34D399'

function outputMessage(message,color){
  outputMsg.innerHTML = message
  outputMsg.style.backgroundColor=color
    outputMsg.style.color='white'
    outputMsg.style.width='300px'
    outputMsg.style.marginRight='auto'
    outputMsg.style.marginTop='1rem'
    outputMsg.style.marginLeft='auto'
    outputMsg.style.padding='1rem 2rem'
    outputMsg.style.borderRadius='1rem'
}

function compareValues(sum, luckynum){
  if(sum%luckynum===0){
    msg = "Yes! The Birthday is Lucky!!"
    outputMessage(msg,luckyColor)
  }
  else{
    msg = "Oops! Your Birthday is not Lucky.."
    outputMessage(msg,notLuckyColor)
  }
}

function checkLuckyBirthday(){
  // console.log(dateOfBirth.value.trim()==='')
  // console.log(luckyNumber.value.trim()==='');
  if(luckyNumber.value.trim()==='' ||dateOfBirth.value.trim()===''){
    outputMsg.innerHTML = "Please input in both the fields"
  }
  else{ const dob = dateOfBirth.value
    const sum = calculateSum(dob)
    compareValues(sum, Number(luckyNumber.value))}

  
}

checkBtn.addEventListener("click", checkLuckyBirthday)