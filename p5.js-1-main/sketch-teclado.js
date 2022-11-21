function setup(){
    console.log("setup");
    createCanvas(200,200);
}


function draw(){
    clear ();
    background(123);
    console.log("teclaPulsada: "+keyCode );

    switch (keyCode) {
        case 40:
            text("abajo",75,100);
            break;
        case 38:
            text("arriba",75,75);
            break;
        case 37:
         text("izquierda",40,100);
         break;
        case 39:
         text("derecha",125,100);
           break;
        default:
            break;
    }


}
