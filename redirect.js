// Define the destination URLs
var destinationURLs = {
    "https://go.helalk.com/link1": "www.destination1.url/example1",
    "https://go.helalk.com/link2": "www.destination2.url/example2",
    "https://go.helalk.com/link3": "www.destination3.url/example3"
  };
  
  // Get the current URL
  var currentURL = window.location.href;
  
  // Function to perform the redirect based on the current URL
  function redirect() {
    // Check if the current URL exists in the destination URLs
    if (destinationURLs.hasOwnProperty(currentURL)) {
      // Get the corresponding destination URL
      var destinationURL = destinationURLs[currentURL];
      
      // Redirect the user to the destination URL
      window.location.href = destinationURL;
    } else {
      // If the current URL is not found in the destination URLs, handle it as needed
      console.log("Invalid short URL");
    }
  }
  
  // Delay the redirect for 3 seconds (adjust as needed)
  setTimeout(redirect, 3000);
  
