import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import java.util.Base64;

public class BlowfishExample {

    public static void main(String[] args) {
        try {
            // Step 1: Generate Blowfish Key
            KeyGenerator keyGenerator = KeyGenerator.getInstance("Blowfish");
            keyGenerator.init(128); // Key size (32 to 448 bits allowed)
            SecretKey secretKey = keyGenerator.generateKey();

            // Step 2: Create Cipher instance
            Cipher cipher = Cipher.getInstance("Blowfish");

            String plainText = "Hello Blowfish Encryption!";
            System.out.println("Original Text: " + plainText);

            // Step 3: Encrypt
            cipher.init(Cipher.ENCRYPT_MODE, secretKey);
            byte[] encryptedBytes = cipher.doFinal(plainText.getBytes());

            String encryptedText = Base64.getEncoder().encodeToString(encryptedBytes);
            System.out.println("Encrypted Text: " + encryptedText);

            // Step 4: Decrypt
            cipher.init(Cipher.DECRYPT_MODE, secretKey);
            byte[] decryptedBytes = cipher.doFinal(encryptedBytes);

            String decryptedText = new String(decryptedBytes);
            System.out.println("Decrypted Text: " + decryptedText);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}