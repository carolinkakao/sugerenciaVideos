// Generamos las clases y la herencia:
class Multimedia {
    constructor(url) {
      const _url = url;
      this.pepito = () => _url;
    }

    get url() {
      return this.pepito();
    }
    setInicio() {
      return "Este método es para realizar un cambio en la URL del video";
    }
  }
  
  class Reproductor extends Multimedia {
    constructor(url, id) {
      super(url);
      const _id = id;
      this.getId = () => _id
    }
    get id() {
      return this.getId();
    }
    playMultimedia() {
      Medios(this.url, this.id);
    }
    setInicio(tiempo = 0) {
      const idHTML = document.getElementById(this.id);
      if (! url ||!idHTML) return;
      idHTML.setAttribute("src", `${this.url}?start=${tiempo}`);
    }
  }
  
  const Medios = (() => {
    const agregarMedio = (url, id) => {
      const idHTML = document.getElementById(id);
      if (! url ||!idHTML) return;
      idHTML.setAttribute("src", url);
    }
    // Closure de una función!
    const agregarMedioPublica = (url, id) => agregarMedio(url, id);
    
    return agregarMedioPublica;
  })();
  
  const pelicula = new Reproductor("https://www.youtube.com/embed/awzWdtCezDo", "pelicula");
  pelicula.playMultimedia();
  
  const musica = new Reproductor("https://www.youtube.com/embed/30w8DyEJ__0", "musica");
  musica.playMultimedia();
  
  
  const serie = new Reproductor("https://www.youtube.com/embed/FRn6xXXF-7s", "serie");
  serie.playMultimedia();