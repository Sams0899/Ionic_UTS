import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormtypePage } from './formtype.page';

describe('FormtypePage', () => {
  let component: FormtypePage;
  let fixture: ComponentFixture<FormtypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormtypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormtypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
