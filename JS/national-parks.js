import { parkTypesArray } from "../scripts/parkTypeData.js";
import { locationsArray } from "../scripts/locationData.js";
import { nationalParksArray } from "../scripts/nationalParkData.js";
console.log(parkTypesArray, locationsArray, nationalParksArray);

let locationArrayLength = locationsArray.length;
let parkTypesArrayLength = parkTypesArray.length;

for (let i = 0; i < locationArrayLength; i++) {
    let newOption = new Option(locationsArray[i], locationsArray[i]);
    let locationDropDown = document.getElementById('locationDrop');
    // look up reasoning for ',undefined'
    locationDropDown.add(newOption, undefined);
}

for (let i = 0; i < parkTypesArrayLength; i++) {
    let newOption = new Option(parkTypesArray[i], parkTypesArray[i]);
    let parkDropDown = document.getElementById('parkTypeDrop');
    // look up reasoning for ',undefined'
    parkDropDown.add(newOption, undefined);
}

let searchButton = document.getElementById('searchBtn');
searchButton.addEventListener('click', selectedOption);

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



