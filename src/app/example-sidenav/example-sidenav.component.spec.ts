import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleSidenavComponent } from './example-sidenav.component';

describe('ExampleSidenavComponent', () => {
  let component: ExampleSidenavComponent;
  let fixture: ComponentFixture<ExampleSidenavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleSidenavComponent]
    });
    fixture = TestBed.createComponent(ExampleSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
