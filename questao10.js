class Funcionario {
    constructor(nome, idade, salarioBase) {
        this.nome = nome;
        this.idade = idade;
        this.salarioBase = salarioBase;
    }
    calcularSalario() {
    }
}

class Professor extends Funcionario {
    constructor(nome, idade, salarioBase, disciplina, horasAula) {
        super(nome, idade, salarioBase); //Chama o construtor da classe pai(Funcionario)
        this.disciplina = disciplina; //Atribui a disciplina ao professor
        this.horasAula = horasAula; //Atribui a quantidade de horas por semana
    }
    calcularSalario(valorHora) {
        console.log('Salário do(a) professor(a) ' + this.nome + ': ' + this.horasAula * valorHora * 4); // 4 semanas no mês (salário mensal)
    }
}

let Bruna = new Professor('Bruna', 33, 6000, 'Artes', 35);
let Kizzy = new Professor('Kizzy', 34, 12000, 'Matemática', 25);

Kizzy.calcularSalario(160);
Bruna.calcularSalario(85);