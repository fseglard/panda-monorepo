# panda-monorepo

## Installation

```sh
$ pnpm install
```

## To reproduce the issue

1. Start the Next.js app: `pnpm --filter=@acme/next-app dev`
2. The styles of the button in the center of the default page are properly displayed
3. Make a modification in the file `./libs/design-system/src/components/button/recipes.ts`
4. The first modification will work
5. Make a second modification
6. The styles are generated anymore
