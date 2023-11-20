const employees = [];

        function createEmployeeCard() {
            var id = document.getElementById("id").value;
            var name = document.getElementById("name").value;
            var address = document.getElementById("address").value;
            var image = document.getElementById("image").value;

             if(!id||!name||!address||!image){
                document.getElementById('error').innerHTML="Plz fill all the details";
                document.getElementById('error').style.color = "orangered"
             }else{ 
                document.getElementById('error').innerHTML="";
                alert('Your card is seccussfully Updated..!');

            var existingEmployeeIndex = employees.findIndex(function(emp) {
                return emp.id === id;
            });

            if (existingEmployeeIndex !== -1) {
                // Update
                alert('id already exist')
                employees[existingEmployeeIndex] = {
                    id: id,
                    name: name,
                    address: address,
                    image: image
                };
            } else {
                // Add
                var employee = {
                    id: id,
                    name: name,
                    address: address,
                    image: image
                };
                employees.push(employee);
                
            }
            updateCardContainer();
            clearForm();
        }}

        // Update employee Function
        function updateCardContainer() {
            var cardContainer = document.getElementById("employee-cards");
            cardContainer.innerHTML = "";

            employees.forEach(function(employee) {
                var card = document.createElement("div");
                card.className = "card";
                card.innerHTML = `<img src="${employee.image}" alt="${employee.name}">
                                <h2>${employee.name}</h2>
                                <p>ID: ${employee.id}</p>
                                <p>Address: ${employee.address}</p>
                                <button onclick="editEmployee('${employee.id}')">Edit</button>
                                <button onclick="deleteEmployee('${employee.id}')">Delete</button>`;
                cardContainer.appendChild(card);
            });
        }

        // edit employee function
        function editEmployee(id) {
            alert('are you want to edit your card');

            var index = employees.findIndex(function(emp) {
                return emp.id === id;
            });

            if (index !== -1) {

                var employee = employees[index];
                document.getElementById("id").value = employee.id;
                document.getElementById("name").value = employee.name;
                document.getElementById("address").value = employee.address;
                document.getElementById("image").value = employee.image;

                //employees.splice(index, 0);

                updateCardContainer();
            }
        }

        // delete employee function
        function deleteEmployee(id) {
                alert("Confirm to delete This card");

                var index = employees.findIndex(function(emp) {
                    return emp.id === id;
                });

                if (index !== -1) {
                    employees.splice(index, 1);

                    updateCardContainer();
                }
            }

        // For clear the form data
        function clearForm(){
            document.getElementById("id").value=""
            document.getElementById("name").value=""
            document.getElementById("address").value=""
            document.getElementById("image").value=""
        }