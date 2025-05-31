// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ImageAuth {
    struct ImageData {
        string hash;
        uint256 timestamp;
        string metadata;
        string phash;    // Variable to store perceptual hash
        string features;  // Variable to store features of image
        bool isMorph;
    }

    mapping(string => ImageData) private images;
    string[] public imageHashes;  

    event ImageRegistered(string hash, uint256 timestamp, string metadata, bool isMorph);

    // Function to register an image with its hash, metadata, perceptual hash, and features
    function registerImage(
        string memory _hash,
        string memory _metadata,
        string memory _phash,
        string memory _features
    ) public {
        require(bytes(images[_hash].hash).length == 0, "Image already registered");

        bool isMorph = false;
        
        
        for (uint i = 0; i < imageHashes.length; i++) {
            ImageData memory existing = images[imageHashes[i]];
            
            
            if (compareHashes(_phash, existing.phash)) {
                isMorph = true;
                break;
            }

        }

        images[_hash] = ImageData({
            hash: _hash,
            timestamp: block.timestamp,
            metadata: _metadata,
            phash: _phash,
            features: _features,
            isMorph: isMorph
        });

        imageHashes.push(_hash);
        emit ImageRegistered(_hash, block.timestamp, _metadata, isMorph);
    }
    // Function to verify if an image is registered and return its data
    function verifyImage(string memory _hash) public view returns (
        bool, 
        uint256, 
        string memory, 
        bool
    ) {
        ImageData memory data = images[_hash];
        if (bytes(data.hash).length == 0) {
            return (false, 0, "", false);
        }
        return (true, data.timestamp, data.metadata, data.isMorph);
    }
    // Comparing hashes
    function compareHashes(string memory a, string memory b) internal pure returns (bool) {
        return keccak256(abi.encodePacked(a)) == keccak256(abi.encodePacked(b));
    }
}