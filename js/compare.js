function gridProductCompare() {
    var g_html = "";
    for (var i=0;i<1;i++){
        g_html += "<div class=\"product-img\" style='width: 100%;height: 250px'>\n" +
            "            <div class=\"product_column1 boder-column\">\n" +
            "                <p class=\"text-column1\">PRODUCT IMAGE</p>\n" +
            "            </div>\n" +
            "            <div class=\"product_column2 boder-column\">\n" +
            "                <a href='Product_detail.html?Id="+ products[0].Id +"'><img class=\"column-img\" src=\""+products[0].Image +"\" style=\"width: 100%;height: 250px\" alt=\"product1\"></a>\n" +
            "            </div>\n" +
            "            <div class=\"product_column2 boder-column\">\n" +
            "                <a href='Product_detail.html?Id="+ products[1].Id +"'><img class=\"column-img\" src=\""+products[1].Image +"\" style=\"width: 100%;height: 250px\" alt=\"product2\"></a>\n" +
            "            </div>\n" +
            "            <div class=\"product_column2 boder-column\">\n" +
            "                <a href='Product_detail.html?Id="+ products[2].Id +"'><img class=\"column-img\" src=\""+products[2].Image +"\" style=\"width: 100%;height: 250px\" alt=\"product3\"></a>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "        <div class=\"product-name\" style=\"height: 50px;display: flex;\">\n" +
            "            <div class=\"product_column1-2 boder-column\">\n" +
            "                <p class=\"text-column2-2\">PRODUCT NAME</p>\n" +
            "            </div>\n" +
            "            <div class=\"product_column2-2 boder-column\">\n" +
            "                <a class=\"text-column2-2 hover-red\" href='Product_detail.html?Id="+ products[0].Id +"'><p class=\"text-column1\">"+ products[0].Name +"</p></a>\n" +
            "            </div>\n" +
            "            <div class=\"product_column2-2 boder-column\">\n" +
            "                <a class=\"text-column2-2 hover-red\" href='Product_detail.html?Id="+ products[1].Id +"'><p>"+ products[1].Name +"</p></a>\n" +
            "            </div>\n" +
            "            <div class=\"product_column2-2 boder-column\">\n" +
            "                <a class=\"text-column2-2 hover-red\" href='Product_detail.html?Id="+ products[2].Id +"'><p>"+ products[2].Name +"</p></a>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "        <div class=\"product-price\" style=\"   display: flex; color: rgb(255,50,77) ;font-size: 16px;font-weight: 700;\">\n" +
            "            <div class=\"product_column1-2 boder-column\">\n" +
            "                <p class=\"text-column2-2\">PRICE</p>\n" +
            "            </div>\n" +
            "            <div class=\"column-price boder-column\">\n" +
            "                <p class=\"\">$"+products[0].Price +"&ensp; </p>\n" +
            "            </div>\n" +
            "            <div class=\"column-price boder-column\">\n" +
            "                <p>$"+products[1].Price +"&ensp; </p>\n" +
            "            </div>\n" +
            "            <div class=\"column-price boder-column\">\n" +
            "                <p>$"+products[2].Price +"&ensp; </p>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "        <div class=\"product-rating\">\n" +
            "            <div class=\"product_column1-2 boder-column\">\n" +
            "                <p class=\"text-column2-2\">RATING</p>\n" +
            "            </div>\n" +
            "            <div class=\"column-rate boder-column\">(21)</div>\n" +
            "            <div class=\"column-rate boder-column\">(15)</div>\n" +
            "            <div class=\"column-rate boder-column\">(25)</div>\n" +
            "        </div>\n" +
            "        <div class=\"product-AddCart\">\n" +
            "            <div class=\"AddTocart boder-column\">\n" +
            "                <span class=\"AddTocart-text \">ADD TO CART</span>\n" +
            "            </div>\n" +
            "            <div class=\"AddTocart_column boder-column\">\n" +
            "                <a href=\"Shopping Cart.html\" style=\"height: 50px\" class=\"btn btn-fill-out\"><i class=\"icon-basket-loaded\"></i> Add To Cart</a>\n" +
            "            </div>\n" +
            "            <div class=\"AddTocart_column boder-column\">\n" +
            "                <a href=\"Shopping Cart.html\" style=\"height: 50px;width: 57%;\"  class=\"btn btn-fill-out\"><i class=\"icon-basket-loaded\"></i> Add To Cart</a>\n" +
            "            </div>\n" +
            "            <div class=\"AddTocart_column boder-column\">\n" +
            "                <a href=\"Shopping Cart.html\" style=\"height: 50px\"  class=\"btn btn-fill-out\"><i class=\"icon-basket-loaded\"></i> Add To Cart</a>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "        <div class=\"product_description\" style=\"display: flex\">\n" +
            "            <div class=\"DESCRIPTION boder-column\">\n" +
            "                <span >DESCRIPTION</span>\n" +
            "            </div>\n" +
            "            <div class=\"text-description boder-column\">\n" +
            "                <p>"+ products[0].Descriptions +"</p>\n" +
            "            </div>\n" +
            "            <div class=\"text-description boder-column\">\n" +
            "                <p>"+ products[1].Descriptions +"</p>\n" +
            "            </div>\n" +
            "            <div class=\"text-description boder-column\">\n" +
            "                <p>"+ products[2].Descriptions +"</p>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "        <div class=\"product_color\">\n" +
            "            <div class=\"product_column1-2 boder-column\">\n" +
            "                <p class=\"text-column2-2\">COLOR</p>\n" +
            "            </div>\n" +
            "            <div class=\"choose-color boder-column\">"+ products[0].Color +"</div>\n" +
            "            <div class=\"choose-color boder-column\">"+ products[1].Color +"</div>\n" +
            "            <div class=\"choose-color boder-column\">"+ products[2].Color +"</div>\n" +
            "        </div>\n" +
            "        <div class=\"product-sizes\">\n" +
            "            <div class=\"product_column1-2 boder-column\">\n" +
            "                <p class=\"text-column2-2\">SIZES AVAILABLE</p>\n" +
            "            </div>\n" +
            "            <div class=\"choose-color boder-column\">\n" +
            "                <p>S, M, L, XL</p>\n" +
            "            </div>\n" +
            "            <div class=\"choose-color boder-column\">\n" +
            "                <p>S, M, L, XL</p>\n" +
            "            </div>\n" +
            "            <div class=\"choose-color boder-column\">\n" +
            "                <p>S, M, L, XL</p>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "        <div class=\"product-availability\">\n" +
            "            <div class=\"product_column1-2 boder-column\">\n" +
            "                <p class=\"text-column2-2\">ITEM AVAILABILITY</p>\n" +
            "            </div>\n" +
            "            <div class=\"stock boder-column\">\n" +
            "                <p class=\"In_Stock\">"+ products[0].Status +"</p>\n" +
            "            </div>\n" +
            "            <div class=\"stock boder-column\">\n" +
            "                <p class=\"Out-Stock\">"+ products[1].Status +"</p>\n" +
            "            </div>\n" +
            "            <div class=\"stock boder-column\">\n" +
            "                <p class=\"In_Stock\">"+ products[2].Status +"</p>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "        <div class=\"product_weight\">\n" +
            "            <div class=\"product_column1-2 boder-column\">\n" +
            "                <p class=\"text-column2-2\">ITEM AVAILABILITY</p>\n" +
            "            </div>\n" +
            "            <div class=\"weight boder-column\"></div>\n" +
            "            <div class=\"weight boder-column\"></div>\n" +
            "            <div class=\"weight boder-column\"></div>\n" +
            "        </div>\n" +
            "        <div class=\"product-DIMENSIONS\">\n" +
            "            <div class=\"product_column1-2 boder-column\">\n" +
            "                <p class=\"text-column2-2\">DIMENSIONS</p>\n" +
            "            </div>\n" +
            "            <div class=\"DIMENSIONS boder-column\">\n" +
            "                <p>"+ products[0].Dimensions +"</p>\n" +
            "            </div>\n" +
            "            <div class=\"DIMENSIONS boder-column\">\n" +
            "                <p>"+ products[1].Dimensions +"</p>\n" +
            "            </div>\n" +
            "            <div class=\"DIMENSIONS boder-column\">\n" +
            "                <p>"+ products[2].Dimensions +"</p>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "        <div class=\"product-remove\" style=\" display: flex;\">\n" +
            "            <div class=\"product_column1-2 boder-column\">\n" +
            "                <p></p>\n" +
            "            </div>\n" +
            "            <div class=\"click-remove boder-column\">\n" +
            "                <a style=\"text-decoration: none\" class=\"click-remove\" href=\"#\"><span style=\"margin-left: -10px;\">Remove</span></a>\n" +
            "            </div>\n" +
            "            <div class=\"click-remove boder-column\">\n" +
            "                <a style=\"text-decoration: none\" class=\"click-remove\" href=\"#\"><span style=\"margin-left: -10px;\">Remove</span></a>\n" +
            "            </div>\n" +
            "            <div class=\"click-remove boder-column \">\n" +
            "                <a style=\"text-decoration: none\" class=\" click-remove\" href=\"#\"><span style=\"margin-left: -10px;\">Remove</span></a>\n" +
            "            </div>\n" +
            "        </div>";
    }
    return g_html;
}
function loadData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            var rs = this.responseText; // nhan text/json tu api
            products = JSON.parse(rs);// chuyen thanh object json
            var grid = document.getElementById("Compare");
            grid.innerHTML = gridProductCompare();
        }
    }
    xhttp.open("GET","https://sonhoang.herokuapp.com/products");
    xhttp.send();
}
loadData();