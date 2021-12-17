import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DulcesYSnacksPage } from './dulces-y-snacks.page';

describe('DulcesYSnacksPage', () => {
  let component: DulcesYSnacksPage;
  let fixture: ComponentFixture<DulcesYSnacksPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DulcesYSnacksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DulcesYSnacksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
