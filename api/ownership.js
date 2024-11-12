import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider(process.env.BLOCKCHAIN_RPC_URL);
const signer = provider.getSigner();

const landRegistryContractAddress = process.env.LAND_REGISTRY_CONTRACT_ADDRESS;
const landRegistryAbi = [
  // ABI of the land registry contract
];

const landRegistryContract = new ethers.Contract(landRegistryContractAddress, landRegistryAbi, signer);

export const getOwnershipInfo = async (req, res) => {
  const { geohash } = req.query;

  try {
    const owner = await landRegistryContract.getOwner(geohash);
    res.status(200).json({ success: true, owner });
  } catch (error) {
    console.error("Error fetching ownership info:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getTransactionHistory = async (req, res) => {
  const { geohash } = req.query;

  try {
    const history = await landRegistryContract.getTransactionHistory(geohash);
    res.status(200).json({ success: true, history });
  } catch (error) {
    console.error("Error fetching transaction history:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

export const initiateLandTransaction = async (req, res) => {
  const { geohash, buyerAddress, sellerAddress, price } = req.body;

  try {
    const transaction = await landRegistryContract.initiateTransaction(geohash, buyerAddress, sellerAddress, price);
    await transaction.wait();
    res.status(200).json({ success: true, transactionHash: transaction.hash });
  } catch (error) {
    console.error("Error initiating land transaction:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

export const registerLand = async (req, res) => {
  const { geohash, ownerAddress } = req.body;

  try {
    const transaction = await landRegistryContract.registerLand(geohash, ownerAddress);
    await transaction.wait();
    res.status(200).json({ success: true, transactionHash: transaction.hash });
  } catch (error) {
    console.error("Error registering land:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};
