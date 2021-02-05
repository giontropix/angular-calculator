import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiCalcComponent } from './gui-calc.component';

describe('GuiCalcComponent', () => {
  let component: GuiCalcComponent;
  let fixture: ComponentFixture<GuiCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuiCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
