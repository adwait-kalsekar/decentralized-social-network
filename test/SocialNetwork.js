const { assert } = require('chai');

const SocialNetwork = artifacts.require('./SocialNetwork.sol');

require('chai').use(require('chai-as-promised')).should()

contract('SocialNetwork', ([deployer, author, tipper]) => {
    let socialNetwork;
    
    before(async() => {
        socialNetwork = await SocialNetwork.deployed();
    });
    
    describe('deployment', async() => {
        it('deploys successfully', async() => {
            const address = await socialNetwork.address;
            assert.notEqual(address, 0x0);
            assert.notEqual(address, null);
            assert.notEqual(address, '');
            assert.notEqual(address, undefined);
        });
        
        it('has a name', async() => {
            const name = await socialNetwork.name();
            assert.equal(name, "AD's Social Network");
        });
        
    });
    
    describe('posts', async() => {
        it('create posts', async() => {
            const result = await socialNetwork.createPost('This is my first post', { from: author });
            const postCount = await socialNetwork.postCount();
        });
        
        // it('lists posts', async() => {
            
        // });
        
        // it('tips posts', async() => {
            
        // });
    });
});

