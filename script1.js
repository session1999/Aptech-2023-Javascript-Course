function saveData() {
  let inputData = document.getElementById("inputData").value;

  if (typeof Storage !== "undefined") {
    localStorage.setItem("viewSaveData", inputData);

    alert("data is saved successfully");
  } else {
    alert("Sorry your broswer does not support local storage");
  }
}

// The function below displays the save data

function displaySaveData() {
  //retrieving the data from the local storage

  let saveData = localStorage.getItem("userInput");

  document.getElementById("displayData").innerHTML =
    "Save Data is  " + saveData;
}

displaySaveData();

// function viewSaveData() {
//   let toViewData = localStorage.getItem("viewSaveData");

//   document.getElementById("displayData").innerHTML =
//     "Click Here to view " + toViewData;
// }
