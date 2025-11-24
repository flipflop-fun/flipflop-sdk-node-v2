import { describe, it } from '@jest/globals';
import { mintToken } from '../src/mint';
import { loadKeypairFromBase58 } from '../src/utils';
import { PublicKey } from '@solana/web3.js';

describe('Mint token', () => {
  describe('successful mint token', () => {
    it('should mint token', async () => {
      // Arrange
      const mintTokenOptions = {
        rpc: 'http://127.0.0.1:8899',
        mint: new PublicKey('C1yDFUFsv8HRhB2nX2dpnDffEycmbzNKZymkAhA52kcx'),
        urc: 'TRP10_URC',
        minter: loadKeypairFromBase58('5RcAMb2c4Y6qdZjLJ1R5cLhNNoY8S3gLNg9WuWNpLUuka9FoyWib5yyqzpPBy7t4WbPaHLrxU2c77ZKDo3egsqv4'), // 9nWe34wW8P5jbwVGkFXmVvRpTyVikhJrLaxSLmiF7sp8
      };

      // Act
      const result = await mintToken(mintTokenOptions);
      console.log("tx", result?.data?.tx);
      // Assert
      expect(result?.success).toBe(true);
      expect(result?.message).toBe('Mint succeeded');
    });
  });
});