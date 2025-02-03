let ReserveBtn=document.getElementById('reserve-btn');
let Reserve=document.getElementById('reserve');
ReserveBtn.addEventListener('click',function(){
    About.classList.add('hidden');
    MenuHead.classList.add('hidden');
    DispData.classList.add('hidden');
    DispForm.classList.add('hidden');
    displaySuccessful.classList.add('hidden');
    Gall_ery.classList.add('hidden');
    Reserve.classList.remove('hidden');
    displayContainer.classList.add('hidden');
   
    let reseveCode=` 
                <div class="container-fluid mt-4">
    <div class="card shadow-lg" style="border-radius: 12px;">
        <h2 class="text-center mt-3" style="font-weight: bold; color: #343a40;">Reserve a Table</h2>
        <div class="card-body">
            <form>
                <!-- Row for Name and Date -->
                <div class="row mb-3">
                    <div class="col-md-6">
                        <label for="name" style="font-size: 1.2rem; font-weight: 600;">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            class="form-control" 
                            placeholder="Enter your name" 
                            style="padding: 12px; border-radius: 8px;">
                    </div>
                    <div class="col-md-6">
                        <label for="date" style="font-size: 1.2rem; font-weight: 600;">Date</label>
                        <input 
                            type="date" 
                            id="date" 
                            class="form-control" 
                            style="padding: 12px; border-radius: 8px;">
                    </div>
                </div>

                <!-- Row for Time and Number of Guests -->
                <div class="row mb-3">
                    <div class="col-md-6">
                        <label for="time" style="font-size: 1.2rem; font-weight: 600;">Time</label>
                        <input 
                            type="time" 
                            id="time" 
                            class="form-control" 
                            style="padding: 12px; border-radius: 8px;">
                    </div>
                    <div class="col-md-6">
                        <label for="guests" style="font-size: 1.2rem; font-weight: 600;">Number of Guests</label>
                        <input 
                            type="number" 
                            id="guests" 
                            class="form-control" 
                            placeholder="Enter number of guests" 
                            style="padding: 12px; border-radius: 8px;">
                    </div>
                </div>

                <!-- Row for Reserve Button -->
                <div class="row">
                    <div class="col text-center">
                        <button 
                            type="click" 
                            id="reserve-submit" 
                            class="btn" 
                            style="
                                padding: 10px 30px; 
                                border-radius: 8px; 
                                font-size: 1.2rem; 
                                background-color: rgb(242, 38, 7); 
                                color: #fff; 
                                font-weight: bold;
                                margin-top: 10px;
                            ">
                            Reserve
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

    `;

    Reserve.innerHTML=reseveCode;

    let ReserveSubmit=document.getElementById('reserve-submit');
    let Name=document.getElementById('name');
    let Time=document.getElementById('time');
    let Dat=document.getElementById('date');
    let Guests=document.getElementById('guests');

    ReserveSubmit.addEventListener('click',function(e){
    
         if(Name.value && Time.value && Dat.value && Guests.value){
              alert(`Thank you ${Name.value} !!! your reservation has been made....`);
             Reserve.classList.add('hidden');
            About.classList.remove('hidden');
         }else{
            e.preventDefault();
              alert('Sorry!!! Enter information properly...');
         }
    })

});  
