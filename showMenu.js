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
                    <img id="show-img" src="${menu.imageUrl}" alt="Image not found" class="card-img-top img-thumbnail">
                    <div class="card-body text-center">
                        <h5 class="card-title text-center">${menu.menuName}</h5>
                    </div>
                </div>
            </div>`;

            let ShowImage=document.getElementById('show-img');
            ShowImage.addEventListener('click',function(){
                
            })

        }

       
    });
}
getData();
