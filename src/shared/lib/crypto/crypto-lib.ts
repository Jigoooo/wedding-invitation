import CryptoJS from 'crypto-js';

export const encrypt = (payload: string | null) => {
  try {
    const secret_key = import.meta.env.VITE_SECURE_LOCAL_STORAGE_HASH_KEY;

    if (!secret_key || !payload) {
      return null;
    }

    return CryptoJS.AES.encrypt(payload, secret_key).toString();
  } catch (e) {
    console.log('Encryption error occur : ', e);
    return null;
  }
};

export const decrypt = (encrypted: string | null) => {
  try {
    const secret_key = import.meta.env.VITE_SECURE_LOCAL_STORAGE_HASH_KEY;

    if (!secret_key || !encrypted) {
      return null;
    }

    const decrypted_bytes = CryptoJS.AES.decrypt(encrypted, secret_key);

    return decrypted_bytes.toString(CryptoJS.enc.Utf8);
  } catch (e) {
    console.log('Decryption error occur : ', e);
    return null;
  }
};
