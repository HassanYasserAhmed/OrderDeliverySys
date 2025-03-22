

document.addEventListener("DOMContentLoaded",function() {
    let AccountBtn = document.querySelector(".AccountLoginbtn");
    let Role = localStorage.getItem("Role");
    if(Role === 'admin') {
        AccountBtn.href = "Admin/orders.html";
        AccountBtn.textContent = "Account";
    }else if(Role ==='customer') {
        AccountBtn.href = "customer/orders.html";
        AccountBtn.textContent = "Account";
    }else if(Role === 'driver') {
        AccountBtn.href = "driver/orders.html";
        AccountBtn.textContent = "Account";
    }else if(Role === 'employee') {
        AccountBtn.href = "employee/orders.html";
        AccountBtn.textContent = "Account";
    }
});
/*

document.addEventListener("DOMContentLoaded",function() {
    let AccountBtn = document.querySelector(".AccountLoginbtn");

    fetch("https://localhost:7084/api/Customers/GetCustomer25")
        .then((result) => {
            return result.json(); // ✅ تصحيح: لازم ترجع Promise باستخدام return 
        })
        .then((myData) => {
           if(myData.userName !=null) {
            AccountBtn.href = "Customer/Customer.html";
            AccountBtn.textContent = "Account";
           }
        })
});
let AccountBtn = document.querySelector(".AccountLoginbtn");

let CustomerData = localStorage.getItem("UserData");
let CustomerDataObj = JSON.parse(CustomerData);
if(CustomerDataObj.customerID !=null)
{
    AccountBtn.textContent = "Account";
    AccountBtn.href = "Customer/Customer.html";
}
*/