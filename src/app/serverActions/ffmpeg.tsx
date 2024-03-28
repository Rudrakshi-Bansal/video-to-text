'use server'

import {path} from '@ffmpeg-installer/ffmpeg';
// import * as ffmpeg  from 'fluent-ffmpeg';
import ffmpeg from 'fluent-ffmpeg'; 
const ffmpegPath = path;
// const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);


export default async function ffmpegconvert(file: string) {
    const inputFile = file
    const outputFile = './output.mp3';

    const converter = ffmpeg(inputFile);
    converter.output(outputFile);

    converter.on('end', function() {
    console.log('Conversion complete');
    });

    converter.on('error', function(err: any) {
    console.log('Error:', err);
    });

    converter.run();
}
