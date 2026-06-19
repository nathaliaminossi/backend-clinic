


export abstract class Pessoa {
    name: string;
    email: string;
    password: string;

    constructor(name: string, email: string, password: string) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    abstract getResumo(): string;
}


/**
 * Atributos: nome, email, senha
Um construtor que recebe esses 3 valores e os atribui
O método abstrato getResumo()
 */