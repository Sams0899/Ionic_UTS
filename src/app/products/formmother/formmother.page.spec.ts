import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormmotherPage } from './formmother.page';

describe('FormmotherPage', () => {
  let component: FormmotherPage;
  let fixture: ComponentFixture<FormmotherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormmotherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormmotherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
