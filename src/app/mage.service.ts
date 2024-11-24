import { Mage, MageList } from './mage.model';
import { Injectable } from '@angular/core';
import { MAGE_LIST } from './mage-list.fake';


@Injectable({
  providedIn: 'root',
})
export class MageService {
  constructor() {}

  public getMagesList(): MageList {
    return MAGE_LIST;
  }

  public getOneMage(id: number): Mage {
    const mage = MAGE_LIST.find((mage) => mage.id === id);

    if (!mage) {
      throw new Error(`No Mage found with this id ${id}`);
    }

    return mage;
  }

  public getMageTeam(): string[] {
    return [
      'Taureau Noir',
      "Aube d\'or",
      'Lion Flamboyant',
      "Aigle d\'argent",
      'Rose bleue',
    ];
  }

}
