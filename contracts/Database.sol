pragma solidity 0.8.11;
// SPDX-License-Identifier: UNLICENSED

contract Database {
    address[] public daoOwners; 
    
    // DB schema
    struct Upvote {
        string ID;
        string REVIEWID;
        uint256 TOTALVOTED;
        address VOTER;
        bool VOTE;
    }

    struct DAO {
        string ID;
        string NAME;
        string WEBSITELINK;
        string DISCORDLINK;
    }

    struct Review {
        string ID;
        string DAOID;
        string TITLE;
        string CONTENT;
    }
    // —————————————————————————————————————————————————————————————————————————————————

    // Tables
    mapping(address=>Review) public Reviews;
    mapping(address=>DAO) public DAOs;
    mapping(address=> Upvote) public Upvotes;

    // ————————————————————————————————————————————————————————————————————————————————
    
    // function createReview(Review memory data)public{
    //     Reviews[msg.sender] = data;
    // }

    function createDAO(DAO memory _data)public{
        daoOwners.push(msg.sender);
        DAOs[msg.sender] = _data;
    }


    // Update
    // function updateUser(User memory data) public {
    //     Users[msg.sender] = data; // update current address with new data
    // }
    // function updateReview(Review memory data) public {
    //     Reviews[msg.sender] = data; // update current address with new data
    // }
    // function updateDAO(DAO memory data) public {
    //     DAOs[msg.sender] = data; // update current address with new data
    // }

    // Delete
    // function deleteUser()public {
    //     for(uint256 i=0;i<UserTableOfAddress.length;i++) { //
    //         if(UserTableOfAddress[i]==msg.sender){
    //         delete UserTableOfAddress[i];
    //         return;
    //         }
    //     }
    // }
    // —————————————————————————————————————————————————————————————————————————————————

    



}