import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Nav3Component } from '../nav3/nav3.component';
import { AddComponent } from '../add/add.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, Nav3Component, AddComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
