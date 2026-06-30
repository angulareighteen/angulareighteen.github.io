import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Routes, provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { AppRouteData } from './navigation.model';
import { NavigationService } from './navigation.service';

@Component({ selector: 'test-cmp', template: 'x' })
class TestCmp {}

const ROUTES: Routes = [
  { path: 'home', component: TestCmp, data: { nav: { label: 'Home', order: 0 } } satisfies AppRouteData },
  {
    path: 'quiz',
    component: TestCmp,
    data: {
      nav: {
        label: 'Quizzes',
        order: 1,
        children: [{ label: 'US History', path: '/quiz/us-history' }],
      },
    } satisfies AppRouteData,
  },
  { path: 'quiz/:title', component: TestCmp },
  { path: 'hidden', component: TestCmp, data: { chromeless: true } satisfies AppRouteData },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

describe('NavigationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideRouter(ROUTES)] });
  });

  it('derives ordered top-level items from routes with nav data', () => {
    const service = TestBed.inject(NavigationService);
    expect(service.items.map((item) => item.label)).toEqual(['Home', 'Quizzes']);
    expect(service.items.map((item) => item.kind)).toEqual(['link', 'group']);
  });

  it('excludes parameterised and redirect routes from the navigation', () => {
    const service = TestBed.inject(NavigationService);
    expect(service.items).toHaveLength(2);
    expect(service.items.every((item) => item.label !== undefined)).toBe(true);
  });

  it('reports chromeless state from the deepest activated route', async () => {
    // Inject the service first so its NavigationEnd subscription is live before
    // any navigation occurs.
    const service = TestBed.inject(NavigationService);
    const harness = await RouterTestingHarness.create();

    await harness.navigateByUrl('/home');
    expect(service.chromeless()).toBe(false);

    await harness.navigateByUrl('/hidden');
    expect(service.chromeless()).toBe(true);
  });
});
