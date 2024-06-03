import { Veicolo } from "./Veicolo"; //importa la classe veicolo

export class Parcheggio
{

    Veicoli : Veicolo[];

    constructor(public nome : string, public indirizzo : string, public capienza : number, public tariffaOraria : number)
    {
        this.Veicoli = [];
    }
}