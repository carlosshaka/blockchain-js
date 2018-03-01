class Miner {
  constructor(blockchain, transactionPool, wallet, p2pServer) {
    this.blockchain = blockchain;
    this.transactionPool = transactionPool;
    this.wallet = wallet;
    this.p2p2pServer = p2p2pServer;
  }

  mine() {
    const validTransactions = this.transactionPool.validTransactions();
    // include a reward for the Miner
    // create a block consisting of the valid validTransactions
    // synchronize the chain in the peer-to-peer Server
    // clear the transaction pool
    // broadcast to every miner to clear their transaction pools
  }
}

module.exports = Miner;
