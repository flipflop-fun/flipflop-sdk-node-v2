import { NetworkConfig } from "./types";

export const getNetworkType = (
  rpcUrl: string
): "local" | "devnet" | "mainnet" => {
  if (rpcUrl.includes("localhost") || rpcUrl.includes("127.0.0.1"))
    return "local";
  if (rpcUrl.includes("devnet")) return "devnet";
  if (rpcUrl.includes("mainnet")) return "mainnet";
  throw new Error("Invalid RPC URL");
};

export const CONFIGS = {
  local: {
    programId: "FLiPUFYBgPW5q73tiFX92GkmdX5kiQcAQB8dYQurPHR",
    lookupTableAccount: "J5pvpeGcJ8ucg5yEeGJPXsWSLnoog6FWbDsDfcaGfbUw",
    systemManagerAccount: "CXzddeiDgbTTxNnd1apeUGE7E1UAdvBoysf7c271AA79",
    cpSwapProgram: "CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C",
    cpSwapConfigAddress: "D4FPEruKEHrG5TenZ2mpDGEfu1iUvTiqBxvpU8HLBvC2",
    createPoolFeeReceive: "DNXgeM9EiiaAbaWvwjHj9fQQLAX5ZsfHyvmYUNRAdNC8",
    baseToken: "9R4AhtSgf1BXa356x1SpJP6jXnMBF1q9FD2RPS3s4jxP",
    allowOwnerOffCurveForProtocolFeeAccount: false,
    irysGatewayUrl: "https://gateway.irys.xyz",
    apiBaseUrl: "https://api-dev.flipflop.plus",
  } as NetworkConfig,
  devnet: {
    programId: "FLiPUFYBgPW5q73tiFX92GkmdX5kiQcAQB8dYQurPHR",
    lookupTableAccount: "8i75wLdZoKFNxZNxxaixN8naXNByXqYkd4hVSkbVq439",
    systemManagerAccount: "DJ3jvpv6k7uhq8h9oVHZck6oY4dQqY1GHaLvCLjSqxaD",
    cpSwapProgram: "CPMDWBwJDtYax9qW7AyRuVC19Cc4L4Vcy4n2BHAbHkCW",
    cpSwapConfigAddress: "9zSzfkYy6awexsHvmggeH36pfVUdDGyCcwmjT3AQPBj6",
    createPoolFeeReceive: "G11FKBRaAkHAKuLCgLM6K6NUc9rTjPAznRCjZifrTQe2",
    baseToken: "9R4AhtSgf1BXa356x1SpJP6jXnMBF1q9FD2RPS3s4jxP",
    allowOwnerOffCurveForProtocolFeeAccount: false,
    irysGatewayUrl: "https://gateway.irys.xyz",
    apiBaseUrl: "https://api-dev.flipflop.plus",
  } as NetworkConfig,
  mainnet: {
    programId: "FLiPUFYBgPW5q73tiFX92GkmdX5kiQcAQB8dYQurPHR",
    lookupTableAccount: "7DK7pmNkUeeFB3yxt6bJcPCWcG4L3AdCe2WZaBguy9sq",
    systemManagerAccount: "DJ3jvpv6k7uhq8h9oVHZck6oY4dQqY1GHaLvCLjSqxaD",
    cpSwapProgram: "CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C",
    cpSwapConfigAddress: "D4FPEruKEHrG5TenZ2mpDGEfu1iUvTiqBxvpU8HLBvC2",
    createPoolFeeReceive: "DNXgeM9EiiaAbaWvwjHj9fQQLAX5ZsfHyvmYUNRAdNC8",
    baseToken: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", // USDC
    allowOwnerOffCurveForProtocolFeeAccount: true,
    irysGatewayUrl: "https://gateway.irys.xyz",
    apiBaseUrl: "https://api.flipflop.plus",
  } as NetworkConfig,
};
