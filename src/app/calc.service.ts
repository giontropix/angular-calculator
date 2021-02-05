import { Calculation } from './components/gui-calc/Calculation';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {
  calculations: Calculation[] = [];

  constructor() { }
}
