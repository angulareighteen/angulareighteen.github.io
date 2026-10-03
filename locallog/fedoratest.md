```bash
yarn run v1.22.22
$ ng test --watch=false
❯ Building...
✔ Building...
Application bundle generation complete. [5.000 seconds] - 2026-10-03T18:20:50.065Z


[1m[30m[46m RUN [49m[39m[22m [36mv4.1.9 [39m[90m/home/kushal/src/angular/angulareighteen.github.io[39m

 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/navigation/nav.component.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[33m 1292[2mms[22m[39m
     [33m[2m✓[22m[39m creates [33m 723[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/home/home.component.spec.ts [2m([22m[2m5 tests[22m[2m)[22m[33m 764[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/app.component.spec.ts [2m([22m[2m5 tests[22m[2m)[22m[33m 2035[2mms[22m[39m
     [33m[2m✓[22m[39m creates the root component [33m 832[2mms[22m[39m
     [33m[2m✓[22m[39m renders the global navigation on a normal route [33m 499[2mms[22m[39m
     [33m[2m✓[22m[39m hides the global navigation on a chromeless route [33m 512[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/navigation/navigation.service.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 171[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/key-industries/key-industries.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 97[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/playground/playground.component.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 92[2mms[22m[39m
 [31m❯[39m [30m[43m angulareighteen [49m[39m src/app/quiz/quiz.component.spec.ts [2m([22m[2m7 tests[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 8324[2mms[22m[39m
     [33m[2m✓[22m[39m creates and loads the quiz for the routed subject [33m 1324[2mms[22m[39m
[31m     [31m×[31m starts at a score of zero[39m[33m 6317[2mms[22m[39m
     [32m✓[39m reaches 100% once every question is answered correctly[32m 144[2mms[22m[39m
     [32m✓[39m counts only the latest answer for a given question[32m 173[2mms[22m[39m
     [32m✓[39m renders the quiz title (uppercased) and description[32m 155[2mms[22m[39m
     [32m✓[39m keeps the score at zero and notifies on a wrong answer[32m 98[2mms[22m[39m
     [32m✓[39m does not render its own toolbar (navigation is global)[32m 95[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/loading.service.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 62[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/loading/loading.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 57[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/handle-unrecoverable-state.service.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 25[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/prompt-update.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 7[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/loader-io/loader-io.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 20[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/news/news.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 84[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/honeynut-cheerios.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 8[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/quiz.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 8[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/ipinfo.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 6[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/news.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 6[2mms[22m[39m

[2m Test Files [22m [1m[31m1 failed[39m[22m[2m | [22m[1m[32m16 passed[39m[22m[90m (17)[39m
[2m      Tests [22m [1m[31m1 failed[39m[22m[2m | [22m[1m[32m41 passed[39m[22m[90m (42)[39m
[2m   Start at [22m 14:20:50
[2m   Duration [22m 19.19s[2m (transform 18.87s, setup 17.74s, import 18.06s, tests 13.06s, environment 36.80s)[22m

info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
