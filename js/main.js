$(document).ready(function(){
    var user_template = $('#user-template').html();
    var $sidebar = $('#slidebar-content');
    loadJSON('GET', 'https://api.myjson.com/bins/16lk1t', function(response){
       $sidebar.html(render(response, user_template));
    });
    loadJSON('GET', 'https://api.myjson.com/bins/cs62p', function(response){
       console.log(response);
    });

    function render(data, template){
        var t = Handlebars.compile(template);
        var html = t(data);
        return html;
    }
    function loadJSON(method, url, callback){
        $.ajax({
            'type': method,
            'url': url,
            'success': callback
        });
    }

});
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});