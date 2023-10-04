import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySecondComponent } from './my-second.component';

describe('MySecondComponent', () => {
  let component: MySecondComponent;
  let fixture: ComponentFixture<MySecondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MySecondComponent]
    });
    fixture = TestBed.createComponent(MySecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
