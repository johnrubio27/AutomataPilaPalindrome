import { Stack } from './stack';
export class APND {
    palabra: string[];
    stack = new Stack();
    constructor(plabra: string[]){
        this.palabra = plabra;
    }
    
    recorrer(){
        this.stack.print();
    }

}