console.log('hello world');
// Global variables
//let currentIndex = 3;
let highTemp =40;


let sumData = 0;

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
    let varTitle = document.querySelector('#Title-input').value;
    let varAnnualSalary = document.querySelector('#AnnualSalary-input').value;
//console.log(varAnnualSalary.toLocaleString());   
//sumData = parseInt(varAnnualSalary, 10); 
sumData += parseInt(varAnnualSalary, 10);
document.querySelector('#Total-Monthly').innerHTML = sumData;

const formatter = new Intl.NumberFormat('en-US');
const formattedNumber = formatter.format(varAnnualSalary);
console.log(formattedNumber);
console.log(sumData);


    //Find the tbody on the page so that we can append to it
    let DataTable = document.querySelector('#EmployeeData');
 
    DataTable.innerHTML += `
        <tr>
            <td>${varFirstName}</td>
            <td>${varLastName}</td>
            <td>${varID}</td>
            <td>${varTitle}</td>
            <td>&#36;${formattedNumber}</td>
           <td><button class="delete-btn" onclick="deleteTableRow()">Delete</button></td> 
           
        </tr>
    `;

}

console.log(sumData);
function deleteTableRow(){

    console.log("Is delete btn working?");
    let tableBody = document.querySelector('#EmployeeData');
    // console.log(tableBody);
    tableBody.firstElementChild.remove()

}


 