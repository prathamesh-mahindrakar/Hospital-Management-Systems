import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Docdash } from './docdash';

describe('Docdash', () => {
  let component: Docdash;
  let fixture: ComponentFixture<Docdash>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Docdash]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Docdash);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
