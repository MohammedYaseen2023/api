
import { el, getStorage, setStorage, fileToBase64 } from "./helpers.js";


const file = el("#file");
const fileBtn = el("#def_image");
const image = el("#img");
const showpost = el("#showposts")
const combolimit = el("#combolimit")
const showresults = el("#showresult")



 

showpost.addEventListener('click', function () {
  let url ="https://jsonplaceholder.typicode.com/posts?_limit="+combolimit.value

  fetch(url, {
    method: "get",
  })
    .then((res) => res.json())
    .then((data) => {

      const fileFromLocal = getStorage("image");
      // if (fileFromLocal) {
      //   image.src = fileFromLocal;
      // }


      data.forEach(element => {

        showresults.innerHTML += `
          <div class="col-6  card" id ="posts_card" >  
              <h2 >${element.title}</h2>
              <p> id : ${element.id}</p>
              <p> User Id : ${element.userId}</p>
              <p>${element.body}</p>  
          </div>
          <div class="col-6">
                  <img src="${fileFromLocal}" alt="" id="img" height="300" width="300"> 
          </div> 
      `
         
      });

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


 