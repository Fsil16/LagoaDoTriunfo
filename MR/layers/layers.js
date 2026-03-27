var wms_layers = [];

var format_Pecuariapecuria_v181_0 = new ol.format.GeoJSON();
var features_Pecuariapecuria_v181_0 = format_Pecuariapecuria_v181_0.readFeatures(json_Pecuariapecuria_v181_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pecuariapecuria_v181_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pecuariapecuria_v181_0.addFeatures(features_Pecuariapecuria_v181_0);
var lyr_Pecuariapecuria_v181_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pecuariapecuria_v181_0, 
                style: style_Pecuariapecuria_v181_0,
                popuplayertitle: 'Pecuaria — pecuria_v181',
                interactive: true,
                title: '<img src="styles/legend/Pecuariapecuria_v181_0.png" /> Pecuaria — pecuria_v181'
            });
var format_Estradasprincipais_1 = new ol.format.GeoJSON();
var features_Estradasprincipais_1 = format_Estradasprincipais_1.readFeatures(json_Estradasprincipais_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estradasprincipais_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estradasprincipais_1.addFeatures(features_Estradasprincipais_1);
var lyr_Estradasprincipais_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estradasprincipais_1, 
                style: style_Estradasprincipais_1,
                popuplayertitle: 'Estradas principais',
                interactive: true,
                title: '<img src="styles/legend/Estradasprincipais_1.png" /> Estradas principais'
            });
var format_Corrento2026_2 = new ol.format.GeoJSON();
var features_Corrento2026_2 = format_Corrento2026_2.readFeatures(json_Corrento2026_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Corrento2026_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Corrento2026_2.addFeatures(features_Corrento2026_2);
var lyr_Corrento2026_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Corrento2026_2, 
                style: style_Corrento2026_2,
                popuplayertitle: 'Correntão 2026',
                interactive: true,
    title: 'Correntão 2026<br />\
    <img src="styles/legend/Corrento2026_2_0.png" /> 0<br />\
    <img src="styles/legend/Corrento2026_2_1.png" /> 1<br />\
    <img src="styles/legend/Corrento2026_2_2.png" /> <br />' });
var group_group1 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'group1'});

lyr_Pecuariapecuria_v181_0.setVisible(true);lyr_Estradasprincipais_1.setVisible(true);lyr_Corrento2026_2.setVisible(true);
var layersList = [lyr_Pecuariapecuria_v181_0,lyr_Estradasprincipais_1,lyr_Corrento2026_2];
lyr_Pecuariapecuria_v181_0.set('fieldAliases', {'fid': 'fid', 'KEY': 'KEY', 'COD_PASTO': 'COD_PASTO', 'COD_RETIRO': 'COD_RETIRO', 'PASTO': 'PASTO', 'AREA': 'AREA', 'PULVER': 'PULVER', 'la': 'la', });
lyr_Estradasprincipais_1.set('fieldAliases', {'id': 'id', 'km': 'km', 'tipo de ac': 'tipo de ac', });
lyr_Corrento2026_2.set('fieldAliases', {'fid_1': 'fid_1', 'KEY': 'KEY', 'COD_PASTO': 'COD_PASTO', 'COD_RETIRO': 'COD_RETIRO', 'PASTO': 'PASTO', 'AREA': 'AREA', 'AREA_UTIL': 'AREA_UTIL', 'SETOR': 'SETOR', 'PERIMETRO': 'PERIMETRO', 'PERIMETRO1': 'PERIMETRO1', 'Areax': 'Areax', 'Areaxx': 'Areaxx', 'Status': 'Status', });
lyr_Pecuariapecuria_v181_0.set('fieldImages', {'fid': 'TextEdit', 'KEY': 'TextEdit', 'COD_PASTO': 'TextEdit', 'COD_RETIRO': 'TextEdit', 'PASTO': 'TextEdit', 'AREA': 'TextEdit', 'PULVER': 'TextEdit', 'la': 'Range', });
lyr_Estradasprincipais_1.set('fieldImages', {'id': 'TextEdit', 'km': 'TextEdit', 'tipo de ac': 'TextEdit', });
lyr_Corrento2026_2.set('fieldImages', {'fid_1': 'TextEdit', 'KEY': 'TextEdit', 'COD_PASTO': 'TextEdit', 'COD_RETIRO': 'TextEdit', 'PASTO': 'TextEdit', 'AREA': 'TextEdit', 'AREA_UTIL': 'TextEdit', 'SETOR': 'Range', 'PERIMETRO': 'TextEdit', 'PERIMETRO1': 'TextEdit', 'Areax': 'TextEdit', 'Areaxx': 'TextEdit', 'Status': 'TextEdit', });
lyr_Pecuariapecuria_v181_0.set('fieldLabels', {'fid': 'no label', 'KEY': 'no label', 'COD_PASTO': 'no label', 'COD_RETIRO': 'no label', 'PASTO': 'no label', 'AREA': 'no label', 'PULVER': 'no label', 'la': 'no label', });
lyr_Estradasprincipais_1.set('fieldLabels', {'id': 'no label', 'km': 'no label', 'tipo de ac': 'no label', });
lyr_Corrento2026_2.set('fieldLabels', {'fid_1': 'no label', 'KEY': 'no label', 'COD_PASTO': 'no label', 'COD_RETIRO': 'no label', 'PASTO': 'no label', 'AREA': 'no label', 'AREA_UTIL': 'no label', 'SETOR': 'no label', 'PERIMETRO': 'no label', 'PERIMETRO1': 'no label', 'Areax': 'no label', 'Areaxx': 'no label', 'Status': 'no label', });
lyr_Corrento2026_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});