import { Component, inject, Input, Output, EventEmitter } from '@angular/core';
import { type Videogame } from './videogame.model';
import { VideogamesService } from '../../videogames.service';
import { FormsModule, NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-videogame',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './videogame.component.html',
  styleUrl: './videogame.component.css',
})
export class VideogameComponent {
  @Input({ required: true }) videogame!: Videogame;

  private videogamesService = inject(VideogamesService);

  enteredNome!: string;
  enteredCognome!: string;
  enteredEmail!: string;
  enteredTelefono!: string;
  enteredIndirizzo!: string;

  @Output() close = new EventEmitter<void>();

  isAddingPrenotazione: boolean = false;

  onStartAddPrenotazione() {
    this.isAddingPrenotazione = true;
  }

  onCancelAddPrenotazione() {
    this.isAddingPrenotazione = false;
  }

  onClose() {
    this.onCancelAddPrenotazione();
  }

  onSubmit(formPrenotazione: NgForm) {
    console.log(formPrenotazione.value);

    if (!formPrenotazione.valid) {
      alert('form non valido!');
    } else {
      const nome = formPrenotazione.value.nome;
      const cognome = formPrenotazione.value.cognome;
      alert(`Nome: ${nome}, Cognome: ${cognome}`)
    }
  }

  /* onSubmit(videogameId: string) {
    this.videogamesService.addPrenotazione({
      videogameId: videogameId,
      nome: this.enteredNome,
      cognome: this.enteredCognome,
      email: this.enteredEmail,
      telefono: this.enteredTelefono,
      indirizzo: this.enteredIndirizzo,
    });
    this.onClose();
  } */

  isPrenotato(videogameId: string) {
    return this.videogamesService.getVideogameIdPrenotazione(videogameId);
  }
}
