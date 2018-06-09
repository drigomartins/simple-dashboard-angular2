import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CadastroService } from './cadastro.service';
import { Router } from '@angular/router';



@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {

    usuario: any = {};
    meuForm: FormGroup;
    uf;
    cidade;


    constructor(formBuilder: FormBuilder, private cadastroService: CadastroService, private router: Router) {

        this.cadastroService.getUf().then(dados => {
            this.uf = dados;
        }).catch(error => {
            console.log(error);
        });


        this.meuForm = formBuilder.group({

            nome: ['', Validators.minLength(5)],
            cpf: ['', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(14)])],
            estado: ['', Validators.required],
            cidade: [''],
            cep: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
            telefone: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(13)])],
            data: ['']
        });


    }

    cadastrar() {
        this.cadastroService.cadastrar(this.usuario);
        this.router.navigate(['']);
    }

    buscaCidade(id) {
        this.cadastroService.getCidade(id).then(dads => {
            this.cidade = dads;
        }).catch(err => {
            console.log(err);
        })
    }
}