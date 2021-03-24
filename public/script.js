// Get the data and add it to the table
async function getData() {
  const endpoint = '/api/dining/'; // Where we fetch from
  const request = await fetch(endpoint);
  const result = await request.json();

  // Create an array then push data from the json to it
  const arr = [];
  arr.push(result.data);

  const finalArr = arr[0]; // Initialize final array
  console.table(finalArr);
  const target = document.querySelector('#targetTable');
  
  // Loop through the array; Define variables and append data from each row to the table
  finalArr.forEach((index) => {
    const id = index.hall_id;
    const name = index.hall_name;
    const location = index.hall_address;

    const appendObj = document.createElement('tr');
    appendObj.innerHTML = `<td>${id}</td> <td>${name}</td> <td>${location}</td>`;
    target.append(appendObj);
    console.log('ID: ' + id + ', Name: ' + name + ', Location: ' + location);
  }); 
}

async function windowActions() {
  getData();
}
  
// Do the function on page load by default
window.onload = windowActions; 