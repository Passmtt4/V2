var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_RECHIDRICO_LANENA_2 = new ol.format.GeoJSON();
var features_RECHIDRICO_LANENA_2 = format_RECHIDRICO_LANENA_2.readFeatures(json_RECHIDRICO_LANENA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RECHIDRICO_LANENA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RECHIDRICO_LANENA_2.addFeatures(features_RECHIDRICO_LANENA_2);
var lyr_RECHIDRICO_LANENA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RECHIDRICO_LANENA_2, 
                style: style_RECHIDRICO_LANENA_2,
                popuplayertitle: 'REC-HIDRICO_LA-NENA',
                interactive: true,
                title: '<img src="styles/legend/RECHIDRICO_LANENA_2.png" /> REC-HIDRICO_LA-NENA'
            });
var format_BLOQUESFU_LANENA_3 = new ol.format.GeoJSON();
var features_BLOQUESFU_LANENA_3 = format_BLOQUESFU_LANENA_3.readFeatures(json_BLOQUESFU_LANENA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BLOQUESFU_LANENA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BLOQUESFU_LANENA_3.addFeatures(features_BLOQUESFU_LANENA_3);
var lyr_BLOQUESFU_LANENA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BLOQUESFU_LANENA_3, 
                style: style_BLOQUESFU_LANENA_3,
                popuplayertitle: 'BLOQUES-FU_LA-NENA',
                interactive: true,
                title: '<img src="styles/legend/BLOQUESFU_LANENA_3.png" /> BLOQUES-FU_LA-NENA'
            });
var format_BLOQUESINVCONST_LANENA_4 = new ol.format.GeoJSON();
var features_BLOQUESINVCONST_LANENA_4 = format_BLOQUESINVCONST_LANENA_4.readFeatures(json_BLOQUESINVCONST_LANENA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BLOQUESINVCONST_LANENA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BLOQUESINVCONST_LANENA_4.addFeatures(features_BLOQUESINVCONST_LANENA_4);
var lyr_BLOQUESINVCONST_LANENA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BLOQUESINVCONST_LANENA_4, 
                style: style_BLOQUESINVCONST_LANENA_4,
                popuplayertitle: 'BLOQUES-INV-CONST_LA-NENA',
                interactive: true,
                title: '<img src="styles/legend/BLOQUESINVCONST_LANENA_4.png" /> BLOQUES-INV-CONST_LA-NENA'
            });
var format_BLOQUESA_LANENA_5 = new ol.format.GeoJSON();
var features_BLOQUESA_LANENA_5 = format_BLOQUESA_LANENA_5.readFeatures(json_BLOQUESA_LANENA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BLOQUESA_LANENA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BLOQUESA_LANENA_5.addFeatures(features_BLOQUESA_LANENA_5);
var lyr_BLOQUESA_LANENA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BLOQUESA_LANENA_5, 
                style: style_BLOQUESA_LANENA_5,
                popuplayertitle: 'BLOQUES-A_LA-NENA',
                interactive: true,
                title: '<img src="styles/legend/BLOQUESA_LANENA_5.png" /> BLOQUES-A_LA-NENA'
            });
var format_BLOQUESB_LANENA_6 = new ol.format.GeoJSON();
var features_BLOQUESB_LANENA_6 = format_BLOQUESB_LANENA_6.readFeatures(json_BLOQUESB_LANENA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BLOQUESB_LANENA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BLOQUESB_LANENA_6.addFeatures(features_BLOQUESB_LANENA_6);
var lyr_BLOQUESB_LANENA_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BLOQUESB_LANENA_6, 
                style: style_BLOQUESB_LANENA_6,
                popuplayertitle: 'BLOQUES-B_LA-NENA',
                interactive: true,
                title: '<img src="styles/legend/BLOQUESB_LANENA_6.png" /> BLOQUES-B_LA-NENA'
            });
var format_BLOQUESLN1_LANENA_7 = new ol.format.GeoJSON();
var features_BLOQUESLN1_LANENA_7 = format_BLOQUESLN1_LANENA_7.readFeatures(json_BLOQUESLN1_LANENA_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BLOQUESLN1_LANENA_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BLOQUESLN1_LANENA_7.addFeatures(features_BLOQUESLN1_LANENA_7);
var lyr_BLOQUESLN1_LANENA_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BLOQUESLN1_LANENA_7, 
                style: style_BLOQUESLN1_LANENA_7,
                popuplayertitle: 'BLOQUES-LN1_LA-NENA',
                interactive: true,
                title: '<img src="styles/legend/BLOQUESLN1_LANENA_7.png" /> BLOQUES-LN1_LA-NENA'
            });
var format_BLOQUESFLN_LANENA_8 = new ol.format.GeoJSON();
var features_BLOQUESFLN_LANENA_8 = format_BLOQUESFLN_LANENA_8.readFeatures(json_BLOQUESFLN_LANENA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BLOQUESFLN_LANENA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BLOQUESFLN_LANENA_8.addFeatures(features_BLOQUESFLN_LANENA_8);
var lyr_BLOQUESFLN_LANENA_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BLOQUESFLN_LANENA_8, 
                style: style_BLOQUESFLN_LANENA_8,
                popuplayertitle: 'BLOQUES-FLN_LA-NENA',
                interactive: true,
                title: '<img src="styles/legend/BLOQUESFLN_LANENA_8.png" /> BLOQUES-FLN_LA-NENA'
            });
var format_BLOQUESF7_LANENA_9 = new ol.format.GeoJSON();
var features_BLOQUESF7_LANENA_9 = format_BLOQUESF7_LANENA_9.readFeatures(json_BLOQUESF7_LANENA_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BLOQUESF7_LANENA_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BLOQUESF7_LANENA_9.addFeatures(features_BLOQUESF7_LANENA_9);
var lyr_BLOQUESF7_LANENA_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BLOQUESF7_LANENA_9, 
                style: style_BLOQUESF7_LANENA_9,
                popuplayertitle: 'BLOQUES-F7_LA-NENA',
                interactive: true,
                title: '<img src="styles/legend/BLOQUESF7_LANENA_9.png" /> BLOQUES-F7_LA-NENA'
            });
var format_BLOQUESPROPAGACION_LANENA_10 = new ol.format.GeoJSON();
var features_BLOQUESPROPAGACION_LANENA_10 = format_BLOQUESPROPAGACION_LANENA_10.readFeatures(json_BLOQUESPROPAGACION_LANENA_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BLOQUESPROPAGACION_LANENA_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BLOQUESPROPAGACION_LANENA_10.addFeatures(features_BLOQUESPROPAGACION_LANENA_10);
var lyr_BLOQUESPROPAGACION_LANENA_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BLOQUESPROPAGACION_LANENA_10, 
                style: style_BLOQUESPROPAGACION_LANENA_10,
                popuplayertitle: 'BLOQUES-PROPAGACION_LA-NENA',
                interactive: true,
                title: '<img src="styles/legend/BLOQUESPROPAGACION_LANENA_10.png" /> BLOQUES-PROPAGACION_LA-NENA'
            });
var format_FANTASYF5_LANENA_11 = new ol.format.GeoJSON();
var features_FANTASYF5_LANENA_11 = format_FANTASYF5_LANENA_11.readFeatures(json_FANTASYF5_LANENA_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FANTASYF5_LANENA_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FANTASYF5_LANENA_11.addFeatures(features_FANTASYF5_LANENA_11);
var lyr_FANTASYF5_LANENA_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FANTASYF5_LANENA_11, 
                style: style_FANTASYF5_LANENA_11,
                popuplayertitle: 'FANTASY-F5_LA-NENA',
                interactive: true,
                title: '<img src="styles/legend/FANTASYF5_LANENA_11.png" /> FANTASY-F5_LA-NENA'
            });
var format_CABLEVIA_LANENA_12 = new ol.format.GeoJSON();
var features_CABLEVIA_LANENA_12 = format_CABLEVIA_LANENA_12.readFeatures(json_CABLEVIA_LANENA_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CABLEVIA_LANENA_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CABLEVIA_LANENA_12.addFeatures(features_CABLEVIA_LANENA_12);
var lyr_CABLEVIA_LANENA_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CABLEVIA_LANENA_12, 
                style: style_CABLEVIA_LANENA_12,
                popuplayertitle: 'CABLEVIA_LA-NENA',
                interactive: true,
                title: '<img src="styles/legend/CABLEVIA_LANENA_12.png" /> CABLEVIA_LA-NENA'
            });
var format_MTL_LANENA_13 = new ol.format.GeoJSON();
var features_MTL_LANENA_13 = format_MTL_LANENA_13.readFeatures(json_MTL_LANENA_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MTL_LANENA_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MTL_LANENA_13.addFeatures(features_MTL_LANENA_13);
var lyr_MTL_LANENA_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MTL_LANENA_13, 
                style: style_MTL_LANENA_13,
                popuplayertitle: 'MTL_LA-NENA',
                interactive: true,
                title: '<img src="styles/legend/MTL_LANENA_13.png" /> MTL_LA-NENA'
            });
var format_MT_LANENA_14 = new ol.format.GeoJSON();
var features_MT_LANENA_14 = format_MT_LANENA_14.readFeatures(json_MT_LANENA_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MT_LANENA_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT_LANENA_14.addFeatures(features_MT_LANENA_14);
var lyr_MT_LANENA_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT_LANENA_14, 
                style: style_MT_LANENA_14,
                popuplayertitle: 'MT_LA-NENA',
                interactive: true,
                title: '<img src="styles/legend/MT_LANENA_14.png" /> MT_LA-NENA'
            });
var group_FANTASYF5_LANENA = new ol.layer.Group({
                                layers: [lyr_FANTASYF5_LANENA_11,],
                                fold: 'open',
                                title: 'FANTASY-F5_LA-NENA'});
var group_PROPAGACOPN_LANENA = new ol.layer.Group({
                                layers: [lyr_BLOQUESPROPAGACION_LANENA_10,],
                                fold: 'open',
                                title: 'PROPAGACOPN_LA-NENA'});
var group_FANTASY7_LANENA = new ol.layer.Group({
                                layers: [lyr_BLOQUESF7_LANENA_9,],
                                fold: 'open',
                                title: 'FANTASY-7_LA NENA'});
var group_LANENA_LANENA = new ol.layer.Group({
                                layers: [lyr_BLOQUESFLN_LANENA_8,],
                                fold: 'open',
                                title: 'LA-NENA_LA-NENA'});
var group_LANENA1_LANENA = new ol.layer.Group({
                                layers: [lyr_BLOQUESA_LANENA_5,lyr_BLOQUESB_LANENA_6,lyr_BLOQUESLN1_LANENA_7,],
                                fold: 'open',
                                title: 'LA-NENA-1_LA-NENA'});
var group_INVERSION_LANENA = new ol.layer.Group({
                                layers: [lyr_BLOQUESFU_LANENA_3,lyr_BLOQUESINVCONST_LANENA_4,],
                                fold: 'open',
                                title: 'INVERSION_LA-NENA'});
var group_POSCOSECHA_LANENA = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'POSCOSECHA_LA-NENA'});

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_RECHIDRICO_LANENA_2.setVisible(true);lyr_BLOQUESFU_LANENA_3.setVisible(true);lyr_BLOQUESINVCONST_LANENA_4.setVisible(true);lyr_BLOQUESA_LANENA_5.setVisible(true);lyr_BLOQUESB_LANENA_6.setVisible(true);lyr_BLOQUESLN1_LANENA_7.setVisible(true);lyr_BLOQUESFLN_LANENA_8.setVisible(true);lyr_BLOQUESF7_LANENA_9.setVisible(true);lyr_BLOQUESPROPAGACION_LANENA_10.setVisible(true);lyr_FANTASYF5_LANENA_11.setVisible(true);lyr_CABLEVIA_LANENA_12.setVisible(true);lyr_MTL_LANENA_13.setVisible(true);lyr_MT_LANENA_14.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatellite_1,lyr_RECHIDRICO_LANENA_2,group_INVERSION_LANENA,group_LANENA1_LANENA,group_LANENA_LANENA,group_FANTASY7_LANENA,group_PROPAGACOPN_LANENA,group_FANTASYF5_LANENA,lyr_CABLEVIA_LANENA_12,lyr_MTL_LANENA_13,lyr_MT_LANENA_14];
lyr_RECHIDRICO_LANENA_2.set('fieldAliases', {'id': 'id', 'AREA': 'AREA', });
lyr_BLOQUESFU_LANENA_3.set('fieldAliases', {'id': 'id', 'NAVES': 'NAVES', 'AREA': 'AREA', 'etiqueta': 'etiqueta', 'etiquet': 'etiquet', });
lyr_BLOQUESINVCONST_LANENA_4.set('fieldAliases', {'id': 'id', 'NAVES': 'NAVES', 'AREA': 'AREA', 'etiqueta': 'etiqueta', });
lyr_BLOQUESA_LANENA_5.set('fieldAliases', {'id': 'id', 'NAVES': 'NAVES', 'AREA': 'AREA', 'etiqueta': 'etiqueta', });
lyr_BLOQUESB_LANENA_6.set('fieldAliases', {'id': 'id', 'NAVES': 'NAVES', 'titulo': 'titulo', 'AREA': 'AREA', 'etiqueta_w': 'etiqueta_w', 'etiqueta': 'etiqueta', });
lyr_BLOQUESLN1_LANENA_7.set('fieldAliases', {'id': 'id', 'NAVES': 'NAVES', 'AREA': 'AREA', 'etiqueta': 'etiqueta', });
lyr_BLOQUESFLN_LANENA_8.set('fieldAliases', {'id': 'id', 'NAVES': 'NAVES', 'AREA': 'AREA', 'etiqueta': 'etiqueta', });
lyr_BLOQUESF7_LANENA_9.set('fieldAliases', {'id': 'id', 'NAVES': 'NAVES', 'AREA': 'AREA', 'etiqueta': 'etiqueta', });
lyr_BLOQUESPROPAGACION_LANENA_10.set('fieldAliases', {'id': 'id', 'NAVES': 'NAVES', 'AREA': 'AREA', 'CC': 'CC', 'etiqueta': 'etiqueta', });
lyr_FANTASYF5_LANENA_11.set('fieldAliases', {'id': 'id', 'NAVES': 'NAVES', 'CC': 'CC', 'AREA': 'AREA', 'etiqueta': 'etiqueta', });
lyr_CABLEVIA_LANENA_12.set('fieldAliases', {'id': 'id', });
lyr_MTL_LANENA_13.set('fieldAliases', {'id': 'id', });
lyr_MT_LANENA_14.set('fieldAliases', {'id': 'id', 'TIPO': 'TIPO', 'FOTO_P': 'FOTO_P', 'FOTO_T': 'FOTO_T', 'CAPACIDAD': 'CAPACIDAD', 'etiqueta': 'etiqueta', });
lyr_RECHIDRICO_LANENA_2.set('fieldImages', {'id': 'TextEdit', 'AREA': 'TextEdit', });
lyr_BLOQUESFU_LANENA_3.set('fieldImages', {'id': 'TextEdit', 'NAVES': 'TextEdit', 'AREA': 'TextEdit', 'etiqueta': 'TextEdit', 'etiquet': 'TextEdit', });
lyr_BLOQUESINVCONST_LANENA_4.set('fieldImages', {'id': 'TextEdit', 'NAVES': 'TextEdit', 'AREA': 'TextEdit', 'etiqueta': 'TextEdit', });
lyr_BLOQUESA_LANENA_5.set('fieldImages', {'id': 'TextEdit', 'NAVES': 'TextEdit', 'AREA': 'TextEdit', 'etiqueta': 'TextEdit', });
lyr_BLOQUESB_LANENA_6.set('fieldImages', {'id': 'TextEdit', 'NAVES': 'TextEdit', 'titulo': 'TextEdit', 'AREA': 'TextEdit', 'etiqueta_w': 'TextEdit', 'etiqueta': 'TextEdit', });
lyr_BLOQUESLN1_LANENA_7.set('fieldImages', {'id': 'TextEdit', 'NAVES': 'TextEdit', 'AREA': 'TextEdit', 'etiqueta': 'TextEdit', });
lyr_BLOQUESFLN_LANENA_8.set('fieldImages', {'id': 'TextEdit', 'NAVES': 'TextEdit', 'AREA': 'TextEdit', 'etiqueta': 'TextEdit', });
lyr_BLOQUESF7_LANENA_9.set('fieldImages', {'id': 'TextEdit', 'NAVES': 'TextEdit', 'AREA': 'TextEdit', 'etiqueta': 'TextEdit', });
lyr_BLOQUESPROPAGACION_LANENA_10.set('fieldImages', {'id': 'TextEdit', 'NAVES': 'TextEdit', 'AREA': 'TextEdit', 'CC': 'TextEdit', 'etiqueta': 'TextEdit', });
lyr_FANTASYF5_LANENA_11.set('fieldImages', {'id': 'TextEdit', 'NAVES': 'TextEdit', 'CC': 'TextEdit', 'AREA': 'TextEdit', 'etiqueta': 'TextEdit', });
lyr_CABLEVIA_LANENA_12.set('fieldImages', {'id': 'TextEdit', });
lyr_MTL_LANENA_13.set('fieldImages', {'id': 'TextEdit', });
lyr_MT_LANENA_14.set('fieldImages', {'id': 'TextEdit', 'TIPO': 'TextEdit', 'FOTO_P': 'ExternalResource', 'FOTO_T': 'ExternalResource', 'CAPACIDAD': 'Range', 'etiqueta': 'TextEdit', });
lyr_RECHIDRICO_LANENA_2.set('fieldLabels', {'id': 'inline label - always visible', 'AREA': 'inline label - always visible', });
lyr_BLOQUESFU_LANENA_3.set('fieldLabels', {'id': 'inline label - always visible', 'NAVES': 'inline label - always visible', 'AREA': 'inline label - always visible', 'etiqueta': 'hidden field', 'etiquet': 'hidden field', });
lyr_BLOQUESINVCONST_LANENA_4.set('fieldLabels', {'id': 'inline label - always visible', 'NAVES': 'inline label - always visible', 'AREA': 'inline label - always visible', 'etiqueta': 'hidden field', });
lyr_BLOQUESA_LANENA_5.set('fieldLabels', {'id': 'inline label - always visible', 'NAVES': 'inline label - always visible', 'AREA': 'inline label - always visible', 'etiqueta': 'hidden field', });
lyr_BLOQUESB_LANENA_6.set('fieldLabels', {'id': 'inline label - always visible', 'NAVES': 'inline label - always visible', 'titulo': 'hidden field', 'AREA': 'inline label - always visible', 'etiqueta_w': 'hidden field', 'etiqueta': 'hidden field', });
lyr_BLOQUESLN1_LANENA_7.set('fieldLabels', {'id': 'inline label - always visible', 'NAVES': 'inline label - always visible', 'AREA': 'inline label - always visible', 'etiqueta': 'hidden field', });
lyr_BLOQUESFLN_LANENA_8.set('fieldLabels', {'id': 'inline label - always visible', 'NAVES': 'inline label - always visible', 'AREA': 'inline label - always visible', 'etiqueta': 'hidden field', });
lyr_BLOQUESF7_LANENA_9.set('fieldLabels', {'id': 'inline label - always visible', 'NAVES': 'inline label - always visible', 'AREA': 'inline label - always visible', 'etiqueta': 'hidden field', });
lyr_BLOQUESPROPAGACION_LANENA_10.set('fieldLabels', {'id': 'inline label - always visible', 'NAVES': 'inline label - always visible', 'AREA': 'inline label - always visible', 'CC': 'inline label - always visible', 'etiqueta': 'hidden field', });
lyr_FANTASYF5_LANENA_11.set('fieldLabels', {'id': 'header label - always visible', 'NAVES': 'inline label - always visible', 'CC': 'inline label - always visible', 'AREA': 'inline label - always visible', 'etiqueta': 'hidden field', });
lyr_CABLEVIA_LANENA_12.set('fieldLabels', {'id': 'no label', });
lyr_MTL_LANENA_13.set('fieldLabels', {'id': 'header label - always visible', });
lyr_MT_LANENA_14.set('fieldLabels', {'id': 'inline label - always visible', 'TIPO': 'inline label - always visible', 'FOTO_P': 'inline label - always visible', 'FOTO_T': 'inline label - always visible', 'CAPACIDAD': 'inline label - always visible', 'etiqueta': 'hidden field', });
lyr_MT_LANENA_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});