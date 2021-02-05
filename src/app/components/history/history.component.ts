import { CalcService } from './../../calc.service';
import { Component, OnInit } from '@angular/core';
import { Calculation } from '../gui-calc/Calculation';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
    constructor(public calcService: CalcService) {}
    calcHistory: Calculation[] = []

    getCalculations = () => this.calcService.calculations;
    get data(): Calculation[]{
        return this.calcService.calculations;
    }

    //setCalculations = (value: Calculation[]) => this.calcService.calculations = value;
    set data(value: Calculation[]){
        this.calcService.calculations = value;
    }

    ngOnInit(): void {
        if(!this.data) return
        this.calcHistory = this.data;
    }

    ngOnDestroy():void{
        this.data = this.calcHistory
    }
}
