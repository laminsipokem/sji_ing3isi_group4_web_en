    // Wait for the page to load
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
                    },
                    {
                        "internalType": "string",
                        "name": "pol",
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
                    },
                    {
                        "internalType": "string",
                        "name": "pol",
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
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "_name",
                        "type": "string"
                    }
                ],
                "name": "candelpol",
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
                        "internalType": "string",
                        "name": "poll",
                        "type": "string"
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
                        "name": "_name",
                        "type": "string"
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
                    },
                    {
                        "internalType": "uint256",
                        "name": "regisnum",
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
                        "internalType": "string",
                        "name": "poll",
                        "type": "string"
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
        const contractAddress = '0xfF7b3618e22D538d4CFc09decd486A5917f62F9A';

        // Initialize contract instance
        const contract = new web3.eth.Contract(abi, contractAddress);

        // Set default account
        const accounts = await web3.eth.getAccounts();
        web3.eth.defaultAccount = accounts[0];

       /* contract.methods.candidatenum().call()
    .then(function (result) {
        console.log("Stored Value:", result);

        document.getElementById('candidatenum').innerText = result;
    })
    .catch(console.error);*/
    //alert("yo1");

        // Get candidatenum value

        const candidatenum = await contract.methods.candidatenum().call();

        document.getElementById('candidatenum').innerText = candidatenum;
        const voternum = await contract.methods.votenum().call();
        document.getElementById('votenum').innerText = voternum;
        const pollnum = await contract.methods.pollnum().call();
        document.getElementById('pollnum').innerText = pollnum;
/*contract.methods.candidatenum().call()
    .then(function (result) {

        console.log("Stored Value:", result);


        document.getElementById('candidatenum').innerText = result;
    })
    .catch(console.error);*/
        // Get voternum value
        async function fetchCandidates() {
const candidatenum = await contract.methods.voterid().call();
const candidates = [];

for (let i = 1; i <= candidatenum; i++) {

const candidate = await contract.methods.candidates(i).call();
if(candidate.name!='')
{
candidates.push(candidate);
}
}

return candidates;
}

function createCandidateCard(candidate) {
/*
const card = document.createElement('div');
card.classList.add('card', 'col-md-4', 'mb-4');

const cardBody = document.createElement('div');
cardBody.classList.add('card-body');

const candidateName = document.createElement('h5');
candidateName.classList.add('card-title');
candidateName.textContent = candidate.name;

const candidateDescription = document.createElement('p');
candidateDescription.classList.add('card-text');
candidateDescription.textContent = candidate.email;

cardBody.appendChild(candidateName);
cardBody.appendChild(candidateDescription);
card.appendChild(cardBody);

return card;*/
const colopDiv = document.createElement('div');
colopDiv.classList.add('colop');

// Create the inner div with classes
const innerDiv = document.createElement('div');
innerDiv.classList.add('text-white1', 'text-center', 'mb-4', 'votcard', 'shadow-md1', 'bg-white1', 'p-4', 'pt-5');

// Create the image element
const image = document.createElement('img');
image.classList.add('rounded-pill', 'shadow-md', 'p-2');
image.src = 'Camera Roll/I1.jpg'; // Set the image source

// Create the candidate name heading
const candidateName = document.createElement('h4');
candidateName.classList.add('mt-3', 'fs-5', 'mb-1', 'fw-bold');
candidateName.textContent = candidate.name;

// Create the running position span
const runningPosition = document.createElement('h6');
runningPosition.classList.add('fs-7');
runningPosition.innerHTML = `Running to Be: <span class="text-primary1 fw-bold" style="color:${candidate.colour}">President</span>`;


// Create the description paragraph
const description = document.createElement('p');
description.classList.add('text-dark', 'mt-3', 'mb-3', 'fs-8');
description.textContent = candidate.description;

// Create the "View Manifesto" button

// Create the "Vote" button
const voteBtn = document.createElement('button');
voteBtn.classList.add('btn', 'btn-danger', 'fw-bolder', 'px-4', 'ms-2', 'fs-8');
voteBtn.style.backgroundColor = candidate.colour;
voteBtn.textContent = 'Vote';
voteBtn.setAttribute('data-id', candidate.id);
voteBtn.onclick = async function() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const sender = accounts[0];
    // Your click handler code here
 const voterId=localStorage.getItem('id');

    try {
        await contract.methods.vote(voterId, candidate.id).send({ from: sender });
    } catch (error) {
        console.error('Error voting:', error);
        alert('Error voting. See console for details.');
    }
};

// Append all elements to the inner div
innerDiv.appendChild(image);
innerDiv.appendChild(candidateName);
innerDiv.appendChild(runningPosition);
innerDiv.appendChild(description);
innerDiv.appendChild(voteBtn);

// Append the inner div to the outer div
colopDiv.appendChild(innerDiv);

return colopDiv;

}

async function displayCandidates() {
const candidates = await fetchCandidates();
const container = document.getElementById('candidates-container');

candidates.forEach(candidate => {
const card = createCandidateCard(candidate);
container.appendChild(card);
});
}

displayCandidates();
    });
