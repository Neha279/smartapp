import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WardPageComponent } from './wardpage.component';

describe('WardPageComponent', () => {
  let component: WardPageComponent;
  let fixture: ComponentFixture<WardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
