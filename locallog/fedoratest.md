```bash
yarn run v1.22.22
$ ng test --watch=false
❯ Building...
✔ Building...
Application bundle generation complete. [7.476 seconds] - 2026-10-04T08:21:04.008Z


[1m[30m[46m RUN [49m[39m[22m [36mv4.1.9 [39m[90m/home/kushal/src/angular/angulareighteen.github.io[39m

 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/app.component.spec.ts [2m([22m[2m5 tests[22m[2m)[22m[33m 2314[2mms[22m[39m
     [33m[2m✓[22m[39m creates the root component [33m 576[2mms[22m[39m
     [33m[2m✓[22m[39m renders the global navigation on a normal route [33m 374[2mms[22m[39m
     [33m[2m✓[22m[39m hides the global navigation on a chromeless route [33m 1242[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/navigation/nav.component.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[33m 2405[2mms[22m[39m
     [33m[2m✓[22m[39m creates [33m 706[2mms[22m[39m
     [33m[2m✓[22m[39m does not render group children until the menu is opened [33m 1467[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/home/home.component.spec.ts [2m([22m[2m5 tests[22m[2m)[22m[33m 1460[2mms[22m[39m
     [33m[2m✓[22m[39m does not render its own toolbar (navigation is global) [33m 1019[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/navigation/navigation.service.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 78[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/loading.service.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 45[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/news/news.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 118[2mms[22m[39m
 [31m❯[39m [30m[43m angulareighteen [49m[39m src/app/quiz/quiz.component.spec.ts [2m([22m[2m7 tests[22m[2m | [22m[31m2 failed[39m[2m)[22m[33m 15036[2mms[22m[39m
[31m     [31m×[31m creates and loads the quiz for the routed subject[39m[33m 5923[2mms[22m[39m
     [33m[2m✓[22m[39m starts at a score of zero [33m 381[2mms[22m[39m
     [33m[2m✓[22m[39m reaches 100% once every question is answered correctly [33m 1611[2mms[22m[39m
[31m     [31m×[31m counts only the latest answer for a given question[39m[33m 6353[2mms[22m[39m
     [32m✓[39m renders the quiz title (uppercased) and description[32m 269[2mms[22m[39m
     [33m[2m✓[22m[39m keeps the score at zero and notifies on a wrong answer [33m 402[2mms[22m[39m
     [32m✓[39m does not render its own toolbar (navigation is global)[32m 89[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/key-industries/key-industries.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 33[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/playground/playground.component.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 30[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/honeynut-cheerios.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 8[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/loading/loading.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 33[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/handle-unrecoverable-state.service.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 14[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/loader-io/loader-io.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 8[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/news.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 7[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/prompt-update.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 4[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/quiz.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 5[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/ipinfo.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 5[2mms[22m[39m

[2m Test Files [22m [1m[31m1 failed[39m[22m[2m | [22m[1m[32m16 passed[39m[22m[90m (17)[39m
[2m      Tests [22m [1m[31m2 failed[39m[22m[2m | [22m[1m[32m40 passed[39m[22m[90m (42)[39m
[2m   Start at [22m 04:21:05
[2m   Duration [22m 26.14s[2m (transform 9.97s, setup 22.84s, import 19.62s, tests 21.60s, environment 68.49s)[22m

info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
