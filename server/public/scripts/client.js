console.log('hello world');
// Global variables
//let currentIndex = 3;
let highTemp =40;

/**
 * 
 */ 
//Create  Global array

let temperatureDat = [];

// Submit form function
function submitForm(event) {

    console.log('submitForm');

    // Stop the page from refreshing
    event.preventDefault();

    // Find the input field and assign the value to our variable
    
   
    //! .value always returns a string, for a number use Number(string)
    let varFirstName = document.querySelector('#FirstName-input').value;
    let varLastName = document.querySelector('#LastName-input').value;
    let varID = document.querySelector('#ID-input').value;
    // Find the tbody on the page so that we can append to it
    let varTitle = document.querySelector('#Title-input').value;
    let varAnnualSalary = document.querySelector('#AnnualSalary-input').value;

    let DataTable = document.querySelector('#Title-input');
    
  

    // let deletebtn = document.querySelector('.delete-btn');
    // let lastIndex = temperatureTable.lastElementChild;
    // let tableData = Number(lastIndex.firstElementChild.innerHTML);
    DataTable.innerHTML += `
        <tr>
            <td>${varFirstName}</td>
            <td>${varLastName}</td>
            <td>${varID}</td>
            <td>${varTitle}</td>
            <td>${varAnnualSalary}</td>
           <td><button class="delete-btn" onclick="deleteTableRow()">Delete</button></td> 
           
        </tr>
    `;

   
    //currentIndex += 1;

    // Check the temperature against the high temp
    if (Number(tempVal) > highTemp) {
        // Number(tempVal) turns a string into a number
        highTemp = Number(tempVal);
        document.querySelector('#high-temp').innerHTML = highTemp;
    }
}
function deleteTableRow(){
    console.log("Is delete btn working?");
    let tableBody = document.querySelector('#EmployeeData');
    // console.log(tableBody);
    tableBody.firstElementChild.remove()

}
 