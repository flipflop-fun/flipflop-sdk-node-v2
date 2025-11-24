import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { initProviderNoSigner } from "./utils";
import { LAMPORTS_PER_USDC, LAUNCH_RULE_SEEDS, SYSTEM_CONFIG_SEEDS } from "./constants";
import { CONFIGS, getNetworkType } from "./config";
import { SystemConfigAccountData, SystemConfigAccountOptions } from "./types";
import { ApiResponse } from "./raydium/types";

export const getSystemConfig = async (
  options: SystemConfigAccountOptions
): Promise<ApiResponse<SystemConfigAccountData>> => {
  // Validate required parameters
  if (!options.rpc) {
    return {
      success: false,
      message: "Missing --rpc parameter",
    };
  }

  const rpc = new Connection(options.rpc, "confirmed");
  const config = CONFIGS[getNetworkType(options.rpc)];
  const { program, programId } = await initProviderNoSigner(rpc);

  try {
    const [launchRuleAccountPda] = PublicKey.findProgramAddressSync(
      [
        Buffer.from(LAUNCH_RULE_SEEDS),
        new PublicKey(config.systemManagerAccount).toBuffer(),
      ],
      programId
    );

    const [systemConfigAccount] = PublicKey.findProgramAddressSync(
      [
        Buffer.from(SYSTEM_CONFIG_SEEDS),
        new PublicKey(config.systemManagerAccount).toBuffer(),
      ],
      programId
    );
    const systemConfigAccountInfo =
      await program.account.systemConfigData.fetch(systemConfigAccount);
    if (!systemConfigAccountInfo) {
      return {
        success: false,
        message: "❌ Failed to get system config account data",
      };
    }
    return {
      success: true,
      data: {
        systemConfigAccount,
        systemManagerAccount: new PublicKey(config.systemManagerAccount),
        ...systemConfigAccountInfo,
        count: systemConfigAccountInfo.count.toNumber(),
        refundFeeRate: systemConfigAccountInfo.refundFeeRate,
        launchRuleAccount: launchRuleAccountPda,
        referrerResetIntervalSeconds:
          systemConfigAccountInfo.referrerResetIntervalSeconds.toNumber(),
        updateMetadataFee:
          systemConfigAccountInfo.updateMetadataFee.toNumber() / LAMPORTS_PER_USDC,
        customizedDeployFee:
          systemConfigAccountInfo.customizedDeployFee.toNumber() / LAMPORTS_PER_USDC,
        initPoolBaseAmount:
          systemConfigAccountInfo.initPoolBaseAmount.toNumber() / 100000, // deprecated
        graduateFeeRate: systemConfigAccountInfo.graduateFeeRate.toNumber(),
        minGraduateFee: systemConfigAccountInfo.minGraduateFee.toNumber() / LAMPORTS_PER_USDC,
        raydiumCpmmCreateFee:
          systemConfigAccountInfo.raydiumCpmmCreateFee.toNumber() / LAMPORTS_PER_SOL,
        isPause: systemConfigAccountInfo.isPause,
      },
    };
  } catch (error) {
    return {
      success: false,
      message:
        "❌ Error displaying system config information:" +
        (error instanceof Error ? error.message : "Unknown error"),
    };
  }
};
