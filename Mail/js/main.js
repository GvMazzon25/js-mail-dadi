//Lista 3 E-Mail
const mailList = ['gigiomarchetti@gmail.com','martinaverdi@libero.it','gvmazzon25@gmail.com']
//console.log(mailList);

//E-Mail dell'utente
const nameInput = document.getElementById('email');
const accessBtn = document.querySelector('.btn-access');

//verifica email utente
accessBtn.addEventListener('click', function() {
    //input
    const user = nameInput.value.toLowerCase();
    console.log(user);
    
    //controllo inserimento
    if( user === ''){
        alert("Inserire email");
        console.log(user)
    }else{
        //Controllo presenza email in lista 
        let emailFound = false; //flag
        console.log(emailFound)
        for (i = 0; i < mailList.length; i++){
            console.log(mailList[i])
            //ottenere il dato nella email List
            if(mailList[i] === user){
                emailFound = true;
                //Output
                alert('Mail found')
            }else{
                alert('Mail not found')
            }
        }
    }
})

   