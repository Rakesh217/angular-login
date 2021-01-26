import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public childServiceData: String;
  public lists = ['1', '2', '3', '4', '5'];
  public results;
  constructor(public profileService: ProfileService) {
    this.childServiceData = this.profileService.sendData();
  }

  ngOnInit(): void {
    this.profileService.callProfileService().subscribe(
      (response) => {
        this.results = response;
        console.log(this.results);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
