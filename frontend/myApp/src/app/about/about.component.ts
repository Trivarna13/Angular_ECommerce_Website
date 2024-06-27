import { Component } from '@angular/core';
import { Nav3Component } from '../nav3/nav3.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [Nav3Component],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
