import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AseoYLimpiezaPage } from './aseo-y-limpieza.page';

describe('AseoYLimpiezaPage', () => {
  let component: AseoYLimpiezaPage;
  let fixture: ComponentFixture<AseoYLimpiezaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AseoYLimpiezaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AseoYLimpiezaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
