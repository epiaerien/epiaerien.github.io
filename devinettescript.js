function nbAlea(min,max)
{
    var nb = min+(max-min+1)*Math.random();
    return Math.floor(nb);
}


var compteur = 0, 
nombre=nbAlea(0,100); 

function fonction()
{
    
    var choix = document.getElementById("choix").value; 
    var message = document.getElementById("message");
    compteur++; 
    message.innerText="Encore "+compteur+" tentatives"; 
    
    var resultat = document.getElementById("resultat"); 
    if(parseInt(choix)> nombre)
    {
        resultat.innerText="le nombre à trouver est plus petit"
    }
    else if(parseInt(choix)< nombre)
    {
        resultat.innerText="le nombre à trouver est plus grand"
    }
    else{
        alert("Gagné"); 
    }
    if(compteur==10)
    alert("Pus de tentative")
}