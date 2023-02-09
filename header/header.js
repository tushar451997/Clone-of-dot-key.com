function header(){
    return(
        `
        <header>
         <div class="top-section" id="top-section">
               <div id="textslider" class="textslider"></div>
         </div>

         <nav>
            <div class="navbar">
                 <div class="openclosemenu">
                  <div class="menu">
                        <div class="menu-icon">
                              <div></div>
                              <div></div>
                              <div></div>
                        </div>
                  </div>
                  <!-- <div class="closemenu">
                        <div class="closemenu-icon">
                              <div></div>
                              <div></div>
                        </div>
                  </div> -->
                 </div>
                 <a href="./index.html">
                 <img class="dotkeyimg" src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/unnamed_250x_200x_2x_260x_24408e11-6e3a-4a0c-8327-74d0455f7696_260x.jpg?v=1646547348" alt="">
</a>

                   <div class="lastsection">
                        <span  class="material-symbols-outlined">search</span>
                  <img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Group_346.svg?v=1655211633" alt="">
                  <span class="material-symbols-outlined">shopping_bag</span>
                  <a href="./signup.html">                  <span class="material-symbols-outlined">person</span>
                  </a>
                   </div>
            </div>
         </nav>

   <div class="sidebar">
       <div class="sidebar-conatiner">
            <div class="leftsidebar">
                  <ul>
                      <li>
                        <a href="">WHAT'S NEW?</a>
                      </li>
                      <li>
                        <a href="">BEST SELLERS</a>
                      </li>
                      <li>
                        <a href="">WINTER MUST HAVES</a>
                      </li>
                      <li>
                        <div class="ingredients-section">
                              <div class="show-ingredients-section">
                                    <a href="">SHOP BY INGREDIENTS</a>
                                    <i class="fa-light fa-plus" id="ingredients-section"></i>
                              </div>
                              <ul class="hide-ingredients">
                                    <a href="">
                                          <li>NIACINAMIDE + CICA</li>
                                    </a>
                                    <a href="">
                                          <li>HYALURONIC + RICE WATER</li>
                                    </a>
                                    <a href="">
                                          <li>VITAMIN C</li>
                                    </a>
                                    <a href="">
                                          <li>WATERMELON + AHA</li>
                                    </a>
                                    <a href="">
                                          <li>RETINOL + CERAMIDE</li>
                                    </a>
                                    <a href="">
                                          <li>SALICYLIC</li>
                                    </a>
                              </ul>
                        </div>
                      </li>
                      <li>
                         <div class="concern-section">
                              <div class="show-concern-section">
                                    <a href="">SHOP BY CONCERN </a>
                                    <i class="fa-light fa-plus" id="concern-section"></i>
                              </div>
                              <ul class="hide-concern">
                                    <li>Dryness & Repair                                     </li>
                                    <li>Acne Control</li>
                                    <li>Dullness</li>
                                    <li>Dark Spots & Pigmentation</li>
                                    <li>Age Defense</li>
                              </ul>
                         </div>
                      </li>
                      <li>
                        <div class="allproducts-section">
                              <div class="show-allproducts-section">
                                    <a href="">SHOP ALL PRODUCTS </a>
                                    <i class="fa-light fa-plus" id="allproducts-section"></i>
                              </div>
                              <ul class="hide-allproducts">
                                    <li>Serums & Oil</li>
                                    <li>Moisturizers</li>
                                    <li>Night Creams & Sleep Masks</li>
                                    <li>Face Wash</li>
                                    <li>Masks</li>
                                    <li>Face Toners</li>
                                    <li>Sunscreen</li>
                                    <li>Lip Balms</li>
                                    <li>Lip Care</li>
                                    <li>Underarm Care</li>
                                    <li>Exfoliators</li>
                                    <li>Combos & Regime</li>
                                    <li>Tools & Accessories</li>
                              </ul>
                        </div>
                      </li>
                      <li>
                        <a href="">HAIR CARE</a>
                      </li>
                      <li>
                        <a href="">BODY CARE</a>
                      </li>
                      <li>
                        <a href="">IKWI NUTRITION</a>
                      </li>
                      <li>
                        <a href="">DOWNLOAD THE APP</a>
                      </li>
                      <li>
                        <div class="know-section">
                              <div class="show-knowus-section">
                                    <a href="">KNOW US BETTER </a>
                                    <i class="fa-light fa-plus" id="know-section"></i>
                              </div>
                              <ul class="hide-knowus">
                                    <li>Our Skincare Journal</li>
                                    <li>Our Skincare Guides</li>
                                    <li>Earthcare</li>
                              </ul>
                        </div>
                      </li>
                      <li>
                        <div class="profile">
                              <div class="show-profile-section">
                                    <a href="">PROFILE</a>
                                    <i class="fa-light fa-plus" id="profile"></i>
                              </div> 
                              <ul class="hide-profile">
                                    <li>Skindulgence Rewards</li>
                                    <li>Track Order</li>
                              </ul>
                        </div>
                      </li>
                      <li>
                        <a href="">LOG IN</a>
                      </li>  
                  </ul>
            </div>
            <div class="rightsidebar">
                  <img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/vit_c_4.webp?v=1668851091" alt="">
            </div>
       </div>
   </div>

   </header>
        `
    )
    
}
export default header