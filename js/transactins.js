document.addEventListener("DOMContentLoaded",function() {
    let TransactionsTable = document.getElementById("TransactionsTable");
    let CustomerID =25;
    // fetch(`https://localhost:7084/api/CustomerTransActions/GetAllCustomerTransactions${CustomerID}`).then((Result)=> {
    fetch(`http://hassan-yasser.runasp.net/api/CustomerTransActions/GetAllCustomerTransactions${CustomerID}`).then((Result)=> {
      
        return   Result.json();
    }).then((myData)=> {
        for(i=0;myData.length-1;i++)
       {
        let row = `
        <tr>
        <td>${myData[i].customerTransActionsID}</td>
        <td>${myData[i].amount} $</td>
        <td>${myData[i].transactionType}</td>
        <td>${myData[i].transactionDate}</td>
        <td>${myData[i].notes}</td>
        <td>${myData[i].paymentMethod}</td>
        </tr>
      `;

      TransactionsTable.innerHTML +=row;
        };
   

    })
})

