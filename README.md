# military-speak
It's military speak, but like way over the top.

## What is this?
A pair of functions which allow you to convert normal text to its equivalent using the military alphabet, and back to normal text.

## Why?
I saw a comment on Reddit where someone wrote out an entire paragraph using the military alphabet.

## Usage
To install:
```bash
npm install military-speak
```

To use:
```javascript
const { demilitarizeText, militarizeText } = require('military-speak');
```

### `militarizeText(text: string): string`
Converts normal text to its military alphabet equivalent.

Example:
```javascript
const jargon = militarizeText("the quick brown fox jumps over the lazy dog");
// Tango Hotel Echo Quebec Uniform India Charlie Kilo Bravo Romeo Oscar Whiskey November Foxtrot Oscar X-Ray Juliet Uniform Mike Papa Sierra Oscar Victor Echo Romeo Tango Hotel Echo Lima Alpha Zulu Yankee Delta Oscar Golf
```

### `demilitarizeText(text: string): string`
Converts text encoded with military speak to the normal alphabet.

Example:
```javascript
const text = demilitarizeText("Tango Hotel Echo Quebec Uniform India Charlie Kilo Bravo Romeo Oscar Whiskey November Foxtrot Oscar X-Ray Juliet Uniform Mike Papa Sierra Oscar Victor Echo Romeo Tango Hotel Echo Lima Alpha Zulu Yankee Delta Oscar Golf");
// THEQUICKBROWNFOXJUMPSOVERTHELAZYDOG
```
