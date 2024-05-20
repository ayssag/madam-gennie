import { Component } from '@angular/core';
import { Router, RouterModule,RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/views/home/home.component';
import { MatNavList } from '@angular/material/list';
import { MatListModule } from '@angular/material/list';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MatNavList, MatListModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'madam-gennie';
}
