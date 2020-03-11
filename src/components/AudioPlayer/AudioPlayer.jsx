import React from 'react';

const AudioPlayer = ({ src }) => {
  return <audio controls src={src}></audio>;
};

export default AudioPlayer;
