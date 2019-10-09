

// sign up form
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    console.log("Signup form",email, password);
    console.log("e",e);
    

    //Signup user 
    auth.createUserWithEmailAndPassword(email,password).then(cred =>{
        console.log("cred", cred);
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        signupForm.reset();
        alert(errorMessage);
      })

    //Sign out 
    const logout = document.querySelector('#logout');
    logout.addEventListener('click', (e)=>{
        e.preventDefault();
        auth.signOut().then(()=>{
            console.log('User sign out');
        })
    })

    const login = document.querySelector('#login-form');
    login.addEventListener('click', (e)=>{
        e.preventDefault();

        const email = login['login-email'].value;
        const password = login['login-password'].value;

        auth.signInWithEmailAndPassword(email, password).then(cred=>{
            console.log('sign in',cred.user);
            // Close modal and reset the page
            const modal = document.querySelector('#modal-login');
            M.Modal.getInstance(modal).close();
            login.reset();
        })
    })
})









