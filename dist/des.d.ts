/**
 * 加密
 * @param {String} key 密钥
 * @param {String} plaintext 明文
 * @return {String} ciphertext 密文
 */
export declare function encrypt(key: string, plaintext: string): string;
/**
 * 解密
 * @param {String} key 密钥
 * @param {String} ciphertext 密文
 * @return {String} plaintext 明文
 */
export declare function decrypt(key: string, ciphertext: string): string;
