import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage-angular';
import {PersonModel} from '../../models/person.model';

@Injectable()
export class PersonService {

  localStorageKey = 'person';

  constructor(private storage: Storage) {}

  async findPerson(): Promise<PersonModel> {
    return this.storage.get(this.localStorageKey);
  }

  async createPerson(personModel: PersonModel): Promise<void> {
    await this.storage.set(this.localStorageKey, personModel);
  }

  async updatePerson(personModel: PersonModel): Promise<PersonModel> {
    return this.storage.set(this.localStorageKey, personModel);
  }

  calculateTotalOfMillilitersToDrink(person: PersonModel): number {
    return person.weight * this.calculateBaseMilliliters(person);
  }

  private calculateBaseMilliliters(person: PersonModel): number {
    if(!!person.age) {
      if(person.age <= 30){
        return 40;
      }else if(person.age > 30 && person.age <= 55){
        return 35;
      }else {
        return 30;
      }
    }else {
      return 35;
    }
  }
}
