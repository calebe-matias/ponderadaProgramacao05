class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    descrever() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }

}

let cachorro = new Animal('cachorro', 5);
let gato = new Animal('gato', 3);

cachorro.descrever();
gato.descrever();