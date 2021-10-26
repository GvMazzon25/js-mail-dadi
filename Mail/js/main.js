//Lista 3 E-Mail
const mailList = ['gigiomarchetti@gmail.com','martinaverdi@libero.it','gvmazzon25@gmail.com']
console.log(mailList)

//E-Mail dell'utente
const nameInput = document.getElementById('email');
const accessBtn = document.querySelector('.btn-access');

//verifica email utente
accessBtn.addEventListener('click', function() {
    //input
    const user = nameInput.value.toLowerCase();
    console.log(user)
})


//Controllare se l'E-Mail è nella lista

//Output