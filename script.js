let sdicon=document.getElementById("sdicon");
sdicon.addEventListener('click',()=>{
    sdicon.style.display="none";
    let sd=document.getElementById('sd');
    sd.style.display="block";
});
let right_btn=document.getElementById('lol2');
let left_btn=document.getElementById('lol');
left_btn.addEventListener('click',()=>{
    let sd=document.getElementById('sd');
    sd.style.display="none";
    right_btn.style.display="block";
    right_btn.style.position="fixed";

})
right_btn.addEventListener('click',()=>{
    let sd=document.getElementById('sd');
    sd.style.display="block";
    right_btn.style.display="none";
})