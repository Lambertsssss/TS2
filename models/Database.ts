import { Parcheggio } from "./Parcheggio";
import { Veicolo } from "./Veicolo";

//Quando il controller dovrà accedere hai dati dovrà prendere i dati da qua
export class Database
{
    Parcheggio : Parcheggio;

    constructor()
    {
        this.Parcheggio = new Parcheggio("Reggio Emilia FS", "Via della stazione, Reggio Emilia", 123, 2);

        this.Parcheggio.Veicoli.push(new Veicolo('AA000AA'))
        this.Parcheggio.Veicoli.push(new Veicolo('BB000BB'))
    }
}