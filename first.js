const newElement=document.createElement("h2");
newElement.id="second";
newElement.textContent="Development";

const element=document.getElementById("first");
element.after(newElement);

// create mutliple class name to an element

newElement.classList.add("tianba");
newElement.classList.add("nigma");
console.log(newElement.className);


const unorderedList=document.getElementById("listing");

const arr=["Paneer","Milk","Rice","Papad"];
const fragment=document.createDocumentFragment();
for(let food of arr){
    const listt=document.createElement("li");
    listt.textContent=food;
    fragment.append(listt);
    //unorderedList.append(listt);    // it takes lot of time as we are creating and appending one by one 
}
unorderedList.append(fragment);


// function handleClick(){
//     const el=document.getElementById("first");
//     el.textContent="NIkhil";
// }
const el=document.getElementById("first");
el.addEventListener('mouseenter',()=>{
    el.textContent="victus";
})
el.addEventListener('mouseleave',()=>{
    el.textContent="Dee bhencho";
    el.style.color="red";
})


