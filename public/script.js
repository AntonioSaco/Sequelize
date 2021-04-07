// Global Variables
const arrTest = [];

// Add the dining hall info to the bottom table
async function getHallData() {
  const endpoint = '/api/dining/'; // Where we fetch from
  const request = await fetch(endpoint);
  const result = await request.json();

  // Create an array then push data from the json to it
  const arr = [];
  arr.push(result.data);

  const finalArr = arr[0]; // Initialize final array
  // console.table(finalArr);
  const target = document.querySelector('#targetTable');
  
  // Loop through the array; Define variables and append data from each row to the table
  finalArr.forEach((index) => {
    const id = index.hall_id;
    const name = index.hall_name;
    const location = index.hall_address;

    const appendObj = document.createElement('tr');
    appendObj.innerHTML = `<td>${id}</td> <td>${name}</td> <td>${location}</td>`;
    target.append(appendObj);
    // console.log('ID: ' + id + ', Name: ' + name + ', Location: ' + location);
  }); 
}

// Create the graph at top of page + fill it with data
async function createGraph() {
  const testEnd = '/api/customdata/'; // Where we fetch from
  const testQuest = await fetch(testEnd);
  const testResult = await testQuest.json();

  const randomArr = [];

  arrTest.push([testResult][0]);
  const rLength = arrTest[0].length;
 
  console.log(arrTest);

  let i;
  for (i = 0; i < 10; i++) {
    rVariable = Math.floor(Math.random() * rLength);
    //console.log(arrTest[0][rVariable]);
    randomArr.push(arrTest[0][rVariable]);
  }
  
  // Getters that will be used in the graph
  function giveName(i) {
    return String(randomArr[i][0].meal_name);
  }

  function giveCal(i) {
    return randomArr[i][1].calories;
  }

  function giveSize(i) {
    return randomArr[i][1].serving_size;
  }

  function giveChol(i) {
    return randomArr[i][1].cholesterol;
  }

  function giveSod(i) {
    return randomArr[i][1].sodium;
  }

  function givePro(i) {
    return randomArr[i][1].protein;
  }

  function giveFat(i){
    return randomArr[i][1].fat;
  }

  // Create the chart and fill it with data
  const chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title:{
      text: "Random UMD Dining Hall Meal Statistics"
      },
    axisX: {
      title: "Meals"
    },
    axisY: {
      title: "Macro Amount"
    },
    toolTip: {
      shared: true
    },
    legend:{
      cursor: "pointer",
      itemclick: toggleDataSeries
    },
    data: [{
      type: "stackedBar",
      name: "Calories",
      showInLegend: "true",
      dataPoints: [
        { label:giveName(0), y: giveCal(0) },
        { label:giveName(1), y: giveCal(1) },
        { label:giveName(2), y: giveCal(2) },
        { label:giveName(3), y: giveCal(3) },
        { label:giveName(4), y: giveCal(4) },
        { label:giveName(5), y: giveCal(5) },
        { label:giveName(6), y: giveCal(6) },
        { label:giveName(7), y: giveCal(7) },
        { label:giveName(8), y: giveCal(8) },
        { label:giveName(9), y: giveCal(9) },
      ]
    },
    {
      type: "stackedBar",
      name: "Serving Size",
      showInLegend: "true",
      dataPoints: [
        { label:giveName(0), y: giveSize(0) },
        { label:giveName(1), y: giveSize(1) },
        { label:giveName(2), y: giveSize(2) },
        { label:giveName(3), y: giveSize(3) },
        { label:giveName(4), y: giveSize(4) },
        { label:giveName(5), y: giveSize(5) },
        { label:giveName(6), y: giveSize(6) },
        { label:giveName(7), y: giveSize(7) },
        { label:giveName(8), y: giveSize(8) },
        { label:giveName(9), y: giveSize(9) },
      ]
    },
    {
      type: "stackedBar",
      name: "Cholesterol",
      showInLegend: "true",
      dataPoints: [
        { label:giveName(0), y: giveChol(0) },
        { label:giveName(1), y: giveChol(1) },
        { label:giveName(2), y: giveChol(2) },
        { label:giveName(3), y: giveChol(3) },
        { label:giveName(4), y: giveChol(4) },
        { label:giveName(5), y: giveChol(5) },
        { label:giveName(6), y: giveChol(6) },
        { label:giveName(7), y: giveChol(7) },
        { label:giveName(8), y: giveChol(8) },
        { label:giveName(9), y: giveChol(9) },
      ]
    },
    {
      type: "stackedBar",
      name: "Sodium",
      showInLegend: "true",
      dataPoints: [
        { label:giveName(0), y: giveSod(0) },
        { label:giveName(1), y: giveSod(1) },
        { label:giveName(2), y: giveSod(2) },
        { label:giveName(3), y: giveSod(3) },
        { label:giveName(4), y: giveSod(4) },
        { label:giveName(5), y: giveSod(5) },
        { label:giveName(6), y: giveSod(6) },
        { label:giveName(7), y: giveSod(7) },
        { label:giveName(8), y: giveSod(8) },
        { label:giveName(9), y: giveSod(9) },
      ]
    },
    {
      type: "stackedBar",
      name: "Protein",
      showInLegend: "true",
      dataPoints: [
        { label:giveName(0), y: givePro(0) },
        { label:giveName(1), y: givePro(1) },
        { label:giveName(2), y: givePro(2) },
        { label:giveName(3), y: givePro(3) },
        { label:giveName(4), y: givePro(4) },
        { label:giveName(5), y: givePro(5) },
        { label:giveName(6), y: givePro(6) },
        { label:giveName(7), y: givePro(7) },
        { label:giveName(8), y: givePro(8) },
        { label:giveName(9), y: givePro(9) },
      ]
    },
    {
      type: "stackedBar",
      name: "Fat",
      showInLegend: "true",
      dataPoints: [
        { label:giveName(0), y: giveFat(0) },
        { label:giveName(1), y: giveFat(1) },
        { label:giveName(2), y: giveFat(2) },
        { label:giveName(3), y: giveFat(3) },
        { label:giveName(4), y: giveFat(4) },
        { label:giveName(5), y: giveFat(5) },
        { label:giveName(6), y: giveFat(6) },
        { label:giveName(7), y: giveFat(7) },
        { label:giveName(8), y: giveFat(8) },
        { label:giveName(9), y: giveFat(9) },
      ]
    }]
  });
  chart.render();
  
  function toggleDataSeries(e) {
    if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    }
    else {
      e.dataSeries.visible = true;
    }
    chart.render();
  }
}

async function windowActions() {
  getHallData();
  createGraph();
}
  
// Do the function on page load by default
window.onload = windowActions; 