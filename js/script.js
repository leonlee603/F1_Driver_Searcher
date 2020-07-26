// Event handler for searching the driver.
$("#search").on("keyup", function() {
    var searchInput = $("#search").val();
    var myExp = new RegExp(searchInput, "i"); // Concert to regular expression for condition check.
    $.getJSON("json/data.json", function (data) {
        var output = '<ul class="searchresult">';
        $.each(data, function (key, value) {
            if ((value.name.search(myExp) != -1 || value.bio.search(myExp) != -1 || value.team.search(myExp) != -1)) {
                output += '<li>';
                output += '<h2>' + value.name + '  (' + value.team + ') ' + '</h2>';
                output += '<img src="images/' + value.shortname + '_tn.jpg" alt="' + value.name + '">';
                output += '<p>' + value.bio + '</p>';
                output += '</li>'
            }
        });
        output += "<ul>";
        $("#update").html(output);
    });
});
// Display all driver when the DOM is ready.
$(function() {
    $.getJSON("json/data.json", function (data) {
            var output = '<ul class="searchresult">';
            $.each(data, function (key, value) {
            output += '<li>';
            output += '<h2>' + value.name + '  (' + value.team + ') ' + '</h2>';
            output += '<img src="images/' + value.shortname + '_tn.jpg" alt="' + value.name + '">';
            output += '<p>' + value.bio + '</p>';
            output += '</li>'
            });
            output += "<ul>";
            $("#update").html(output);
        }
    );
});
