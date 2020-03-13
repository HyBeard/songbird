import correctAnswerSoundSrc from '../assets/sounds/correctAnswer.mp3';
import wrongAnswerSoundSrc from '../assets/sounds/wrongAnswer.mp3';

const createAudio = (src) => {
  const audio = new Audio();

  audio.src = src;
  audio.forcePlay = () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
      audio.play();
    }
  };

  return audio;
};

const soundEffects = {
  correctAnswerSound: createAudio(correctAnswerSoundSrc),
  wrongAnswerSound: createAudio(wrongAnswerSoundSrc),
};

export default soundEffects;
