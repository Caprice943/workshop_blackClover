import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink} from '@angular/router';
import { MageService } from '../../mage.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-mage-profile',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './mage-profile.component.html',
  styles: ``
})
export class MageProfileComponent {

  readonly route = inject(ActivatedRoute);
  readonly mageService = inject(MageService);
  readonly mageId = Number(this.route.snapshot.paramMap.get('id'));
  readonly mage = signal(this.mageService.getOneMage(this.mageId)).asReadonly();


  

}
