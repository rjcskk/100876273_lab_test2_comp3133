import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MissionListComponent } from './missionlist.component';
import { HttpClientModule } from '@angular/common/http';

describe('MissionListComponent', () => {
  let component: MissionListComponent;
  let fixture: ComponentFixture<MissionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionListComponent ],
      imports: [ HttpClientModule ] // Import HttpClientModule to test components making HTTP calls
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
