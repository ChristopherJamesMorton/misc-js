// ==UserScript==
// @name         modalFinder
// @namespace    https://github.com/ChristopherJamesMorton/misc-js/blob/main/modalFinder.js
// @version      0.1
// @description  modalFinder finds a modal and clicks the parent window. Replace modal-class-name with the class name of the modal.
// @author       Christopher James Morton
// @match        https://www.tampermonkey.net/index.php?version=4.19.0&ext=iikm&updated=true
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

///////////////////
/* Javascript notes
///////////////////
// Declare Array on single line
let firstName = 'Chris', lastName = 'Morton';

// Constants values do not change
const interrestRate 0.03;

////////////////////////////////////////////
// Two types Primitives/Value and Reference
////////////////////////////////////////////
// Primitivies/Values Types
String
Number
Boolean
undefined
null

// Reference Types
Object
Arrays
Functions
*/
function checkAndInteractWithParent() {
    // Get the reference to the modal element
    let modalFinder = document.getElementById("modal-class-name");
  
    // Check if the modal is displayed
    if (modalFinder.style.display === "block") {
      // Find a suitable parent element to interact with
      let parentElement = findParentElement(modalFinder);
  
      if (parentElement) {
        parentElement.click();
      } else {
        console.log("Could not find a suitable parent element.");
      }
    } else {
      console.log("Modal is not displayed.");
    }
  }
  
  // Function to find a suitable parent element
  function findParentElement(element) {
    // Traverse up the DOM tree until a suitable parent is found
    while (element.parentElement) {
      // You can modify this condition to suit your needs
      // For example, you might want to check for specific class names or tag names
      if (element.parentElement.classList.contains("parent-class")) {
        return element.parentElement;
      }
      element = element.parentElement;
    }
    return null; // If no suitable parent is found
  }
  
  // Run the checkAndInteractWithParent function every minute (60,000 milliseconds)
  setInterval(checkAndInteractWithParent, 60000);
