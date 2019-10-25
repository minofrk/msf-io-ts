@minofrk/msf-io-ts
===============================================================================

[![NPM Version](https://img.shields.io/npm/v/@minofrk/msf-io-ts.svg?style=flat-square)](https://www.npmjs.com/package/@minofrk/msf-io-ts)
[![License](https://img.shields.io/github/license/minofrk/msf-io-ts.svg?style=flat-square)](LICENSE)
[![Build Status](https://img.shields.io/travis/com/minofrk/msf-io-ts/master.svg?style=flat-square)](https://travis-ci.com/minofrk/msf-io-ts)
[![codecov](https://img.shields.io/codecov/c/github/minofrk/msf-io-ts.svg?style=flat-square)](https://codecov.io/gh/minofrk/msf-io-ts)

[MSF 形式](https://github.com/minofrk/mino-seslax-format)を TypeScript で取り扱う上で有用そうな型を [io-ts](https://github.com/gcanti/io-ts) のコーデックとして用意しています。

```typescript
import { Move } from '@minofrk/msf-io-ts';

// ...

const something = JSON.parse(json);

if (!Move.is(something)) {
    throw new TypeError();
}

const move: Move = something;
```

その他、有用そうな型エイリアスと関数も用意されています（下記参照）

Install
-------------------------------------------------------------------------------

```
npm install @minofrk/msf-io-ts
```

加えて [io-ts](https://github.com/gcanti/io-ts) と [fp-ts](https://github.com/gcanti/fp-ts) もインストールします（既にあれば不要です）

```
npm install io-ts fp-ts
```

Codecs
-------------------------------------------------------------------------------

### 局面、指し手、棋譜

- `State`
- `Move`
- `MSFType`

### 駒

- `Arxe`
- `Sorn`
- `Piece`
- `Teems`
- `TurnablePiece`

### その他

- `FalaType` ... 0 以上 2147483647 以下の整数
- `DateTimeString` ... RFC 3339 に準拠した文字列
- `Player`

Type aliases
-------------------------------------------------------------------------------

上述したコーデックはそのまま型エイリアスとしても使用できます。

加えて以下の型が用意されています。

- `ReadonlyState`
- `ReadonlyMove`
- `ReadonlyMSFType`

Strict validators
-------------------------------------------------------------------------------

仕様への準拠を完全に検査するための関数です。指し手の検査は `Move.is()` で既に完全なので `isSpecCompliantMove()` はありません。

- `isSpecCompliantState()`
- `isSpecCompliantMSFType()`

License
-------------------------------------------------------------------------------

See [LICENSE](LICENSE)
