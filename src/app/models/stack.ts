export class Stack{
    stack: string[];
    constructor() {
        this.stack = ['#'];
    }

    // push: Agrega un nuevo valor a la pila, ubicándolo al final de ésta.
    push(element: string){
        this.stack.push(element);
        return this.stack;
    }

    // pop: Retorna el último valor ingresado a la pila, sacándolo de ésta.
    pop(){
        return this.stack.pop();
    }

    // peek: Retorna el último valor ingresado a la pila, sin sacarlo de ésta.
    peek(){
        return this.stack[this.stack.length - 1];
    }

    // size: Retorna el número de elementos que contiene la pila.
    size(){
        return this.stack.length;
    }

    // print: Muestra el contenido de la pila.
    print() {
        console.log(this.stack);
    }
}