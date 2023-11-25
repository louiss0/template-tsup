# template-tsup

This template is called the tsup template.
It's used to create libraries and publish them to git hub.
It has every thing that is needed to publish simple API's and functions.

It relies on [tsup](https://tsup.egoist.dev/) to minify the library for esm and cjs.
When using testing with vitest files are not watched by it at all.
When the library is ready to be released [release-it](https://github.com/release-it/release-it)
is used to publish the library to npm and create a git tag and a git release with the same tag.

I decided to use [zod](https://zod.dev/) and
[zod mock](https://www.npmjs.com/package/@anatine/zod-mock) in order to mock out certain things.

## Usage

When using this template first thing you should do is replace in your `package.json`.
The `"name":` props value with the name of your intended package.
The scope is `@code-fixer-23/` for me.

Then make sure you import the `.env` file into your repo and set the `GITHUB_TOKEN=` equal to what ever your's is.

After that you run the script with `pnpm run dev` to test your library.

When done testing your library use `pnpm run release` to release your library.

### Scripts

**To test the library use**.

```sh
pnpm run dev
```

This will activate vitest and make it so that it will watch all ts files for changes.

**To create test coverage for your library use**.

```sh
pnpm run coverage
```

This will trigger the vitest --coverage flag and will give you your test coverage.

**To publish your library to npm**.

```sh
pnpm run release
```

This command will make sure that tsup builds your library in a created `dist/`.
Then another script will be activated where `dotenv-cli` is used to read your `.env` file.
Then it release it will activate. Make sure to approve of the prompts given you you.
If all is complete then it will release your library.

### Configuration

This template is filled with many config files for many libraries.
The tsup config file is configured to create turn all files exported from the `src/index.ts`
file into `.cjs` and `.esm` files and create the `d.ts` file that is needed.

The vite config file is configured to.

- Make sure that all files in the `.test` or `.spec` files are watched by vitest.
- Make all vitest api's global.

The release it config file is configured to do the following things.

- Run the coverage script before prompting for releases.
- Create a git tag with the latest version of the library and the `dist/**/*.js` files.
- Publish the package to the npm registry using npm.
- Create a new release by using the created git tag.
- Throw an error when you don't write your changelog.
