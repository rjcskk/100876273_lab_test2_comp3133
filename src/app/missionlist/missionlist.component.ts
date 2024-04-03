import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../network/spacexapi.service';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionListComponent implements OnInit {
  missions: Mission[] = [];

  constructor(private spacexApiService: SpacexApiService) { }

  ngOnInit(): void {
    this.spacexApiService.getLaunches()
      .subscribe(missions => this.missions = missions);
  }
}
