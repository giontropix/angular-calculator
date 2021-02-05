import { GuiCalcComponent } from './components/gui-calc/gui-calc.component';
import { HistoryComponent } from './components/history/history.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/calc', pathMatch: 'full' },
    { path: 'history', component: HistoryComponent },
    { path: 'calc', component: GuiCalcComponent },
    { path: '**', component: GuiCalcComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
