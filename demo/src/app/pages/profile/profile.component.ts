import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone: true,
  imports: [HeaderComponent]
})
export class ProfileComponent { }

