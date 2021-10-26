//Lista 3 E-Mail
const mailList = ['gigiomarchetti@gmail.com','martinaverdi@libero.it','gvmazzon25@gmail.com']
console.log(mailList);

//E-Mail dell'utente
const nameInput = document.getElementById('email');
const accessBtn = document.querySelector('.btn-access');

//verifica email utente
accessBtn.addEventListener('click', function() {
    //input
    const user = nameInput.value.toLowerCase();
    console.log(user);
    
    //controllo inserimento

    if( user === 0){
        alert("Inserire email");
    }else{
        //Controllo presenza email in lista 
        let emailFound = false; //flag
    }

    for (i = 0; i < mailList.length; i++){
       
        //ottenere il dato nella email List
        if(mailList[i] === user){
            emailFound = true;
            breack; 
        }
    }
})

    console.log()


//Output