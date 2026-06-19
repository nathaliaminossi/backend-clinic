import { Pessoa } from "./Pessoa";




export class Medico extends Pessoa {
    especialidade: string;

    constructor(name: string, email: string, password: string, especialidade: string) {
        super(name, email, password);
        this.especialidade = especialidade;
    }

    getResumo(): string {
        return `Médico: ${this.name}, Especialidade: ${this.especialidade}`;
    }

}
/**
 * Herda de Pessoa
Tem os atributos específicos do médico (lembra quais eram?)
Implementa o método getResumo() do jeito que faz sentido pra um médico
 */