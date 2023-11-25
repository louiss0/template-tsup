# template-tsup

This template is called the tsup template.
It's used to create libraries and publish them to git hub.
It has every thing that is needed to publish simple API's and functions.

It relies on [tsup](https://tsup.egoist.dev/) to minify the library for esm and cjs.
When using testing with vitest files are not watched by it at all.
When the library is ready to be released [release-it](https://github.com/release-it/release-it)
is used to publish the library to npm and create a git tag and a git release with the same tag.

I decided to use zod and zod