import { Stack } from './stack';
export class APND {
    palabra: string[];
    stack = new Stack();
    movimientos: string[] = [...this.stack.stack];
    estados: string[] = [];
    constructor(palabra: string[]){
        this.palabra = palabra;
    }
    
    recorrer(){
        let tamMitadPalabra = Math.round(this.palabra.length / 2)-1;
        this.palabra.forEach((element, index) => {
            if(index < tamMitadPalabra){
                this.reglasPrimeraMitad(element)
                this.estados.push('p')
            }else{
                this.reglasSegundaMitad(element)
                this.estados.push('q');
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
                        this.movimientos.push('pop #');
                        this.movimientos.push('push #a')
                        break;
                    case 'a':
                        this.stack.pop();
                        this.stack.push('a');
                        this.stack.push('a');
                        this.movimientos.push('pop a');
                        this.movimientos.push('push aa')
                        break;
                    case 'b':
                        this.stack.pop();
                        this.stack.push('b');
                        this.stack.push('b');
                        this.movimientos.push('pop b');
                        this.movimientos.push('push bb')
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
                        this.stack.push('a');
                        this.movimientos.push('pop #');
                        this.movimientos.push('push #a');
                        break;
                    case 'a':
                        this.stack.pop();
                        this.stack.push('a');
                        this.stack.push('b');
                        this.movimientos.push('pop a');
                        this.movimientos.push('push ab');
                        break;
                    case 'b':
                        this.stack.pop();
                        this.stack.push('b');
                        this.stack.push('b');
                        this.movimientos.push('pop b');
                        this.movimientos.push('push bb');                        
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
                    this.movimientos.push('pop a');
                }
                break;
            case 'b':
                if(this.stack.peek() === 'b'){
                    this.stack.pop();
                    this.movimientos.push('pop b');
                }
                break;
            case '':
                if(this.stack.peek() === '#'){
                    this.stack.pop();
                    this.stack.push('#');
                    this.movimientos.push('pop #');
                    this.movimientos.push('push #');
                    this.estados.push('r')
                }else {
                    console.log('No es palindromo');
                }
                break;
            default:
                break;
        }
    }

}