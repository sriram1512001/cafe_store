
let GallerySingle=document.getElementById('gallerySingle');

let Galldata = JSON.parse(xhr1.responseText).arrayOfGallery;
        //console.log(data);
        if (Galldata.length == 0) return;
       
        let galMenu = `<h2 class="text-center">Gallery</h2>`;
        for (let menuu of Galldata) {
            galMenu += `<div class="col-lg-3 col-md-4 col-sm-6" d-flex align-items-stretch>
                <div class="card h-100" >
                    <img src="${menuu.imageUrl}" style="height:300px" alt="Image not found" class="card-img-top img-thumbnail" id="${menuu.id}">
                </div>
            </div>`;
        }
        
        GallerySingle.innerHTML=galMenu;
        let ClickedImage=document.getElementById(`${menuu.id}`);
    ClickedImage.addEventListener('click',function(){
        Gall_ery.classList.add('hidden');
        
        GallerySingle.classList.remove('hidden');

    });
