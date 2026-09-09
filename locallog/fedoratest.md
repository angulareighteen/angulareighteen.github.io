```bash
yarn run v1.22.22
$ ng test --watch=false
❯ Building...
✔ Building...
Application bundle generation complete. [5.428 seconds] - 2026-09-09T11:21:00.309Z


[1m[30m[46m RUN [49m[39m[22m [36mv4.1.9 [39m[90m/home/kushal/src/angular/angulareighteen.github.io[39m

 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/app.component.spec.ts [2m([22m[2m5 tests[22m[2m)[22m[33m 15436[2mms[22m[39m
     [33m[2m✓[22m[39m creates the root component [33m 602[2mms[22m[39m
     [33m[2m✓[22m[39m renders the global navigation on a normal route [33m 852[2mms[22m[39m
     [33m[2m✓[22m[39m hides the global navigation on a chromeless route [33m 1172[2mms[22m[39m
 [31m❯[39m [30m[43m angulareighteen [49m[39m src/app/navigation/nav.component.spec.ts [2m([22m[2m4 tests[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 43799[2mms[22m[39m
     [33m[2m✓[22m[39m creates [33m 683[2mms[22m[39m
     [32m✓[39m renders a direct link for a link item[32m 203[2mms[22m[39m
     [33m[2m✓[22m[39m renders exactly one trigger button for a group item [33m 859[2mms[22m[39m
[31m     [31m×[31m does not render group children until the menu is opened[39m[33m 42050[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/home/home.component.spec.ts [2m([22m[2m5 tests[22m[2m)[22m[33m 323[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/news/news.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 86[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/navigation/navigation.service.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 80[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/playground/playground.component.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 66[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/loading.service.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 19[2mms[22m[39m
 [31m❯[39m [30m[43m angulareighteen [49m[39m src/app/quiz/quiz.component.spec.ts [2m([22m[2m7 tests[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 44694[2mms[22m[39m
     [33m[2m✓[22m[39m creates and loads the quiz for the routed subject [33m 1458[2mms[22m[39m
[31m     [31m×[31m starts at a score of zero[39m[33m 41940[2mms[22m[39m
     [33m[2m✓[22m[39m reaches 100% once every question is answered correctly [33m 317[2mms[22m[39m
     [33m[2m✓[22m[39m counts only the latest answer for a given question [33m 377[2mms[22m[39m
     [32m✓[39m renders the quiz title (uppercased) and description[32m 171[2mms[22m[39m
     [32m✓[39m keeps the score at zero and notifies on a wrong answer[32m 179[2mms[22m[39m
     [32m✓[39m does not render its own toolbar (navigation is global)[32m 218[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/key-industries/key-industries.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 102[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/handle-unrecoverable-state.service.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 44[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/honeynut-cheerios.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 13[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/quiz.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 13[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/loader-io/loader-io.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 14[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/news.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 11[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/ipinfo.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 8[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/prompt-update.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 10[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/loading/loading.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 79[2mms[22m[39m

[2m Test Files [22m [1m[31m2 failed[39m[22m[2m | [22m[1m[32m15 passed[39m[22m[90m (17)[39m
[2m      Tests [22m [1m[31m2 failed[39m[22m[2m | [22m[1m[32m40 passed[39m[22m[90m (42)[39m
[2m   Start at [22m 07:21:00
[2m   Duration [22m 55.26s[2m (transform 2.16s, setup 20.13s, import 5.22s, tests 104.80s, environment 31.13s)[22m

info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
