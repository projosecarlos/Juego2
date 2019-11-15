export class Juego{
    
    fin=false;
    pos=0;
    pos1=0;
    j1=false;
    j2=false;


    constructor(){
        
    }

    turno(){
        if(this.j1==false){
            return "j1";
        }
        if(this.j2==false){
            return "j2";
        }
    }
    tirar(){//tirada
        if(this.j1==false){
        if(this.fin==false){
        var tirada=parseInt(Math.random()*6+1);
        this.j1=true;
        this.j2=false;
        if((this.pos+tirada)==29){
            this.pos=this.juego(this.pos+tirada);
            this.fin=true;
            console.log("Fin del juego,ha ganado el jugador 1!");
        }else if((this.pos+tirada)<29){
            this.pos=this.juego(this.pos+tirada);
        }else if((this.pos+tirada)>29){
            this.pos=this.juego(29-((this.pos+tirada)-29)); 
        }
        }else{
            console.log("El juego ya ha terminado");
        }
        return this.pos;
    }else{
        console.log("Le toca al jugador 2");
    }
    }

    tirar1(){//tirada
        if(this.j2==false){
        if(this.fin==false){
        var tirada=parseInt(Math.random()*6+1);
        this.j2=true;
        this.j1=false;
        if((this.pos1+tirada)==29){
            this.pos1=this.juego(this.pos1+tirada);
            this.fin=true;
            console.log("Fin del juego, ha ganado el jugador 2");
        }else if((this.pos1+tirada)<29){
            this.pos1=this.juego(this.pos1+tirada);
        }else if((this.pos+tirada)>29){
            this.pos1=this.juego(29-((this.pos1+tirada)-29)); 
        }
        }else{
            console.log("El juego ya ha terminado");
        }
        return this.pos1;
    }else{
        console.log("Le toca al jugador 1");
    }
    }


    juego(posicion){//subidas y bajadas del juego
        switch(posicion){
            case 3:posicion=10;break;
            case 7:posicion=2;break;
            case 12:posicion=17;break;
            case 18:posicion=9;break;
            case 21:posicion=15;break;
            case 23:posicion=28;break;
            case 27:posicion=5;break;
        }
        return posicion;
    }
    jugar(){//simula el juego entero
        while(this.fin==false){
            this.tirar();
            this.mostrarPosicion();
            this.tirar1();
            this.mostrarPosicion1();
        }
    }


    mostrarPosicion(){//muestra posicion del jugador
        console.log("La Posicion del jugador es: "+this.pos);
    }
    mostrarPosicion1(){//muestra posicion del jugador
        console.log("La Posicion de la maquina es: "+this.pos1);
    }
}





