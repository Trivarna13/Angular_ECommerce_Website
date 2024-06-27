import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav3',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav3.component.html',
  styleUrl: './nav3.component.css',
})
export class Nav3Component {}
