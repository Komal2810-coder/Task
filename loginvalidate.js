function validate(){
    var userName=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(userName=="admin" && password=="user")
    {
        alert("Login Success");
        // Location.assign("success.html");
        Location.assign("http://127.0.0.1:5500/success.html");
        // window.location.href="http://127.0.0.1:5500/success.html";
        // console.log("asfs");
        // window.location.replace("success.html");

        // return false;
        
        // console.log(e );
        // console.log("abc");
        // http://127.0.0.1:5500/
        // return false;
    }
    else{
        alert("failed");
        // window.location=("login.html")

        // window.location="";
        // return false;
    }
}