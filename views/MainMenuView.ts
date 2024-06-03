import * as rl from 'readline-sync';
import { ParcheggiController } from '../controllers/ParcheggiController';

export class MainMenuView {
    static show(): void {
        let controller = new ParcheggiController();
        let scelta: number = 0;

        do {
            console.log('Gestione Parcheggio acme.ink');
            console.log('----------');
            console.log('1 - Elenco veicoli');
            console.log('2 - Numero Veicoli presenti');
            console.log('3 - Aggiungi Veicolo');
            console.log('4 - Rimuovi Veicolo');
            console.log('5 - Ricerca Veicolo');
            console.log('6 - Esci');
            console.log('');

            scelta = rl.questionInt('Inserisci la scelta: ');

            switch (scelta) {
                case 1:
                    controller.getAll().forEach(v => console.log(`${v.targa} - Entrato: ${v.ingresso}`));
                    console.log('----------');
                    break;
                case 2:
                    console.log(`Sono presenti ${controller.getNumber()} veicoli`);
                    console.log('----------');
                    break;
                case 3:
                    let targaAggiungi = rl.question('Inserisci la targa del veicolo: ');
                    if (controller.addVeicolo(targaAggiungi)) {
                        console.log('Veicolo aggiunto con successo');
                        console.log('----------');
                    } else {
                        console.log('Errore: veicolo già presente');
                        console.log('----------');
                    }
                    break;
                case 4:
                    let targaRimuovi = rl.question('Inserisci la targa del veicolo da rimuovere: ');
                    console.log('');
                    const importo = controller.removeVeicolo(targaRimuovi);
                    if (importo !== null) {
                        console.log(`Veicolo rimosso con successo. Importo da pagare: €${importo}`);
                        console.log('----------');
                    } else {
                        console.log('Errore: veicolo non trovato');
                        console.log('----------');
                    }
                    break;
                case 5:
                    let targaRicerca = rl.question('Inserisci la targa del veicolo da ricercare: ');
                    const veicolo = controller.searchVeicolo(targaRicerca);
                    if (veicolo !== null) {
                        console.log(`Veicolo trovato: ${veicolo.targa} - Entrato: ${veicolo.ingresso}`);
                        console.log('----------');
                    } else {
                        console.log('Errore: veicolo non trovato');
                        console.log('----------');
                    }
                    break;
                case 6:
                    break;
                default:
                    console.log('Inserisci un numero valido');
                    console.log('----------');
            }
        } while (scelta != 6);
    }
}
