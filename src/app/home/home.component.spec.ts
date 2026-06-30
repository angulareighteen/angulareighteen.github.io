import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sets the document title', () => {
    expect(TestBed.inject(Title).getTitle()).toBe('Colorado Quiz');
  });

  it('links to every quiz', () => {
    const hrefs = Array.from(
      fixture.nativeElement.querySelectorAll('a'),
      (a: HTMLAnchorElement) => a.getAttribute('href'),
    );
    expect(hrefs).toEqual(
      expect.arrayContaining([
        '/quiz/general-physics',
        '/quiz/us-history',
        '/quiz/us-geography',
        '/quiz/us-civics',
      ]),
    );
  });

  it('links to the news feeds', () => {
    const hrefs = Array.from(
      fixture.nativeElement.querySelectorAll('a'),
      (a: HTMLAnchorElement) => a.getAttribute('href'),
    );
    expect(hrefs).toEqual(expect.arrayContaining(['/news/top-stories', '/news/local']));
  });

  it('does not render its own toolbar (navigation is global)', () => {
    expect(fixture.nativeElement.querySelector('mat-toolbar')).toBeNull();
  });
});
