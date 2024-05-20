import { Component } from '@angular/core';
import  { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-tutorial',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './tutorial.component.html',
  styleUrl: './tutorial.component.css'
})
export class TutorialComponent {

}
