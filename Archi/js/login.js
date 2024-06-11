
window.addEventListener('load', async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
            // Request account access
            await window.ethereum.request({ method: 'eth_requestAccounts' });
        } catch (error) {
            console.error("User denied account access");
            return;
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
        alert("Please install MetaMask to use this dApp!");
        return;
    }
   // const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
    // Contract ABI
                    const abi =[
                        {
                            "inputs": [
                                {
                                    "internalType": "string",
                                    "name": "name",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "classe",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "email",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "password",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "colour",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "description",
                                    "type": "string"
                                }
                            ],
                            "name": "addcandidates",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "string",
                                    "name": "name",
                                    "type": "string"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_address",
                                    "type": "address"
                                }
                            ],
                            "name": "addpolls",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "string",
                                    "name": "name",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "classe",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "email",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "password",
                                    "type": "string"
                                }
                            ],
                            "name": "addvoters",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "id",
                                    "type": "uint256"
                                }
                            ],
                            "name": "deletecandidate",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "id",
                                    "type": "uint256"
                                }
                            ],
                            "name": "deletepoll",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "id",
                                    "type": "uint256"
                                }
                            ],
                            "name": "deleteVoter",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "stateMutability": "nonpayable",
                            "type": "constructor"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "id",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "string",
                                    "name": "name",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "classe",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "email",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "password",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "colour",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "description",
                                    "type": "string"
                                }
                            ],
                            "name": "updatecandidates",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "id",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "string",
                                    "name": "name",
                                    "type": "string"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_address",
                                    "type": "address"
                                }
                            ],
                            "name": "updatepolls",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "id",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "string",
                                    "name": "name",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "classe",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "email",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "password",
                                    "type": "string"
                                }
                            ],
                            "name": "updatevoters",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "Voter",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "Candidate",
                                    "type": "uint256"
                                }
                            ],
                            "name": "vote",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "candidatenum",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "name": "candidates",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "id",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "string",
                                    "name": "name",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "classe",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "email",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "password",
                                    "type": "string"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "voted",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "voteCount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "address",
                                    "name": "poll",
                                    "type": "address"
                                },
                                {
                                    "internalType": "string",
                                    "name": "colour",
                                    "type": "string"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "candidate",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "string",
                                    "name": "description",
                                    "type": "string"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_address",
                                    "type": "address"
                                }
                            ],
                            "name": "checkpoll",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_address",
                                    "type": "address"
                                }
                            ],
                            "name": "findpoll",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "string",
                                    "name": "email",
                                    "type": "string"
                                }
                            ],
                            "name": "finduser",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "string",
                                    "name": "email",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "password",
                                    "type": "string"
                                }
                            ],
                            "name": "login",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "owner",
                            "outputs": [
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "pollid",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "pollnum",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "name": "polls",
                            "outputs": [
                                {
                                    "internalType": "string",
                                    "name": "name",
                                    "type": "string"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_address",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "votenum",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "votenum",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "voterid",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "voternum",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "name": "voters",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "id",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "string",
                                    "name": "name",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "classe",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "email",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "password",
                                    "type": "string"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "voted",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "address",
                                    "name": "poll",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "candidate",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        }
                    ];

    // Contract address (copy this from Remix)
    const contractAddress = '0xDDc0BbeD3138949eAE42F7083Be87e21251b8419';

    // Initialize contract instance
    const contract = new web3.eth.Contract(abi, contractAddress);

    // Set default account
    const accounts = await web3.eth.getAccounts();
    web3.eth.defaultAccount = accounts[0];
    //alert("yo2");
    document.getElementById('loginButton').addEventListener('click', login);
    async function login()
{

const username= document.getElementById('username').value;
const password= document.getElementById('password').value;
const login = await contract.methods.login(username,password).call();

if(login)
{

    const id = await contract.methods.finduser(username).call();
    localStorage.setItem('id', id);
    window.location.href = '../page.html';

}
else {
    alert('Login failed. Please check your username and password.');
}

}
});