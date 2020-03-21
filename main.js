function getPhoto(a) {
  $.get("https://www.instagram.com/" + a + "/?__a=1").done(function(data) {
    // getting the url
    var photoURL = data["graphql"]["user"]["profile_pic_url_hd"];

    // update img element
    document.getElementById("avatar").style.backgroundImage =
      'url("' + photoURL + '")';
  });
}
getPhoto("amirhbeigi");
