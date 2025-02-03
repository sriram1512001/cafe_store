let viewBtn = document.getElementById('view');
let About = document.getElementById('about');
let MenuHead = document.getElementById('menu-head');
let DispData = document.getElementById('display-data');
let displayContainer=document.getElementById('image-display-container');

DispData.classList.add('hidden');
viewBtn.addEventListener('click', function () {
    About.classList.add('hidden');
    MenuHead.classList.remove('hidden');
    DispData.classList.remove('hidden');
    DispForm.classList.add('hidden');
    displaySuccessful.classList.add('hidden');
    Gall_ery.classList.add('hidden');
    Reserve.classList.add('hidden');
})

function getData() {

    //create xmlhttpRequest object
    let xhr = new XMLHttpRequest();
    //initialize the request
    xhr.open("GET", "menu.json", true);
    //we need to create a request by using xhr.open("http method",url,truue);
    xhr.send();

    xhr.addEventListener('progrss', function () {
        document.getElementById('display-loader').textContent = "loading...."
    });

    //once the data is loaded
    xhr.addEventListener('load', function () {
        let data = JSON.parse(xhr.responseText).arrayOfMenu;
        //console.log(data);
        if (data.length == 0) return;
        let headData = document.getElementById('menu-head');
        let displayData = document.getElementById("display-data");
        let eachMenu = "";
        for (let menu of data) {
            eachMenu += `<div class="col-lg-3 col-md-4 col-sm-6">
                <div class="card">
                    <img  id="${menu.id}" src="${menu.imageUrl}" alt="${menu.menuName}" class="card-img-top img-thumbnail dynamic-image">
                    <div class="card-body text-center">
                        <h5 class="card-title text-center">${menu.menuName}</h5>
                    </div>
                </div>
            </div>`;
            
           
        }

        let headMenuu = `
            <div id=menu-header>
                <div class=" menu-class" style="height: 100%;">
                    <img src="https://images.unsplash.com/photo-1502462041640-b3d7e50d0662?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D"
                        alt="image not found">
                </div>
                <div class="menu-class px-4" style="height: 100%;">
                    <h1 class="text-center">CAFE</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus at accusamus eveniet ea hic,
                        quae ducimus numquam facilis architecto repellendus soluta. Quae autem repellat, aliquid
                        adipisci aut aspernatur enim numquam alias .</p>
                </div>
                <div class="menu-class" style="height: 100%;">
                    <h3>MENU <br> SECTION</h3>
                    <p style="border:2px solid black; border-radius: 7px;">Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. At quae voluptate libero voluptatibus
                        repellat, inventore iste .</p>
                    <h6 style="border:2px solid black; border-radius: 7px;">abcsdfsdfs afassdfs afaf</h6>
                </div>
            </div>`
            ;
        headData.innerHTML = headMenuu;
        displayData.innerHTML = eachMenu;
        document.getElementById('display-loader').textContent = "";

        bindImageClickEvents();

       

    });
}
function bindImageClickEvents(){
    let images=document.querySelectorAll('.dynamic-image');
    images.forEach((image)=>{
        console.log("Attaching click event to ",image);
        image.addEventListener('click',function(){
           
            console.log("image clicked",image);
            displaySelectedImage(image);
        });
    });
}

function displaySelectedImage(image){
    About.classList.add('hidden');
    MenuHead.classList.add('hidden');
    DispData.classList.add('hidden');

    displayContainer.classList.remove('hidden');
    
    
    displayContainer.innerHTML=`
                            <div class="card text-center">
                             <button id="back-button" class="btn btn-primary mt-3" style="width:50px; margin-left:auto">❌</button>
            <img src="${image.src}" alt="${image.alt}" class="img-fluid" style="height:400px; width:300px; margin:auto; box-shadow:0px 0px 20px black;">
            <h3>${image.alt}</h3>
           
        </div>
    `;

    let backButton = document.getElementById('back-button');
    backButton.addEventListener('click', function () {
        displayContainer.innerHTML = "";
        About.classList.add('hidden');
        MenuHead.classList.remove('hidden');
        DispData.classList.remove('hidden');
        displayContainer.classList.add('hidden');
    });

}
getData();

