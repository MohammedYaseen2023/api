
import { el, getStorage, setStorage, fileToBase64 } from "./helpers.js";
// import Toastify from 'toastify-js';

const file = el("#file");
const fileBtn = el("#def_image");
const image = el("#img");
const showpost = el("#showposts")
const combolimit = el("#combolimit")
const showresults = el("#showresult")


showpost.addEventListener('click', function () {
  let url ="https://jsonplaceholder.typicode.com/posts?_limit="+combolimit.value;

  fetch(url, {
    method: "get",
  }) 
    .then((res) => res.json())
    .then((data) => {

      // let fileFromLocal = "https://th.bing.com/th/id/R.6af6fd9c37f0de4abb34ea0fd20acce3?rik=55mqMmrTutVR0Q&pid=ImgRaw&r=0";//getStorage("image");
      let fileFromLocal = getStorage("image");
     
      if (fileFromLocal) {
        image.src = fileFromLocal;
      }

      showresults.innerHTML  =`
      <div> </div>
      `
      data.forEach(element => {

     
    showresults.innerHTML += `
      <div class=" col-12 col-sm-4 p-sm-2">
          <div class="card " style="width:  100%;" id="posts_card">
              <img src="${fileFromLocal}" class="card-img-top" alt="...">
              <div class=" card-body">
                  <h5 class="card-title">${element.title}</h5>
                  <p class="card-text">id : ${element.id} - User Id : ${element.userId}</p>
                  <p class="card-text">${element.body}</p>
              </div>
          </div>
      </div>
    `
      });

      Toastify({

        text: "posts Download completed",
        
        duration: 3000
        
        }).showToast();

    });
})
 


fileBtn.onclick = () => {
  file.click();
};
file.addEventListener("change", async (e) => {
  const file = e.target.files[0];

  if (file.type.includes("image") || file.type.includes("jpg")) {


    fileToBase64(file)
      .then((data) => {
        image.src = data;
        // console.log(data);
        setStorage("image", data);

        return data;
      })

    // لماذا لم يعمل
    //     const data = await fileToBase64(file).catch((e) => {
    //       console.log(e);
    //     });
    //  await log();


  }
});


 