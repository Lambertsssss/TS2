import { Database } from "../models/Database";
import { Veicolo } from "../models/Veicolo";

export class ParcheggiController {
    private db: Database;

    constructor() {
        this.db = new Database();
    }

    getAll(): Veicolo[] {
        return this.db.Parcheggio.Veicoli.filter(v => v.uscita == undefined); // voglio i veicoli che non hanno la cond. d'uscita
    }

    getNumber(): number {
        return this.getAll().length; // restituisce la lunghezza quindi il numero di veicoli       
    }

    addVeicolo(targa: string): boolean {
        if (this.db.Parcheggio.Veicoli.some(t => t.targa == targa)) {
            return false;
        } else {
            this.db.Parcheggio.Veicoli.push(new Veicolo(targa));
            return true;
        }
    }

    removeVeicolo(targa: string): number | null {
        const index = this.db.Parcheggio.Veicoli.findIndex(t => t.targa === targa);
        if (index !== -1) {
            const veicolo = this.db.Parcheggio.Veicoli[index];
            veicolo.uscita = new Date();

            // Calcolo importo
            const diffMs = veicolo.uscita.getTime() - veicolo.ingresso.getTime();
            const diffMin = Math.ceil(diffMs / (1000 * 60));
            const quarterHours = Math.ceil(diffMin / 15);
            const importo = quarterHours * 1; // 1 euro per ogni 15 minuti
            veicolo.importo = importo;

            // Rimuovi veicolo dal database
            this.db.Parcheggio.Veicoli.splice(index, 1);

            return importo;
        } else {
            return null;
        }
    }

    searchVeicolo(targa: string): Veicolo | null {
        const veicolo = this.db.Parcheggio.Veicoli.find(t => t.targa === targa && t.uscita == undefined);
        return veicolo || null;
    }
}
