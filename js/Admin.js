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
    const contractAddress = '0x52cAC176e2060CC4EDD788102Aaa9b3DD90Ea94f';

    // Initialize contract instance
    const contract = new web3.eth.Contract(abi, contractAddress);

    // Set default account
    const accounts = await web3.eth.getAccounts();
    web3.eth.defaultAccount = accounts[0];

    async function fetchpoll() {
        const pollList = document.getElementById('todoList');
            pollList.innerHTML = ''; // Clear the li
        const pollnum = await contract.methods.pollnum().call();
        const polls = [];
        const sh = document.createElement('a');
        pollList.appendChild(sh);
       sh.setAttribute("href","#id01B");
        for (let i = 1; i <= pollnum; i++) {

        const poll = await contract.methods.polls(i).call();
        if(poll.name!='')
        {
            const listItem = document.createElement('a');

            listItem.setAttribute("data-name",poll.name);
            listItem.setAttribute("data-address",poll._address);
            listItem.setAttribute("data-id",i);
            listItem.innerHTML = `<li  onclick="showPopup('${poll.name}', '${poll._address}')">${poll.name}</li>`;
            listItem.onclick = function() {
                document.getElementById('epname').value = this.getAttribute("data-name");
            document.getElementById('epaddress').value = this.getAttribute("data-address");
            document.getElementById('epid').value = this.getAttribute("data-id");

            sh.click();
            };
            pollList.appendChild(listItem);
        polls.push(poll);
const select=document.getElementById("cvschool");
        var option = document.createElement('option');
        option.value = poll.name;
        option.text = poll.name;
        select.appendChild(option);
        }
        }

        }





        const voterList = document.getElementById('voters');
        voterList.innerHTML = ''; // Clear the li
    const voterid = await contract.methods.voterid().call();
    const voters = [];
    const sh2 = document.createElement('a');
    voterList.appendChild(sh2);
   sh2.setAttribute("href","#id02B");
   for (let i = 1; i <= voterid; i++) {

    const voter = await contract.methods.voters(i).call();
    if(voter.name!='')
    {
        var tr = document.createElement('tr');
tr.dataset.href = '#id02B';

// Create td elements and add text content
var td1 = document.createElement('td');
td1.textContent = voter.name;

var td2 = document.createElement('td');
td2.textContent = voter.classe;

var td3 = document.createElement('td');
td3.textContent = voter.poll;

var td4 = document.createElement('td');
td4.style.fontWeight="bolder";
        if(voter.voted)
{
        td4.textContent = "Voted";
        td4.style.color="green";

}
else{
    td4.textContent = "Unvoted";
    td4.style.color="red";
}

// Append td elements to tr
tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
tr.appendChild(td4);

// Append tr to tbody
voterList.appendChild(tr);
    //     const listItem = document.createElement('a');

    //     listItem.setAttribute("data-name",poll.name);
    //     listItem.setAttribute("data-address",poll._address);
    //     listItem.innerHTML = `<li  onclick="showPopup('${poll.name}', '${poll._address}')">${poll.name}</li>`;
    //     listItem.onclick = function() {
    //         document.getElementById('namep').value = this.getAttribute("data-name");
    //     document.getElementById('addressp').value = this.getAttribute("data-address");
    //     console.log(document.getElementById('namep').value);
    //     sh.click();
    //     };
    //     pollList.appendChild(listItem);
    // polls.push(poll);
    }
    }










    const candidateList = document.getElementById('candidates');
    candidateList.innerHTML = ''; // Clear the li

const candidates = [];
const sh3 = document.createElement('a');
voterList.appendChild(sh2);
sh3.setAttribute("href","#id02B");
for (let i = 1; i <= voterid; i++) {

    const candidate = await contract.methods.candidates(i).call();
    if(candidate.name!='')
    {
        var tr = document.createElement('tr');
        tr.setAttribute('onclick', "location.href = '#editcan'");

        // Create td elements and add text content
        var td1 = document.createElement('td');
        td1.textContent = candidate.name;

        var td2 = document.createElement('td');
        td2.textContent = candidate.classe;

        var td3 = document.createElement('td');
        td3.textContent = candidate.poll;

        var td4 = document.createElement('td');
        td4.textContent = candidate.voteCount;

        var td5 = document.createElement('td');
        td5.style.fontWeight="bolder";
        if(candidate.voted)
{
        td5.textContent = "Voted";
        td5.style.color="green";

}
else{
    td5.textContent = "Unvoted";
    td5.style.color="red";
}
        // Append td elements to tr
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

// Append tr to tbody
candidateList.appendChild(tr);
    //     const listItem = document.createElement('a');

    //     listItem.setAttribute("data-name",poll.name);
    //     listItem.setAttribute("data-address",poll._address);
    //     listItem.innerHTML = `<li  onclick="showPopup('${poll.name}', '${poll._address}')">${poll.name}</li>`;
    //     listItem.onclick = function() {
    //         document.getElementById('namep').value = this.getAttribute("data-name");
    //     document.getElementById('addressp').value = this.getAttribute("data-address");
    //     console.log(document.getElementById('namep').value);
    //     sh.click();
    //     };
    //     pollList.appendChild(listItem);
    // polls.push(poll);
    }
    }
fetchpoll();




var button = document.getElementById('createpoll');

// Add an onclick event to the button
button.onclick = async function() {

    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const sender = accounts[0];
    // Your click handler code here
    var name = document.getElementById('cpname').value; // replace with your poll name
    var address = document.getElementById('cpaddress').value;

    try {
        await contract.methods.addpolls(name, address).send({ from: sender }, function(error, transactionHash) {
            if (!error)
                console.log(transactionHash);
            else
                console.log(error);
        });
    } catch (error) {
        console.error('Error voting:', error);
        alert('Error . See console for details.');
    }
        window.location.href = "";

};




var button2 = document.getElementById('editpoll');

// Add an onclick event to the button
button2.onclick = async function() {

    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const sender = accounts[0];
    // Your click handler code here
    var name = document.getElementById('epname').value; // replace with your poll name
    var address = document.getElementById('epaddress').value;
    var id = Number(document.getElementById('epid').value);

    try {
        await contract.methods.updatepolls(id,name, address).send({ from: sender }, function(error, transactionHash) {
            if (!error)
                console.log(transactionHash);
            else
                console.log(error);
        });
    } catch (error) {
        console.error('Error voting:', error);
        alert('Error . See console for details.');
    }
        window.location.href = "";

};





var button3 = document.getElementById('deletepoll');

// Add an onclick event to the button
button3.onclick = async function() {

    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const sender = accounts[0];
    // Your click handler code here

    var id = Number(document.getElementById('epid').value);

    try {
        await contract.methods.deletepoll(id).send({ from: sender }, function(error, transactionHash) {
            if (!error)
                console.log(transactionHash);
            else
                console.log(error);
        });
    } catch (error) {
        console.error('Error voting:', error);
        alert('Error . See console for details.');
    }
        window.location.href = "";

};


// Import the js-ipfs library


// Create an IPFS instance

//te a random password and set it in the input field
var passin = document.getElementById('cvpass');
passin.value = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

const button4 = document.getElementById("createvoter");
button4.onclick = async function() {
    try {

        // Retrieve values from input elements
        var name = document.getElementById('cvname').value;
        var email = document.getElementById('cvemail').value;
        var classe = document.getElementById('cvclass').value;
        var school = document.getElementById('cvschool').value;
        var pass = document.getElementById('cvpass').value;

        if (ipfsHash) {
            try {
                console.log(name, email, classe, school, pass, ipfsHash);

                //const gasEstimate = await contract.methods.addvoters(name, classe, email, pass, school,ipfsHash).estimateGas({ from: sender });

                await contract.methods.addvoters(name, classe, email, pass, school, ipfsHash).send({ from: sender, gas: gasEstimate }, function(error, transactionHash) {
                    if (!error) {
                        console.log(transactionHash);
                        alert('Voter created successfully');
                    } else {
                        console.log(error);
                        alert('Transaction failed. See console for details.');
                    }
                });
            } catch (error) {
                if (error.code === 4001) {
                    console.error('Transaction was denied by the user');
                    alert('Transaction was denied by the user. Please approve the transaction in MetaMask.');
                } else {
                    console.error('Error creating voter:', error);
                    alert('Error creating voter. See console for details.');
                }
            }
        } else {
            alert('No image selected or IPFS upload failed.');
        }
    } catch (error) {
        console.error('Error connecting to MetaMask:', error);
        alert('Error connecting to MetaMask. Please ensure MetaMask is installed and try again.');
    }
};


}
);