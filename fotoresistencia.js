var five= require("johnny-five");  // Es un sofware que interpreta javascript para el arduino (Es el sistema operativo del sevidor)
var circuito= new five.Board();    // Es el circuito en si, es la funcion que trae toda la conexion entre javascript y nuestro arduino
var celda;


circuito.on("ready",prender);



function prender() 
{

    var configuracion={ pin:"A1",freq:250 };
    celda= new five.Sensor(configuracion);
    ledverde= new five.Led(13);
   

    button.on("down",abajo)


   
      bombillo();
 
    // console.log(celda.value);  // Si lo dejamos asi, el programa inicia tan rapido que no da chance que la fotocelda tome un valor
                              // para eso se tiene que crear una funcion que se llame a cada rato

    
    
}

function bombillo() 
{   
    
    luzsolar=celda.value;
    porcentajeluz= luzsolar*100/1024
    
   ledv();
 
    
     console.log("luz solar:  "+ Number((porcentajeluz).toFixed()) + " %");  // La funcion toFixed() limita 
                                                                    // el numeros de decimales mediente 
    function ledv() {
        if (porcentajeluz<20)
        {
          
           ledverde.on();
           
       }
       else  
       {
   
           ledverde.off();
           
       }
    }                                                                //el parametro y lo vuelve un string pero con
                                                                    // Number vuelve ese String en numero entero 
   

    
    
        
    


 

    setTimeout(bombillo,1000);
}


   