function saveData() {
  let inputData = document.getElementById("inputData").value;

  if (typeof Storage != "undefined") {
    localStorage.setItem("userInput", inputData);

    displaySavedData();
  } else {
    alert("Sorry, Your browser does not support local storage");
  }
}

//The function below displays the saved data
function displaySavedData() {
  //retrieving the data from the local storage

  let saveData = localStorage.getItem("userInput");

  document.getElementById("displayData").innerHTML =
    "Saved Data is " + saveData;
}
