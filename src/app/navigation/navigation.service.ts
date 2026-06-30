import { Injectable, Signal, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { AppRouteData, NavItem, toNavItems } from './navigation.model';

/**
 * Single source of read-only navigation state for the application shell.
 *
 * Responsibilities are limited to exposing navigation *metadata* derived from
 * the router: the ordered top-level {@link NavItem}s, and whether the current
 * route opts out of the global chrome. Rendering is left to {@link NavComponent}
 * and routing remains owned by the Angular `Router`.
 */
@Injectable({ providedIn: 'root' })
export class NavigationService {
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  /**
   * Top-level navigation, derived once from the router configuration. The route
   * table is static, so this never needs to recompute.
   */
  readonly items: readonly NavItem[] = toNavItems(this.router.config);

  /** Data of the deepest activated route, recomputed after each navigation. */
  private readonly activatedData = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(() => this.deepestData()),
    ),
    { initialValue: {} as AppRouteData },
  );

  /** Whether the global chrome (top navigation) should be hidden. */
  readonly chromeless: Signal<boolean> = computed(() => this.activatedData().chromeless ?? false);

  private deepestData(): AppRouteData {
    let snapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
    while (snapshot.firstChild) {
      snapshot = snapshot.firstChild;
    }
    return snapshot.data as AppRouteData;
  }
}
