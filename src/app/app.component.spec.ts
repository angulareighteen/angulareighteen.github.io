import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { Router, Routes, provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { HandleUnrecoverableStateService } from './handle-unrecoverable-state.service';
import { IpinfoService } from './ipinfo.service';
import { AppRouteData } from './navigation/navigation.model';
import { PromptUpdateService } from './prompt-update.service';

@Component({ selector: 'test-page', template: 'page' })
class TestPageComponent {}

const ROUTES: Routes = [
  {
    path: 'home',
    component: TestPageComponent,
    data: { nav: { label: 'Home', order: 0 } } satisfies AppRouteData,
  },
  {
    path: 'loaderio',
    component: TestPageComponent,
    data: { chromeless: true } satisfies AppRouteData,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

describe('AppComponent', () => {
  const ipInfo = { getIpAddress: vi.fn(() => of({ ip: '203.0.113.1', country: 'US' })) };
  const promptUpdate = { checkForUpdates: vi.fn() };

  beforeEach(async () => {
    ipInfo.getIpAddress.mockClear();
    localStorage.clear();
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideRouter(ROUTES),
        provideNoopAnimations(),
        { provide: IpinfoService, useValue: ipInfo },
        { provide: PromptUpdateService, useValue: promptUpdate },
        { provide: HandleUnrecoverableStateService, useValue: {} },
      ],
    }).compileComponents();
  });

  it('creates the root component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('fetches and caches IP information when none is stored', () => {
    TestBed.createComponent(AppComponent);
    expect(ipInfo.getIpAddress).toHaveBeenCalledTimes(1);
    expect(localStorage.getItem('ipInformation')).not.toBeNull();
  });

  it('does not fetch IP information when it is already cached', () => {
    localStorage.setItem('ipInformation', JSON.stringify({ ip: 'cached' }));
    TestBed.createComponent(AppComponent);
    expect(ipInfo.getIpAddress).not.toHaveBeenCalled();
  });

  it('renders the global navigation on a normal route', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    await TestBed.inject(Router).navigate(['/home']);
    await fixture.whenStable();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-nav')).not.toBeNull();
  });

  it('hides the global navigation on a chromeless route', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    await TestBed.inject(Router).navigate(['/loaderio']);
    await fixture.whenStable();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-nav')).toBeNull();
  });
});
