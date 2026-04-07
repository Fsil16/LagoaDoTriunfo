var size = 0;
var placement = 'point';

function categories_Corrento2026_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                
                // --- NOVA LÓGICA DE INTEGRAÇÃO ---
                // Tentamos pegar o valor da planilha (usando Areax como ID). 
                // Se não existir na planilha, ele usa o 'value' padrão do QGIS.
                var areaChave = feature.get("Areax");
                var valorFinal = (typeof statusPlanilha !== 'undefined' && statusPlanilha[areaChave] !== undefined) 
                                 ? statusPlanilha[areaChave] 
                                 : value;
                
                var valueStr = (valorFinal !== null && valorFinal !== undefined) ? valorFinal.toString() : 'default';
                
                switch(valueStr) {
                    case '0': // STATUS 0: VERMELHO (Parado/Planejado)
                        return [ new ol.style.Style({
                            fill: new ol.style.Fill({color: 'rgba(217,75,43,1.0)'}),
                            text: createTextStyle(feature, resolution, labelText, labelFont,
                                                  labelFill, placement, bufferColor,
                                                  bufferWidth)
                        })];
                    case '1': // STATUS 1: VERDE (Concluído/Executado)
                        return [ new ol.style.Style({
                            fill: new ol.style.Fill({color: 'rgba(20,206,54,1.0)'}),
                            text: createTextStyle(feature, resolution, labelText, labelFont,
                                                  labelFill, placement, bufferColor,
                                                  bufferWidth)
                        })];
                    default: // PADRÃO: LARANJA/CINZA
                        return [ new ol.style.Style({
                            fill: new ol.style.Fill({color: 'rgba(217,75,43,1.0)'}),
                            text: createTextStyle(feature, resolution, labelText, labelFont,
                                                  labelFill, placement, bufferColor,
                                                  bufferWidth)
                        })];
                }
};

var style_Corrento2026_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    // Buscamos o status inicial
    var value = feature.get("Status");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    
    if ("" !== null) {
        labelText = String("");
    }
    
    // Chamamos a função de categorias que agora é inteligente e olha o Sheets
    var style = categories_Corrento2026_2(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor, bufferWidth,
                            placement);

    return style;
};
