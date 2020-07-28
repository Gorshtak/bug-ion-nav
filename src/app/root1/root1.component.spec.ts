import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Root1Component } from './root1.component';

describe('Root1Component', () => {
  let component: Root1Component;
  let fixture: ComponentFixture<Root1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Root1Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Root1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
