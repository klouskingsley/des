# des 对称加密

# Usage

```ts
import {encrypt, decrypt} from '@volt-wallet/des'
const key = 'secretKey'
const plainText = 'plain text'

console.log('text', plainText)

const encryptText = encrypt(key, plainText)
console.log('encrypted', encryptText)

const decryptText = decrypt(key, encryptText)
console.log('decrypted', decryptText)
```
