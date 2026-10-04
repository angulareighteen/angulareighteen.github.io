```bash
yarn run v1.22.22
$ ng test --watch=false
❯ Building...
✔ Building...
Application bundle generation complete. [4.960 seconds] - 2026-10-04T07:21:08.763Z


[1m[30m[46m RUN [49m[39m[22m [36mv4.1.9 [39m[90m/home/kushal/src/angular/angulareighteen.github.io[39m

 [31m❯[39m [30m[43m angulareighteen [49m[39m src/app/navigation/nav.component.spec.ts [2m([22m[2m4 tests[22m[2m | [22m[31m2 failed[39m[2m)[22m[33m 117995[2mms[22m[39m
[31m     [31m×[31m creates[39m[33m 16038[2mms[22m[39m
     [33m[2m✓[22m[39m renders a direct link for a link item [33m 365[2mms[22m[39m
[31m     [31m×[31m renders exactly one trigger button for a group item[39m[33m 101194[2mms[22m[39m
     [33m[2m✓[22m[39m does not render group children until the menu is opened [33m 390[2mms[22m[39m
 [31m❯[39m [30m[43m angulareighteen [49m[39m src/app/quiz/quiz.component.spec.ts [2m([22m[2m7 tests[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 103416[2mms[22m[39m
     [33m[2m✓[22m[39m creates and loads the quiz for the routed subject [33m 817[2mms[22m[39m
     [32m✓[39m starts at a score of zero[32m 184[2mms[22m[39m
[31m     [31m×[31m reaches 100% once every question is answered correctly[39m[33m 101111[2mms[22m[39m
     [33m[2m✓[22m[39m counts only the latest answer for a given question [33m 380[2mms[22m[39m
     [33m[2m✓[22m[39m renders the quiz title (uppercased) and description [33m 537[2mms[22m[39m
     [32m✓[39m keeps the score at zero and notifies on a wrong answer[32m 160[2mms[22m[39m
     [32m✓[39m does not render its own toolbar (navigation is global)[32m 222[2mms[22m[39m
 [31m❯[39m [30m[43m angulareighteen [49m[39m src/app/app.component.spec.ts [2m([22m[2m5 tests[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 103281[2mms[22m[39m
[31m     [31m×[31m creates the root component[39m[33m 102134[2mms[22m[39m
     [32m✓[39m fetches and caches IP information when none is stored[32m 129[2mms[22m[39m
     [32m✓[39m does not fetch IP information when it is already cached[32m 21[2mms[22m[39m
     [33m[2m✓[22m[39m renders the global navigation on a normal route [33m 926[2mms[22m[39m
     [32m✓[39m hides the global navigation on a chromeless route[32m 65[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/home/home.component.spec.ts [2m([22m[2m5 tests[22m[2m)[22m[32m 220[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/navigation/navigation.service.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 149[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/key-industries/key-industries.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 111[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/playground/playground.component.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 41[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/news/news.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 149[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/handle-unrecoverable-state.service.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 19[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/loading/loading.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 97[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/loading.service.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 138[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/loader-io/loader-io.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 16[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/honeynut-cheerios.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 33[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/prompt-update.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 6[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/quiz.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 6[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/news.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 7[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/ipinfo.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 5[2mms[22m[39m

[2m Test Files [22m [1m[31m3 failed[39m[22m[2m | [22m[1m[32m14 passed[39m[22m[90m (17)[39m
[2m      Tests [22m [1m[31m4 failed[39m[22m[2m | [22m[1m[32m38 passed[39m[22m[90m (42)[39m
[2m   Start at [22m 03:21:09
[2m   Duration [22m 130.93s[2m (transform 12.79s, setup 21.43s, import 36.80s, tests 325.69s, environment 37.28s)[22m

info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
