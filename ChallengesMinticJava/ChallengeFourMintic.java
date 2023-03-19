//Inmueble.java

//EL CALIFICADOR GENERARÁ ERROR SI USTED NO IMPLEMENTA TODOS LOS MÉTODOS ESPECIFICADOS EN EL ENUNCIADO
public class Inmueble {

    //Inserte acá los atributos
    private String nCasa;
    private String IDArrendador;
    private double costoMensual;
    private int cantidadMesesArrendado;


    //Inserte acá el método constructor
   public Inmueble(String nCasa, String IDArrendador, double costoMensual, int cantidadMesesArrendado) {
        this.nCasa = nCasa;
        this.IDArrendador = IDArrendador;
        this.costoMensual = costoMensual;
        this.cantidadMesesArrendado = cantidadMesesArrendado;
    }

    //Inserte acá los SETTERS Y GETTERS
    public String getnCasa() {
        return nCasa;
    }

    public void setnCasa(String nCasa) {
        this.nCasa = nCasa;
    }

    public String getIDArrendador() {
        return IDArrendador;
    }

    public void setIDArrendador(String IDArrendador) {
        this.IDArrendador = IDArrendador;
    }

    public double getCostoMensual() {
        return costoMensual;
    }

    public void setCostoMensual(double costoMensual) {
        this.costoMensual = costoMensual;
    }

    public int getCantidadMesesArrendado() {
        return cantidadMesesArrendado;
    }

    public void setCantidadMesesArrendado(int cantidadMesesArrendado) {
        this.cantidadMesesArrendado = cantidadMesesArrendado;
    }
    

}

//Condominio.java

//EL CALIFICADOR GENERARÁ ERROR SI USTED NO IMPLEMENTA TODOS LOS MÉTODOS ESPECIFICADOS EN EL ENUNCIADO
import java.util.ArrayList;
public class Condominio {

    //Inserte acá los atributos
    private ArrayList <Inmueble>  inmuebles = new ArrayList <>(); 
    
    //Inserte acá el método constructor
    public Condominio() {
         this.inmuebles=inmuebles;
    }

    //Inserte acá los SETTERS Y GETTERS
    public ArrayList<Inmueble> getInmuebles() {
        return inmuebles;
    }

    public void setInmuebles(ArrayList<Inmueble> inmuebles) {
        this.inmuebles = inmuebles;
    }


    //Inserte acá los métodos (NO LOS GETTER Y SETTERS)
    
    int m=0;
    public void agregarInmueble (Inmueble i){
    boolean existe = false;
    for(int m=0; m<inmuebles.size(); m++){
        if(inmuebles.get(m).getnCasa().equals(i.getnCasa())){
            existe = true;
        }
    }
        if ( existe == false){
            inmuebles.add(i);
    }
}

//   for(int m=0; m<inmuebles.size(); m++){
    
    public void eliminarInmueble (String ID){
     if (!inmuebles.isEmpty()){
        for(int m=0; m<inmuebles.size(); m++){
              if(inmuebles.get(m).getnCasa().equals(ID)){ 
                     inmuebles.remove(m);
                         }
 
             }
        
         }
    }
    
    
    public double calcularArriendoMensualCondominio (){  
     double sum = 0;
            for(int m=0; m<inmuebles.size(); m++){
                sum += inmuebles.get(m).getCostoMensual(); 
            }        
         return sum;
    }

   public double promedioCostoInmueble(){  
     double prom = 0;
     double sum= 0;
            for(int m=0; m<inmuebles.size(); m++){
                sum += inmuebles.get(m).getCostoMensual();
            } 
            prom = sum/inmuebles.size();
            
         return prom;
    }
   

    
    //rango = Math.pow(inmuebles.get(m).getCostoMensual()- promedioCostoInmueble(),2f);

       
   public double desviacionEstandarCostoInmueble (){
        double rango;
        double varianza = 0;
        
        for (int j = 0; j < inmuebles.size(); j++) {
   
            rango = Math.pow(inmuebles.get(j).getCostoMensual()- promedioCostoInmueble(),2f);
            varianza = varianza + rango;
                       
        }
        
        varianza = varianza / inmuebles.size();
        
        return Math.sqrt(varianza);
    
    
}
}
