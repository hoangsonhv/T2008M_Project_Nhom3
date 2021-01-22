

function gridProduct() {
    var g_html = "<h4 class=\"widget_title\">Brand</h4>\n" +
        "                        <ul class=\"list_brand\" style=\"margin: 30px 0;padding: 0\">\n" +
        "                            <li>\n" +
        "                                <a href='Hermes.html'><i class=\"far fa-caret-right\"></i><span>Hermes</span></a>\n" +
        "                            </li>\n" +
        "                            <li>\n" +
        "                                <a href='Louis.html'><i class=\"far fa-caret-right\"></i><span>Louis Vuitton</span></a>\n" +
        "                            </li>\n" +
        "                            <li>\n" +
        "                                <a href='Burberry.html'><i class=\"far fa-caret-right\"></i><span>Burberry</span></a>\n" +
        "                            </li>\n" +
        "                            <li>\n" +
        "                                <a href='Marc.html'><i class=\"far fa-caret-right\"></i><span>Marc Jacobs</span></a>\n" +
        "                            </li>\n" +
        "                            <li>\n" +
        "                                <a href='Chanel.html'><i class=\"far fa-caret-right\"></i><span>Chanel</span></a>\n" +
        "                            </li>\n" +
        "                        </ul>";

    return g_html;
}
var grid = document.getElementById("Brand");
grid.innerHTML = gridProduct();
