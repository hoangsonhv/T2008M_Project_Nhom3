

function gridProduct() {
    var g_html = "<h4 class=\"widget_title\">Categories</h4>\n" +
        "                        <ul class=\"widget_categories\" >\n" +
        "                            <li><a style=\"text-decoration: none\" href=\"Purse.html\"><span class=\"categories_name\">Purse</span><span class=\"categories_num\"></span></a></li>\n" +
        "                            <li><a style=\"text-decoration: none\" href=\"Hand.html\"><span class=\"categories_name\">Hand Bags</span><span class=\"categories_num\"></span></a></li>\n" +
        "                            <li><a style=\"text-decoration: none\" href=\"Shoulder.html\"><span class=\"categories_name\">Shoulder Bags</span><span class=\"categories_num\"></span></a></li>\n" +
        "                            <li><a style=\"text-decoration: none\" href=\"Wallet.html\"><span class=\"categories_name\">Wallet</span><span class=\"categories_num\"></span></a></li>\n" +
        "                            <li style=\"  border-bottom: 1px solid silver;padding-bottom: 30px\"><a style=\"text-decoration: none\" href=\"Laptop.html\"><span\n" +
        "                                    class=\"categories_name\">Laptop Bags</span><span class=\"categories_num\">\n" +
        "                                </span></a></li>\n" +
        "                        </ul>";

    return g_html;
}
var grid = document.getElementById("shop_detail");
grid.innerHTML = gridProduct();


