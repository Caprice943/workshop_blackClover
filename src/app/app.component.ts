import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Equipe du Taureau Noir';
  name = 'Yami Sukehiro';
  life = 40;

  incrementLife() {
    this.life = this.life + 3;
  }

  decrementLife() {
    this.life = this.life - 1;
  }

}
