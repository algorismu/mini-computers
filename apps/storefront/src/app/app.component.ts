import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LogoComponent } from '@mini-computers/design-system';

@Component({
  standalone: true,
  imports: [RouterModule, LogoComponent],
  selector: 'storefront-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'storefront';
}
