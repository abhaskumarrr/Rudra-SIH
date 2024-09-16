chrome.runtime.sendMessage({ type: 'detectDeepfake', image: imageData }, (response) => {
    // Handle the response from the background script
    console.log('Deepfake detection result:', response);
});