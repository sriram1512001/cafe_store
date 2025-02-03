
let Order = document.getElementById('order'); // Select the "Order Online" button
let About1 = document.getElementById('about'); // Select the "About Us" section
let MenuHead1 = document.getElementById('menu-head'); // Select the menu header section
let DispData1 = document.getElementById('display-data'); // Select the menu data section
let DispForm = document.getElementById('display-form');
let displaySuccessful=document.getElementById('display-order-successful');



Order.addEventListener('click', function () {
    // Hide the "About" and "Menu" sections
    About.classList.add('hidden');
    MenuHead.classList.add('hidden');
    DispData.classList.add('hidden');
    DispForm.classList.remove('hidden');
    displaySuccessful.classList.add('hidden');
    Gall_ery.classList.add('hidden');
    displayContainer.classList.add('hidden');
    Reserve.classList.add('hidden');
});
let htmlCod = `
    <div class="card mb-3" style="background-color:white;">
        <img src="https://images.unsplash.com/photo-1545418314-7ce0b9b53901?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxjb2ZmZWV8ZW58MHx8MHx8fDA%3D" alt="Cafe Image" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title text-center">Cafe Order Form</h5>
        </div>
    </div>
    <div class="card mb-3" style="background-color:white;">
       
        <div class="card-body">
            <form action="">
                <table style="width: 100%; font-family: Arial, sans-serif; font-size: 14px; border-collapse: collapse;">
                    <tr>
                        <td colspan="2"><label for=""><h3>Name</h3></label></td>
                    </tr>
                    <tr>
                        <td><input type="text" id="first-name" placeholder="First Name" required style="width: 100%; padding: 10px; margin: 5px 0; border: 1px solid #ced4da; border-radius: 5px;"></td>
                        <td><input type="text" id="last-name" placeholder="Last Name" required style="width: 100%;  padding: 10px; margin: 5px 0; border: 1px solid #ced4da; border-radius: 5px;"></td>
                    </tr>
                    <tr>
                        <td colspan="2"><label for="">Address</label></td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <textarea rows="2" id="address" placeholder="Street Address" style="width: 100%; padding: 10px; margin: 5px 0; border: 1px solid #ced4da; border-radius: 5px;"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" id="city" placeholder="City" style="width: 100%; padding: 10px; margin: 5px 0; border: 1px solid #ced4da; border-radius: 5px;">
                        </td>
                        <td>
                            <input type="text" id="state" placeholder="State/Province" style="width: 100%; padding: 10px; margin: 5px 0; border: 1px solid #ced4da; border-radius: 5px;">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2"><input type="text" id="zip-code" placeholder="Postal/Zip Code" style="width: 100%; padding: 10px; margin: 5px 0; border: 1px solid #ced4da; border-radius: 5px;"></td>
                    </tr>
                    <tr>
                        <td colspan="2"><label for="" >Phone Number</label></td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <input type="text" id="phone-number" placeholder="(000) 000-0000" style="width: 100%; padding: 10px; margin: 5px 0; border: 1px solid #ced4da; border-radius: 5px;">
                        </td>
                    </tr>
                    <tr>
                        <td><label for="">Delivery/Self Collect Date</label></td>
                    </tr>
                    <tr>
                        <td colspan="2"><input type="date" id="delivery-date" style="width: 100%; padding: 10px; margin: 5px 0; border: 1px solid #ced4da; border-radius: 5px;"></td>
                    </tr>
                    <tr>
                        <td><label for="">Delivery/Self Collect Time</label></td>
                    </tr>
                    <tr>
                        <td colspan="2"><input type="time" id="delivery-time" style="width: 100%; padding: 10px; margin: 5px 0; border: 1px solid #ced4da; border-radius: 5px;"></td>
                    </tr>
                    <tr>
                        <td><label for="">Type of Order</label></td>
                    </tr>
                    <tr>
                        <td>
                            <input type="radio" id="delivery" name="order-type" value="delivery"> Delivery
                            <br>
                            <input type="radio" id="self-collect" name="order-type" value="self-collect"> Self Collect
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="text-center"><h4>Enter Quantity</h4></td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <label for="">ESPRESSO ($20)</label>
                            <input type="text" id="espresso" placeholder="ex: 2" style="width: 100%; padding: 10px; margin: 5px 0; border: 1px solid #ced4da; border-radius: 5px;">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <label for="">NUTELLA FRAPE ($25)</label>
                            <input type="text" id="nutella" placeholder="ex: 2" style="width: 100%; padding: 10px; margin: 5px 0; border: 1px solid #ced4da; border-radius: 5px;">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <label for="">CORTADO ($30)</label>
                            <input type="text" id="cortado" placeholder="ex: 2" style="width: 100%; padding: 10px; margin: 5px 0; border: 1px solid #ced4da; border-radius: 5px;">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <label for="">TEA ($35)</label>
                            <input type="text" id="tea" placeholder="ex: 2" style="width: 100%; padding: 10px; margin: 5px 0; border: 1px solid #ced4da; border-radius: 5px;">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <label for="">LATTE ($15)</label>
                            <input type="text" id="latte" placeholder="ex: 2" style="width: 100%; padding: 10px; margin: 5px 0; border: 1px solid #ced4da; border-radius: 5px;">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <label for="">COFFEE ($18)</label>
                            <input type="text" id="coffee" placeholder="ex: 2" style="width: 100%; padding: 10px; margin: 5px 0; border: 1px solid #ced4da; border-radius: 5px;">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <label for="">ACAI BOWL ($40)</label>
                            <input type="text" id="acai" placeholder="ex: 2" style="width: 100%; padding: 10px; margin: 5px 0; border: 1px solid #ced4da; border-radius: 5px;">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <label for="">MOCHA ($30)</label>
                            <input type="text" id="mocha" placeholder="ex: 2" style="width: 100%; padding: 10px; margin: 5px 0; border: 1px solid #ced4da; border-radius: 5px;">
                        </td>
                    </tr>
                    <!-- Repeat for other items -->
                    <tr>
                        <td colspan="2"><button type="button" style="margin-left:50%; padding: 10px; background-color: #007bff; color: white; border: none; border-radius: 5px;" class="btn" id="total-price">Total</button> <span id="result"></span></td> 
                    </tr>
                </table>
            </form>
        </div>
    </div>
`;

DispForm.innerHTML = htmlCod;
//client detail
let FirstName=document.getElementById('first-name');
let LastName=document.getElementById('last-name');
let Address=document.getElementById('address');
let City=document.getElementById('city');
let State=document.getElementById('state');
let ZipCode=document.getElementById('zip-code');
let Phone=document.getElementById('phone-number');
let DeliveryDate=document.getElementById('delivery-date');
let DeliveryTime=document.getElementById('delivery-time');
let Delivery=document.getElementById('delivery');
let SelfCollect=document.getElementById('self-collect');



//Drink 
let Espresso=document.getElementById('espresso');
let Nutella=document.getElementById('nutella');
let Cortado=document.getElementById('cortado');
let Tea=document.getElementById('tea');
let Latte=document.getElementById('latte');
let Coffee=document.getElementById('coffee');
let Acai=document.getElementById('acai');
let Mocha=document.getElementById('mocha');

let TotalPrice=document.getElementById('total-price');
let Result=document.getElementById('result');



let sum=0;
let Price=[20,25,30,35,15,18,40,30];
TotalPrice.addEventListener('click',function(){

    About.classList.add('hidden');
    MenuHead.classList.add('hidden');
    DispData.classList.add('hidden');
    DispForm.classList.add('hidden');
    displaySuccessful.classList.remove('hidden');

    sum=0;
    let Name=FirstName.value+LastName.value;

    localStorage.setItem("Name",Name);
    FirstName.value="";
    LastName.value="";
    let details={
        Address:Address.value,
        City:City.value,
        State:State.value,
        ZipCode: ZipCode.value,
        Phone:Phone.value,
        DeliveryDate:DeliveryDate.value,
        DeliveryTime:DeliveryTime.value,
        OrderType:Delivery.checked ? "Delivery" : SelfCollect.checked ? "Self Collect" : "Not Selected",
    };
    for(let key in details){
        localStorage.setItem(key,details[key]);
    }

    FirstName.value="";
    LastName.value="";
    Address.value="";
    City.value="";
    State.value="";
    ZipCode.value="";
    Phone.value="";
    DeliveryDate.value="";
    DeliveryTime.value="";
    Delivery.checked=false;
    SelfCollect.checked=false;

   
    let drinks = [Espresso, Nutella, Cortado, Tea, Latte, Coffee, Acai, Mocha];
    
    for (let i = 0; i < drinks.length; i++) {
        let quantity = Number(drinks[i].value);
        if (quantity > 0) {
            sum += quantity * Price[i];
            localStorage.setItem(drinks[i].id, quantity); // Use drink IDs as keys
         
            drinks[i].value = ""; // Clear input field
        }
    }

    localStorage.setItem("TotalPrice",sum);

   
    Result.innerHTML=sum;

    let getName = localStorage.getItem("Name");
    let usrDetail = localStorage.getItem("details");
    
    // console.log(localStorage.getItem("Name"));
   
    let drinkDetailss='';
    let DrinkNames=['Espresso','Nutella','Cortado','Tea','Latte','Coffee','Acai','Mocha'];

for (let i = 0; i < drinks.length; i++) {
    let quantity = localStorage.getItem(drinks[i].id); // Retrieve quantity from local storage
    if (quantity && quantity > 0) {
        drinkDetailss += `
            <tr>
                <td><h3>${DrinkNames[i]}:</h3></td>
                <td><h3>${quantity}</h3></td>
            </tr>
        `;
    }
    
}
    let orderDetail = `
            <div>
                 <div class="mr-3">
                     <img src="https://tse1.mm.bing.net/th?id=OIP.3jdaKGRcvypGXL-mNIQ8lwHaHa&pid=Api&P=0&h=180" style="display:flex;margin-top:34px ;margin:auto; box-shadow:0px 0px 20px;" alt="" >
                 </div>
                <h2 class="text-center mt-2 dark">Order Successful</h2>
                <h2 class="text-center mt-3">=: client Detail :=</h2>
                <table class="m-auto">
                    <tr>
                        <td><h3>Name :</h3></td><td><h3>${localStorage.getItem("Name")}</h3></td>
                    </tr>
                    <tr>
                        <td><h3>Address :</td></h3><td><h3>${localStorage.getItem("Address")}</h3></td>
                    </tr>
                    <tr>
                        <td><h3>City :</h3></td><td><h3>${localStorage.getItem("City")}</h3></td>
                    </tr>
                    <tr>
                        <td><h3>State :</h3></td><td><h3>${localStorage.getItem("State")}</h3></td>
                    </tr>
                    <tr>
                        <td><h3>Zip Code :</h3></td><td><h3>${localStorage.getItem("ZipCode")}</h3></td>
                    </tr>
                    <tr>
                        <td><h3>Phone Number :</h3></td><td><h3>${localStorage.getItem("Phone")}</h3></td>
                    </tr>
                    
                </table>
                </table>
                    <h2 class="text-center mt-3">=: Drinks Ordered :=</h2>
                <table class="m-auto">
                    ${drinkDetailss}
                    <tr>
                        <td><h3>Delivery Date :</h3></td><td><h3>${localStorage.getItem("DeliveryDate")}</h3></td>
                    </tr>
                    <tr>
                        <td><h3>Delivery Time :</h3></td><td><h3>${localStorage.getItem("DeliveryTime")}</h3></td>
                    </tr>
                    <tr>
                        <td><h3>Order Type :</h3></td><td><h3>${localStorage.getItem("OrderType")}</h3></td>
                    </tr>
                    <tr>
                        <td><h3>Total Price :</h3></td><td><h3>${localStorage.getItem("TotalPrice")}</h3></td>
                    </tr>
                </table>
            </div>
        `;
        
        displaySuccessful.innerHTML = orderDetail;
        Result.innerHTML="";
    document.getElementById('display-loader').textContent = "";
    localStorage.clear();
});

