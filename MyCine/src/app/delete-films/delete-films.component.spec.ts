import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFilmsComponent } from './delete-films.component';

describe('DeleteFilmsComponent', () => {
  let component: DeleteFilmsComponent;
  let fixture: ComponentFixture<DeleteFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteFilmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
