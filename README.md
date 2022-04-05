# ts-jest-enum

A repo to reproduce an error in ts-jest

Steps to reproduce:

- Clone the repo
- Run `npm install`
- Run `npm run test`

See the following error: `TypeError: Cannot read property 'Above' of undefined`

Looking at the ts-jest documentation, [const enum](https://kulshekhar.github.io/ts-jest/docs/babel7-or-ts/#no-const-enum) is not supported but enums are exported as `export enum` in the protomaps module as can be seen [here](https://github.com/protomaps/protomaps.js/blob/2590f58bdfdc13c9350a08b0b24431a3fd1f971d/src/symbolizer.ts#L981)
