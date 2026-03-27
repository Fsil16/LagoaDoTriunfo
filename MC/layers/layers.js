var wms_layers = [];

var format_PecuariaLT_0 = new ol.format.GeoJSON();
var features_PecuariaLT_0 = format_PecuariaLT_0.readFeatures(json_PecuariaLT_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PecuariaLT_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PecuariaLT_0.addFeatures(features_PecuariaLT_0);
var lyr_PecuariaLT_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PecuariaLT_0, 
                style: style_PecuariaLT_0,
                popuplayertitle: 'PecuariaLT',
                interactive: true,
                title: '<img src="styles/legend/PecuariaLT_0.png" /> PecuariaLT'
            });
var format_CARs_1 = new ol.format.GeoJSON();
var features_CARs_1 = format_CARs_1.readFeatures(json_CARs_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CARs_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CARs_1.addFeatures(features_CARs_1);
var lyr_CARs_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CARs_1, 
                style: style_CARs_1,
                popuplayertitle: 'CARs',
                interactive: true,
                title: '<img src="styles/legend/CARs_1.png" /> CARs'
            });
var format_Estradasprincipais_2 = new ol.format.GeoJSON();
var features_Estradasprincipais_2 = format_Estradasprincipais_2.readFeatures(json_Estradasprincipais_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estradasprincipais_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estradasprincipais_2.addFeatures(features_Estradasprincipais_2);
var lyr_Estradasprincipais_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estradasprincipais_2, 
                style: style_Estradasprincipais_2,
                popuplayertitle: 'Estradas principais',
                interactive: true,
                title: '<img src="styles/legend/Estradasprincipais_2.png" /> Estradas principais'
            });
var format_Cercas2026__3 = new ol.format.GeoJSON();
var features_Cercas2026__3 = format_Cercas2026__3.readFeatures(json_Cercas2026__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cercas2026__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cercas2026__3.addFeatures(features_Cercas2026__3);
var lyr_Cercas2026__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cercas2026__3, 
                style: style_Cercas2026__3,
                popuplayertitle: 'Cercas 2026_',
                interactive: true,
    title: 'Cercas 2026_<br />\
    <img src="styles/legend/Cercas2026__3_0.png" /> Nova<br />\
    <img src="styles/legend/Cercas2026__3_1.png" /> Desmanche e nova<br />\
    <img src="styles/legend/Cercas2026__3_2.png" /> Açeiro II (R$1.500)<br />\
    <img src="styles/legend/Cercas2026__3_3.png" /> Reforma<br />\
    <img src="styles/legend/Cercas2026__3_4.png" /> Desmanche<br />\
    <img src="styles/legend/Cercas2026__3_5.png" /> Remanga<br />\
    <img src="styles/legend/Cercas2026__3_6.png" /> <br />' });
var group_group1 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'group1'});

lyr_PecuariaLT_0.setVisible(true);lyr_CARs_1.setVisible(true);lyr_Estradasprincipais_2.setVisible(true);lyr_Cercas2026__3.setVisible(true);
var layersList = [lyr_PecuariaLT_0,lyr_CARs_1,lyr_Estradasprincipais_2,lyr_Cercas2026__3];
lyr_PecuariaLT_0.set('fieldAliases', {'fid': 'fid', 'KEY': 'KEY', 'COD_PASTO': 'COD_PASTO', 'COD_RETIRO': 'COD_RETIRO', 'PASTO': 'PASTO', 'AREA': 'AREA', 'PULVER': 'PULVER', 'la': 'la', });
lyr_CARs_1.set('fieldAliases', {'IMOVEL': 'IMOVEL', 'AREA': 'AREA', });
lyr_Estradasprincipais_2.set('fieldAliases', {'id': 'id', 'km': 'km', 'tipo de ac': 'tipo de ac', });
lyr_Cercas2026__3.set('fieldAliases', {'id': 'id', 'Extensao': 'Extensao', 'Operação': 'Operação', 'Retiro': 'Retiro', 'Vertices': 'Vertices', 'Prestador': 'Prestador', 'Data': 'Data', 'Obra': 'Obra', });
lyr_PecuariaLT_0.set('fieldImages', {'fid': 'TextEdit', 'KEY': 'TextEdit', 'COD_PASTO': 'TextEdit', 'COD_RETIRO': 'TextEdit', 'PASTO': 'TextEdit', 'AREA': 'TextEdit', 'PULVER': 'TextEdit', 'la': 'Range', });
lyr_CARs_1.set('fieldImages', {'IMOVEL': 'TextEdit', 'AREA': 'TextEdit', });
lyr_Estradasprincipais_2.set('fieldImages', {'id': 'TextEdit', 'km': 'TextEdit', 'tipo de ac': 'TextEdit', });
lyr_Cercas2026__3.set('fieldImages', {'id': 'TextEdit', 'Extensao': 'TextEdit', 'Operação': 'TextEdit', 'Retiro': 'TextEdit', 'Vertices': 'TextEdit', 'Prestador': 'TextEdit', 'Data': 'DateTime', 'Obra': 'TextEdit', });
lyr_PecuariaLT_0.set('fieldLabels', {'fid': 'no label', 'KEY': 'no label', 'COD_PASTO': 'no label', 'COD_RETIRO': 'no label', 'PASTO': 'no label', 'AREA': 'no label', 'PULVER': 'no label', 'la': 'no label', });
lyr_CARs_1.set('fieldLabels', {'IMOVEL': 'no label', 'AREA': 'no label', });
lyr_Estradasprincipais_2.set('fieldLabels', {'id': 'no label', 'km': 'no label', 'tipo de ac': 'no label', });
lyr_Cercas2026__3.set('fieldLabels', {'id': 'no label', 'Extensao': 'no label', 'Operação': 'no label', 'Retiro': 'no label', 'Vertices': 'no label', 'Prestador': 'no label', 'Data': 'no label', 'Obra': 'no label', });
lyr_Cercas2026__3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});