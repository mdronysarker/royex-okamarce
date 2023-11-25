///////////////////////// toggle category
const firstUlEl = document.querySelector('.first-ul');
const pointerEl = document.querySelector('.pointer');
const dropImgZone = document.querySelector('.upload-img-box');
const dropLogoZone = document.querySelector('.upload-img-box--logo');
const dropVidZone = document.querySelector('.upload-vid-box');

pointerEl.addEventListener('click',()=>{
  if (firstUlEl.style.display === "none") {
    firstUlEl.style.display = "block";
  
  } else {
    firstUlEl.style.display = "none";
  }
})

//////////////////////// CATEGORY PAGE 
const uploadIcon = document.querySelector('.upload-icon i')
const uploadIconFile = document.querySelector('.upload-icon input')
uploadIcon.addEventListener('click',()=> uploadIconFile.click())
/////////////////////// IMAGE LOGO UPLOAD => => CATAGORY PAGE
let files = [];

const formCategoryLogo = document.querySelector('.upload-img-form--category-logo');
const imgLogoContainer = document.querySelector('.logo-photo');
const selectCategoryLogo = document.querySelector('.upload-pic--category-logo img');
const inputLogoFile = document.querySelector('.upload-img-form--category-logo input');
selectCategoryLogo.addEventListener('click', ()=> inputLogoFile.click());

inputLogoFile.addEventListener('change',()=>{
  
  let file = inputLogoFile.files;
  for(i=0; i< file.length; i++){

    if(files.every(e => e.name !== file[i].name)){
      files.push(file[i])
      
    }
  }
  // reseting form
  form.reset();
  showLogoImg();
})
/////////////////////////// show img
const showLogoImg = () => {
  let images = '';
  files.forEach((e,i) => {
    images += ` <div class="product product-1">
               <div
                class="product-circle d-flex justify-content-center align-items-center"
                           >
                  <i class="fas fa-times" onclick='delImageLogo(${i})'></i>
                </div>
              <img
                src="${URL.createObjectURL(e)}"
                alt="cup-png"
              />
            </div>`
  })
  imgLogoContainer.innerHTML = images;
}

const delImageLogo = i => {
  files.splice(i,1);
  showLogoImg()
}

/////////////////////////// DRAG AND DROP -- LOGO
dropLogoZone.addEventListener('dragover',e=>{
  e.preventDefault();
  dropLogoZone.classList.add('dragover')
})
dropLogoZone.addEventListener('dragleave',e=>{
  e.preventDefault();
  dropLogoZone.classList.remove('dragover')
})
dropLogoZone.addEventListener('drop',e=>{
  e.preventDefault();
  dropLogoZone.classList.remove('dragover');
  let file = e.dataTransfer.files;
  for(i=0; i < file.length; i++){
    if(files.every(e => e.name !== file[i].name)){
      files.push(file[i])
    }
  }
  showLogoImg()
})

/////////////////////// IMAGE LOGO UPLOAD => => CATAGORY PAGE ENDS

////////////////////// IMAGE UPLOAD => DRAG & DROP
const form = document.querySelector('.upload-img-form');
// where the img will show
const imgContainer = document.querySelector('.product-photo');
const select = document.querySelector('.upload-pic img');
const inputFile = document.querySelector('.upload-img-form input');
select.addEventListener('click', ()=> inputFile.click());
inputFile.addEventListener('change',()=>{
  let file = inputFile.files;
  for(i=0; i< file.length; i++){

    if(files.every(e => e.name !== file[i].name)){
      files.push(file[i])
    }
  }
  // reseting form
  form.reset();
  showImg();
})
///////////////// selection for category page

/////////////////////////// show img
const showImg = () => {
  let images = '';
  files.forEach((e,i) => {
    images += ` <div class="product product-1">
               <div
                class="product-circle d-flex justify-content-center align-items-center"
                           >
                  <i class="fas fa-times" onclick='delImage(${i})'></i>
                </div>
              <img
                src="${URL.createObjectURL(e)}"
                alt="cup-png"
              />
            </div>`
  })
  imgContainer.innerHTML = images;
}
//////////////////////////// delet image 
const delImage = i => {
  files.splice(i,1);
  showImg()
}

/////////////////////////// DRAG AND DROP
dropImgZone.addEventListener('dragover',e=>{
  e.preventDefault();
  dropImgZone.classList.add('dragover')
})
dropImgZone.addEventListener('dragleave',e=>{
  e.preventDefault();
  dropImgZone.classList.remove('dragover')
})
dropImgZone.addEventListener('drop',e=>{
  e.preventDefault();
  dropImgZone.classList.remove('dragover');
  let file = e.dataTransfer.files;
  for(i=0; i < file.length; i++){
    if(files.every(e => e.name !== file[i].name)){
      files.push(file[i])
    }
  }
  showImg()
})


////////////////////// VIDEO UPLOAD => DRAG & DROP
let vidFiles = [];
const vidForm = document.querySelector('.upload-video-form');
// where the img will show
const vidContainer = document.querySelector('.product-video-photo');
const selectVid = document.querySelector('.upload-video img');
const vidInput = document.querySelector('.upload-video-form input');
selectVid.addEventListener('click', ()=> vidInput.click());

vidInput.addEventListener('change',()=>{
  let file = vidInput.files;
  for(i=0; i< file.length; i++){
    if(vidFiles.every(e => e.name !== file[i].name)){
      vidFiles.push(file[i])
    }
  }
  // reseting form
  form.reset();
  showVideo();
})

/////////////////////////// show video
const showVideo = () => {
  let videos = '';
  vidFiles.forEach((e,i) => {
    videos += ` <div class="product product-1">
               <div
                class="product-circle d-flex justify-content-center align-items-center"
                           >
                  <i class="fas fa-times" onclick='delVideo(${i})'></i>
                </div>
                <video width="100" height="80" controls>
                <source src="${URL.createObjectURL(e)}" type="video/mp4">
                </video> 
            </div>`
  })
  vidContainer.innerHTML = videos;
}
//////////////////////////// delet video 
const delVideo = i => {
  vidFiles.splice(i,1);
  showVideo()
}
/////////////////////////// DRAG AND DROP for video
dropVidZone.addEventListener('dragover',e=>{
  e.preventDefault();
  dropVidZone.classList.add('dragover')
})
dropVidZone.addEventListener('dragleave',e=>{
  e.preventDefault();
  dropVidZone.classList.remove('dragover')
})
dropVidZone.addEventListener('drop',e=>{
  e.preventDefault();
  dropVidZone.classList.remove('dragover');
  let file = e.dataTransfer.files;
  for(i=0; i < file.length; i++){
    if(vidFiles.every(e => e.name !== file[i].name)){
      vidFiles.push(file[i])
    }
  }
  showVideo()
})