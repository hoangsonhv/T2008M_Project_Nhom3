function footer() {
    return "<footer class=\"footer_body\">\n" +
        "        <div class=\"container footer_big\">\n" +
        "            <div class=\"col-md-3\">\n" +
        "                <a href=\"project.html\"><img src=\"img/logo_light.png\" style=\"margin-top: -10px\" height=\"47\" width=\"182\"/></a>\n" +
        "                <p class=\"logo_text\">Thank you for your interest in our BagBag products.\n</p>\n" +
        "                <ul class=\"SocialNetwork\">\n" +
        "                    <a class=\"SocialNetwork_link_fist\" href=\"https://en-gb.facebook.com/\"><li class=\"SocialNetwork_item\"><i class=\"fab fa-facebook-f\"></i></li></a>\n" +
        "                    <a class=\"SocialNetwork_link\" href=\"https://twitter.com/login?lang=en\"><li class=\"SocialNetwork_item\"><i class=\"fab fa-twitter\"></i></li></a>\n" +
        "                    <a class=\"SocialNetwork_link\" href=\"https://www.google.com/\"><li class=\"SocialNetwork_item\"><i class=\"fab fa-google\"></i></li></a>\n" +
        "                    <a class=\"SocialNetwork_link\" href=\"https://www.youtube.com/\"><li class=\"SocialNetwork_item\"><i class=\"fab fa-youtube\"></i></li></a>\n" +
        "                    <a class=\"SocialNetwork_link\" href=\"https://www.instagram.com/accounts/emailsignup/?hl=en\"><li class=\"SocialNetwork_item\"><i class=\"fab fa-instagram\"></i></li></a>\n" +
        "                </ul>\n" +
        "            </div>\n" +
        "            <div class=\"Useful-Links col-md-2\"  style=\"line-height: 1.5\">\n" +
        "                <p class=\"UsefulLinks_title\">Useful Links</p>\n" +
        "                <a class=\"Useful-Links_item\" href=\"AboutUs.html\"><p style=\"padding-top: 30px;\">About" +
        " Us</p></a>\n" +
        "                <a class=\"Useful-Links_item\" href=\"PAQ.html\"><p>FAQ</p></a>\n" +
        "                <a class=\"Useful-Links_item\" href=\"Contact.html\"><p>Contact Us</p></a>\n" +
        "            </div>\n" +
        "            <div class=\"Useful-Links col-md-2\"  style=\"line-height: 1.5\">\n" +
        "                <p class=\"UsefulLinks_title\">Category</p>\n" +
        "                <a class=\"Useful-Links_item\" href=\"Man.html\"><p style=\"padding-top: 30px;\">Man</p></a>\n" +
        "                <a class=\"Useful-Links_item\" href=\"Women.html\"><p>Women</p></a>\n" +
        "                <a class=\"Useful-Links_item\" href=\"Kids.html\"><p>Kids</p></a>\n" +
        "            </div>\n" +
        "            <div class=\"Useful-Links col-md-2\" style=\"line-height: 1.5\">\n" +
        "                <p class=\"UsefulLinks_title\">My Account</p>\n" +
        "                <a class=\"Useful-Links_item\" href=\"Login.html\"><p style=\"padding-top: 30px;\">Login</p></a>\n" +
        "                <a class=\"Useful-Links_item\" href=\"Register.html\"><p>Register</p></a>\n" +
        "                <a class=\"Useful-Links_item\" href=\"terms.html\"><p>Terms And Conditions</p></a>\n" +
        "            </div>\n" +
        "            <div class=\"Useful-Links_2 col-md-4\" style=\" color: white;line-height: 2;margin-top: -8px\">\n" +
        "                <p class=\"UsefulLinks_title\" >Contact Info</p>\n" +
        "                <p class=\"address\" style=\"padding-top: 20px;\" ><i class=\"fas fa-map-marker-alt\"></i>&emsp;Toà nhà Detech - ĐH FPT, Số 8, Tôn Thất Thuyết, Mỹ Đình, Từ Liêm, Hà Nội </p>\n" +
        "                <a href=\"#\" class=\"Useful-Links_item\"><p><i class=\"far fa-envelope \"></i>&emsp;TopCoderT2008M@gmail.com</p></a>\n" +
        "                <p class=\"phone\"><i class=\"fas fa-mobile-alt\" ></i>&emsp;+84 335 950 503</p>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <div class=\"footer_small container\" style=\" color: white;margin-top: 20px\">\n" +
        "            <li class=\"footer_small_text\" >© 2021, We will preserve the data of our loyal customers.</li>\n" +
        "            <li style=\"float: right;margin-top: -23px\">\n" +
        "                <img src=\"img/visa.png\" height=\"32\" width=\"49\"/>\n" +
        "                <img src=\"img/discover.png\" height=\"32\" width=\"49\"/>\n" +
        "                <img src=\"img/master_card.png\" height=\"32\" width=\"49\"/>\n" +
        "                <img src=\"img/paypal.png\" height=\"32\" width=\"49\"/>\n" +
        "                <img src=\"img/amarican_express.png\" height=\"32\" width=\"48\"/>\n" +
        "            </li>\n" +
        "        </div>\n" +
        "    </footer>";
}
var hd = document.getElementById("Footer");
hd.innerHTML = footer();