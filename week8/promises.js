// let url = "https://swapi.dev/api/starships/";

// Helper function
async function getJSON(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw Error(response.statusText);
        } else {
            const fetchJson = await response.json();
            return fetchJson;
        }
    } catch (error) {
        console.log(error);
    }
}

// pulls all the ships
function getShips(url = "https://swapi.dev/api/starships/") {
    return getJSON(url);
}

// takes the ships, makes a list of all of them
// 1st param is the array of ships, 2nd is the element
function renderShipList(ships, shipListElement) {
    if (shipListElement == null) return;
    let tablerow = document.createElement("tr");
    let thead = document.getElementById("shipList");
    var headerString = `
    <thead>
    <tr><th>Name</th>
    <th>Length</th>
    <th>Crew</th>
    </tr>       
    </thead>`;
    tablerow.innerHTML = headerString;
    thead.appendChild(tablerow);
    ships.forEach(ship => {
        let listItem = document.createElement("tr");
        let listItemString = `
            <tr>
            <td>${ship.name}</td>
            <td>${ship.length}</td>
            <td>${ship.crew}</td>
            </tr>
        `;
        listItem.innerHTML = listItemString;
        listItem.theShip = ship;
        thead.appendChild(listItem);
    });
    addShipListener();

}

function addShipListener() {
    let container = document.getElementById("shipList");
    const childrenArray = Array.from(container.children);
    childrenArray.forEach(child => {
        child.addEventListener('click', e => {
            renderShipDetails(e.currentTarget.theShip);
        });
    });
}

// this is a stretch goal
function renderShipDetails(shipData) {
    // console.log(shipData);
    let html = '';
    html = `
    <thead>
    <tr>
    <th>Ship Name</th>
    <th>Ship Model</th>
    <th>Class</th>
    <th>Capacity</th>
    <th>Cost in Credits</th>
    </tr>
    <tr>
    <td>${shipData.name}</td>
    <td>${shipData.model}</td>
    <td>${shipData.starship_class}</td>
    <td>${shipData.cargo_capacity}</td>
    <td>${shipData.cost_in_credits}</td>
    </tr>
    </thead>
    `;
    let container = document.getElementById("shipList");
    container.innerHTML = html;
    container.appendChild(buildBackButton(shipData));
}

function buildBackButton() {
    const backButton = document.createElement("button");
    backButton.innerHTML = 'Back to Ships';
    backButton.addEventListener('click', (event) => showShips());
    return backButton;
}

// uses Prev and Next buttons to show next set and previous set
async function showShips(url) {
    // console.log(url);
    const shipResults = await getShips(url);
    // console.log(shipResults);
    const shipListElement = document.getElementById("shipList");
    // console.log(shipListElement);
    shipListElement.innerHTML = '';
    renderShipList(shipResults.results, shipListElement);
    // console.log(renderShipList);
    if (shipResults.next) {
        let next = document.getElementById("next");
        next = next.cloneNode(true);
        document.getElementById("nextandprevbuttons").replaceChild(next, document.getElementById('next'));
        next.addEventListener("click", (e) => {
            showShips(shipResults.next);
        });
    }
    if (shipResults.previous) {
        let prev = document.getElementById("prev");
        prev = prev.cloneNode(true);
        document.getElementById("nextandprevbuttons").replaceChild(prev, document.getElementById('prev'));
        prev.addEventListener("click", (e) => {
            showShips(shipResults.previous);
        });
    }
}

// stretch goal, get the details when you click on a ship
async function getShipDetails(url) {
    const ship = await getShips(url);
    renderShipDetails(ship);
}

showShips();