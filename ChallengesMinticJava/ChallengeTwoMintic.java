//CuentaBanco.java

public class CuentaBanco {

    //Inserte acá los atributos
    
    private String numeroCuenta;
    private String nombrePropietario;
    private double saldo;

    //Inserte acá el método constructor
    
    public CuentaBanco (String numeroCuenta, String nombrePropietario, double saldo){
        this.numeroCuenta=numeroCuenta;
        this.nombrePropietario=nombrePropietario;
        this.saldo=saldo;
    }

    //Inserte acá los SETTERS Y GETTERS
    
    public String getNumeroCuenta(){
        return numeroCuenta;
    }
    public void setNumeroCuenta(String numeroCuenta){
        this.numeroCuenta=numeroCuenta;
    }
    public String getNombrePropietario(){
        return nombrePropietario;
    }
    public void setNombrePropietario(String nombrePropietario){
        this.nombrePropietario=nombrePropietario;
    }
    
     public double getSaldo(){
        return saldo;
    }
    public void setSaldo(double saldo){
        this.saldo=saldo;
    }


    //Inserte acá los métodos (NO LOS GETTER Y SETTERS)
    
    public void depositar(double c){
        saldo = saldo + c;
    }
    
    public void retirar(double c){
        double comision = c + (c*0.05);
        if(saldo > comision ){
            saldo = saldo-comision;
        }
         
    }
    
}

//CuentaAhorro.java

public class CuentaAhorro extends CuentaBanco {

    //Inserte acá el método constructor
    
    public CuentaAhorro(String numeroCuenta, String nombrePropietario, double saldo){
        super(numeroCuenta, nombrePropietario, saldo);
    }

    //Inserte acá los métodos (NO LOS GETTER Y SETTERS)
    
    public double getIEA(){
        if (super.getSaldo() < 1000000) {
            return  0.01;
        } else if (super.getSaldo() >= 1000000 && super.getSaldo() < 2000000) {
            return  0.0175;
        } else {
            return  0.023;
        }
    }
    public void pagarInteres(int dias){
        if(dias >= 1) {
            for(int i = 0; i < dias; i++){
                setSaldo(getSaldo() * (1 + getIEA() / 365));
       }
    }
    }
}

//CuentaCorriente.java

public class CuentaCorriente extends CuentaBanco {

    //Inserte acá los atributos
    private double cuotaManejo;

    //Inserte acá el método constructor
    public CuentaCorriente (String numeroCuenta, String nombrePropietario, double saldo, double cuotaManejo){
        super(numeroCuenta, nombrePropietario, saldo);
        this.cuotaManejo=cuotaManejo;
    }


    //Inserte acá los SETTERS Y GETTERS
    public double getCuotaManejo() {
        return cuotaManejo;
    }

    public void setCuotaManejo(double cuotaManejo) {
        this.cuotaManejo = cuotaManejo;
    }


    //Inserte acá los métodos (NO LOS GETTER Y SETTERS)
    public void cobrarCuotaManejo(){
        
        super.setSaldo(super.getSaldo()-cuotaManejo);
    }
}
