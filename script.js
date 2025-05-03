document.querySelector('.search-icon').addEventListener('click',()=>{
    const input=document.querySelector('.search-input').value.trim();
    if(input){
        alert(`you searched for: "${input}"`);
    }else{
        alert("Please enter a search term.");
    }
})
// signin in Dummy Alert
document.querySelector('.nav-signin').addEventListener('click',()=>{
    alert("Sign-in functionality coming soon!");
})
// Cart item counter(Fake)
let cartCount=0;
const cartIcon=document.querySelector(".nav-cart");
const cartLabel=document.createElement("span");
cartLabel.style.marginLeft='6px';
cartLabel.style.color='yellow';
cartLabel.style.fontWeight='bold';
cartLabel.innerText=`(${cartCount})`;
cartIcon.appendChild(cartLabel);


// add to cart from each box
document.querySelectorAll(".box-content p").forEach((p)=>{
    p.addEventListener('click',()=>{
        cartCount++;
        cartLabel.innerText=`(${cartCount})`;
        alert("Item added to cart");

    })
});
//Back to top functionality
document.querySelector('.foot-panel_1').addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})
// Responsive Panel Menu
const panelMenu=document.querySelector(".panel-all");
panelMenu.style.cursor='pointer';
panelMenu.addEventListener('click',()=>{
    alert("Mobile Menu Toggle(futute feature");
});