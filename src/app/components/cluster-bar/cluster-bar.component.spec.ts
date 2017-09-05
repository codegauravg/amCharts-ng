import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterBarComponent } from './cluster-bar.component';

describe('ClusterBarComponent', () => {
  let component: ClusterBarComponent;
  let fixture: ComponentFixture<ClusterBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClusterBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
