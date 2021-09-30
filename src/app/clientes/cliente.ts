import { data } from "jquery";

export class Cliente {
    id: number = 0;
    nome: string = "";
    cpf: string = "";
    dataCadastro: string = "";

    Cliente(id:number, nome:string, cpf:string, dataCadastro:string){
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.dataCadastro = dataCadastro;
    }

}