import { Component, Output } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
    moduleId: module.id,
    selector: 'config',
    templateUrl: './config.component.html'
})
export class ConfigComponent {

    cor: any = 'bg-dark';

    constructor(private app: AppComponent){}

    salvar(){
        this.app.background = this.cor;
    }
}