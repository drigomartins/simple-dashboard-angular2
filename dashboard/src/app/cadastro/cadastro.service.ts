import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class CadastroService{

    configUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

    cadastro: any = [{
        nome: "Rodrigo Oliveira Martins",
        cpf: "00000000000",
        estado: "53",
        cidade: "Brasilia",
        cep: "71691044",
        telefone: "61993384023"
    },
    {
        nome: "Roberto Oliveira Martins",
        cpf: "11111111111",
        estado: "53",
        cidade: "Brasilia",
        cep: "71691044",
        telefone: "61993384023"
    },
    {
        nome: "Emmanuel Mateus",
        cpf: "22222222222",
        estado: "53",
        cidade: "Brasilia",
        cep: "71691044",
        telefone: "61993384023"
    },
    {
        nome: "Joao da Silva",
        cpf: "33333333333",
        estado: "53",
        cidade: "Brasilia",
        cep: "71691044",
        telefone: "61993384023"
    },
    {
        nome: "Jose de Abreu",
        cpf: "44444444444",
        estado: "53",
        cidade: "Brasilia",
        cep: "71691044",
        telefone: "61993384023",
        data: "08/07/1994"
    }
];


    constructor(private http: HttpClient){

    }

    getUf(){
        console.log('aqui');
        return this.http.get(this.configUrl).toPromise();
    }

    getCidade(id){
        return this.http.get('http://servicodados.ibge.gov.br/api/v1/localidades/estados/' + id + '/municipios').toPromise();
    }

    listar(){
        return this.cadastro;
    }

    cadastrar(cadas: any) {
        this.cadastro.push(cadas);
    }
}