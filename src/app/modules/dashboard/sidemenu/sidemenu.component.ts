import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
  standalone: true, // ✅ Convertirlo en standalone
  imports: [RouterModule]
})
export class SidemenuComponent { }
