import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UIService {

citySearched : EventEmitter<{city:string, country:string}> = new EventEmitter<{city:string, country:string}>();
  constructor() { }
}
