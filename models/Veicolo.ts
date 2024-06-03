export class Veicolo 
{
    readonly targa : string;
    ingresso : Date;
    uscita : Date | undefined; // lo faccio per evitare di nominarli nel costruttore dato che momentaneamente sono vuoti
    importo : number | undefined;

    constructor(targa : string)
    {
        this.targa = targa;
        this.ingresso = new Date();
    }
}