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
        mint: new PublicKey('8n3N7WEuw3VGWkur5g5Xh2c4qvLWZ5HL9UU4QUKWCXwy'),
        urc: 'URC_TT10',
        minter: loadKeypairFromBase58('2hjd86vMvsXb1Zbpu6pTz1TgRrDsasr2PukkTBRSUz5GFmGqmN3FGdk1qpzk3hcCJwP8qXoVJwAmiHqrZ8UjAASi'), // 9nWe34wW8P5jbwVGkFXmVvRpTyVikhJrLaxSLmiF7sp8
      };

      // Act
      const result = await mintToken(mintTokenOptions);
      console.log(result)
      console.log("tx", result?.data?.tx);
      // Assert
      expect(result?.success).toBe(true);
      expect(result?.message).toBe('Mint succeeded');
    });
  });
});