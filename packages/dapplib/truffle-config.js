require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grace indoor sure security trap cruise ridge toss guess process surge shop'; 
let testAccounts = [
"0x5b69ac6c0a893ed873ed614ed53816fca53a79f9103d58b9664c8036325cc54c",
"0x23451d459f027e5726a3712ac473966c0ce0bad1d967af48fb23960e882d5fd3",
"0xb64b4955d9cd9e4b79495672d53d47f11bc0fe3dd053af3d503656caabb50aec",
"0x6638072ef569f8a9bd306ad12bcdf5e0d72f339cfe11172275ef3e05cef87356",
"0xcf2a7e39caec669f67835799bb6fdca850fc52b944087d64e238abdbf26eaed1",
"0x24ce92d28a8f319977360c19f37317d05ce8a989f69b45e691aa107a32ff8af8",
"0xa73483098e52a18b8e3ed0b045078e8930b3d5a0eb471c75f2ae74c3abb537fd",
"0x0205d0ab9364e5d7fc829bb9374d305812bcfc48b96f8a76bd5b46f52fb96d80",
"0xc1f60b495d1f33a4a440c0014f59b67cd1c79bf5618d28f6b0cdfb6f581396f7",
"0x012b3b6520496e74d0c66acb059b18164bc5adfa6e671b997d5537f6302ffd5a"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


