
const isValidNumber= id => {
    let num = parseInt(id);
    let isValid = (num ? true : false);
    //  console.log ("isValidNumber: ",id,  num, isValid)
    if (isValid) {
        isValid = num < 0 ? false : true;
    }
    // console.log (" Final isValidNumber: ", num, isValid)
    return isValid
    
}

const isValidEmail = email => {
    let isValid = false;
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(email.match(regex)){
        isValid = true
    }
    return isValid;
}

module.exports ={isValidNumber, isValidEmail}