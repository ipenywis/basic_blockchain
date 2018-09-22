let database = require("./src/database");
database.onConnect(() => {

    let BlockChain = require("./src/blockChain");

    let blockChain = new BlockChain();

    let hash = require('object-hash');

    let PROOF = 1560;

    /*if (proofOfWork() == PROOF) {
              blockChain.addNewTransaction("islem", "alex", 200);
              let prevHash = blockChain.lastBock() ?
                  blockChain
                  .lastBock()
                  .hash :
                  null;
              blockChain.addNewBlock(prevHash);
          }*/

    blockChain.addNewTransaction("islem", "alex", 200);
    blockChain.addNewBlock(null);

    console.log("Chain : ", blockChain.chain);

})