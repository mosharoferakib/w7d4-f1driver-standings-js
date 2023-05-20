const form = document.getElementById('f1Form');
const seasonInput = document.getElementById('season');
const roundInput = document.getElementById('round');
const tableBody = document.getElementById('f1TableBody');

form.addEventListener('submit', data);

function data(event) {
  event.preventDefault();

  const res = `https://ergast.com/api/f1/2020/1/driverStandings.json`;

  fetch(res)
    .then(response => response.json())
    .then(data => {
      const standings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
      renderTable(standings);
    })
}


function renderTable(data) {
  tableBody.innerHTML = '';

  data.forEach(driver => {
    const position = driver.position;
    const positionCell = document.createElement('td');
    positionCell.textContent = position;

    const driverName = `${driver.Driver.givenName} ${driver.Driver.familyName}`;
    const driverCell = document.createElement('td');
    driverCell.textContent = driverName;

    const team = driver.Constructors[0].name;
    const teamCell = document.createElement('td');
    teamCell.textContent = team;

    const points = driver.points
    const pointsCell = document.createElement('td');
    pointsCell.textContent = points;

    const wins = driver.wins
    const winsCell = document.createElement('td');
    winsCell.textContent = wins;

    const nationality = `${driver.Driver.nationality}`
    const nationalityCell = document.createElement('td');
    nationalityCell.textContent = nationality;
    
    const row = document.createElement('tr');

    row.append(positionCell, driverCell, teamCell, pointsCell, winsCell,nationalityCell);

    tableBody.append(row);

    
  });
}