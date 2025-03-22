document.addEventListener("DOMContentLoaded",function() {
    let CustomerOrdersTable = document.getElementById("CustomerOrdersTable");
    fetch(`http://hassan-yasser.runasp.net/api/Order/GetAll`).then((Result)=> {
      return   Result.json()}
    )
    .then((myData)=> {
        myData.forEach(element => {
            let row =
            `
               <tr>
               <td>${element.orderID}</td>
               <td>${element.orderDate}</td>
               <td>${element.recieverName}</td>
               <td>${element.price}</td>
               <td>${element.senderLocation}</td>
               <td>${element.reciverLocation}</td>
               <td>${element.orderStatus}</td>
               <td>
               <a class="btn main-btn rounded-pill AccountLoginbtn" href="Customer.html">Cancel</a>
               </td>
               </tr>
           `;

           CustomerOrdersTable.innerHTML +=row;
        });
       
    })
})