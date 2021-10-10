

var caseTable = $('#caseTable');
window.onload = function() {
console.log("inwindow on load");
    $.ajax({

        url:'/shuruKro',
        type: 'GET',
        dataType: 'json',
        success:function(result){
        console.log("window load hogayi hai, and get request success hogayi hai");
        console.log(result["key"][0]);

        // caseTable.html(result["key"][0]["case_no"])- testing
        
        for (var i=0; i<result["key"].length; i++) {
            var row = $('<tr><td>' + result["key"][i].case_no+ '</td><td>' + result["key"][i].branch + '</td><td>' + result["key"][i].reporting_method + '</td><td>'+
            result["key"][i].date + '</td><td>' +result["key"][i].time + '</td><td>' +result["key"][i].category +
            '</td><td>' +result["key"][i].sub_category + '</td><td>' +result["key"][i].priority + '</td><td>' +result["key"][i].nature + '</td><td>' +
            result["key"][i].case_manager + '</td><td>'  + result["key"][i].case_reporter + '</td><td>' +  result["key"][i].case_status + '</td><td>'
              +'</td></tr>');
            $('#mytable').append(row);
          }
        },
        error: function(jqXHR, textStatus, errorThrown){
          alert('Error: ' + textStatus + ' - ' + errorThrown);
        }




        }

    )
}


!function(l){"use strict";l("#sidebarToggle, #sidebarToggleTop").on("click",function(e){l("body").toggleClass("sidebar-toggled"),l(".sidebar").toggleClass("toggled"),l(".sidebar").hasClass("toggled")&&l(".sidebar .collapse").collapse("hide")}),l(window).resize(function(){l(window).width()<768&&l(".sidebar .collapse").collapse("hide"),l(window).width()<480&&!l(".sidebar").hasClass("toggled")&&(l("body").addClass("sidebar-toggled"),l(".sidebar").addClass("toggled"),l(".sidebar .collapse").collapse("hide"))}),l("body.fixed-nav .sidebar").on("mousewheel DOMMouseScroll wheel",function(e){var o;768<l(window).width()&&(o=(o=e.originalEvent).wheelDelta||-o.detail,this.scrollTop+=30*(o<0?1:-1),e.preventDefault())}),l(document).on("scroll",function(){100<l(this).scrollTop()?l(".scroll-to-top").fadeIn():l(".scroll-to-top").fadeOut()}),l(document).on("click","a.scroll-to-top",function(e){var o=l(this);l("html, body").stop().animate({scrollTop:l(o.attr("href")).offset().top},1e3,"easeInOutExpo"),e.preventDefault()})}(jQuery);
