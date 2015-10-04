var sndpeek = require('../');

sndpeek.startListening();

sndpeek.on('data', function(data) {
    var maxDiff = 4;
    var diff = data.rolloffHigh - data.rolloffLow;
    if (diff <= maxDiff && diff >= -maxDiff) {
        console.log('Whistle detected! - Rolloff:');
        console.log('High: ' + data.rolloffHigh + "Low: " + data.rolloffLow +
            " Diff: " + (diff));
    }
});