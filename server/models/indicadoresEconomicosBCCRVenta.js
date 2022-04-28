'use strict';

var axios = require('axios');
var querystring = require('querystring');
var DOMParser = require('xmldom').DOMParser;

module.exports.default = indicadoresEconomicosBCCRVenta;
module.exports = indicadoresEconomicosBCCRVenta;

function indicadoresEconomicosBCCRVenta(email, token, fechaInicio, fechaFinal) {
    try {
        var todayDate = new Date();
        var BCCRurl = 'https://gee.bccr.fi.cr/Indicadores/Suscripciones/WS/wsindicadoreseconomicos.asmx/ObtenerIndicadoresEconomicos';
        var payload = {
            FechaInicio: fechaInicio ? fechaInicio : todayDate.getDate() + "/" + (todayDate.getMonth() + 1) + "/" + todayDate.getFullYear(),
            FechaFinal: fechaFinal ? fechaFinal : todayDate.getDate() + "/" + (todayDate.getMonth() + 1) + "/" + todayDate.getFullYear(),
            Nombre: 'Esteban',
            SubNiveles: 'N',
            Indicador: 318,
            CorreoElectronico: "ematamoros1989@hotmail.com",
            Token: "RT39LRB93S",
        };

        var postVenta = axios.post(BCCRurl, querystring.stringify(payload));

        return axios.all([postVenta]).then(axios.spread(function (venta) {
            var ventaNode = new DOMParser().parseFromString(venta.data, 'text/xml'); 

            return {
                'venta': Math.pow(parseFloat(ventaNode.documentElement.getElementsByTagName('NUM_VALOR')[0].childNodes[0].nodeValue).toFixed(2), 1)
            };
        }));

    } catch (error) {
        throw new Error(error);
    }

};