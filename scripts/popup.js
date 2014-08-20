$(document).ready(function(){
    console.log('ready');

    $.ajax({
      type: "GET",
      url: 'http://www.reddit.com/r/gifs/.json',
      })
        .success(function(data){
          var pic = "<ul>" ;
          for (var i = 0; i <= 7 ; i++) {

             pic += "<li>" + "<p>" + data.data.children[i].data.title + "</p>" + "<img src=\"" + data.data.children[i].data.url +"\">" + "</li>" ;
            }
             pic += "</ul>"

           $('#pics').html(pic)

      })

  });
