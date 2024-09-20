class Nodo{
    private dato:number;
    private siguiente:Nodo | null;
    private anterior:Nodo | null;

    constructor(){
        this.dato = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
        this.siguiente = null;
        this.anterior = null;
    }

    public setSiguiente(siguiente:Nodo|null){
        this.siguiente = siguiente;
    }

    public setAnterior(anterior:Nodo|null){
        this.anterior = anterior;
    }

    public getDato():number{
        return this.dato;
    }

    public getSiguiente():Nodo|null{
        return this.siguiente;
    }
    public getAnterior():Nodo|null{
        return this.anterior;
    }
}

class ListaDobleEnlazada{
    private primero:Nodo | null;
    private ultimo:Nodo | null;

    constructor(){
        this.primero = null;
        this.ultimo = null;
    }

    public insertarNodo(){
        const nuevoNodo = new Nodo();
        if (!this.primero) {
            this.primero = nuevoNodo;
            this.ultimo = nuevoNodo;
        } else {
            nuevoNodo.setAnterior(this.ultimo);
            if (this.ultimo) {
                this.ultimo.setSiguiente(nuevoNodo);
            }
            this.ultimo = nuevoNodo;
        }
    }

    public imprimirLista(){
       let actual = this.primero;

        while (actual !== null) {
            if (actual.getDato() % 2 === 0) {
                console.log(actual.getDato()); 
            }
            actual = actual.getSiguiente();
        }
    }

    public imprimirTodaLista(){
       let actual = this.primero;

        while (actual !== null) {
            console.log(actual.getDato()); 
            actual = actual.getSiguiente();
        }
    }
}

const ListaDoble = new ListaDobleEnlazada()
ListaDoble.insertarNodo()
ListaDoble.insertarNodo()
ListaDoble.insertarNodo()
ListaDoble.insertarNodo()
ListaDoble.insertarNodo()

ListaDoble.imprimirTodaLista()