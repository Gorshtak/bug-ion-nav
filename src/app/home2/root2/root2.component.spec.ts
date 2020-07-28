import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Root2Component } from './root2.component';

describe('Root2Component', () => {
  let component: Root2Component;
  let fixture: ComponentFixture<Root2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Root2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Root2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
