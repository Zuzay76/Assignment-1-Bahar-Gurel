// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

contract BugTracker {

   enum criticalLevels {
    LOW,
    MEDIUM,
    HIGH
    }

    uint private counter = 0;

    struct Bug {
        uint256 bugID;
        string description;
        criticalLevels level;
        bool isDone;
    }

    mapping(address => Bug[]) private Users;

    function addBug(string calldata _description) external {
        uint256 count = counter + 1;
        Users[msg.sender].push(Bug({bugID: count, description: _description, level: criticalLevels.LOW, isDone:false}));
    }

    // Remote Procedure Call (RPC) protocol is generally used to communicate between processes on 
    // Different workstation, or for communication between different processes on the workstation
    // --
    // External functions are meant to be called bu other contracts and cannot be used for internal calls
    // Public and external functions differ in terms of gas usage
    // Public functions use more gas than external functions when used with large arrays of data. Why?
    // Solidity copies arguments to memory for a public function. External functions read from calldata 
    // which in terms of gas is cheaper than memory allocation
    // Calldata is a non-modified, non-persistent area where functions arguments are stored 

    function getTask(uint256 _bugIndex) external view returns (Bug memory){
        Bug storage bug = Users[msg.sender][_bugIndex];
        return  bug;
    }  

    function updateBugStatus(uint256 _bugIndex, bool _status) external {
        Users[msg.sender][_bugIndex].isDone = _status;
    }

    function getBugCount() external view returns (uint256){     
        return Users[msg.sender].length;
    }

    // delete has no offect on mappings 
    function deleteBug(uint256 _bugIndex) external {
        delete (Users[msg.sender][_bugIndex]);
    }

}