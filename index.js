window.addEventListener('load' , function () { 
    console.log('el contenido ha cargado');  
    
    var imagenes =[]
    
    imagenes[0]='carlos-ghostunner/img1.jpg'
    imagenes[1]='carlos-ghostunner/img2.jpg'
       
    var indiceImagenes=0;   
    function cambiarImagenes(){
    
        document.carlos1.src=imagenes[indiceImagenes];   
    if (indiceImagenes < 1) {
        indiceImagenes++;         
    }else{
    indiceImagenes = 0;
    }
    
    }

    
    setInterval(cambiarImagenes,2000);
    


    });



///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    window.addEventListener('load' , function () { 
        console.log('el contenido ha cargado');
        
        var imagenes =[]
        
        imagenes[0]='carlos-fornite/for1.jpg'
        imagenes[1]='carlos-fornite/for2.jpg'
        
        
        var indiceImagenes=0;
        
        function cambiarImagenes(){
        
            document.carlos2.src=imagenes[indiceImagenes];
        
        if (indiceImagenes < 1) {
            indiceImagenes++; 
            
        }else{
        indiceImagenes = 0;
        }
        
        }
        
        setInterval(cambiarImagenes,2000);
        
        });














