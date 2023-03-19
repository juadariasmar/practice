//Persona.java

public abstract class Persona {

    //Inserte acá los atributos
    
    private String id;
    private String nombre;
    private String email;
    private String idioma;
    private String url;
    
    public Persona ( String id, String nombre, String email, String idioma) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.idioma = idioma;
        
        this.url = "educursos.com";
        
    }
    
    //Inserte acá el método constructor
     public String getId () {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getIdioma() {
        return this.idioma;
    }

    public void setIdioma(String idioma) {
        this.idioma = idioma;
    }

    public String getUrl() {
        return this.url;
    }

    //Inserte acá los SETTERS Y GETTERS
    public void setUrl(String url) {    
        this.url = url;
    }

    //Inserte acá el método abstracto
    public abstract void dirigir();


    public String toString() {
        return "Persona{" + "id=" + id + ", nombre=" + nombre + ", email=" + email + ", idioma=" + idioma + ", url=" + url + '}';
    }

      
}

//Estudiante.java

public class Estudiante extends Persona {

    public Estudiante(String id, String nombre, String email, String idioma) {
        super(id, nombre, email, idioma);
    }
    
    
    public void dirigir () {
        this.setUrl( this.getUrl() + "/" + this.getIdioma() + "/estudiante" );
    }

    @Override
    public String toString() {
        return  "Estudiante" +  super.toString();
    }
    
    
}
