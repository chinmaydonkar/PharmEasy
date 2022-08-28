let navbar = () =>{
    return `
    <div class="navbar_container">
        <div class="navbar">
            <div>
            <div >
         <a href="../homepage/index.html"> <img src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png" alt="" height="50px";width="100px"></a>
            </div>
                <hr>
            <div class="nav_add">
                <i class="fa-solid fa-bolt-lightning" style="color:rgb(253,195,46)";></i>
                <p>Express Delivery</p>
                <!-- <h5>Select Pincode</h5> -->
            </div>
            </div>
            <div class="searchbox">
                <input type="text" name="" id="searchBar" placeholder="Search For">
                <button>Search</button>
            </div>
            <!-- <div>
                <h3>Download App</h3>
            </div> -->
            <div>
                <a href="../signup/signup.html" id="user-details" style ="color: white;">Hello,Log In</a>
            </div>
            <div>
               <span><i class="fa-solid fa-percent" style ="color: white;"></i></span><a href="../Offers/offers.html" style ="color: white;">Offers</a>
            </div>
            <div>
                <span><i class="fa-solid fa-cart-shopping" style ="color: white;"></i></span><a href="../Cart/Cart.html" style ="color: white;">Cart</a>
            </div>
        </div>
    
    <div class="sub_nav">
        <div><a href="../Medicine/medicine.html">Medicine</a></div>
        <div><a href="../Lab Test/lab_test.html">Lab Test</a></div>
        <div><a href="../ProductLandingPage/pland.html">Healthcare</a></div>
        <div><a href="../">Health Blogs</a></div>
        <div><a href="../plus/plus.html">PLUS</a></div>
        <div><a href="../Offers/offers.html">Offers</a></div>
        <div><a href="../surgeries/surgery.html">Surgeries</a></div>
        <div><a href="../Prod/prod.html">Value Store</a></div>
    </div>
    </div>
    `;
};
export default navbar;