function posech() {
    var xmlHttp = new XMLHttpRequest();
    theUrl = 'https://api.telegram.org/bot6122835614:AAEe7Pp_3YkGrj5WBTdDk_O7uDsiIsKspdY/sendMessage?chat_id=822139855&parse_mode=Markdown&text=' + "Сайт был посещен!";
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
}