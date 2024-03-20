///////////////////////////////////////////////////////////////////////////////////////////
// Overveiw //////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
// your friend is an event organizer and has asked you to build a website for them. ////
// they want to be able to keep track of all the parties they are organizing. /////////
// they want to be able to see a list of all the parties, ////////////////////////////
// add new parties, /////////////////////////////////////////////////////////////////
// and delete parties.//////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////









const COHORT = "REPLACE_ME!";
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/artists`;

const state = {
  parties: [],
};

const partiesList = document.querySelector("#parties");

const addPartiesForm = document.querySelector("#addParties");
addPartiesForm.addEventListener("submit", addParties);

/**
 * Sync state with the API and rerender
 */
async function render() {
  await getParties();
  renderParties();
}

render();

/**
 * Update state with artists from API
 */
async function getParties() {
  // TODO
}

/**
 * Render artists from state
 */
function renderParties() {
  // TODO
}

/**
 * Ask the API to create a new artist based on form data
 * @param {Event} event
 */
function addParties(event) {
  event.preventDefault();

  // TODO
}
