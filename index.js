


    let username;
    let prcount = 0;
    let age = 12;
    let prbuy = false;
    prcount = prcount + 1;

    document.getElementById("signin").onclick = function(){
    
    let username = window.prompt("What's your username");
    document.getElementById("signin").innerHTML = "Logged in as: " + username;
}