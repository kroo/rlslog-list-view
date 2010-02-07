$(window).load(function() {
  var list = $('<a href="javascript:return false;" style="position: absolute; top: 25px; margin-left: 775px; color: white; font-family: Helvetica;">list</div>');
  list.click(function() {
    hideDetails();
    updateListMode();
  });
  list.appendTo($("#title"));
});

function hideDetails() {
  $("#content div").css("display", "none");
  $("#content div.entry").css({
    "display": "block",
    "background-color": "white",
    "padding": "0px 0px 0px 0px", 
    "padding-left": "10px",
    "font-family": "Helvetica",
    "font-size": "10px"
  });
  $("#content span").css("display", "none");
  $("#content div.entry div").css("display", "none");
  $("#content div.entry h3.entrytitle").css("display", "block");

  $('#content div.entry h3.entrytitle a').each(function(index) {
    $(this).attr("xhref", $(this).attr("href"));
    $(this).attr("href", "javascript:return false");
  }); 
}

function updateListMode() {
  $('#content div.entry h3.entrytitle a').click(function() {
    $(this).parent().siblings().css("display", "block");
  });
  $('#content > p a').each(function() {
    $(this).attr("xhref", $(this).attr("href"));
    $(this).attr("href", "javascript:return false");
  })
  $('#content > p a').click(function() {
    $.get($(this).attr("xhref"), function(data) {
      console.log($('#content > p a').attr("href"));
      console.log($(data).find("#content"));
      $('#content p a').parent().hide()
      $(data).find("#content").children().appendTo($("#content"));
      hideDetails();
      updateListMode();
    });
  });
}