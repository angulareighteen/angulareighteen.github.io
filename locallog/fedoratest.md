```bash
yarn run v1.22.22
$ ng test --watch=false
❯ Building...
✔ Building...
Application bundle generation complete. [6.098 seconds] - 2026-09-09T06:21:03.128Z


[1m[30m[46m RUN [49m[39m[22m [36mv4.1.9 [39m[90m/home/kushal/src/angular/angulareighteen.github.io[39m

 [31m❯[39m [30m[43m angulareighteen [49m[39m src/app/navigation/nav.component.spec.ts [2m([22m[2m4 tests[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 77436[2mms[22m[39m
     [33m[2m✓[22m[39m creates [33m 721[2mms[22m[39m
     [33m[2m✓[22m[39m renders a direct link for a link item [33m 600[2mms[22m[39m
     [33m[2m✓[22m[39m renders exactly one trigger button for a group item [33m 5988[2mms[22m[39m
[31m     [31m×[31m does not render group children until the menu is opened[39m[33m 70120[2mms[22m[39m
 [31m❯[39m [30m[43m angulareighteen [49m[39m src/app/app.component.spec.ts [2m([22m[2m5 tests[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 77395[2mms[22m[39m
     [33m[2m✓[22m[39m creates the root component [33m 998[2mms[22m[39m
     [32m✓[39m fetches and caches IP information when none is stored[32m 214[2mms[22m[39m
     [33m[2m✓[22m[39m does not fetch IP information when it is already cached [33m 5027[2mms[22m[39m
[31m     [31m×[31m renders the global navigation on a normal route[39m[33m 70901[2mms[22m[39m
     [32m✓[39m hides the global navigation on a chromeless route[32m 78[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/home/home.component.spec.ts [2m([22m[2m5 tests[22m[2m)[22m[32m 196[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/navigation/navigation.service.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 261[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/key-industries/key-industries.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 167[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/news/news.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 70[2mms[22m[39m
 [31m❯[39m [30m[43m angulareighteen [49m[39m src/app/quiz/quiz.component.spec.ts [2m([22m[2m7 tests[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 78372[2mms[22m[39m
[31m     [31m×[31m creates and loads the quiz for the routed subject[39m[33m 76773[2mms[22m[39m
     [33m[2m✓[22m[39m starts at a score of zero [33m 387[2mms[22m[39m
     [32m✓[39m reaches 100% once every question is answered correctly[32m 242[2mms[22m[39m
     [32m✓[39m counts only the latest answer for a given question[32m 197[2mms[22m[39m
     [33m[2m✓[22m[39m renders the quiz title (uppercased) and description [33m 308[2mms[22m[39m
     [32m✓[39m keeps the score at zero and notifies on a wrong answer[32m 189[2mms[22m[39m
     [32m✓[39m does not render its own toolbar (navigation is global)[32m 260[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/handle-unrecoverable-state.service.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 41[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/playground/playground.component.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 68[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/loading.service.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 36[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/prompt-update.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 8[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/loader-io/loader-io.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 16[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/honeynut-cheerios.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 24[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/news.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 14[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/ipinfo.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 7[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/quiz.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 12[2mms[22m[39m
 [32m✓[39m [30m[43m angulareighteen [49m[39m src/app/loading/loading.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 38[2mms[22m[39m

[2m Test Files [22m [1m[31m3 failed[39m[22m[2m | [22m[1m[32m14 passed[39m[22m[90m (17)[39m
[2m      Tests [22m [1m[31m3 failed[39m[22m[2m | [22m[1m[32m39 passed[39m[22m[90m (42)[39m
[2m   Start at [22m 02:21:04
[2m   Duration [22m 88.59s[2m (transform 2.63s, setup 9.83s, import 5.38s, tests 234.16s, environment 74.77s)[22m

info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
