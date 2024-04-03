import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexApiService } from '../network/spacexapi.service';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissionDetailsComponent implements OnInit {
  mission: Mission | undefined;

  constructor(
    private route: ActivatedRoute,
    private spacexApiService: SpacexApiService
  ) { }

  ngOnInit(): void {
    const flightNumber = this.route.snapshot.paramMap.get('id');
    if (flightNumber) {
      this.spacexApiService.getLaunchDetails(parseInt(flightNumber))
        .subscribe(mission => this.mission = mission);
    }
  }
}
