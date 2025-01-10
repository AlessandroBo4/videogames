import { type Videogame } from './videogame/videogame.model';

export const videogames: Videogame[] = [
  {
    id: '1',
    titolo: 'The Legend of Zelda: Breath of the Wild',
    descrizione:
      "Un'avventura open-world ambientata nel regno di Hyrule con una vasta libertà d'esplorazione.",
    genere: 'Avventura',
    data_rilascio: '2017-03-03',
    prezzo: 59.99,
    disponibilita: true,
    immagine: 'zelda.jpg',
  },
  {
    id: '2',
    titolo: 'Elden Ring',
    descrizione:
      'Un action RPG che unisce il mondo oscuro di FromSoftware con la narrativa di George R.R. Martin.',
    genere: 'RPG',
    data_rilascio: '2022-02-25',
    prezzo: 69.99,
    disponibilita: false,
    immagine: 'elden_ring.jpg',
  },
  {
    id: '3',
    titolo: 'Mario Kart 8 Deluxe',
    descrizione:
      'Il divertente gioco di corse con personaggi iconici del mondo Nintendo.',
    genere: 'Corse',
    data_rilascio: '2017-04-28',
    prezzo: 49.99,
    disponibilita: false,
    immagine: 'mario_kart.jpg',
  },
  {
    id: '4',
    titolo: 'Cyberpunk 2077',
    descrizione:
      'Un RPG ambientato in un mondo cyberpunk futuristico con dettagli sorprendenti.',
    genere: 'Azione',
    data_rilascio: '2020-12-10',
    prezzo: 39.99,
    disponibilita: true,
    immagine: 'cyberpunk.jpg',
  },
];
