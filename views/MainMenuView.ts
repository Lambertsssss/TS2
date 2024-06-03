import * as rl from 'readline-sync'
import { ParcheggiController } from '../controllers/ParcheggiController'
import { Veicolo } from '../models/Veicolo';
import { Database } from '../models/Database';

export class MainMenuView
{
    static show() : void
    {
        let controller = new ParcheggiController();
        let database = new Database();
        let scelta : number = 0;
        
        do
        {
            console.log('Gestione Parcheggio acme.ink');
            console.log('----------');
            console.log('');
            console.log('1 - Elenco veicoli');
            console.log('2 - Numero Veicoli presenti');
            console.log('3 - Aggiungi Veicolo');
            console.log('9 - Esci');
            console.log('');
    
            scelta = rl.questionInt('Inserisci la scelta:'); 

            switch(scelta)
            {
                case 1:
                    controller.getAll().forEach(v => console.log(`${v.targa} - Entrato: ${v.ingresso}`));
                    break;
                case 2:
                    console.log(`Sono presenti ${controller.getNumber()} veicoli`);
                    break;
                case 3:
                    let targa = rl.question('Inserisci la targa del veicolo: ');
                    if (controller.addVeicolo(targa)) {
                        console.log('Veicolo aggiunto con successo');
                    } else {
                        console.log('Errore: veicolo già presente');
                    }
                    break;
                case 9:
                    break;
                default:
                    console.log('Inserisci un numero valido');
            }
        } while (scelta != 9);
    }
}
