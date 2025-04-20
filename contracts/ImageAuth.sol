// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ImageAuth {
    struct ImageData {
        string hash;
        uint256 timestamp;
        string metadata;
    }

    mapping(string => ImageData) private images;

    event ImageRegistered(string hash, uint256 timestamp, string metadata);

    
    function registerImage(string memory _hash, string memory _metadata) public {
        require(bytes(images[_hash].hash).length == 0, "Image already registered");

        images[_hash] = ImageData({
            hash: _hash,
            timestamp: block.timestamp,
            metadata: _metadata
        });

        emit ImageRegistered(_hash, block.timestamp, _metadata);
    }

    
    function verifyImage(string memory _hash) public view returns (bool, uint256, string memory) {
        ImageData memory data = images[_hash];
        if (bytes(data.hash).length == 0) {
            return (false, 0, "");
        }
        return (true, data.timestamp, data.metadata);
    }
}
