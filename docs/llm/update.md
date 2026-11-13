Thu Nov 12 08:20:01 PM EST 2026

# angulareighteen


This project is live at [https://angulareighteen.github.io](https://angulareighteen.github.io "colorado!") thanks to Firebase.

CI Status: 

[![Deploy to Firebase Hosting on merge](https://github.com/angulareighteen/angulareighteen.github.io/actions/workflows/firebase-hosting-merge.yml/badge.svg)](https://github.com/angulareighteen/angulareighteen.github.io/actions/workflows/firebase-hosting-merge.yml)

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           3.7Gi       1.4Gi       649Mi        65Mi       2.1Gi       2.3Gi
Swap:          975Mi       520Mi       455Mi
System Storage
802M	.
```
```bash
yarn run v1.22.22
$ ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI       : 22.2.7
Angular           : 22.2.6
Node.js           : 26.13.1
Package Manager   : yarn 1.22.22
Operating System  : linux x64

┌───────────────────────────┬───────────────────┬───────────────────┐
│ Package                   │ Installed Version │ Requested Version │
├───────────────────────────┼───────────────────┼───────────────────┤
│ @angular/animations       │ 22.2.6            │ ^22.2.6           │
│ @angular/build            │ 22.2.7            │ ^22.2.7           │
│ @angular/cdk              │ 22.2.7            │ ^22.2.7           │
│ @angular/cli              │ 22.2.7            │ ^22.2.7           │
│ @angular/common           │ 22.2.6            │ ^22.2.6           │
│ @angular/compiler         │ 22.2.6            │ ^22.2.6           │
│ @angular/compiler-cli     │ 22.2.6            │ ^22.2.6           │
│ @angular/core             │ 22.2.6            │ ^22.2.6           │
│ @angular/forms            │ 22.2.6            │ ^22.2.6           │
│ @angular/material         │ 22.2.7            │ ^22.2.7           │
│ @angular/platform-browser │ 22.2.6            │ ^22.2.6           │
│ @angular/router           │ 22.2.6            │ ^22.2.6           │
│ @angular/service-worker   │ 22.2.6            │ ^22.2.6           │
│ rxjs                      │ 7.8.2             │ ~7.8.0            │
│ typescript                │ 6.0.3             │ ~6.0.2            │
│ vitest                    │ 4.1.9             │ ^4.0.8            │
└───────────────────────────┴───────────────────┴───────────────────┘
Done in 2.35s.
yarn install v1.22.22
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.35s.
```
```bash
Browserslist: caniuse-lite is outdated. Please run:
  npx update-browserslist-db@latest
  Why you should do it regularly: https://github.com/browserslist/update-db#readme
Registry latest:         1.0.30001826
Installed version:       1.0.30001826
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
yarn add v1.22.22
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
warning " > express-rate-limit@8.5.2" has unmet peer dependency "express@>= 4.11".
warning "@angular/build > @oxc-parser/binding-wasm32-wasi > @napi-rs/wasm-runtime@1.2.7" has incorrect peer dependency "@emnapi/core@^1.7.1 || 2.0.0-beta.2 || 2.0.0-beta.3".
warning "@angular/build > @oxc-parser/binding-wasm32-wasi > @napi-rs/wasm-runtime@1.2.7" has incorrect peer dependency "@emnapi/runtime@^1.7.1 || 2.0.0-beta.2 || 2.0.0-beta.3".
warning " > vitest@4.1.9" has unmet peer dependency "vite@^6.0.0 || ^7.0.0 || ^8.0.0".
[4/4] Building fresh packages...
success Saved 1 new dependency.
info Direct dependencies
└─ baseline-browser-mapping@2.11.37
info All dependencies
└─ baseline-browser-mapping@2.11.37
Done in 5.34s.
```
```bash
yarn run v1.22.22
$ ng build --configuration production
❯ Building...
✔ Building...
Initial chunk files | Names                    |  Raw size | Estimated transfer size
main-RNOANEEW.js    | main                     | 267.67 kB |                58.71 kB
chunk-BZz2rhcQ.js   | -                        | 160.26 kB |                47.94 kB
chunk-C15b8jyx.js   | -                        |  63.25 kB |                18.22 kB
styles-AX2II72J.css | styles                   |   8.05 kB |                 1.31 kB

                    | Initial total            | 499.22 kB |               126.18 kB

Lazy chunk files    | Names                    |  Raw size | Estimated transfer size
chunk-BzQyWObw.js   | browser                  |  69.26 kB |                17.88 kB
chunk-BkkrAnqe.js   | quiz-component           |  43.39 kB |                10.33 kB
chunk-Bh4wmOuo.js   | -                        |  23.35 kB |                 5.42 kB
chunk-C_qO04Fe.js   | key-industries-component |   3.76 kB |                 1.17 kB
chunk-D0vfpNz_.js   | news-component           |   3.37 kB |                 1.43 kB
chunk-wYgyW4Y2.js   | home-component           |   1.22 kB |               558 bytes
chunk-B1J63bVQ.js   | playground-component     | 491 bytes |               491 bytes
chunk-BHK5QwK9.js   | loader-io-component      | 307 bytes |               307 bytes

Application bundle generation complete. [9.002 seconds] - 2026-11-13T01:20:45.080Z

Output location: /home/kushal/src/angular/angulareighteen.github.io/public

Done in 11.07s.
```
Thu Nov 12 08:21:01 PM EST 2026
yarn version v1.22.22
info Current version: 2.0.2018
info New version: 2.0.2019
Done in 0.09s.
