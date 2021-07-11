import { Stack } from './stack';
export class APND {
    palabra: string[];
    stack = new Stack();
    constructor(palabra: string[]){
        this.palabra = palabra;
    }
    
    recorrer(){
        let sizePalabra = Math.round(this.palabra.length / 2)-1;
        this.palabra.forEach((element, index) => {
            if(index < sizePalabra){
                this.reglasPrimeraMitad(element)
            }else{
                this.reglasSegundaMitad(element)
            }
        })
    }

    reglasPrimeraMitad(letra: string){
        switch (letra) {
            case 'a':
                switch (this.stack.peek()) {
                    case '#':
                        console.log('entro asi:')
                        this.stack.print();
                        this.stack.pop();
                        this.stack.push('#');                      
                        this.stack.push('a');
                        console.log('sale así');
                        this.stack.print();
                        break;
                    case 'a':
                        console.log('entro asi:')
                        this.stack.print();
                        this.stack.pop();
                        this.stack.push('a');
                        this.stack.push('a');
                        console.log('sale así');
                        this.stack.print();
                        break;
                    case 'b':
                        console.log('entro asi:')
                        this.stack.print();
                        this.stack.pop();
                        this.stack.push('b');
                        this.stack.push('b');
                        console.log('sale así');
                        this.stack.print();
                        break;
                    default:
                        break;
                }
                break;
            case 'b':
                switch (this.stack.peek()) {
                    case '#':
                        console.log('entro asi:')
                        this.stack.print();
                        this.stack.pop();
                        this.stack.push('#');                      
                        this.stack.push('a');
                        console.log('sale así');
                        this.stack.print();
                        break;
                    case 'a':
                        console.log('entro asi:')
                        this.stack.print();
                        this.stack.pop();
                        this.stack.push('a');
                        this.stack.push('b');
                        console.log('sale así');
                        this.stack.print();
                        break;
                    case 'b':
                        console.log('entro asi:')
                        this.stack.print();
                        this.stack.pop();
                        this.stack.push('b');
                        this.stack.push('b');
                        console.log('sale así');
                        this.stack.print();
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
                    console.log('entro asi:')
                    this.stack.print();
                    this.stack.pop();
                    console.log('sale así');
                    this.stack.print();
                }
                break;
            case 'b':
                if(this.stack.peek() === 'b'){
                    console.log('entro asi:')
                    this.stack.print();
                    this.stack.pop();
                    console.log('sale así');
                    this.stack.print();
                }
                break;
            case '':
                if(this.stack.peek() === '#'){
                    console.log('entro asi:')
                    this.stack.print();
                    this.stack.pop();
                    this.stack.push('#');
                    console.log('sale así');
                    this.stack.print();
                }else {
                    console.log('No es palindromo');
                }
                break;
            default:
                break;
        }
    }

}