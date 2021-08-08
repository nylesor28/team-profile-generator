
const isValidNumber= num => {
   // console.log("Check Num: ", num)
    return !isNaN(num) && num > 0;
    
}

const isValidEmail = email => {
    let isValid = false;
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(email.match(regex)){
        isValid = true
    }
    console.log("Validate Email: ", email, isValid)
    return isValid;
}

module.exports ={isValidNumber, isValidEmail}