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
                },
                {
                    "internalType": "string",
                    "name": "image",
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
                },
                {
                    "internalType": "string",
                    "name": "image",
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
                },
                {
                    "internalType": "string",
                    "name": "image",
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
                },
                {
                    "internalType": "string",
                    "name": "image",
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
                },
                {
                    "internalType": "string",
                    "name": "image",
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
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                }
            ],
            "name": "findstat",
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
                },
                {
                    "internalType": "string",
                    "name": "image",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];

    // Contract address (copy this from Remix)
    const contractAddress = '0x1257B0dC2Dd0a58b9166A15d71F7aCB6ff75974E';

    // Initialize contract instance
    const contract = new web3.eth.Contract(abi, contractAddress);

const user=JSON.parse(localStorage.getItem('user'));
document.getElementById("user").textContent=user.name;
console.log(user);
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
        document.getElementById('vot').value = voternum;
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
    const colDiv = document.createElement('div');
    colDiv.classList.add('col-lg-4', 'col-md-4');

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('text-white1', 'text-center', 'mb-4', 'votcard', 'shadow-md1', 'bg-white1', 'p-4', 'pt-5');

    const image = document.createElement('img');
    image.classList.add('rounded-pill', 'p-2');
    image.src = '../img/I1.jpg'; // Set the image source

    const candidateName = document.createElement('h4');
    candidateName.classList.add('mt-3', 'fs-5', 'mb-1', 'fw-bold');
    candidateName.textContent = candidate.name;

    const runningPosition = document.createElement('h6');
    runningPosition.classList.add('fs-7');
    runningPosition.innerHTML = `Running to Be: <span class="fw-bold" style="color:${candidate.colour}">President</span>`;

    const description = document.createElement('p');
    description.classList.add('text-dark', 'mt-3', 'mb-3', 'pad-12', 'fs-8');
    description.textContent = candidate.description;

    const voteBtn = document.createElement('button');
    voteBtn.classList.add('btn', 'btn-primary1', 'fw-bolder', 'fs-8');
    voteBtn.setAttribute('data-bs-toggle', 'modal');
    voteBtn.setAttribute('data-bs-target', '#exampleModal');
    voteBtn.style.backgroundColor = candidate.colour;
    voteBtn.textContent = 'Vote';
    voteBtn.setAttribute('data-id', candidate.id);
    voteBtn.onclick = async function() {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const sender = accounts[0];

        try {
            await contract.methods.vote(user.id, candidate.id).send({ from: sender });
        } catch (error) {
            console.error('Error voting:', error);
            alert('Error voting. See console for details.');
        }
    };

    cardDiv.appendChild(image);
    cardDiv.appendChild(candidateName);
    cardDiv.appendChild(runningPosition);
    cardDiv.appendChild(description);
    cardDiv.appendChild(voteBtn);

    colDiv.appendChild(cardDiv);

    colDiv.style.padding="0px";
    return colDiv;
}


function createCandidateCard2(candidate) {
    const colDiv = document.createElement('div');
    colDiv.classList.add('col-lg-4' ,'col-md-6' ,'mb-4');

    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row' ,'p-2', 'm-0', 'rounded', 'shadow-md2', 'bg-white');

    const votCardDiv = document.createElement('div');
    votCardDiv.classList.add('votcard');

    const image = document.createElement('img');
    image.classList.add('rounded-pill', 'max-130', 'p-2');
    image.src = '../img/I1.jpg'; // Set the image source

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('col-md-9', 'align-self-center', 'pad-12');

    const candidateName = document.createElement('h4');
    candidateName.classList.add('mt-3', 'fs-5', 'mb-1', 'fw-bold');
    candidateName.textContent = candidate.name;

    const votes = document.createElement('p');
    votes.classList.add('fs-8', 'mb-2', 'votext');
    votes.textContent = `Votes: ${candidate.voteCount}`;

    const progressDiv = document.createElement('div');
    progressDiv.classList.add('progress');

    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    progressBar.style.backgroundColor=candidate.colour;
    progressBar.setAttribute('role', 'progressbar');
    progressBar.setAttribute('aria-label', 'Example with label');
    const pollNumSpan = document.getElementById('vot');

    // Get the text content of the span and convert it to a number
    const voteNum =Number(pollNumSpan.value) ;
const voteCount=Number(candidate.voteCount) ;
    //progressBar.style.width = `${candidate.voteCount}%`;
    console.log(typeof pollNum);
    console.log( typeof vote);
    if(voteNum==0 || voteCount==0)
        {
    progressBar.style.width = `${0}%`;
        }
else
{
    progressBar.style.width = `${(voteCount/voteNum)*100}%`;
}
    //alert((pollNum/(candidate.voteCout))*100);
    progressBar.setAttribute('aria-valuenow', candidate.votePercentage);
    progressBar.setAttribute('aria-valuemin', '0');
    progressBar.setAttribute('aria-valuemax', '100');
    //progressBar.textContent = `${candidate.votePercentage}%`;
    progressBar.textContent = progressBar.style.width;



    votCardDiv.appendChild(image);
    progressDiv.appendChild(progressBar);
    contentDiv.appendChild(candidateName);
    contentDiv.appendChild(votes);
    contentDiv.appendChild(progressDiv);
    rowDiv.appendChild(votCardDiv);
    rowDiv.appendChild(contentDiv);
    colDiv.appendChild(rowDiv);

    colDiv.style.padding = "0px";
    return colDiv;
}


async function displayCandidates() {
const candidates = await fetchCandidates();
const container = document.getElementById('candidates-container');
const container2 = document.getElementById('candidates-containerR');
container.innerHTML="";
container2.innerHTML="";
for (const candidate of candidates) {
    const card = createCandidateCard(candidate);
    const cardR = createCandidateCard2(candidate);
    container.appendChild(card);
    container2.appendChild(cardR);
}


}

displayCandidates();

    });
