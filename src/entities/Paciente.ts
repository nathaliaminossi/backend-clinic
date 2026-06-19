import { Pessoa } from "./Pessoa";


export class Paciente extends Pessoa {
    dataNascimento: Date;
    convenio: string;

    constructor(name: string, email: string, password: string, dataNascimento: Date, convenio: string) {
        super(name, email, password );
        this.dataNascimento = dataNascimento;
        this.convenio = convenio;
    }

    getResumo(): string {
        return `Paciente: ${this.name}, Data de Nascimento: ${this.dataNascimento}, Convênio: ${this.convenio}`;
    }
}