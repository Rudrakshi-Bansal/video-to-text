'use client';

import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import ffmpegconvert from "../serverActions/ffmpeg";
// import {path} from '@ffmpeg-installer/ffmpeg';
// import * as ffmpeg  from 'fluent-ffmpeg'
// const ffmpegPath = path;
// const ffmpeg = require('fluent-ffmpeg');
// ffmpeg.setFfmpegPath(ffmpegPath);

const Transcribe = () => {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files != null) {
      setVideoSrc(URL.createObjectURL(e.target.files[0]));
    }
  };

  useEffect(() => {
    if (videoSrc) {
      ffmpegconvert(videoSrc), [videoSrc]}});

  return (
    <div>
      <input type="file" onChange={handleVideoChange} />
      {videoSrc && <ReactPlayer url={videoSrc} controls />}
    </div>
  );
};

export default Transcribe;

