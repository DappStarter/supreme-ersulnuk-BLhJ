require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note noise example install gloom outer struggle'; 
let testAccounts = [
"0x469f65b1aacb7e4c8d731963478533e361d895ad8f87ffaa273e3f644ec00037",
"0xb0498c7d8aecc85006d67b81dad1b5179f06d866efdffcc40230e1fdc9df56c5",
"0x9bc7a491891dc1eeed6520ed961287d4456912ee8c0ab6adff8a738160541265",
"0xa7f55b5197495c2e39132087f9bd6018ab3ad7f2de7477f7d8986f9ebe00dff4",
"0x47f84ee4b4389613ec8719080f69edbc96a3303d7acf61908896cfff6f0f19ca",
"0x29621d3dbd01c0eabb6e2aea8ac4d1b918632517a582def5b016e83d27f4f977",
"0x1012a718262233e8f306a92d95fa04e784ff3ec534c41bddadb5a3d888c6f4b1",
"0x47bfc41773c44322e6f9fc4bb53d2ddea85abbb02294546875a6a7cc13508960",
"0x17bf5b81f1991507783ac39538bcc1f08c6942ab556ffe3cdf70e83731be2568",
"0x9557701575e51d593ac5da3ce88f6da792226e04498443194ac761edfce4c5d2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

