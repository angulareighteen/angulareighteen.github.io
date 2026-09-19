```bash
yarn run v1.22.22
$ ng test --watch=false
❯ Building...
✔ Building...
Application bundle generation complete. [5.611 seconds] - 2026-09-19T20:21:05.098Z


[1m[30m[46m RUN [49m[39m[22m [36mv4.1.9 [39m[90m/home/kushal/src/angular/angulareighteen.github.io[39m

 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/navigation/nav.component.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[33m 1139[2mms[22m[39m
     [33m[2m✓[22m[39m creates [33m 696[2mms[22m[39m
 [31m❯[39m [30m[43m angulareighteen [49m[39m src/app/app.component.spec.ts [2m([22m[2m5 tests[22m[2m | [22m[31m2 failed[39m[2m)[22m[33m 15297[2mms[22m[39m
     [33m[2m✓[22m[39m creates the root component [33m 783[2mms[22m[39m
     [32m✓[39m fetches and caches IP information when none is stored[32m 56[2mms[22m[39m
     [32m✓[39m does not fetch IP information when it is already cached[32m 78[2mms[22m[39m
[31m     [31m×[31m renders the global navigation on a normal route[39m[33m 7432[2mms[22m[39m
[31m     [31m×[31m hides the global navigation on a chromeless route[39m[33m 6937[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/home/home.component.spec.ts [2m([22m[2m5 tests[22m[2m)[22m[33m 491[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/key-industries/key-industries.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 198[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/navigation/navigation.service.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 91[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/loading/loading.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 20[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/news/news.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 220[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/handle-unrecoverable-state.service.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 22[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/loading.service.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 29[2mms[22m[39m
 [31m❯[39m [30m[43m angulareighteen [49m[39m src/app/quiz/quiz.component.spec.ts [2m([22m[2m7 tests[22m[2m | [22m[31m2 failed[39m[2m)[22m[33m 16381[2mms[22m[39m
     [33m[2m✓[22m[39m creates and loads the quiz for the routed subject [33m 704[2mms[22m[39m
[31m     [31m×[31m starts at a score of zero[39m[33m 7310[2mms[22m[39m
[31m     [31m×[31m reaches 100% once every question is answered correctly[39m[33m 6964[2mms[22m[39m
     [33m[2m✓[22m[39m counts only the latest answer for a given question [33m 522[2mms[22m[39m
     [33m[2m✓[22m[39m renders the quiz title (uppercased) and description [33m 370[2mms[22m[39m
     [32m✓[39m keeps the score at zero and notifies on a wrong answer[32m 273[2mms[22m[39m
     [32m✓[39m does not render its own toolbar (navigation is global)[32m 214[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/ipinfo.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 5[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/playground/playground.component.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 96[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/honeynut-cheerios.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 11[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/loader-io/loader-io.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 11[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/prompt-update.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 4[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/quiz.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 6[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/news.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 11[2mms[22m[39m

[2m Test Files [22m [1m[31m2 failed[39m[22m[2m | [22m[1m[32m15 passed[39m[22m[90m (17)[39m
[2m      Tests [22m [1m[31m4 failed[39m[22m[2m | [22m[1m[32m38 passed[39m[22m[90m (42)[39m
[2m   Start at [22m 16:21:06
[2m   Duration [22m 29.12s[2m (transform 7.88s, setup 23.45s, import 14.38s, tests 34.03s, environment 51.09s)[22m

info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
