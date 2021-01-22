

function gridProductWish_list() {
    var g_html = "";
    for (var i=0;i<1;i++){
        g_html += "<div class=\"table-responsive wishlist_table\">\n" +
            "                    <table class=\"table\" style=\"border: none\">\n" +
            "                        <thead>\n" +
            "                        <tr style=\"border-top: 2px solid #DDDD;\">\n" +
            "                            <th class=\"product-thumbnail\">&nbsp;</th>\n" +
            "                            <th class=\"product-name\">Product</th>\n" +
            "                            <th class=\"product-price\">Price</th>\n" +
            "                            <th class=\"product-stock-status\">Stock Status</th>\n" +
            "                            <th class=\"product-add-to-cart\"></th>\n" +
            "                            <th class=\"product-remove\">Remove</th>\n" +
            "                        </tr>\n" +
            "                        </thead>\n" +
            "                        <tbody>\n" +
            "                        <tr>\n" +
            "                            <td class=\"product-thumbnail\"><a href='Product_detail.html?Id="+ products[0].Id +"'><img src=\""+products[0].Image +"\" style=\"width: 150px;margin-left-10px;height: 111px\"></a></td>\n" +
            "                            <td class=\"product-name\" data-title=\"Product\" ><a href='Product_detail.html?Id="+ products[0].Id +"' style=\"color:black;font-weight: 700\">"+ products[0].Name +"</a></td>\n" +
            "                            <td class=\"product-price\" data-title=\"Price\">$"+products[0].Price +"&nbsp; </td>\n" +
            "                            <td class=\"product-stock-status\" data-title=\"Stock Status\"><span class=\"badge wishlist_table badge-pill badge-success\">"+ products[0].Status +"</span></td>\n" +
            "                            <td class=\"product-add-to-cart\"><a href=\"Shopping Cart.html\" class=\"bta btn-fill-out\"><i class=\"icon-basket-loaded\"></i> Add to Cart</a></td>\n" +
            "                            <td class=\"product-remove\" data-title=\"Remove\"><a href=\"#\" style=\"color: black\" ><i class=\"fas fa-times\"></i></a></td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td class=\"product-thumbnail\"><a href='Product_detail.html?Id="+ products[1].Id +"'><img src=\""+products[1].Image +"\" alt=\"product2\" style=\"width: 150px;margin-left-10px;height: 111px\"></a></td>\n" +
            "                            <td class=\"product-name\" data-title=\"Product\" ><a href='Product_detail.html?Id="+ products[1].Id +"' style=\"color:black;font-weight: 700\">"+ products[1].Name +"</a></td>\n" +
            "                            <td class=\"product-price\" data-title=\"Price\">$"+products[1].Price +"&nbsp; </td>\n" +
            "                            <td class=\"product-stock-status\" data-title=\"Stock Status\"><span class=\"badge badge-pill badge-success\">"+ products[1].Status +"</span></td>\n" +
            "                            <td class=\"product-add-to-cart\"><a href=\"Shopping Cart.html\" class=\"bta btn-fill-out\"><i class=\"icon-basket-loaded\"></i> Add to Cart</a></td>\n" +
            "                            <td class=\"product-remove\" data-title=\"Remove\"><a href=\"#\"  style=\"color: black\"><i class=\"fas fa-times\"></i></a></td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td class=\"product-thumbnail\"><a href='Product_detail.html?Id="+ products[2].Id +"'><img src=\""+products[2].Image +"\" alt=\"product2\" style=\"width: 150px;margin-left-10px;height: 111px\"></a></td>\n" +
            "                            <td class=\"product-name\" data-title=\"Product\"><a href='Product_detail.html?Id="+ products[2].Id +"' style=\"color:black;font-weight: 700\">"+ products[2].Name +"</a></td>\n" +
            "                            <td class=\"product-price\" data-title=\"Price\">$"+products[2].Price +"&nbsp;</td>\n" +
            "                            <td class=\"product-stock-status\" data-title=\"Stock Status\"><span class=\"badge badge-pill badge-success\">"+ products[2].Status +"</span></td>\n" +
            "                            <td class=\"product-add-to-cart\"><a href=\"Shopping Cart.html\" class=\"bta btn-fill-out\"><i class=\"icon-basket-loaded\"></i> Add to Cart</a></td>\n" +
            "                            <td class=\"product-remove\" data-title=\"Remove\"><a href=\"#\"  style=\"color: black;\"><i class=\"fas fa-times\"></i></a></td>\n" +
            "                        </tr>\n" +
            "                        </tbody>\n" +
            "                    </table>\n" +
            "                </div>";
    }
    return g_html;
}
function loadData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            var rs = this.responseText; // nhan text/json tu api
            products = JSON.parse(rs);// chuyen thanh object json
            var grid = document.getElementById("Wish_list");
            grid.innerHTML = gridProductWish_list();
        }
    }
    xhttp.open("GET","https://sonhoang.herokuapp.com/products");
    xhttp.send();
}
loadData();