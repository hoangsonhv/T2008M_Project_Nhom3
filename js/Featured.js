
function gridProductFeatured() {
    var g_html = "";
    for (var i=2;i<10;i++){
        g_html += "<div class=\"col-md-3\">\n" +
            "           <div class=\"product\">\n" +
            "               <div class=\"item\">\n" +
            "                   <a href='Product_detail.html?Id="+ products[i].Id +"'><img class=\"image\" src=\""+products[i].Image +"\" alt=\"\"></a>\n" +
            "                   <div class=\"product-icon\">\n" +
            "                       <div class=\"icon1\"><a href=\"#\"><i class=\"fal fa-heart\"></i></a></div>\n" +
            "                       <div class=\"icon2\"><a href=\"#\"><i class=\"fal fa-eye\"></i></a></div>\n" +
            "                       <div class=\"icon3\"><a href=\"#\"><i class=\"fal fa-sync-alt\"></i></a></div>\n" +
            "                   </div>\n" +
            "               </div>\n" +
            "               <div class=\"item_2\">\n" +
            "                   <a href='Product_detail.html?Id="+ products[i].Id +"'><h2 class=\"name\">"+ products[i].Name +"</h2></a>\n" +
            "                   <div class=\"star\">\n" +
            "                       <div class=\"star-box\">\n" +
            "                           <div class=\"star-rate\" style=\"width: "+(products[i].Star/5*100) +"%\"></div>\n" +
            "                           <span class=\"Sale_off\">"+products[i].Sale_off+"% Off</span>\n" +
            "                       </div>\n" +
            "                   </div>\n" +
            "                   <p class=\"price\">$"+products[i].Price +"&ensp; <strike class=\"Old_price\">$"+products[i].Old_price +"</strike>&ensp;</p>\n" +
            "                   <a class=\"product-shop\" href=\"Shopping Cart.html\"><i class=\"fal fa-cart-arrow-down\"></i></a>\n" +
            "               </div>\n" +
            "           </div>\n" +
            "        </div>";
    }
    return g_html;
}
function loadData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            var rs = this.responseText;
            products = JSON.parse(rs);
            var grid = document.getElementById("Featured");
            grid.innerHTML = gridProductFeatured();
        }
    }
    xhttp.open("GET","https://sonhoang.herokuapp.com/products");
    xhttp.send();
}
loadData();