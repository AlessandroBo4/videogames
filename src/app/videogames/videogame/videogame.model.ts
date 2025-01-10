export interface Videogame {
  id: string;
  titolo: string;
  descrizione: string;
  genere: string;
  data_rilascio: string;
  prezzo: number;
  disponibilita: boolean;
  immagine: string;
}

export interface Prenotazione {
  videogameId: string;
  nome: string;
  cognome: string;
  email: string;
  telefono: string;
  indirizzo: string;
}
