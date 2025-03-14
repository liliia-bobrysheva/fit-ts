import FitParser from '../dist/fit-parser.js';
import fs from 'fs';

var file = process.argv[2];

fs.readFile(file, function (err, content) {
  var fitParser = new FitParser({
    force: true,
    speedUnit: 'km/h',
    lengthUnit: 'm',
    temperatureUnit: 'celsius',
    pressureUnit: 'bar',
    elapsedRecordField: true,
    mode: 'both',
  });

  fitParser.parse(content, function (error, data) {
    if (error) {
      console.log(error);
    } else {
      console.log(JSON.stringify(data));
      //console.log(data.records[0]);
    }
  });
});
