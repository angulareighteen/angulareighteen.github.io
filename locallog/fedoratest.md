```bash
yarn run v1.22.22
$ ng test --watch=false
❯ Building...
✔ Building...
Application bundle generation complete. [6.725 seconds] - 2026-09-20T01:21:09.497Z


[1m[30m[46m RUN [49m[39m[22m [36mv4.1.9 [39m[90m/home/kushal/src/angular/angulareighteen.github.io[39m

 [31m❯[39m [30m[43m angulareighteen [49m[39m src/app/navigation/nav.component.spec.ts [2m([22m[2m4 tests[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 50493[2mms[22m[39m
     [33m[2m✓[22m[39m creates [33m 1307[2mms[22m[39m
     [33m[2m✓[22m[39m renders a direct link for a link item [33m 10487[2mms[22m[39m
[31m     [31m×[31m renders exactly one trigger button for a group item[39m[33m 37858[2mms[22m[39m
     [33m[2m✓[22m[39m does not render group children until the menu is opened [33m 687[2mms[22m[39m
 [31m❯[39m [30m[43m angulareighteen [49m[39m src/app/app.component.spec.ts [2m([22m[2m5 tests[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 50936[2mms[22m[39m
     [33m[2m✓[22m[39m creates the root component [33m 3662[2mms[22m[39m
[31m     [31m×[31m fetches and caches IP information when none is stored[39m[33m 46024[2mms[22m[39m
     [32m✓[39m does not fetch IP information when it is already cached[32m 164[2mms[22m[39m
     [33m[2m✓[22m[39m renders the global navigation on a normal route [33m 1025[2mms[22m[39m
     [32m✓[39m hides the global navigation on a chromeless route[32m 52[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/key-industries/key-industries.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 63[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/home/home.component.spec.ts [2m([22m[2m5 tests[22m[2m)[22m[33m 346[2mms[22m[39m
 [31m❯[39m [30m[43m angulareighteen [49m[39m src/app/quiz/quiz.component.spec.ts [2m([22m[2m7 tests[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 51476[2mms[22m[39m
     [33m[2m✓[22m[39m creates and loads the quiz for the routed subject [33m 3795[2mms[22m[39m
[31m     [31m×[31m starts at a score of zero[39m[33m 45094[2mms[22m[39m
     [33m[2m✓[22m[39m reaches 100% once every question is answered correctly [33m 1163[2mms[22m[39m
     [32m✓[39m counts only the latest answer for a given question[32m 247[2mms[22m[39m
     [32m✓[39m renders the quiz title (uppercased) and description[32m 181[2mms[22m[39m
     [32m✓[39m keeps the score at zero and notifies on a wrong answer[32m 132[2mms[22m[39m
     [32m✓[39m does not render its own toolbar (navigation is global)[32m 119[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/navigation/navigation.service.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 162[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/playground/playground.component.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 54[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/loading.service.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 21[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/news/news.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 54[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/handle-unrecoverable-state.service.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 19[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/loader-io/loader-io.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 23[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/honeynut-cheerios.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 20[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/loading/loading.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 77[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/quiz.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 18[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/news.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 9[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/prompt-update.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 4[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/ipinfo.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 6[2mms[22m[39m

[2m Test Files [22m [1m[31m3 failed[39m[22m[2m | [22m[1m[32m14 passed[39m[22m[90m (17)[39m
[2m      Tests [22m [1m[31m3 failed[39m[22m[2m | [22m[1m[32m39 passed[39m[22m[90m (42)[39m
[2m   Start at [22m 21:21:10
[2m   Duration [22m 61.69s[2m (transform 3.16s, setup 9.75s, import 4.88s, tests 153.78s, environment 80.81s)[22m

info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
