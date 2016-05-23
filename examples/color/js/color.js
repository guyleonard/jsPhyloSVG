$(document).ready(function(){
    $.get("trees/color.xml", function(data) {
        var dataObject = { xml: data, fileSource: true };
        phylocanvas = new Smits.PhyloCanvas(
            dataObject, 'svgCanvas', 500, 200
        );
    });
});
