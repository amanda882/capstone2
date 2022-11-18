import {mountainsArray} from "../scripts/mountainsData.js";
console.log(mountainsArray)

window.onload = function () {

    let menu = document.getElementById('menu');

    menu.onclick = listMenu;
    menu.onchange = mountainDisplay;

    function listMenu() {


        for (let i = 0; i < mountainsArray.length; i++) {
            let mountainDrop = new Option(mountainsArray[i].name);
            menu.appendChild(mountainDrop);
        }
    }
    function mountainDisplay() {
        let mountainMenu = document.getElementById('mountainMenu');
        while (mountainMenu.firstChild) {
            mountainMenu.removeChild(mountainMenu.firstChild);
        }
        let optionSelected = menu.options[menu.selectedIndex].text;
        for (let i = 0; i < mountainsArray.length; i++) {
            if (mountainsArray[i].name == optionSelected) {
                {
                    let mountainName = document.createElement('h3');
                    console.log(mountainName)
                    mountainName.innerText = `${mountainsArray[i].name}`;
                    mountainMenu.appendChild(mountainName);

                    let mountainImg = document.querySelector('img');
                    console.log(mountainImg);
                    mountainImg.src = (`/images/${mountainsArray[i].img}`);

                    // let mountainImg = document.createElement('h3');
                    // mountainImg.innerText = `${mountainsArray[i].img}`;
                    // mountainMenu.appendChild(mountainImg);

                    let elevation = document.createElement('p');
                    elevation.innerText = `Elevation ${mountainsArray[i].elevation}`;
                    mountainMenu.appendChild(elevation);

                    let effort = document.createElement('p');
                    effort.innerText = `Effort ${mountainsArray[i].effort}`;
                    mountainMenu.appendChild(effort);

                    let mountainLocation = document.createElement('p');
                    mountainLocation.innerText = `Coordinates - Latitude: ${mountainsArray[i].coords.lat} Longitude ${mountainsArray[i].coords.lng}`;
                    mountainMenu.appendChild(mountainLocation);

                    let description = document.createElement('p');
                    description.innerText = `Description ${mountainsArray[i].desc}`;
                    mountainMenu.appendChild(description);

                    const paragraphOne = document.createElement('p');
                    paragraphOne.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tempore totam voluptas hic, harum doloribus ipsam provident ducimus corrupti, ex at suscipit architecto voluptatem sint possimus voluptatum ab magnam veritatis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tempore totam voluptas hic, harum doloribus ipsam provident ducimus corrupti, ex at suscipit architecto voluptatem sint possimus voluptatum ab magnam veritatis!'
                    mountainMenu.appendChild(paragraphOne);

                    const paragraphTwo = document.createElement('p');
                    paragraphTwo.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tempore totam voluptas hic, harum doloribus ipsam provident ducimus corrupti, ex at suscipit architecto voluptatem sint possimus voluptatum ab magnam veritatis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tempore totam voluptas hic, harum doloribus ipsam provident ducimus corrupti, ex at suscipit architecto voluptatem sint possimus voluptatum ab magnam veritatis!'
                    mountainMenu.appendChild(paragraphTwo);

                    break;
                }
            }
        }
    }
}



