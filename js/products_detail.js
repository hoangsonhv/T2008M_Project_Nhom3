function gridProduct_detail() {
    var g_html = "";
    for (var i=0;i<1;i++){
        g_html += "<div class=\"row\">\n" +
            "    <div class=\"col-lg-6 col-md-6 mb-4 mb-md-0\">\n" +
            "        <div class=\"product-image\">\n" +
            "            <div class=\"product_img_box\">\n" +
            "                <img id=\"product_img\" src=\""+products[i].Image +"\" alt=\"product_img1\">\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "    <div class=\"col-lg-6 col-md-6\">\n" +
            "        <div class=\"pr_detail\">\n" +
            "            <div class=\"product_description\">\n" +
            "                <h4 class=\"product_   title\">"+ products[i].Name +"</h4>\n" +
            "                <div class=\"product_price\">\n" +
            "                    <span class=\"price\">$"+products[i].Price +"</span>\n" +
            "                    <del><strike class=\"Old_price\">$"+products[i].Old_price +"</strike>&ensp;</del>\n" +
            "                    <div class=\"on_sale\">\n" +
            "                        <span>"+ products[i].Sale_off +"% Off</span>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "                <div class=\"pr_desc\">\n" +
            "                    <p>"+ products[i].Descriptions +"</p>\n" +
            "                </div>\n" +
            "                <div class=\"product_sort_info\">\n" +
            "                    <ul style=\" padding: 0;\">\n" +
            "                        <li><i class=\"fal fa-shield-check\"></i> 1 Year AL Jazeera Brand Warranty</li>\n" +
            "                        <li><i class=\"fal fa-sync\"></i> 30 Day Return Policy</li>\n" +
            "                        <li><i class=\"fal fa-sack-dollar\"></i> Cash on Delivery available</li>\n" +
            "                    </ul>\n" +
            "                </div>\n" +
            "                <div class=\"pr_switch_wrap\">\n" +
            "                    <span class=\"switch_lable\">Color:</span>\n" +
            "                    <div class=\"product_color_switch1\">\n" +
            "                        <span>"+ products[i].Color +"</span>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "                <div class=\"pr_switch_wrap\">\n" +
            "                    <span class=\"switch_lable\">Size:</span>\n" +
            "                    <div class=\"product_size_switch\">\n" +
            "                        <span>"+ products[i].Size +"</span>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "            <hr>\n" +
            "                <div class=\"cart_extra\">\n" +
            "                    <div class=\"cart-product-quantity\">\n" +
            "                        <div class=\"quantity\">\n" +
            "                            <input type=\"button\" value=\"-\" class=\"minus\">\n" +
            "                                <input type=\"text\" name=\"quantity\" value=\"1\" title=\"Qty\" class=\"qty\" size=\"4\">\n" +
            "                                    <input type=\"button\" value=\"+\" class=\"plus\">\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                    <div class=\"cart_btn\">\n" +
            "                        <button class=\"btn btn-fill-out btn-addtocart\" type=\"button\"><i class=\"icon-basket-loaded\"></i><a href='Shopping Cart.html'>Add to cart</a></button>\n" +
            "                        <a class=\"add_compare\" href=\"#\"><i class=\"fal fa-random\"></i></a>\n" +
            "                        <a class=\"add_wishlist\" href=\"#\"><i class=\"fal fa-heart\"></i></a>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "                <hr>\n" +
            "                    <ul class=\"product-meta\" style=\" padding: 0;font-size: 16px\">\n" +
            "                        <li style=\"\">SKU: <a href=\"#\">"+ products[i].Sku +"</a></li>\n" +
            "                        <li>Brand: <a href=\"#\">"+ products[i].Brand +"</a></li>\n" +
            "                    </ul>\n" +
            "                    <div class=\"product_share\">\n" +
            "                        <span>Share:</span>\n" +
            "                        <ul class=\"social_icons\">\n" +
            "                            <li><a href=\"https://en-gb.facebook.com/\"><i class=\"fab fa-facebook-f\"></i></a></li>\n" +
            "                            <li><a href=\"https://twitter.com/login?lang=en\"><i class=\"fab fa-twitter\"></i></a></li>\n" +
            "                            <li><a href=\"https://www.google.com/\"><i class=\"fab fa-google\"></i></a></li>\n" +
            "                            <li><a href=\"https://www.youtube.com/\"><i class=\"fab fa-youtube-square\"></i></a></li>\n" +
            "                            <li><a href=\"https://www.instagram.com/accounts/emailsignup/?hl=en\"><i class=\"fab fa-instagram-square\"></i></a></li>\n" +
            "                        </ul>\n" +
            "                    </div>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "</div>";
    }
    return g_html;
}
function loadData() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('Id')
    console.log(id)
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            var rs = this.responseText; // nhan text/json tu api
            products = JSON.parse(rs);// chuyen thanh object json
            var grid = document.getElementById("products_detail");
            grid.innerHTML = gridProduct_detail();
        }
    }
    xhttp.open("GET","https://sonhoang.herokuapp.com/products/"+id);
    xhttp.send();
}
loadData();





