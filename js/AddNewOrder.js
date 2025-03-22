let reciverName = document.getElementById("reciverName");
let reciverPhone = document.getElementById("reciverPhone");
let weight = document.getElementById("weight");
let senderLocation = document.getElementById("senderLocation");

let reciverLocation = document.getElementById("reciverLocation");
let OrderDetails = document.getElementById("OrderDetails");
let paymentMethod = document.getElementById("paymentMethod");
let AddNewOrderBtn = document.getElementById("AddNewOrder");
let OrderNav = document.querySelector(".Orders");


function OpenOrdersPage() {
  let Role = localStorage.getItem("Role");
  if (Role === "admin") {
    OrderNav.href = "Admin/orders.html";
  } else if (Role === "customer") {
    OrderNav.href = "customer/orders.html";
  }
  else if (Role === "Driver") {
    OrderNav.href = "Driver/orders.html";
  }else if(Role = 'Employee'){
    OrderNav.href = "Employee/orders.html";
  }
}
OrderNav.addEventListener("click", OpenOrdersPage());

function AddNewOrder() {
  

    const url = "http://hassan-yasser.runasp.net/api/Order/AddNewPerson"; // Replace with your API endpoint
    const data = {
        orderID: 0,
        orderStatus: "string",
        orderDetails: OrderDetails.value,
        price: 525,
        orderDate: "2002-12-12",
        expectedDeleveryDate: "2002-12-12",
        paymentStatus: "test",
        payamentMethod: paymentMethod.value,
        recieverName: reciverName.value,
        weight: weight.value,
        recieverPhone: reciverPhone.value,
        customerID: 0,
        driverID: 0,
        areaID: 23,
        isDeleted: false,
        senderLocation: senderLocation.value,
        reciverLocation: reciverLocation.value
    };
    
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to submit order");
      }
      return response.json(); // Parse JSON response
    })
    .then(result => {
      console.log("Success:", result);
    })
    .catch(error => {
      console.error("Error:", error);
    });   
    
    AddNewOrderBtn.textContent = "Added Successfully";
AddNewOrderBtn.style.backgroundColor = "green";
AddNewOrderBtn.style.color = "white";
}


AddNewOrderBtn.addEventListener("click", AddNewOrder);


