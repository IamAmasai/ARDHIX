import { ethers } from "ethers";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const provider = new ethers.providers.JsonRpcProvider(process.env.BLOCKCHAIN_RPC_URL);
const signer = provider.getSigner();

const landRegistryContractAddress = process.env.LAND_REGISTRY_CONTRACT_ADDRESS;
const landRegistryAbi = [
  // ABI of the land registry contract
];

const landRegistryContract = new ethers.Contract(landRegistryContractAddress, landRegistryAbi, signer);

export const initiateLandTransaction = async (geohash, buyerAddress, sellerAddress, price) => {
  try {
    const transaction = await landRegistryContract.initiateTransaction(geohash, buyerAddress, sellerAddress, price);
    await transaction.wait();
    return { success: true, transactionHash: transaction.hash };
  } catch (error) {
    console.error("Error initiating land transaction:", error);
    return { success: false, error: error.message };
  }
};

export const getOwnershipInfo = async (geohash) => {
  try {
    const owner = await landRegistryContract.getOwner(geohash);
    return { success: true, owner };
  } catch (error) {
    console.error("Error fetching ownership info:", error);
    return { success: false, error: error.message };
  }
};

export const getTransactionHistory = async (geohash) => {
  try {
    const history = await landRegistryContract.getTransactionHistory(geohash);
    return { success: true, history };
  } catch (error) {
    console.error("Error fetching transaction history:", error);
    return { success: false, error: error.message };
  }
};

export const registerLand = async (geohash, ownerAddress) => {
  try {
    const transaction = await landRegistryContract.registerLand(geohash, ownerAddress);
    await transaction.wait();
    return { success: true, transactionHash: transaction.hash };
  } catch (error) {
    console.error("Error registering land:", error);
    return { success: false, error: error.message };
  }
};
