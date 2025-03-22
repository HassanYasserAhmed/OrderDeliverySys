 
    document.addEventListener('DOMContentLoaded', function()
    {
       let UserName= document.getElementById("username"); 
       let Password = document.getElementById("password");
       let loginBtn = document.querySelector(".loginBTN");
       let invalidLogin = document.querySelector(".invalidLogin");
        loginBtn.addEventListener('click', function() 
        {
            // fetch(`https://localhost:7084/LoginByUserNameAndPassword?UserName=${UserName.value}&Password=${Password.value}`)

            fetch(`http://hassan-yasser.runasp.net/LoginByUserNameAndPassword?UserName=${UserName.value}&Password=${Password.value}`)
            .then((result) => {
                return result.text(); // ✅ تصحيح: لازم ترجع Promise باستخدام return 
            })
            .then((Role) => {
                Role = Role.trim().toLowerCase();
                if(Role === "admin") {
                    localStorage.setItem("Role",`${Role}`);
                    window.location.href="Admin/orders.html";
                }else if(Role === "customer")
                {
                    localStorage.setItem("Role",`${Role}`);
                    window.location.href="Customer/orders.html";
                }else if(Role === "driver")
                    {
                        localStorage.setItem("Role",`${Role}`);
                        window.location.href="Driver/orders.html";
                    }else if(Role === "employee")
                        {
                            localStorage.setItem("Role",`${Role}`);
                            window.location.href="Employee/orders.html";
                        }
            });
        });
     
   });



/*
document.addEventListener('DOMContentLoaded', function() { // ✅ ضمان تحميل DOM قبل تشغيل الكود

    // ✅ التأكد من وجود العناصر حتى لا يحدث خطأ إذا كانت null
    let UserNameOrPhone = document.getElementById("username"); 
    let PasswordHash = document.getElementById("password");
    let loginBtn = document.querySelector(".loginBTN");
    let invalidLogin = document.querySelector(".invalidLogin");
//login with username and password
    fetch("https://localhost:7084/api/Customers/GetCustomer34")
        .then((result) => {
            return result.json(); // ✅ تصحيح: لازم ترجع Promise باستخدام return 
        })
        .then((myData) => {
            if (loginBtn) { // ✅ التأكد من وجود loginBtn قبل إضافة الحدث لمنع TypeError
                loginBtn.onclick = function() {
            
                    if (UserNameOrPhone.value === myData.userName && PasswordHash.value === myData.passwordHash) { 
                        
                        const UserData = 
                        {
                            customerID: myData.customerID,
                            personID: myData.personID,
                            userName: myData.userName,
                            passwordHash: myData.passwordHash,
                            status : myData.status,
                            isActive: myData.isActive,
                            datejoined : myData.datejoined,
                            lastUpdated: myData.lastUpdated,
                            isDeleted: myData.isDeleted,
                            Role: "Admin"
                        }
                        localStorage.setItem("UserData",JSON.stringify(UserData));
                        if(UserData.Role === "Customer"){
                             window.location.href="Customer/orders.html";
                        }else if (UserData.Role === "Admin"){
                            window.location.href="Admin/Admin.html";
                        } else if (UserData.Role == "Driver"){
                        window.location.href="Driver/Driver.html";
                        } else {
                        window.location.href="mployee/Employee.html";
                        }
                    } else {
                        invalidLogin.style.display = "block";
                    }
                }
            } else {
                console.error("loginBtn not found!"); // ✅ إضافة تحذير لو الزر مش موجود
            }
        })
        .catch((error) => {
            console.error("Error fetching data:", error); // ✅ التعامل مع الأخطاء اللي ممكن تحصل أثناء الـ fetch
        });
});
*/
