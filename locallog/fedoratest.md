```bash
yarn run v1.22.22
$ ng test --watch=false
❯ Building...
✔ Building...
Application bundle generation complete. [4.531 seconds] - 2026-11-13T22:20:53.365Z


[1m[30m[46m RUN [49m[39m[22m [36mv4.1.9 [39m[90m/home/kushal/src/angular/angulareighteen.github.io[39m

 [31m❯[39m [30m[43m angulareighteen [49m[39m src/app/app.component.spec.ts [2m([22m[2m5 tests[22m[2m | [22m[31m5 failed[39m[2m)[22m[32m 40[2mms[22m[39m
[31m     [31m×[31m creates the root component[39m[32m 24[2mms[22m[39m
[31m     [31m×[31m fetches and caches IP information when none is stored[39m[32m 6[2mms[22m[39m
[31m     [31m×[31m does not fetch IP information when it is already cached[39m[32m 2[2mms[22m[39m
[31m     [31m×[31m renders the global navigation on a normal route[39m[32m 2[2mms[22m[39m
[31m     [31m×[31m hides the global navigation on a chromeless route[39m[32m 1[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/home/home.component.spec.ts [2m([22m[2m5 tests[22m[2m)[22m[33m 385[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/navigation/navigation.service.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 88[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/key-industries/key-industries.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 103[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/navigation/nav.component.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[33m 1175[2mms[22m[39m
     [33m[2m✓[22m[39m creates [33m 639[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/news/news.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 91[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/playground/playground.component.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 47[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/loading/loading.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 44[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/loading.service.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 32[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/loader-io/loader-io.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 13[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/quiz.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 7[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/handle-unrecoverable-state.service.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 15[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/ipinfo.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 6[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/prompt-update.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 5[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/honeynut-cheerios.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 6[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/news.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 6[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/quiz/quiz.component.spec.ts [2m([22m[2m7 tests[22m[2m)[22m[33m 1316[2mms[22m[39m
     [33m[2m✓[22m[39m creates and loads the quiz for the routed subject [33m 722[2mms[22m[39m

[2m Test Files [22m [1m[31m1 failed[39m[22m[2m | [22m[1m[32m16 passed[39m[22m[90m (17)[39m
[2m      Tests [22m [1m[31m5 failed[39m[22m[2m | [22m[1m[32m37 passed[39m[22m[90m (42)[39m
[2m   Start at [22m 17:20:54
[2m   Duration [22m 9.09s[2m (transform 1.72s, setup 8.17s, import 3.70s, tests 3.38s, environment 58.12s)[22m

info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
