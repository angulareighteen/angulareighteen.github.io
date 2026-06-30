import { Routes } from '@angular/router';
import { AppRouteData } from './navigation/navigation.model';

/**
 * Application routes.
 *
 * The route table is the single source of truth for navigation: a route's
 * `data.nav` opts it into the global menu (and a `children` list supplies
 * dropdown sub-links for data-driven destinations), while `data.chromeless`
 * hides the shell entirely. Adding a navigable component is therefore a
 * one-line change here — no navigation code to touch.
 */
export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
    data: { nav: { label: 'Home', order: 0, icon: 'home' } } satisfies AppRouteData,
  },
  {
    path: 'quiz',
    loadComponent: () => import('./quiz/quiz.component').then((m) => m.QuizComponent),
    data: {
      nav: {
        label: 'Quizzes',
        order: 1,
        icon: 'quiz',
        children: [
          { label: 'General Physics', path: '/quiz/general-physics' },
          { label: 'US History', path: '/quiz/us-history' },
          { label: 'US Geography', path: '/quiz/us-geography' },
          { label: 'US Civics', path: '/quiz/us-civics' },
        ],
      },
    } satisfies AppRouteData,
  },
  {
    path: 'quiz/:title',
    loadComponent: () => import('./quiz/quiz.component').then((m) => m.QuizComponent),
  },
  {
    path: 'news',
    loadComponent: () => import('./news/news.component').then((m) => m.NewsComponent),
    data: {
      nav: {
        label: 'News',
        order: 2,
        icon: 'feed',
        children: [
          { label: 'Top Stories', path: '/news/top-stories' },
          { label: 'Local News', path: '/news/local' },
        ],
      },
    } satisfies AppRouteData,
  },
  {
    path: 'news/:title',
    loadComponent: () => import('./news/news.component').then((m) => m.NewsComponent),
  },
  {
    path: 'blog/key-industries',
    loadComponent: () =>
      import('./key-industries/key-industries.component').then((m) => m.KeyIndustriesComponent),
    data: { nav: { label: 'Key Industries', order: 3, icon: 'insights' } } satisfies AppRouteData,
  },
  {
    path: 'playground',
    loadComponent: () =>
      import('./playground/playground.component').then((m) => m.PlaygroundComponent),
    data: { nav: { label: 'Playground', order: 4, icon: 'science' } } satisfies AppRouteData,
  },
  {
    path: 'loaderio-27f3270e87fa1a911fde7dab10c49d7c',
    loadComponent: () => import('./loader-io/loader-io.component').then((m) => m.LoaderIoComponent),
    // Machine-read verification endpoint: render the token only, no app chrome.
    data: { chromeless: true } satisfies AppRouteData,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
