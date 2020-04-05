import React from 'react';

const AudioPlayer = ({ src }) => {
  return <audio className="w-100" controls src={src}></audio>;
};

export default AudioPlayer;
