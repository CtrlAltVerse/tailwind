# CAV Tailwind Resources

Utility files for Tailwind 4.

```shell
npm i -D @ctrlaltvers/tailwind
```

## Font Awesome

When using Font Awesome via CDN, can drastically reduce the size of CSS files.

```js
@import 'tailwindcss';
@import '@ctrlaltvers/tailwind/dist/fontawesome';
```

**Update note:** If using the old pulse animation class, replace `fa-pulse` with `fa-spin-pulse`.
