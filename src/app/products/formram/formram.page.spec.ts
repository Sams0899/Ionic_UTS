import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormramPage } from './formram.page';

describe('FormramPage', () => {
  let component: FormramPage;
  let fixture: ComponentFixture<FormramPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormramPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormramPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
