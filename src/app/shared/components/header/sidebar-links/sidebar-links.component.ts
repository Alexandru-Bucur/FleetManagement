import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar-links',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar-links.component.html',
  styles: ``,
  styleUrl: './sidebar-links.styles.scss',
})
export class SidebarLinksComponent {
  @Input()
  route!: string;

  @Input()
  icon!: string;
  @Input()
  content!: string;
}
