import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostYourLinksComponent } from './boost-your-links.component';

describe('BoostYourLinksComponent', () => {
  let component: BoostYourLinksComponent;
  let fixture: ComponentFixture<BoostYourLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoostYourLinksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoostYourLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
