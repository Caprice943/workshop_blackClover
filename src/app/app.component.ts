import { Component, computed, effect, signal } from '@angular/core';
import { MAGE_LIST } from './mage-list.fake';
import { Mage } from './mage.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Equipe du Taureau Noir';
  
  mageList = signal(MAGE_LIST);

  incrementLife(mage: Mage) {
    mage.life = mage.life + 5;
  }

  decrementLife(mage: Mage) {
   mage.life = mage.life - 3;
  }

  size(mage: Mage){
    if(mage.life <= 10){
      return 'Enfant';
    }
    else if (mage.life >= 25){
      return 'Adulte';
    }

    return 'Adolescent';
  }
}
