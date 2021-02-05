import { CalcService } from './../../calc.service';
import { Calculation } from './Calculation';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-gui-calc',
    templateUrl: './gui-calc.component.html',
    styleUrls: ['./gui-calc.component.css'],
})
export class GuiCalcComponent implements OnInit {
    calcHistory: Calculation[] = [];
    buttons: string[] = [
        '1',
        '2',
        '3',
        '/',
        '4',
        '5',
        '6',
        '-',
        '7',
        '8',
        '9',
        '+',
        '.',
        '0',
        '*',
        '=',
    ];
    display = '0';
    isResult: boolean = false;
    isFocused: boolean = false;

    constructor(public calcService: CalcService){

    }

    addToDIsplay = (value: string): string => {
        if (
            (this.display.length === 1 && this.display === '0') ||
            this.isResult
        ) {
            this.isResult = false;
            return (this.display = value);
        }
        return (this.display += value);
    };

    getOperation = () => {
        this.isResult = true;
        const formula = this.display;
        this.display = eval(this.display);
        const calculation: Calculation = {formula, result: this.display}
        this.calcHistory.push(calculation)
    };

    resetDiplay = () => {
        this.display = '0';
    };

    //getCalculations = () => this.calcService.calculations;
    get data(): Calculation[] {
        return this.calcService.calculations
    }

    //setCalculations = (value: Calculation[]) => this.calcService.calculations = value;
    set data(value:Calculation[]){
        this.calcService.calculations = value;
    }

    ngOnInit(): void {
        this.calcHistory = this.data;
    }

    ngOnDestroy():void {
        if(this.data) this.data = this.calcHistory;
    }
}
