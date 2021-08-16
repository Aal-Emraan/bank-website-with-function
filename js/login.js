document.getElementById('loginButton').addEventListener('click',function(){
    // get email 
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    // get password 
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    
    // validation 
    if(userEmail == 'developer.aalemraan@gmail.com' && userPassword == '12'){
        window.location.href = 'banking.html';
    }else{
        window.alert('incorrect email or password.')
    }
})

document.getElementById('user-email').addEventListener('click',function(){
    console.log()
})