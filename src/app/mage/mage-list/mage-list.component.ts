import { Component, computed, inject, signal } from '@angular/core';
import { MageBorderDirective } from '../../mage-border.directive';
import { DatePipe } from '@angular/common';
import { MageService } from '../../mage.service';
import { Mage } from '../../mage.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mage-list',
  standalone: true,
  imports: [MageBorderDirective, DatePipe,RouterLink],
  templateUrl: './mage-list.component.html',
  styles: ``
})
export class MageListComponent {

  readonly mageService = inject(MageService); 
  readonly mageList = signal(this.mageService.getMagesList());
  readonly searchTerm = signal('');

  readonly mageListFiltered = computed(() => {
    return this.mageList().filter((mage) => mage.name
    .toLowerCase().includes(this.searchTerm().trim().toLowerCase()));

  });
  


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
