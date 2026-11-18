Wed Nov 18 05:20:02 PM EST 2026

# angulareighteen


This project is live at [https://angulareighteen.github.io](https://angulareighteen.github.io "colorado!") thanks to Firebase.

CI Status: 

[![Deploy to Firebase Hosting on merge](https://github.com/angulareighteen/angulareighteen.github.io/actions/workflows/firebase-hosting-merge.yml/badge.svg)](https://github.com/angulareighteen/angulareighteen.github.io/actions/workflows/firebase-hosting-merge.yml)

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           3.7Gi       1.7Gi       985Mi       109Mi       1.5Gi       2.0Gi
Swap:          975Mi       975Mi       204Ki
System Storage
813M	.
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
    

Angular CLI       : 22.2.8
Angular           : 22.3.0
Node.js           : 26.13.1
Package Manager   : yarn 1.22.22
Operating System  : linux x64

┌───────────────────────────┬───────────────────┬───────────────────┐
│ Package                   │ Installed Version │ Requested Version │
├───────────────────────────┼───────────────────┼───────────────────┤
│ @angular/animations       │ 22.3.0            │ ^22.3.0           │
│ @angular/build            │ 22.2.8            │ ^22.2.8           │
│ @angular/cdk              │ 22.3.0            │ ^22.3.0           │
│ @angular/cli              │ 22.2.8            │ ^22.2.8           │
│ @angular/common           │ 22.3.0            │ ^22.3.0           │
│ @angular/compiler         │ 22.3.0            │ ^22.3.0           │
│ @angular/compiler-cli     │ 22.3.0            │ ^22.3.0           │
│ @angular/core             │ 22.3.0            │ ^22.3.0           │
│ @angular/forms            │ 22.3.0            │ ^22.3.0           │
│ @angular/material         │ 22.3.0            │ ^22.3.0           │
│ @angular/platform-browser │ 22.3.0            │ ^22.3.0           │
│ @angular/router           │ 22.3.0            │ ^22.3.0           │
│ @angular/service-worker   │ 22.3.0            │ ^22.3.0           │
│ rxjs                      │ 7.8.2             │ ~7.8.0            │
│ typescript                │ 6.0.3             │ ~6.0.2            │
│ vitest                    │ 4.1.9             │ ^4.0.8            │
└───────────────────────────┴───────────────────┴───────────────────┘
Done in 0.78s.
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
└─ baseline-browser-mapping@2.11.38
info All dependencies
└─ baseline-browser-mapping@2.11.38
Done in 2.96s.
```
```bash
yarn run v1.22.22
$ ng build --configuration production
❯ Building...
✔ Building...
Initial chunk files | Names                    |  Raw size | Estimated transfer size
main-XVN76YBD.js    | main                     | 268.83 kB |                58.96 kB
chunk-Bm-YSpqo.js   | -                        | 160.06 kB |                47.88 kB
chunk-DzkV2K5O.js   | -                        |  63.32 kB |                18.24 kB
styles-AX2II72J.css | styles                   |   8.05 kB |                 1.31 kB

                    | Initial total            | 500.25 kB |               126.39 kB

Lazy chunk files    | Names                    |  Raw size | Estimated transfer size
chunk-CG6kod1N.js   | browser                  |  69.26 kB |                17.87 kB
chunk-CrAmt0Xe.js   | quiz-component           |  43.47 kB |                10.38 kB
chunk-GGVxFXmZ.js   | -                        |  23.35 kB |                 5.43 kB
chunk-CCAXmSwF.js   | key-industries-component |   3.76 kB |                 1.17 kB
chunk-BZjlpcsp.js   | news-component           |   3.37 kB |                 1.44 kB
chunk-CahqpLAB.js   | home-component           |   1.21 kB |               557 bytes
chunk-C7SHPFrl.js   | playground-component     | 491 bytes |               491 bytes
chunk-CopOInvP.js   | loader-io-component      | 307 bytes |               307 bytes

Application bundle generation complete. [6.528 seconds] - 2026-11-18T22:20:33.829Z

Output location: /home/kushal/src/angular/angulareighteen.github.io/public

Done in 8.19s.
```
