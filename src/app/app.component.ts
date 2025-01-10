import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideogamesComponent } from "./videogames/videogames.component";
import { VideogameComponent } from "./videogames/videogame/videogame.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VideogamesComponent, VideogameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'videogames';
}
