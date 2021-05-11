export class Revenue {

    tipo: string
    descricao: string
    data: Date
    valor: number
    id: number

    constructor(id? : number ,tipo?: string, data?: Date, descricao?: string, valor?: number ) {
        this.tipo = tipo
        this.descricao = descricao
        this.data = data
        this.valor = valor
        this.id = id
    }
}