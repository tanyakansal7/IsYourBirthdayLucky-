const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const message=document.getElementById("message");
function calculateSum(dob){
    dob=dob.replaceAll("-","");
    let sum=0;
    for(let i=0;i<dob.length;i++){
        sum=sum+ Number(dob.charAt(i));
    }
    console.log(sum);
    return sum;
}
function clearFields(){
    dateOfBirth.value="";
    luckyNumber.value="";
}
function compareValues(sum,luckyNum){
            if(sum%luckyNum===0){
                message.innerText="Your Bithday Is Lucky!🎉";
                console.log(sum,luckyNum);
            }else{
                message.innerText="Your Birthday Is Not Lucky..😞";
            }
        }
function checkBirthDateIsLucky(){
    const dob= dateOfBirth.value;
    const sum= calculateSum(dob);
   compareValues(sum,luckyNumber.value);
   clearFields();
 
}
checkNumberButton.addEventListener("click",checkBirthDateIsLucky);