
let Gallery=document.getElementById('gallery');
let Gall_ery=document.getElementById('gall-ery');
Gallery.addEventListener('click',function(){
    About.classList.add('hidden');
    MenuHead.classList.add('hidden');
    DispData.classList.add('hidden');
    DispForm.classList.add('hidden');
    displaySuccessful.classList.add('hidden');
    Gall_ery.classList.remove('hidden');
    Reserve.classList.add('hidden');
    displayContainer.classList.add('hidden');
});


function getDatas() {

    //create xmlhttpRequest object
    let xhr1 = new XMLHttpRequest();
    //initialize the request
    xhr1.open("GET", "Gallery.json", true);
    //we need to create a request by using xhr.open("http method",url,truue);
    xhr1.send();

    xhr1.addEventListener('progrss', function () {
        document.getElementById('display-loader').textContent = "loading...."
    });

    //once the data is loaded
    xhr1.addEventListener('load', function () {
        let Galldata = JSON.parse(xhr1.responseText).arrayOfGallery;
        //console.log(data);
        if (Galldata.length == 0) return;
        let GalleryData = document.getElementById('gall-ery');
       
        let galMenu = `<h2 class="text-center">Gallery</h2>`;
        for (let menuu of Galldata) {
            galMenu += `<div class="col-lg-3 col-md-4 col-sm-6" d-flex align-items-stretch>
                <div class="card h-100" >
                    <img src="${menuu.imageUrl}" style="height:300px" alt="Image not found" class="card-img-top img-thumbnail" id="${menuu.id}">
                </div>
            </div>`;



           
        }
       
       
        GalleryData.innerHTML = galMenu;
        document.getElementById('display-loader').textContent = "";
    });
    
}
getDatas();
