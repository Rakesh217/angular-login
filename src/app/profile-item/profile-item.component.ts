import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-item',
  templateUrl: './profile-item.component.html',
  styleUrls: ['./profile-item.component.css'],
})
export class ProfileItemComponent {
  @Input() ID: Number;
  @Input() userId: Number;
  @Input() body: String;
  @Input() title: String;
}
