import { Stack } from './stack';
export class APND {
    palabra: string[];
    stack = new Stack();
    movimientos: string[] = [...this.stack.stack];
    contador: number = 0;
    estados: string[] = [];
    esPalindrome: boolean = false;
    constructor(palabra: string[]){
        this.palabra = palabra;
    }
    
    recorrer(){
        let tamMitadPalabra = Math.round(this.palabra.length / 2)-1;
        this.palabra.forEach((element, index) => {
            console.log(this.contador)
            this.contador++;
            if(index < tamMitadPalabra){
                this.reglasPrimeraMitad(element)
                this.estados.push(`${this.contador} P`)
            }else{
                this.reglasSegundaMitad(element)
                this.estados.push(`${this.contador} Q`);
            }
        })
    }

    reglasPrimeraMitad(letra: string){
        switch (letra) {
            case 'a':
                switch (this.stack.peek()) {
                    case '#':
                        this.stack.pop();
                        this.stack.push('#');                      
                        this.stack.push('a');
                        this.movimientos.push(`${this.contador} pop #`);
                        this.movimientos.push(`${this.contador} push #a`);
                        break;
                    case 'a':
                        this.stack.pop();
                        this.stack.push('a');
                        this.stack.push('a');
                        this.movimientos.push(`${this.contador} pop a`);
                        this.movimientos.push(`${this.contador} push aa`)
                        break;
                    case 'b':
                        this.stack.pop();
                        this.stack.push('b');
                        this.stack.push('a');
                        this.movimientos.push(`${this.contador} pop b`);
                        this.movimientos.push(`${this.contador} push ba`)
                        break;
                    default:
                        break;
                }
                break;
            case 'b':
                switch (this.stack.peek()) {
                    case '#':
                        this.stack.pop();
                        this.stack.push('#');                      
                        this.stack.push('b');
                        this.movimientos.push(`${this.contador} pop #`);
                        this.movimientos.push(`${this.contador} push #b`);
                        break;
                    case 'a':
                        this.stack.pop();
                        this.stack.push('a');
                        this.stack.push('b');
                        this.movimientos.push(`${this.contador} pop a`);
                        this.movimientos.push(`${this.contador} push ab`);
                        break;
                    case 'b':
                        this.stack.pop();
                        this.stack.push('b');
                        this.stack.push('b');
                        this.movimientos.push(`${this.contador} pop b`);
                        this.movimientos.push(`${this.contador} push bb`);                        
                        break;
                    default:
                        break;
                }
                break;        
            default:
                break;
        }
    }

    reglasSegundaMitad(letra: string){
        switch (letra) {
            case 'a':
                if(this.stack.peek() === 'a'){
                    this.stack.pop();
                    this.movimientos.push(`${this.contador} pop a`);
                }
                break;
            case 'b':
                if(this.stack.peek() === 'b'){
                    this.stack.pop();
                    this.movimientos.push(`${this.contador} pop b`);
                }    
                break;
            case '':
                if(this.stack.peek() === '#'){
                    this.stack.pop();
                    this.stack.push('#');
                    this.movimientos.push(`${this.contador} pop #`);
                    this.movimientos.push(`${this.contador} push #`);
                    this.estados.push(`${this.contador} R`)
                    this.esPalindrome = true;
                }else {
                    console.log('No es palindromo');
                    this.esPalindrome = false;
                }
                break;
            default:
                break;
        }
    }

}