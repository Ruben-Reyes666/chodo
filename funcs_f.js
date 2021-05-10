function tercias(){
    var m="---Ninguna igualdad---"
    var n=document.getElementById("n").value;
    var x1= Math.trunc(Math.random()*10)+1;
    var x2= Math.trunc(Math.random()*10)+1;
    var x3= Math.trunc(Math.random()*10)+1;

    switch (x1){
        case 1:
            document.getElementById("box1").innerHTML="<img src='Xavier.1.jpg'>";
            break;
        case 2:
            document.getElementById("box1").innerHTML="<img src='Emmanuel.jpg'>";
            break; 
        case 3:
            document.getElementById("box1").innerHTML="<img src='Ruben.jpg'>";
            break;
        case 4:
            document.getElementById("box1").innerHTML="<img src='Nahomi.png'>";
            break;
        case 5:
            document.getElementById("box1").innerHTML="<img src='Nieto.PNG'>";
            break;
        case 6:
            document.getElementById("box1").innerHTML="<img src='issac,%20creo.png'>";
            break;
        case 7:
            document.getElementById("box1").innerHTML="<img src='sergionyx.jpg'>";
            break;
        case 8:
            document.getElementById("box1").innerHTML="<img src='alan.jpg'>";
            break;
        case 9:
            document.getElementById("box1").innerHTML="<img src='dieguito.jpg'>";
            break;
        case 10:
            document.getElementById("box1").innerHTML="<img src='alexis.jpg'>";
            break;
        }
    switch (x2){
        case 1:
            document.getElementById("box2").innerHTML="<img src='Xavier.1.jpg'>";
            break;
        case 2:
            document.getElementById("box2").innerHTML="<img src='Emmanuel.jpg'>";
            break; 
        case 3:
            document.getElementById("box2").innerHTML="<img src='Ruben.jpg'>";
            break;
        case 4:
            document.getElementById("box2").innerHTML="<img src='Nahomi.png'>";
            break;
        case 5:
            document.getElementById("box2").innerHTML="<img src='Nieto.PNG'>";
            break;
        case 6:
            document.getElementById("box2").innerHTML="<img src='issac,%20creo.png'>";
            break;
        case 7:
            document.getElementById("box2").innerHTML="<img src='sergionyx.jpg'>";
            break;
        case 8:
            document.getElementById("box2").innerHTML="<img src='alan.jpg'>";
            break;
        case 9:
            document.getElementById("box2").innerHTML="<img src='dieguito.jpg'>";
            break;
        case 10:
            document.getElementById("box2").innerHTML="<img src='alexis.jpg'>";
            break;
        }
    switch (x3){
        case 1:
            document.getElementById("box3").innerHTML="<img src='Xavier.1.jpg'>";
            break;
        case 2:
            document.getElementById("box3").innerHTML="<img src='Emmanuel.jpg'>";
            break; 
        case 3:
            document.getElementById("box3").innerHTML="<img src='Ruben.jpg'>";
            break;
        case 4:
            document.getElementById("box3").innerHTML="<img src='Nahomi.png'>";
            break;
        case 5:
            document.getElementById("box3").innerHTML="<img src='Nieto.PNG'>";
            break;
        case 6:
            document.getElementById("box3").innerHTML="<img src='issac,%20creo.png'>";
            break;
        case 7:
            document.getElementById("box3").innerHTML="<img src='sergionyx.jpg'>";
            break;
        case 8:
            document.getElementById("box3").innerHTML="<img src='alan.jpg'>";
            break;
        case 9:
            document.getElementById("box3").innerHTML="<img src='dieguito.jpg'>";
            break;
        case 10:
            document.getElementById("box3").innerHTML="<img src='alexis.jpg'>";
            break;
        }
    if((x1==x2)&&(x1==x3))
        m="Genial, !Tienes Tercias¡";
    else if ((x1==x2)||(x1==x3))
        m="Genial, !Tienes Pares¡";
        else if(x2==x3)
         m="Genial, !Tienes Pares¡";
    else
        m="Ninguna igualdad";
    
    document.getElementById("sal1").innerHTML="Hola "+n+" ¡tus resultados son!: ";
    document.getElementById("r").innerHTML=m;
}
