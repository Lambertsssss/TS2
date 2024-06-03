import { Database } from "../models/Database";
import { Veicolo } from "../models/Veicolo";

export class ParcheggiController
{
    private db : Database;
    constructor()
    {
        this.db = new Database();
    }

    getAll() : Veicolo[]
    {
        return this.db.Parcheggio.Veicoli.filter(v => v.uscita == undefined) // voglio i veicoli che non hanno la cond. d'uscita
    }

    getNumber() : number
    {
        return this.getAll().length; // restituisce la lunghezza quindi il numero di veicoli       
    }
}