import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanduoComponent } from './vanduo.component';

describe('VanduoComponent', () => {
  let component: VanduoComponent;
  let fixture: ComponentFixture<VanduoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VanduoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VanduoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
