function validateform(){
    // name
    var name1=document.getElementById('fname').value;
    a=name1.includes('@');
    b=name1.includes('gmail.com');
    if(name1 == false){
        document.getElementById('name-error').innerHTML="fill in the detailes";
        return false
    }
     if(a != true){
        document.getElementById('name-error').innerHTML="**include @";
        document.getElementById('fname').style.border="2px solid red";

        return false
    }
     if(b != true){
        document.getElementById('name-error').innerHTML="**include gmail.com";
        return false
    }else{
        document.getElementById('name-error').innerHTML="";
        document.getElementById('fname').style.border="2px solid black";

    }

    // password
    var pass1=document.getElementById('password').value;
    if(pass1 == false){
        document.getElementById('pass-error').innerHTML="password required";
        return false
    }
    if(pass1.search(/[0-9]/)==-1){
        document.getElementById('pass-error').innerHTML="Include numeric values";
        return false
    }
    if(pass1.search(/[A-Z]/)==-1){
        document.getElementById('pass-error').innerHTML="Include uppercase values";
        return false
    }
    if(pass1.search(/[!\@\#\$\%\^\&\*\(\)\_\=\+\{\}\:\'\"\?\>\<\.\,]/)==-1){
        document.getElementById('pass-error').innerHTML="Include special characters";
        return false
    }
    if(pass1.length > 10){
        document.getElementById('pass-error').innerHTML="Password cannot be more then 10";
        document.getElementById('password').style.border="2px solid red";
        return false
    }else{
        document.getElementById('pass-error').innerHTML="";
        document.getElementById('password').style.border="2px solid black";
    }
    // confirm password
    var conpass=document.getElementById('confirm-pass').value;
    if(conpass == false){
        document.getElementById('confirm-pass-error').innerHTML="confirm your password";
        return false
    }
    if(conpass != pass1){
        document.getElementById('confirm-pass-error').innerHTML="Password not matched";
        document.getElementById('confirm-pass').style.border="2px solid red";
        return false
    }else{
        document.getElementById('confirm-pass-error').innerHTML="";
        document.getElementById('confirm-pass').style.border="2px solid black";
    }
    // username
    var username1=document.getElementById('Username').value;
    if( username1 == false){
        document.getElementById('user-error').innerHTML="fill in detailes";
        return false
    }
    if(username1.length > 10){
        document.getElementById('user-error').innerHTML=" user name cannot be more then 10 characters";
        document.getElementById('Username').style.border="2px solid red";
        return false
    }else{
        document.getElementById('user-error').innerHTML="";
        document.getElementById('Username').style.border="2px solid black";
        
    }
    // comment
    var comment1=document.getElementById('comm').innerHTML;
    
    if(comment1 == "fuck"){
        document.getElementById('comment-error').innerHTML=" user not allowed to use vulgar words";
        return false
    } else{
        document.getElementById('comment-error').innerHTML=" ";
        
    }
}