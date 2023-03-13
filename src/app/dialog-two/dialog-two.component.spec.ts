import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTwoComponent } from './dialog-two.component';

describe('DialogTwoComponent', () => {
  let component: DialogTwoComponent;
  let fixture: ComponentFixture<DialogTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
