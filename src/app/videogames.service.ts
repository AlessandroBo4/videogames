import { Injectable } from '@angular/core';
import { videogames } from './videogames/lista_videogames';
import { type Prenotazione } from './videogames/videogame/videogame.model';

@Injectable({
  providedIn: 'root',
})
export class VideogamesService {
  constructor() {
    const listaPrenotazioni = localStorage.getItem('listaPrenotazioni');

    if (listaPrenotazioni) {
      this.listaPrenotazioni = JSON.parse(listaPrenotazioni);
    }
  }

  videogames = videogames;

  getVideogames() {
    return this.videogames;
  }

  // PRENOTAZIONI
  listaPrenotazioni: Prenotazione[] = [];

  private savePrenotazioni() {
    localStorage.setItem(
      'listaPrenotazioni',
      JSON.stringify(this.listaPrenotazioni)
    );
  }

  getVideogameIdPrenotazione(videogameId: string): string | null {
    const prenotazione = this.listaPrenotazioni.find(
      (p) => p.videogameId === videogameId
    );
    return prenotazione ? prenotazione.videogameId : null;
  }

  addPrenotazione(prenotazione: Prenotazione) {
    this.listaPrenotazioni.push({
      // id: new Date().getTime().toString(),
      videogameId: prenotazione.videogameId,
      nome: prenotazione.nome,
      cognome: prenotazione.cognome,
      email: prenotazione.email,
      telefono: prenotazione.telefono,
      indirizzo: prenotazione.indirizzo,
    });
    this.savePrenotazioni();

    console.log(this.listaPrenotazioni);
  }
}
