```bash
yarn run v1.22.22
$ ng test --watch=false
❯ Building...
✔ Building...
Application bundle generation complete. [9.218 seconds] - 2026-09-09T17:21:27.772Z


[1m[30m[46m RUN [49m[39m[22m [36mv4.1.9 [39m[90m/home/kushal/src/angular/angulareighteen.github.io[39m

 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/navigation/nav.component.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[33m 1452[2mms[22m[39m
     [33m[2m✓[22m[39m creates [33m 801[2mms[22m[39m
     [33m[2m✓[22m[39m renders a direct link for a link item [33m 313[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/app.component.spec.ts [2m([22m[2m5 tests[22m[2m)[22m[33m 1443[2mms[22m[39m
     [33m[2m✓[22m[39m creates the root component [33m 809[2mms[22m[39m
     [33m[2m✓[22m[39m renders the global navigation on a normal route [33m 414[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/home/home.component.spec.ts [2m([22m[2m5 tests[22m[2m)[22m[32m 106[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/navigation/navigation.service.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[33m 453[2mms[22m[39m
     [33m[2m✓[22m[39m reports chromeless state from the deepest activated route [33m 424[2mms[22m[39m
 [31m❯[39m [30m[43m angulareighteen [49m[39m src/app/news/news.component.spec.ts [2m([22m[2m1 test[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 14045[2mms[22m[39m
[31m     [31m×[31m should create[39m[33m 12746[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/key-industries/key-industries.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 286[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/playground/playground.component.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 155[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/loading.service.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 40[2mms[22m[39m
 [31m❯[39m [30m[43m angulareighteen [49m[39m src/app/quiz/quiz.component.spec.ts [2m([22m[2m7 tests[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 19730[2mms[22m[39m
     [33m[2m✓[22m[39m creates and loads the quiz for the routed subject [33m 1026[2mms[22m[39m
     [32m✓[39m starts at a score of zero[32m 141[2mms[22m[39m
     [33m[2m✓[22m[39m reaches 100% once every question is answered correctly [33m 471[2mms[22m[39m
[31m     [31m×[31m counts only the latest answer for a given question[39m[33m 17246[2mms[22m[39m
     [33m[2m✓[22m[39m renders the quiz title (uppercased) and description [33m 365[2mms[22m[39m
     [32m✓[39m keeps the score at zero and notifies on a wrong answer[32m 245[2mms[22m[39m
     [32m✓[39m does not render its own toolbar (navigation is global)[32m 222[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/loading/loading.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 42[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/loader-io/loader-io.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 12[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/quiz.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 16[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/handle-unrecoverable-state.service.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 26[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/news.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 7[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/honeynut-cheerios.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 6[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/ipinfo.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 6[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/prompt-update.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 5[2mms[22m[39m

[2m Test Files [22m [1m[31m2 failed[39m[22m[2m | [22m[1m[32m15 passed[39m[22m[90m (17)[39m
[2m      Tests [22m [1m[31m2 failed[39m[22m[2m | [22m[1m[32m40 passed[39m[22m[90m (42)[39m
[2m   Start at [22m 13:21:28
[2m   Duration [22m 30.53s[2m (transform 13.10s, setup 18.62s, import 19.12s, tests 37.83s, environment 63.28s)[22m

info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
