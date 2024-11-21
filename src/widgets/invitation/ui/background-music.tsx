import { useEffect } from 'react';

import { useAudio, useSizeMatch } from '@/shared/hooks';
import { TextButton } from '@/shared/ui';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import backgroundMusic from '@/shared/assets/audio/love-story.mp3';

export function BackgroundMusic() {
  const { audioRef, isPlaying, initAutoPlay, handleAudioToggle } = useAudio();
  const isSizeMatch = useSizeMatch(430);

  useEffect(() => {
    initAutoPlay();
  }, []);

  return (
    <>
      {/*{!isAudioAutoPlayInteraction && (*/}
      {/*  <Box*/}
      {/*    sx={{*/}
      {/*      position: 'fixed',*/}
      {/*      top: 0,*/}
      {/*      left: 0,*/}
      {/*      width: '100%',*/}
      {/*      height: '100%',*/}
      {/*      backgroundColor: 'transparent',*/}
      {/*      zIndex: 300,*/}
      {/*    }}*/}
      {/*    onClick={() => setIsAudioAutoPlayInteraction(true)}*/}
      {/*  />*/}
      {/*)}*/}
      <TextButton
        sx={{
          position: 'fixed',
          top: 0,
          right: isSizeMatch ? 0 : 25,
          zIndex: 200,
          backgroundColor: 'transparent',
          p: 2,
        }}
        onClick={handleAudioToggle}
        variant='soft'
        size='sm'
      >
        {isPlaying ? (
          <VolumeUpIcon style={{ color: '#000000', fontSize: '1.6rem' }} />
        ) : (
          <VolumeOffIcon style={{ color: '#000000', fontSize: '1.6rem' }} />
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
