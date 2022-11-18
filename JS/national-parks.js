// importing js downloaded scripts
import { parkTypesArray } from "../scripts/parkTypeData.js";
import { locationsArray } from "../scripts/locationData.js";
import { nationalParksArray } from "../scripts/nationalParkData.js";
// console log to ensure it shows
console.log(parkTypesArray, locationsArray, nationalParksArray);

// creating a variable for length of the arrays
let locationArrayLength = locationsArray.length;
let parkTypesArrayLength = parkTypesArray.length;

//creating loop to show new options from location array
for (let i = 0; i < locationArrayLength; i++) {
    let newOption = new Option(locationsArray[i], locationsArray[i]);
    let locationDropDown = document.getElementById('locationDrop');
    locationDropDown.add(newOption);
}

//creating loop to show new options from parkTypes array
for (let i = 0; i < parkTypesArrayLength; i++) {
    let newOption = new Option(parkTypesArray[i], parkTypesArray[i]);
    let parkDropDown = document.getElementById('parkTypeDrop');
    parkDropDown.add(newOption);
}

// button was clicked after option was selected
let searchButton = document.getElementById('searchBtn');
searchButton.addEventListener('click', selectedOption);

//create a function for pop up alert if blank
function selectedOption() {

    let locationData = document.getElementById('locationDrop').value;
    let parkData = document.getElementById('parkTypeDrop').value;
    if (locationData == 'blank' && parkData == 'blank') {
        alert('Must select option to continue');
    } else {
        let mainElement = document.querySelector('main');
        mainElement.replaceChildren();
        // console.log(locationData, parkData);
        filterArray(locationData, parkData);
    }
}

function filterArray(locationData, parkData) {
    console.log(locationData, parkData);
    if (locationData == 'blank' && parkData != 'blank') {
        let filterData = nationalParksArray.filter(
            (arrayList) => arrayList.LocationName.includes(parkData)
        );
        showSelectedOption(filterData);
    } else if (parkData == 'blank' && locationData != 'blank') {
        let stateType = nationalParksArray.filter(
            (parkItem) => parkItem.State == locationData
        );
        showSelectedOption(stateType);
    } else {
        let stateType = nationalParksArray.filter(
            (parkItem) => parkItem.State == locationData
        );
        let filterData = stateType.filter(
            (arrayList) => arrayList.LocationName.includes(parkData)
        )
        console.log(stateType);
        console.log(filterData);
        showSelectedOption(filterData);
    }
}

function showSelectedOption(filterData) {
    let mainSection = document.querySelector('main');
    // '===' data type and value both have to be = 0! 
    if (filterData.length === 0) {
        let textBox = document.createElement('div');
        mainSection.appendChild(textBox);
        let textOne = document.createElement('h3');
        textOne.setAttribute('id', 'textOne')
        textOne.innerHTML = 'Not found!';
        textBox.appendChild(textOne);
    } else {
        filterData.forEach(filterData => {
            let title = filterData.LocationName;
            let address = `${filterData.Address}, ${filterData.City}, ${filterData.State}, ${filterData.ZipCode}`;
            let phoneNumbers = `${filterData.Phone}, ${filterData.Fax}`;
            let mainTextBox = document.createElement('div');
            mainSection.appendChild(mainTextBox);
            let displayTitle = document.createElement('p');
            displayTitle.setAttribute('id', 'showTitle')
            displayTitle.innerHTML = title;
            mainTextBox.appendChild(displayTitle);
            let displayPhoneNumer = document.createElement('p');
            displayPhoneNumer.innerHTML = phoneNumbers;
            mainTextBox.appendChild(displayPhoneNumer);
            let displayAddress = document.createElement('p');
            displayAddress.innerHTML = address;
            mainTextBox.appendChild(displayAddress);
        });
    }
}



