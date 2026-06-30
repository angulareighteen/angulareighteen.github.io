import { Routes } from '@angular/router';

/**
 * A single sub-link rendered inside a navigation dropdown. Used for routes
 * whose real destinations are data-driven (e.g. specific quizzes or news
 * feeds) and therefore cannot be discovered from the static route table alone.
 */
export interface NavChildConfig {
  readonly label: string;
  /** Absolute router path, e.g. `/quiz/us-history`. */
  readonly path: string;
  /** Optional Material icon ligature name. */
  readonly icon?: string;
}

/**
 * Navigation metadata attached to a route via its `data.nav` property. The
 * presence of this object is what opts a route into the global navigation, so
 * the route table is the single source of truth: add a route with `nav` data
 * and it appears in the menu automatically — no navigation code to touch.
 */
export interface NavConfig {
  /** Label shown in the top-level navigation. */
  readonly label: string;
  /** Sort weight; lower numbers appear first. Unset items sort last. */
  readonly order?: number;
  /** Optional Material icon ligature name. */
  readonly icon?: string;
  /** Optional dropdown sub-links for data-driven destinations. */
  readonly children?: readonly NavChildConfig[];
}

/**
 * Strongly-typed shape of a route's `data`. Angular types `Route.data` loosely
 * as `{ [key: string]: any }`; this interface lets us author and read it
 * type-safely while remaining assignable to that contract.
 */
export interface AppRouteData {
  /** Presence opts the route into the global navigation. */
  readonly nav?: NavConfig;
  /** When `true`, the global app chrome (top navigation) is hidden. */
  readonly chromeless?: boolean;
  readonly [key: string]: unknown;
}

/** A navigation entry that links directly to a single route. */
export interface NavLink {
  readonly kind: 'link';
  readonly label: string;
  readonly path: string;
  readonly icon?: string;
  /** Whether `routerLinkActive` should match the URL exactly. */
  readonly exact: boolean;
}

/** A navigation entry that opens a dropdown of {@link NavLink}s. */
export interface NavGroup {
  readonly kind: 'group';
  readonly label: string;
  readonly icon?: string;
  readonly children: readonly NavLink[];
}

/** A renderable item of the global navigation. */
export type NavItem = NavLink | NavGroup;

const DEFAULT_ORDER = Number.MAX_SAFE_INTEGER;

function toRouterPath(path: string): string {
  return path.startsWith('/') ? path : `/${path}`;
}

function toNavLink(child: NavChildConfig): NavLink {
  return { kind: 'link', label: child.label, path: child.path, icon: child.icon, exact: false };
}

function buildItem(path: string, nav: NavConfig): NavItem {
  if (nav.children && nav.children.length > 0) {
    return {
      kind: 'group',
      label: nav.label,
      icon: nav.icon,
      children: nav.children.map(toNavLink),
    };
  }

  const routerPath = toRouterPath(path);
  return {
    kind: 'link',
    label: nav.label,
    path: routerPath,
    icon: nav.icon,
    // A bare `/` link must match exactly so it is not always "active".
    exact: routerPath === '/',
  };
}

/**
 * Derives the ordered global navigation from a route configuration.
 *
 * This is a pure function of the route table — the single responsibility being
 * "turn routes into a navigation model" — which keeps it trivially testable and
 * decoupled from the Angular `Router` runtime.
 *
 * Routes are included only when they carry {@link NavConfig} metadata and are
 * not parameterised (a path containing `:` describes a family of URLs, not one
 * navigable destination), so redirect routes, param routes and chromeless
 * machine endpoints are skipped automatically.
 */
export function toNavItems(routes: Routes): readonly NavItem[] {
  return routes
    .map((route) => ({ path: route.path ?? '', nav: (route.data as AppRouteData | undefined)?.nav }))
    .filter(
      (entry): entry is { path: string; nav: NavConfig } =>
        entry.nav !== undefined && !entry.path.includes(':'),
    )
    .sort((a, b) => (a.nav.order ?? DEFAULT_ORDER) - (b.nav.order ?? DEFAULT_ORDER))
    .map(({ path, nav }) => buildItem(path, nav));
}
