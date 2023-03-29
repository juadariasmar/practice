'use strict'

class Product {
    constructor(numSerial) {
        this.numSerial = numSerial;
        this.timeWarranty = 100;
    }

    static get infoStore() {
        console.log("productos de la tienda patito Inc");
    }

    set warranty(value) {
        this.timeWarranty -= value;
    }

    get warranty() {
        return this.timeWarranty;
    }
}

class Screen extends Product {
    constructor(numSerial, brand, model, inch) {
        super(numSerial)
        this.brand = brand;
        this.model = model;
        this.inch = inch;
    }
    switchedOn() {
        this.warranty - 1;
        console.log(`La pantalla ${this.brand}, se ha encendido`)
    }
    volume() {
        console.log('El volumen se ha modificado')
    }
    info() {
        console.log(`La pantalla ${this.brand}, de modelo ${this.model} es de ${this.inch} pulgadas.`)
    }

    set weight(value) {
        this.kgs = value.trim();
    }

    get weight() {
        return this.kgs;
    }
}

const tvHall = new Screen('1234', 'master', 'oasis', '66');
const tvRoom = new Screen('2323', 'mast', 'ois', '62');