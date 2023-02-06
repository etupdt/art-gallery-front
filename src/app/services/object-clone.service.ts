import { Injectable } from '@angular/core';
import * as clone from 'clone';

@Injectable({
  providedIn: 'root'
})
export class ObjectCloneService {

  constructor() { }

  public cloneObject<T>(value: T): T {
    return clone<T>(value);
  }

}
