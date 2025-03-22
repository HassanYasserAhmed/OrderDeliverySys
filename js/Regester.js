// البيانات الخاصة بالعميل

/**
 * const CustomerInfo = {
    customerID: 0,
    personID: 0,
    userName: "JohnDoe",
    passwordHash: "password123",
    status : "new",
    isActive: true,
    datejoined : "2002-11-11",
    lastUpdated: "2002-11-11",
    isDeleted: false
}
 */
let fullName = document.getElementById("fullName");
let UserName = document.getElementById("UserName");
let Email = document.getElementById("Email");
let PhoneNumber = document.getElementById("PhoneNumber");
let BirthDate = document.getElementById("BirthDate");
let AreaName = document.getElementById("AreaName");
let password = document.getElementById("password");
let CreateAccount = document.getElementById("CreateAccount");

function AddNewCustomer() {
    const NewCustomerData = {
        fullName: fullName.value,
        email: Email.value,
        phoneNumber: PhoneNumber.value,
        birthDate: BirthDate.value,
        areaID: 23,
        userName: UserName.value,
        passwordHash: password.value
    };

    fetch('https://hassan-yasser.runasp.net/api/testRegestrion/testRegesteration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(NewCustomerData)
    })
    .then(response => {
        if (!response.ok) throw new Error('Failed to add person');
        return response.json();
    }).then((personData) => {
       console.log(personData);
    })

}

// CreateAccount.addEventListener("click", function() {
//     
// });

CreateAccount.addEventListener("click", function() {
    AddNewCustomer();
});
