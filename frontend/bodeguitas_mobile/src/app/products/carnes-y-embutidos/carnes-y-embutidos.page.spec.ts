import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarnesYEmbutidosPage } from './carnes-y-embutidos.page';

describe('CarnesYEmbutidosPage', () => {
  let component: CarnesYEmbutidosPage;
  let fixture: ComponentFixture<CarnesYEmbutidosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CarnesYEmbutidosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarnesYEmbutidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
