var size = 0;
var placement = 'point';

var style_BLOQUESB_LANENA_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "13.0px \'Arial\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.7999999999999998;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("etiqueta") !== null) {
        labelText = String(feature.get("etiqueta"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(223,210,29,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 4.56}),fill: new ol.style.Fill({color: 'rgba(223,210,29,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
