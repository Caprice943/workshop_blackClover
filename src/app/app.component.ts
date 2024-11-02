import { Component, computed, effect, inject, signal } from '@angular/core';
import { MAGE_LIST } from './mage-list.fake';
import { Mage } from './mage.model';
import { MageBorderDirective } from './mage-border.directive';
import { DatePipe } from '@angular/common';
import { MageService } from './mage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MageBorderDirective, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private readonly mageService = inject(MageService);
  mageList = signal(MAGE_LIST);

  incrementLife(mage: Mage) {
    mage.life = mage.life + 5;
  }

  decrementLife(mage: Mage) {
    mage.life = mage.life - 3;
  }

  size(mage: Mage) {
    if (mage.life <= 10) {
      return 'Enfant';
    } else if (mage.life >= 25) {
      return 'Adulte';
    }

    return 'Adolescent';
  }
}
