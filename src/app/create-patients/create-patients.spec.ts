import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePatients } from './create-patients';

describe('CreatePatients', () => {
  let component: CreatePatients;
  let fixture: ComponentFixture<CreatePatients>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePatients]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePatients);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
