function treaerDatos() {
  let urlHojaOrigen = "https://docs.google.com/spreadsheets/d/1FomEuvtuumf17KlfXEgmOBiDVPI8Hn15SlF0jqpHLOQ/edit#gid=0";
  let nombreHojaOrigen = 'DatosOrigen';
  let nombreHojaDestino = 'datosDestinoHoja1';
  let idLibroDestino = '1JyKGKH1Xm4tUG3fjIWEFcn2-UjJ7C6_xAJIM1M6jNvE';
  let documentoOrigen = SpreadsheetApp.openByUrl(urlHojaOrigen);
  let hojaOrigen = documentoOrigen.getSheetByName(nombreHojaOrigen);

  let datosOrigen = hojaOrigen.getDataRange().getValues();

  let datosFiltrados = datosOrigen.filter(function(fila) {
    return fila[5] == "Lider A";
  });

  Logger.log(datosFiltrados);

  let libroDestino = SpreadsheetApp.openById(idLibroDestino);
  let hojaDestino = libroDestino.getSheetByName(nombreHojaDestino);

  hojaDestino.getRange('A2:H').clearContent();

  hojaDestino.getRange(2,1,datosFiltrados.length, datosFiltrados[0].length).setValues(datosFiltrados);

  console.log('Ejecucion finalizada');
}
