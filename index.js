function evaluation()
{
    let t=document.getElementById("temperature").value
    console.log(t);
    document.getElementById("resultat").innerHTML=`La temperature est`
    if(t<0)
   document.getElementById("resultat").innerHTML+=` glaciale `
    else if(t<15)
    document.getElementById("resultat").innerHTML+=` froide`
    else if(t<35)
    document.getElementById("resultat").innerHTML+=` belle`
    else
    document.getElementById("resultat").innerHTML+=` chaude`

}