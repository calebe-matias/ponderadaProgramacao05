class SomadorDeNotas {
    constructor() {
        this.total = 0;
    }
    adicionarNota(nota) {
        this.total += nota;
    }
    verTotal() {
        console.log(this.total);
    }
}

let somador = new SomadorDeNotas();
somador.adicionarNota(10);
somador.adicionarNota(5);
somador.adicionarNota(8);

somador.verTotal(); // 23