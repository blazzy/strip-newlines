# strip-newlines

An ES6 template string tag to replace newlines, indentation, and surrounding
whitespace with a single space character.

This module, unlike [dedent](https://www.npmjs.com/package/dedent), goes beyond
stripping out indentation whitespace and destroys all new line characters to
produce a single line paragraph.

## Usage

For example:

```
import snl from 'strip-newlines';
console.log(snl`In a sense we've come to our nation's capital to cash a check.
                When the architects of our republic wrote the magnificent words
                of the Constitution and the Declaration of Independence, they
                were signing a promissory note to which every American was to
                fall heir.`);
```

Would produce the output:

```
In a sense we've come to our nation's capital to cash a check. When the architects of our republic wrote the magnificent words of the Constitution and the Declaration of Independence, they were signing a promissory note to which every American was to fall heir.
```

# Installation

```
npm install strip-newline
```
