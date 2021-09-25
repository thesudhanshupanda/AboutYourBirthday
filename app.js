const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-number");
const message = document.querySelector("#display-message");


checkButton.addEventListener("click", checkBirthdate );

function checkBirthdate(){
    const dob = dateOfBirth.value ;
    const sum = calculateSum(dob) ;
    if(sum && luckyNumber.value > 0){
        compareValues(sum,luckyNumber.value);
    }
    else{
         message.innerText = " please enter a both the fields"
    }

}

function compareValues(sum , luckyNumber){
    if (sum % luckyNumber === 0) {
        message.innerText = "Your birthdate is lucky!";
    }else {
        message.innerText = "Your birthdate is not so lucky."
    }
}

function calculateSum(dob){
    dob = dob.replaceAll("-", "");
    let sum =0;
    for (let i = 0 ; i < dob.length ; i++){
        sum = sum + Number(dob.charAt(i));
    }
    return sum;


}