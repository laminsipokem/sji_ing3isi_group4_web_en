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



const pollList = document.getElementById('polls');
pollList.innerHTML = ''; // Clear the li
const pollid = await contract.methods.pollnum().call();
const polls = [];
const sh2 = document.createElement('a');
pollList.appendChild(sh2);
sh2.setAttribute("href","#id02B");
for (let i = 1; i <= pollid; i++) {

const poll = await contract.methods.polls(i).call();
if(poll.name!='')
{


    var tr = document.createElement('tr');
tr.dataset.href = '#id02B';

// Create td elements and add text content
var td1 = document.createElement('td');
td1.textContent = poll.name;

var td2 = document.createElement('td');
td2.textContent =poll.regisnum;

var td3 = document.createElement('td');
td3.textContent = poll.votenum;


// Append td elements to tr
tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);

// Append tr to tbody
pollList.appendChild(tr);
polls.push(poll);
}

}










 // Clear the li
const voterid = await contract.methods.voterid().call();
const candidates = [];
for (let i = 1; i <= voterid; i++) {

const candidate = await contract.methods.candidates(i).call();
if(candidate.name!='')
{
    //candidate.id=voterid;
candidates.push(candidate);
}
}


for (const candidate of candidates)
 {
    const can=document.getElementById("candidatestats");
    const cardDiv = document.createElement('div');
    const main = document.createElement('div');
    main.className = 'col-lg-4 col-md-6 mb-4 wrapper4';
    cardDiv.className = 'm-0 rounded bg-white ';
    const cardDiv2 = document.createElement('div');
    cardDiv2.className = 'votcard flex space-between';
    // Create the left section
    const leftDiv = document.createElement('div');

    // Create and append the image
    const img = document.createElement('img');
    img.className = 'rounded-pill max-130 p-2';
    img.src = '../img/I1.jpg';
    img.alt = '';
    leftDiv.appendChild(img);

    // Create and append the text container
    const textContainer = document.createElement('div');
    textContainer.className = 'pad-12';

    const nameHeading = document.createElement('h4');
    nameHeading.className = 'mt-3 fs-5 mb-1 fw-bold';
    nameHeading.textContent = candidate.name;
    textContainer.appendChild(nameHeading);

    const votesParagraph = document.createElement('p');
    const span = document.createElement('span');
    span.textContent=candidate.voteCount;
    span.style.color=candidate.colour;
    span.style.fontWeight="bolder";
    votesParagraph.className = 'fs-8 mb-2 votext';
    votesParagraph.textContent = 'Votes: ';

    votesParagraph.appendChild(span);
    textContainer.appendChild(votesParagraph);

    leftDiv.appendChild(textContainer);

    // Create the right section
    const rightDiv = document.createElement('div');

    // Create and append the static table header
    const table = document.createElement('table');
    table.style.width = '270px';

    const thead = document.createElement('thead');
    thead.className = '.thead';

    const tr = document.createElement('tr');

    const th1 = document.createElement('th');
    th1.textContent = "Poll's Name";
    tr.appendChild(th1);

    const th2 = document.createElement('th');
    th2.textContent = 'No of Votes';
    tr.appendChild(th2);

    thead.appendChild(tr);
    table.appendChild(thead);

    rightDiv.appendChild(table);

    // Create and append the scrollable div
    const scrolyDiv = document.createElement('div');
    scrolyDiv.className = 'scroly';

    const scrollTable = document.createElement('table');
    scrollTable.className = 'table1 no-margin';

    const tbody = document.createElement('tbody');
    tbody.className = 'tbody';

    // Example data for the scrollable table


   for (const poll of polls) {

        const tr = document.createElement('tr');

        const td1 = document.createElement('td');
        td1.textContent = poll.name;
        tr.appendChild(td1);
        const count = await contract.methods.findstat(poll.name,candidate.id).call();
        const td2 = document.createElement('td');
        td2.textContent = count;
        tr.appendChild(td2);

        tbody.appendChild(tr);
    };

    scrollTable.appendChild(tbody);
    scrolyDiv.appendChild(scrollTable);
    rightDiv.appendChild(scrolyDiv);

    // Append left and right sections to the main card
    cardDiv2.appendChild(leftDiv);
    cardDiv2.appendChild(rightDiv);
    cardDiv.appendChild(cardDiv2);
    main.appendChild(cardDiv)
    // Append the main card to the body or a specific container
    can.appendChild(main);

}












console.log(candidates);
console.log(polls);
});