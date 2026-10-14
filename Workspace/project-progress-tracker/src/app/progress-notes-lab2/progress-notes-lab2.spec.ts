import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressNotesLab2 } from './progress-notes-lab2';

describe('ProgressNotesLab2', () => {
  let component: ProgressNotesLab2;
  let fixture: ComponentFixture<ProgressNotesLab2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressNotesLab2],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressNotesLab2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
