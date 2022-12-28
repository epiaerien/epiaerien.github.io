
function toggle_text(id){
    span = document.getElementById(id);
    if(span.style.display == "none"){
        span.innerText = random(4);
        span.style.display = "inline";
    }
    else{
        span.style.display = "none";
    }
}