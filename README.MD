# React Redux package

This is React with redux package which use:

 - Redux-sagas
 - Reselect
 - Typescript
 - Ducks folders structure
 - Custom async slice creator helper
 - scss modules

***Absolute imports work with aliases:*** `@folderInSrcDirectory/path/to/module`

***Images in scss modules are served via absolute pathes:*** `public/svg/example.svg`
## Commands

### Start and Build:
`yarn start` - starts dev

`yarn build` - builds production

### CI CD stuff:
`yarn lint` - checks lint errors

`yarn lint-fix` - checks lint errors

`yarn check-types` - typescript types checking

`yarn precommit` - runs every time you try to commit changes (`yarn lint && yarn check-types`)
