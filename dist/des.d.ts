/**
 * 使用方法
 * 实例化对象 new Des()
 * 加密方法 encrypt(key,plaintext)
 * 解密方法 decrypt(key,ciphertext)
 * 示例---------------------------------------------------
 * var Des = new Des();
 * var key = 'custom key';
 * var value = '需要加密的内容'
 * var ciphertext = encrypt(key,value);//加密
 * var plaintext = encrypt(key,ciphertext);//解密
 */
declare function Des(key: any, value: any): void;
