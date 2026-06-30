import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { NavComponent } from './nav.component';
import { NavItem } from './navigation.model';
import { NavigationService } from './navigation.service';

const ITEMS: readonly NavItem[] = [
  { kind: 'link', label: 'Home', path: '/home', icon: 'home', exact: false },
  {
    kind: 'group',
    label: 'Quizzes',
    icon: 'quiz',
    children: [{ kind: 'link', label: 'US History', path: '/quiz/us-history', exact: false }],
  },
];

describe('NavComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavComponent],
      providers: [
        provideRouter([]),
        provideNoopAnimations(),
        { provide: NavigationService, useValue: { items: ITEMS, chromeless: signal(false) } },
      ],
    }).compileComponents();
  });

  it('creates', () => {
    const fixture = TestBed.createComponent(NavComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders a direct link for a link item', () => {
    const fixture = TestBed.createComponent(NavComponent);
    fixture.detectChanges();
    const link: HTMLAnchorElement | null = fixture.nativeElement.querySelector('a[href="/home"]');
    expect(link).not.toBeNull();
    expect(link!.textContent).toContain('Home');
  });

  it('renders exactly one trigger button for a group item', () => {
    const fixture = TestBed.createComponent(NavComponent);
    fixture.detectChanges();
    const buttons: HTMLButtonElement[] = Array.from(fixture.nativeElement.querySelectorAll('button'));
    expect(buttons).toHaveLength(1);
    expect(buttons[0].textContent).toContain('Quizzes');
  });

  it('does not render group children until the menu is opened', () => {
    const fixture = TestBed.createComponent(NavComponent);
    fixture.detectChanges();
    // mat-menu content is rendered lazily into an overlay on open, so the
    // child link must not be present in the DOM before the trigger is clicked.
    const child = fixture.nativeElement.querySelector('a[href="/quiz/us-history"]');
    expect(child).toBeNull();
  });
});
