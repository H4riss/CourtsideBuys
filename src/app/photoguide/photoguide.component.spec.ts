import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoguideComponent } from './photoguide.component';

describe('PhotoguideComponent', () => {
  let component: PhotoguideComponent;
  let fixture: ComponentFixture<PhotoguideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoguideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhotoguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
