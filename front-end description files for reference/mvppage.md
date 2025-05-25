// 1. Import dependencies
IMPORT React, { useState }
IMPORT axios

// 2. Define the App component
FUNCTION App():
    
    // 2a. Define state variables
    DECLARE file, metadata, statusMessage, result, imagePreview, verificationData, morphDetails

    // 3. Define event handler: handleFileChange
    FUNCTION handleFileChange(event):
        SET selectedFile = event.target.files[0]
        UPDATE file state with selectedFile
        IF selectedFile EXISTS:
            CREATE FileReader instance
            ON file read complete:
                UPDATE imagePreview state with the file data URL
            READ selectedFile as data URL

    // 4. Define event handler: handleMetadataChange
    FUNCTION handleMetadataChange(event):
        UPDATE metadata state with event target value

    // 5. Define event handler: handleUpload
    FUNCTION handleUpload():
        IF file OR metadata IS EMPTY:
            ALERT "Please select an image and enter metadata!"
            RETURN
        UPDATE statusMessage state to "Uploading..."
        
        CREATE formData
        APPEND file to formData as "image"
        APPEND metadata to formData as "metadata"
        
        TRY:
            SEND POST request to '/upload' endpoint with formData and multipart/form-data headers
            ON success:
                UPDATE result state with the response data
                UPDATE statusMessage state based on morph detection (if morph, then "Uploaded - Morph Detected!", else "Upload Success")
                IF response indicates morph detected:
                    UPDATE morphDetails state with warning message and severity
        CATCH error:
            UPDATE statusMessage state to "Upload Error"
            ALERT error message from response OR generic "Upload failed"
            LOG error details

    // 6. Define event handler: handleVerify
    FUNCTION handleVerify():
        IF result does NOT contain image hash:
            ALERT "No uploaded image hash to verify!"
            RETURN
        TRY:
            SEND POST request to '/verify' endpoint with the image hash
            ON success:
                IF image is verified:
                    UPDATE verificationData state with response data
                    ALERT detailed verification message including metadata and morph warning if applicable
                ELSE:
                    ALERT "Image not found or tampered!"
        CATCH error:
            ALERT "Verification failed"
            LOG error details

    // 7. Render the JSX for the component
    RETURN JSX:
        MAIN container div with styling for centering and background
            INNER card div with styling (max-width, padding, border, shadow)
                HEADER element with title text "Blockchain Image Auth with Morph Detection"
                
                CONDITIONAL render: IF morphDetails exists
                    DISPLAY alert box with morph warning details and styling based on severity
                
                FILE input element for selecting image, onChange tied to handleFileChange
                
                CONDITIONAL render: IF imagePreview exists
                    DISPLAY img element showing the preview of the selected image
                
                TEXT input element for entering metadata, onChange tied to handleMetadataChange
                
                BUTTON element for "Upload" action, onClick tied to handleUpload
                
                BUTTON element for "Verify Image" action, disabled IF no result, onClick tied to handleVerify
                
                CONDITIONAL render: IF statusMessage exists
                    DISPLAY a paragraph with dynamic styling based on message content (error, morph, success)
                
                CONDITIONAL render: IF result exists
                    DISPLAY details card for:
                        - Image Hash
                        - Status
                        - Transaction hash
                        - Optional morph warning if applicable
                
                CONDITIONAL render: IF verificationData exists
                    DISPLAY details card for:
                        - Verification status
                        - Metadata
                        - Timestamp (formatted)
                        - Optional morph warning if applicable

// 8. Export the App component as default
EXPORT App as default