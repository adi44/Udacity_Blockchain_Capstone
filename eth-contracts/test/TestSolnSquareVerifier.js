// Test if a new solution can be added for contract - SolnSquareVerifier

// Test if an ERC721 token can be minted for contract - SolnSquareVerifier

var Test = require('../config/testConfig.js');

contract('SolnSquareVerifier', async (accounts) => {

    var proof;
    var input;
    var config;
    

    before('setup contract', async () => {
        config = await Test.Config(accounts);
        proof = config.proof;
        input = config.input;
    });

//a new test case to check the erc721 token matches or not.
    describe('match erc721', function () {

        it('should mint an ERC721 ', async function () {

            config.solnSquareVerifier.Transfer()
                .on('data', (event) => {
                    console.log(`\n\n emit Transfer() tokenId : ${event.returnValues.tokenId}`);
                })
                .on('error', console.error);

            const tokenId = config.firstTokenId

            let status = await config.solnSquareVerifier.mint(
                config.owner,
                tokenId, { from: config.owner });

        })

        it('should add a new sol', async function () {

            config.solnSquareVerifier.Transfer()
                .on('data', (event) => {
                    console.log(`\n\n emit Transfer() tokenId : ${event.returnValues.tokenId}`);
                })
                .on('error', console.error);

            const tokenId = config.firstTokenId + 1

          //variable a status has been created to check the function.
          
            let status = await config.solnSquareVerifier.addSolution(
                proof.A,
                proof.A_p,
                proof.B,
                proof.B_p,
                proof.C,
                proof.C_p,
                proof.H,
                proof.K,
                input,
                config.owner,
                tokenId, {
                    from: config.owner
                });

        })

    });

});

