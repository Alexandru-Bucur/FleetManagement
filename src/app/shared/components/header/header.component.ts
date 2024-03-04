import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarLinksComponent } from './sidebar-links/sidebar-links.component';
import { ROUTES } from '../../utils/static';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styles: ``,
  imports: [RouterModule, SidebarLinksComponent],
})
export class HeaderComponent {
  icon!: string;
  Routes = ROUTES;
}
