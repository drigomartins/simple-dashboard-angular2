import { Component } from '@angular/core';
import { CadastroService } from '../cadastro/cadastro.service';

@Component({
    moduleId: module.id,
    selector: 'principal',
    templateUrl: './principal.component.html'
})
export class PrincipalComponent{

    lista: any = [];
    constructor(private cadastro: CadastroService){
        this.lista = this.cadastro.listar();
    }

}    