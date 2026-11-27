const login=()=>{
let uname=document.getElementById("name").value;
let passw=document.getElementById("pass").value;
if( uname==="sathyabama" && passw==="123"){
     document.getElementById("ans").innerHTML="valid"
     window.location.href = "form.html";
}else{
    document.getElementById("ans").innerHTML="notvalid"
}
}
const summit=()=>{
    let age = Number(document.getElementById("age").value);
    if(age >= 30 || age <= 0) {
        alert("Invalid Age");
        return;
    }
    document.getElementById("regMsg").innerHTML ="Registration Successful";
    document.getElementById("regMsg").style.color = "green";

}