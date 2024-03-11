class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    descrever() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

class Gato extends Animal {
    constructor(nome, idade, cor) {
        super(nome, idade);
        this.cor = cor;
    }
    miar() {
        console.log('Miau!');
    }
}

let cachorro = new Animal('cachorro', 5);
let gato = new Gato('gato', 3, 'preto');

cachorro.descrever();
gato.descrever();
gato.miar();