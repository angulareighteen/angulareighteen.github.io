```bash
yarn run v1.22.22
$ ng test --watch=false
❯ Building...
✔ Building...
Application bundle generation complete. [5.799 seconds] - 2026-09-09T03:20:55.242Z


[1m[30m[46m RUN [49m[39m[22m [36mv4.1.9 [39m[90m/home/kushal/src/angular/angulareighteen.github.io[39m

 [31m❯[39m [30m[43m angulareighteen [49m[39m src/app/app.component.spec.ts [2m([22m[2m5 tests[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 193003[2mms[22m[39m
     [33m[2m✓[22m[39m creates the root component [33m 470[2mms[22m[39m
     [32m✓[39m fetches and caches IP information when none is stored[32m 33[2mms[22m[39m
     [32m✓[39m does not fetch IP information when it is already cached[32m 27[2mms[22m[39m
[31m     [31m×[31m renders the global navigation on a normal route[39m[33m 191334[2mms[22m[39m
     [33m[2m✓[22m[39m hides the global navigation on a chromeless route [33m 1134[2mms[22m[39m
 [31m❯[39m [30m[43m angulareighteen [49m[39m src/app/navigation/nav.component.spec.ts [2m([22m[2m4 tests[22m[2m | [22m[31m2 failed[39m[2m)[22m[33m 193756[2mms[22m[39m
     [33m[2m✓[22m[39m creates [33m 787[2mms[22m[39m
[31m     [31m×[31m renders a direct link for a link item[39m[33m 121686[2mms[22m[39m
[31m     [31m×[31m renders exactly one trigger button for a group item[39m[33m 68408[2mms[22m[39m
     [33m[2m✓[22m[39m does not render group children until the menu is opened [33m 596[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/news/news.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 96[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/home/home.component.spec.ts [2m([22m[2m5 tests[22m[2m)[22m[33m 517[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/playground/playground.component.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 86[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/key-industries/key-industries.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 109[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/navigation/navigation.service.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 275[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/loading.service.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 77[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/loader-io/loader-io.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 39[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/loading/loading.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 18[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/prompt-update.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 9[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/handle-unrecoverable-state.service.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 16[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/honeynut-cheerios.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 6[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/news.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 16[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/quiz.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 10[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/ipinfo.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 14[2mms[22m[39m
 [31m❯[39m [30m[43m angulareighteen [49m[39m src/app/quiz/quiz.component.spec.ts [2m([22m[2m7 tests[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 196074[2mms[22m[39m
[31m     [31m×[31m creates and loads the quiz for the routed subject[39m[33m 193708[2mms[22m[39m
     [33m[2m✓[22m[39m starts at a score of zero [33m 1009[2mms[22m[39m
     [33m[2m✓[22m[39m reaches 100% once every question is answered correctly [33m 463[2mms[22m[39m
     [32m✓[39m counts only the latest answer for a given question[32m 143[2mms[22m[39m
     [32m✓[39m renders the quiz title (uppercased) and description[32m 151[2mms[22m[39m
     [33m[2m✓[22m[39m keeps the score at zero and notifies on a wrong answer [33m 406[2mms[22m[39m
     [32m✓[39m does not render its own toolbar (navigation is global)[32m 186[2mms[22m[39m

[2m Test Files [22m [1m[31m3 failed[39m[22m[2m | [22m[1m[32m14 passed[39m[22m[90m (17)[39m
[2m      Tests [22m [1m[31m4 failed[39m[22m[2m | [22m[1m[32m38 passed[39m[22m[90m (42)[39m
[2m   Start at [22m 23:20:55
[2m   Duration [22m 205.90s[2m (transform 2.62s, setup 19.47s, import 5.57s, tests 584.12s, environment 32.55s)[22m

info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
