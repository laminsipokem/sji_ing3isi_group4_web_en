// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;
 contract voting
 {
    uint public candidatenum=0;
    uint public voternum=0;

    uint public voterid=1;
    uint public pollid=1;
    uint public votenum;
    address public owner;
    mapping (uint=> poll)public polls;
    uint public pollnum=0;
    mapping (uint=> voter)public voters;
    mapping (uint=> candidate)public candidates;
    modifier onlyOwner()
    {
        require(msg.sender==owner,"you are not the owner");
        _;
    }
    constructor()
    {
        owner = msg.sender;
    }
    struct poll
    {
        string name;
        address _address;
        uint votenum;
        uint regisnum;

    }

  struct voter
    {
        uint id;
        string name;
        string classe;
        string email;
        string password;
        bool voted;
        string poll;
        uint candidate;
string image;
    }
    struct candidate
    {
        uint id;
       string name;
        string classe;
        string email;
        string password;
        bool voted;
        uint voteCount;
        string poll;
        string colour;
        uint candidate;
        string description;
        string image;
    }
    function addpolls(string memory name,address _address) onlyOwner external
    {
        require(findpoll(name)==0,"this poll already exists");
        polls[pollid].name=name;
        polls[pollid]._address=_address;
        pollnum++;
        pollid++;
    }
    function addvoters( string memory name,string memory classe,string memory email,string memory password,string memory pol,string memory image) onlyOwner external
    {
        require(check(name,email),"this name or email  is already used in the system");
         require(findpoll(pol)!=0,"this poll is not existing");
        voternum++;
        voters[voterid].id=voterid;
        voters[voterid].name=name;
        voters[voterid].classe=classe;
        voters[voterid].email=email;
        voters[voterid].password=password;
        voters[voterid].poll=pol;
        voters[voterid].image=image;
        voters[voterid].voted=false;
        polls[findpoll(pol)].regisnum++;
        voterid++;
    }
    function addcandidates(string memory name,string memory classe,string memory email,string memory password,string memory colour,string memory description,string memory pol,string memory image) onlyOwner external
    {
        require(check(name,email),"this name or email is already used in the system");
        require(findpoll(pol)!=0,"this poll is not existing");
        candidatenum++;
        candidates[voterid].id=voterid;
        candidates[voterid].name=name;
        candidates[voterid].classe=classe;
        candidates[voterid].email=email;
        candidates[voterid].password=password;
        candidates[voterid].colour=colour;
        candidates[voterid].description=description;
        candidates[voterid].voted=false;
        candidates[voterid].voteCount=0;
        candidates[voterid].poll=pol;
        candidates[voterid].image=image;
         polls[findpoll(pol)].regisnum++;
        voterid++;
    }
    function check(string memory name,string memory email) internal view returns (bool)
    {
        for(uint i=0;i<voterid;i++)
        {
            if(keccak256(abi.encodePacked(voters[i].name)) == keccak256(abi.encodePacked(name))||keccak256(abi.encodePacked(voters[i].email)) == keccak256(abi.encodePacked(email)))
            {
                return false;
            }
        }
        for(uint i=0;i<voterid;i++)
        {
            if(keccak256(abi.encodePacked(candidates[i].name)) == keccak256(abi.encodePacked(name))||keccak256(abi.encodePacked(candidates[i].email)) == keccak256(abi.encodePacked(email)))
            {
                return false;
            }
        }
        return true;
    }
    function deleteVoter(uint id) onlyOwner public {
        require(bytes(voters[id].name).length != 0, "Voter does not exist");
        delete voters[id];
        voternum--;
    }
    function deletecandidate(uint id) onlyOwner public {
        require(bytes(candidates[id].name).length != 0, "candidate does not exist");
        delete candidates[id];
        candidatenum--;
    }

    function login(string memory email,string memory password) external  view returns(bool){
         bool  cans=false;
        bool  vot=false;
        for(uint i=0;i<voterid;i++)
        {

            if(keccak256(abi.encodePacked(candidates[i].email)) == keccak256(abi.encodePacked(email))&&keccak256(abi.encodePacked(candidates[i].password)) == keccak256(abi.encodePacked(password))
            )
            {
                cans=true;
            }
        }
         for(uint i=0;i<voterid;i++)
        {
            if(keccak256(abi.encodePacked(voters[i].email)) == keccak256(abi.encodePacked(email))&&keccak256(abi.encodePacked(voters[i].password)) == keccak256(abi.encodePacked(password))
            )
            {
                vot= true;
            }
        }
        return vot||cans;
    }
     function vote(uint Voter,uint Candidate)  external
    {


      require(findpoll(msg.sender)!=0,"this poll does not exist");
       require(bytes(candidates[Candidate].name).length != 0, "candidate does not exist");
       if((bytes(voters[Voter].name).length != 0))
        {
        require(!voters[Voter].voted,"this voter already voted");
          require((bytes(voters[Voter].name).length != 0), "Voter does not exist");
           require(findpoll(msg.sender)==findpoll(voters[Voter].poll),"this voter is not in the right poll station");
        voters[Voter].voted=true;
        voters[Voter].candidate=Candidate;
         candidates[Candidate].voteCount=candidates[Candidate].voteCount+1;

        }
        else if((bytes(candidates[Voter].name).length != 0))
        {
             require(findpoll(msg.sender)==findpoll(candidates[Voter].poll),"this voter is not in the right poll station");
         require(!candidates[Voter].voted,"this voter already voted");
        require((bytes(candidates[Voter].name).length != 0), "Voter does not exist");
        candidates[Voter].voted=true;

        candidates[Voter].candidate=Candidate;
         candidates[Candidate].voteCount=candidates[Candidate].voteCount+1;
        }
        polls[findpoll(msg.sender)].votenum++;
       votenum++;

    }
   function findpoll(address _address)public view returns (uint) {
        for (uint i = 1; i < pollid; i++) {
            if (polls[i]._address == _address) {
                return i;
            }
        }
        return 0;
    }
    function deletepoll(uint id) onlyOwner public {
        require(bytes(polls[id].name).length != 0, "poll does not exist");
        require(candelpol(polls[id].name)==true,"voters are registered under this poll station");
        delete polls[id];
        pollnum--;
    }
function updatecandidates(uint id,string memory name,string memory classe,string memory email,string memory password,string memory colour,string memory description,string memory image) onlyOwner external
    {
        candidates[id].name=name;
        candidates[id].classe=classe;
        candidates[id].email=email;
        candidates[id].password=password;
        candidates[id].colour=colour;
        candidates[id].description=description;
        candidates[id].image=image;
         }
         function updatepolls(uint id,string memory name,address _address) onlyOwner external
    {
        require(candelpol(polls[id].name)==true,"voters are registered under this poll station");
        polls[id].name=name;
        polls[id]._address=_address;
    }
    function updatevoters( uint id,string memory name,string memory classe,string memory email,string memory password,string memory image) onlyOwner external
    {
        voters[id].name=name;
        voters[id].classe=classe;
        voters[id].email=email;
        voters[id].password=password;
        voters[id].image=image;
    }
    function finduser(string memory email) public view returns(uint){
         for(uint i=0;i<voterid;i++)
        {

            if(keccak256(abi.encodePacked(candidates[i].email)) == keccak256(abi.encodePacked(email)))

            {
               return i;
            }
        }
         for(uint i=0;i<voterid;i++)
        {
            if(keccak256(abi.encodePacked(voters[i].email)) == keccak256(abi.encodePacked(email)))
            {
                return i;
            }
        }
        return 0;
    }
    function findpoll(string memory _name) public view returns(uint)
    {
        for(uint i=1;i<pollid;i++)
        {
            if(keccak256(abi.encodePacked(polls[i].name)) == keccak256(abi.encodePacked(_name)))
            {
                return i;
            }
        }
        return 0;
    }
function candelpol(string memory _name) public view returns (bool)
{
      bool  cans=true;
        bool  vot=true;
        for(uint i=0;i<voterid;i++)
        {

            if(keccak256(abi.encodePacked(candidates[i].poll)) == keccak256(abi.encodePacked(_name)))

            {
                cans=false;
            }
        }
         for(uint i=0;i<voterid;i++)
        {
           if(keccak256(abi.encodePacked(voters[i].poll)) == keccak256(abi.encodePacked(_name)))
            {
                vot= false;
            }
        }
        return vot && cans;
}

function findstat(string memory _name,uint id) public view returns (uint)
{
    uint count;
    for(uint i=0;i<voterid;i++)
        {
           if(keccak256(abi.encodePacked(voters[i].poll)) == keccak256(abi.encodePacked(_name)) && voters[i].candidate==id && voters[i].voted)
            {
                count++;
            }
        }
         for(uint i=0;i<voterid;i++)
        {
           if(keccak256(abi.encodePacked(candidates[i].poll)) == keccak256(abi.encodePacked(_name)) && candidates[i].candidate==id && candidates[i].voted)
            {
                count++;
            }
        }
        return count;
}
 }