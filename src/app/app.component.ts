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

  esPar: boolean = false;

  arrayInput!: string[];

  estadoP: Regla[] = [
    {label: 'b,b / bb'},
    {label: 'a,b / bb'},
    {label: 'b,a / ab'},
    {label: 'a,a / aa'},
    {label: 'b,# / #b'},
    {label: 'a,# / #b'}
  ]

  estadoQ: Regla[] = [
    {label: 'b,b / λ'},
    {label: 'a,a / λ'}
  ]

  estadoR: Regla[] = [
    {label: 'λ,# / #'}
  ]

  // Con la siguiente expresion regular solo dejamos ingresar el lenguaje definido a y b
  blockSpace: RegExp = /[ab]/;


  // Formualario donde obtenemos la palabra.
  formAutomata: FormGroup = this.fb.group({
    inputs: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) { }

  // Obtenemos el valor de la palabra y realizamos la operaciones del automata.
  capturarArray(): void {

    const { inputs }: { inputs: string } = this.formAutomata.value;
    this.esPar = false;

    if (inputs.length === 0) {
      console.log('Esta vacio')
      this.showMessage('error', 'Error', 'No ha ingresado ninguna entrada.')
    } else if (inputs.length % 2 != 0) {
      console.log('Es impar');
      this.showMessage('error', 'Error', 'La entrada que ingreso es Impar, solo resolvemos par.')
    } else {
      this.esPar = true;
      this.arrayInput = inputs.trim().split('');
      this.showMessage('success', 'Comenzemos', 'Empezara a resolver el automata para verificar si es palindrome.', 'tl')

      // Ingresamos un elemento más para representar el vacío (#) cuando termina la palabra 
      this.arrayInput.push('');
      let terminado: string[] = this.arrayInput;
      let apdn = new APND(terminado);

      apdn.recorrer();
      console.log(apdn.movimientos);
      apdn.estados.pop();
      console.log(apdn.estados);
    }
  }

  // Muestra los mensaje de los errores o correcto.
  showMessage(severity: string, summary: string, detail: string, key ?: string) {
    this.messageService.add({ key: key ? key : 'bc', severity, summary, detail });
  }

}

interface Regla {
  label: string
}