# Apercu Pro

Apercu Pro is a commercial typeface from Colophon Foundry. It cannot be
downloaded or bundled without a licence, so it is **not** included here.

## To activate it

Buy the web licence at https://www.colophon-foundry.org/typefaces/apercu/ and
drop the `.woff2` files into this folder with exactly these names:

```
public/fonts/ApercuPro-Regular.woff2
public/fonts/ApercuPro-Medium.woff2
public/fonts/ApercuPro-Bold.woff2
```

That is all. `src/styles/global.css` already declares the matching
`@font-face` rules, and `Apercu Pro` is first in the font stack — the site
picks the files up on the next build with no code change.

## Until then

The site renders in **Hanken Grotesk**, the closest free match to Apercu's
geometric-humanist grotesque (same single-storey `a` feel at display sizes,
similar generous x-height). Nothing breaks if the files are missing: the
browser simply falls through to the next family in the stack.
