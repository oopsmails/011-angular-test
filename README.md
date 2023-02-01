# angular-test

```
10% building 3/3 modules 0 active(node:37268) [DEP0111] DeprecationWarning: Access to process.binding('http_parser') is deprecated.
(Use `node --trace-deprecation ...` to show where the warning was created)

Refs:
https://github.com/howtographql/howtographql/issues/1370

https://stackoverflow.com/questions/67503242/how-to-fix-node12364-dep0111-deprecationwarning-access-to-process-binding

- not solved by adding following in package.json, through

used npm, may have to try to use yarn:

yarn remove @prisma/cli
yarn add prisma --dev
yarn upgrade @prisma/client


"prisma": "^4.7.1",
```

## index

Using Shared Libs


