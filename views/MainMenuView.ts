import * as rl from 'readline-sync'
import { ParcheggiController } from '../controllers/ParcheggiController'

export class MainMenuView
{
    static show() : void
    {
        let controller = new ParcheggiController();

        let scelta : number = 0
        do
        {
            console.log('Gestione Parcheggio')
            console.log('----------')
            console.log('')
            console.log('1 - Elenco veicoli')
            console.log('2 - Numero Veicoli presenti')
            console.log('')
            console.log('9 - Esci')
            console.log('')
    
            scelta = rl.questionInt('Inserisci la scelta:') 

            switch(scelta)
            {
                case 1:
                    controller.getAll().forEach(v => console.log(`${v.targa} - Entrato: ${v.ingresso}`))
                    break;
                case 2:
                    break;
                case 9:
                    break;
                default:
                    console.log('Inserisci un numero valido')
            }
        } while (scelta != 9)
    }
}