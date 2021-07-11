import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { APND } from './models/automata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
})
export class AppComponent {
  title = 'AutomataPilaPalindromePar';

  arrayInput!: string[];

  // Con la siguiente expresion regular solo dejamos ingresar el lenguaje definido a y b
  blockSpace: RegExp = /[ab]/; 


  formAutomata: FormGroup = this.fb.group({
    inputs: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) {}

  capturarArray(): void{
    const {inputs}: {inputs: string} = this.formAutomata.value;
    if(inputs.length === 0){
      console.log('Esta vacio')
      this.showMessage('error', 'Error', 'No ha ingresado ninguna entrada.')
    }else if(inputs.length % 2 != 0){
      console.log('Es impar');
      this.showMessage('error', 'Error', 'La entrada que ingreso es Impar, solo resolvemos par.')
    }else {

      this.arrayInput = inputs.trim().split('');
      this.showMessage('success', 'Comenzemos', 'Empezara a resolver el automata para verificar si es palindrome.')
      
      // Ingresamos un elemento más para representar el vacío (#) cuando termina la palabra 
      this.arrayInput.push('');
      let terminado: string[] = this.arrayInput;
      let apdn = new APND(terminado);
      apdn.recorrer();
      // apdn.stack.print();
    }
  }

  showMessage(severity: string,summary: string, detail: string) {
    this.messageService.add({key: 'bc', severity, summary, detail});
  }

}
