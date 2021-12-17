import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FrutasYVerdurasPage } from './frutas-y-verduras.page';

describe('FrutasYVerdurasPage', () => {
  let component: FrutasYVerdurasPage;
  let fixture: ComponentFixture<FrutasYVerdurasPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FrutasYVerdurasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FrutasYVerdurasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
