let hash = require('object-hash');

const TARGET_HASH = hash(1560);

let validator = require("./validator");

let mongoose = require("mongoose");

let blockChainModel = mongoose.model("BlockChain");

let chalk = require("chalk");

class BlockChain {

    constructor() {

        //Create
        this.chain = [];
        //Transaction
        this.curr_transactions = [];

    }

    addNewBlock(prevHash) {
        let block = {
            index: this.chain.length + 1,
            timestamp: Date.now(),
            transactions: this.curr_transactions,
            prevHash: prevHash
        };

        if (validator.proofOfWork() == TARGET_HASH) {
            block.hash = hash(block);
            //Add it to the instance Save it on the DB Console Success
            let newBlock = new blockChainModel(block);
            newBlock.save((err) => {
                if (err)
                    return console.log(chalk.red("Cannot save Block to DB ", err.message));
                console.log(chalk.green("Block Saved on the DB"));
            });
            //Add to Chain
            this
                .chain
                .push(block);
            this.curr_transactions = [];
            return block;
        }
    }

    addNewTransaction(sender, recipient, amount) {
        this
            .curr_transactions
            .push({ sender, recipient, amount });
    }

    lastBock() {
        return this
            .chain
            .slice(-1)[0];
    }

    isEmpty() {
        return this.chain.length == 0;
    }

}

module.exports = BlockChain;