import { Component, inject } from '@angular/core';
import { VideogamesService } from '../videogames.service';
import { type Videogame } from './videogame/videogame.model';
import { VideogameComponent } from "./videogame/videogame.component";

@Component({
  selector: 'app-videogames',
  standalone: true,
  imports: [VideogameComponent],
  templateUrl: './videogames.component.html',
  styleUrl: './videogames.component.css',
})
export class VideogamesComponent {
  private videogamesService = inject(VideogamesService);

  videogames: Videogame[] = this.videogamesService.getVideogames();
}
