import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavigationService } from './navigation.service';

/**
 * The global navigation bar rendered by the application shell.
 *
 * This component is purely presentational: its single responsibility is to
 * render the {@link NavItem}s supplied by {@link NavigationService}. It holds no
 * navigation logic of its own — links and dropdowns are derived from the route
 * table — so adding a routable destination never requires editing this file.
 */
@Component({
  selector: 'app-nav',
  imports: [MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  private readonly navigation = inject(NavigationService);

  /** Ordered top-level navigation items derived from the route table. */
  protected readonly items = this.navigation.items;
}
