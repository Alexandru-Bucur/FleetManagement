import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopHeaderComponent } from './shared/components/top-header/top-header.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styles: [],
  imports: [RouterOutlet, TopHeaderComponent, HeaderComponent, ModalComponent],
})
export class AppComponent {
  title = 'FleetManagementV1';
}
