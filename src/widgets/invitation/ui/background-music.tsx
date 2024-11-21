import { useEffect, useState } from 'react';

import { useAudio } from '@/shared/hooks';
import { TextButton } from '@/shared/ui';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import backgroundMusic from '@/shared/assets/audio/love-story.mp3';
import { timeoutAction } from '@/shared/lib';
import { Box } from '@mui/joy';

export function BackgroundMusic() {
  const { audioRef, isPlaying, initAutoPlay, handleAudioToggle } = useAudio();

  const [isAudioAutoPlayInteraction, setIsAudioAutoPlayInteraction] = useState(false);

  useEffect(() => {
    if (!isAudioAutoPlayInteraction) {
      timeoutAction(() => {
        document.body.style.overflow = 'hidden';
      }, 100);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isAudioAutoPlayInteraction, document.body]);

  useEffect(() => {
    initAutoPlay();
  }, []);

  useEffect(() => {
    if (isAudioAutoPlayInteraction) {
      initAutoPlay();
    }
  }, [isAudioAutoPlayInteraction]);

  return (
    <>
      {!isAudioAutoPlayInteraction && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent',
            zIndex: 300,
          }}
          onClick={() => setIsAudioAutoPlayInteraction(true)}
        />
      )}
      <TextButton
        sx={{
          position: 'fixed',
          top: 0,
          right: 0,
          zIndex: 200,
          backgroundColor: 'transparent',
          p: 2,
        }}
        onClick={handleAudioToggle}
        variant='soft'
        size='sm'
      >
        {isPlaying ? (
          <VolumeUpIcon style={{ color: '#000000' }} />
        ) : (
          <VolumeOffIcon style={{ color: '#000000' }} />
        )}
      </TextButton>

      <audio
        style={{ position: 'fixed', zIndex: -1, top: 0, left: 0 }}
        ref={audioRef}
        loop
        controls={true}
      >
        <source src={backgroundMusic} />
        Your browser does not support the audio element.
      </audio>
    </>
  );
}
