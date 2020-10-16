import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormgpuPage } from './formgpu.page';

describe('FormgpuPage', () => {
  let component: FormgpuPage;
  let fixture: ComponentFixture<FormgpuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormgpuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormgpuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
