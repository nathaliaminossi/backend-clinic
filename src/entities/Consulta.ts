import { StatusConsulta } from "../types/StatusConsulta";

export class Consulta {
    public id: number;
    public data: Date;
    public motivo: string;
    public status: StatusConsulta;
    public valor: number;
    public pacienteId: number;
    public medicoId: number;
    public observacoes?: string

    constructor(id: number, data: Date, motivo: string, status: StatusConsulta, valor: number, pacienteId: number, medicoId: number, observacoes?: string) {
        this.id = id;
        this.data = data;
        this.motivo = motivo;
        this.status = status;
        this.valor = valor;
        this.pacienteId = pacienteId;
        this.medicoId = medicoId;
        this.observacoes = observacoes;
    }
}