import { useEffect, useState } from 'react';
import { AnimatedSection, getWeddingImageSrc, SectionHeader } from '@/entities/invitation';
import { Box, Divider, Stack, Typography } from '@mui/joy';
import { Container as MapDiv, Marker, NaverMap, useNavermaps } from 'react-naver-maps';
import { SoftButton } from '@/shared/ui';

import ExploreIcon from '@mui/icons-material/Explore';
import NaverMapIcon from '@/shared/assets/images/naver-map-icon.png';
import TMapIcon from '@/shared/assets/images/t-map-icon.png';
import KakaoMapIcon from '@/shared/assets/images/kakao-map-icon.png';
import { openKakaoMap, openNaverMap, openTMap } from '@/shared/lib';

export function InvitationLocationInfo({
  weddingAddress,
  weddingLocationName,
  weddingPlaceName,
}: {
  weddingAddress: string;
  weddingLocationName: string;
  weddingPlaceName: string;
}) {
  const naverMaps = useNavermaps();

  const [center, setCenter] = useState(new naverMaps.LatLng(37.5666805, 126.9784147));
  const [map, setMap] = useState(null);
  const [draggable] = useState(false);

  useEffect(() => {
    naverMaps.Service.geocode(
      {
        address: weddingAddress,
      },
      (status: any, response: any) => {
        if (status !== naverMaps.Service.Status.OK) {
          return alert('Something wrong!');
        }

        const result = response.result;
        const items = result.items;
        const weddingLatLng = new naverMaps.LatLng(items[0].point.y, items[0].point.x);

        if (map) {
          // @ts-ignore
          map.setCenter(weddingLatLng);
          setCenter(weddingLatLng);
          // @ts-ignore
          map.setZoom(16, true);
        }
      },
    );
  }, [map, naverMaps, weddingAddress]);

  return (
    <Stack component={'section'} sx={{ width: '100%', alignItems: 'center', gap: 3 }}>
      <AnimatedSection>
        <SectionHeader engTitle={'LOCATION'} korTitle={'오시는 길'} />
      </AnimatedSection>
      <AnimatedSection>
        <Stack sx={{ width: '100%', alignItems: 'center', gap: 1 }}>
          <Typography
            sx={{ color: '#3f3f3f', fontSize: '1.2rem', fontWeight: 800, letterSpacing: 1.2 }}
          >
            {weddingLocationName}
          </Typography>
          <Typography
            sx={{ color: '#666666', fontSize: '0.9rem', fontWeight: 600, letterSpacing: 1 }}
          >
            {weddingAddress}
          </Typography>
        </Stack>
      </AnimatedSection>
      <AnimatedSection>
        <Box component={MapDiv} sx={{ width: '100%', height: 350 }}>
          <NaverMap
            ref={setMap}
            defaultCenter={center}
            defaultZoom={16}
            zoomControl={true}
            zoomControlOptions={{
              position: naverMaps.Position.TOP_LEFT,
            }}
            draggable={draggable}
            pinchZoom={draggable}
            scrollWheel={draggable}
            keyboardShortcuts={draggable}
            disableDoubleTapZoom={!draggable}
            disableDoubleClickZoom={!draggable}
            disableTwoFingerTapZoom={!draggable}
            disableKineticPan={true}
            tileTransition={true}
            scaleControl={true}
            logoControl={true}
            mapDataControl={true}
            mapTypeControl={true}
          >
            <Marker position={center} clickable={true} title={weddingAddress} />
          </NaverMap>
        </Box>
      </AnimatedSection>
      <Stack sx={{ width: '100%', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
        <AnimatedSection>
          <Box
            sx={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}
          >
            <SoftButton
              onClick={() => window.open(getWeddingImageSrc('sketch-map.png'))}
              sx={{ width: '90%', height: 45, color: '#666666', border: '1px solid #dadada' }}
              buttonColor={'#ffffff'}
              startDecorator={<ExploreIcon />}
            >
              약도 보기
            </SoftButton>
          </Box>
        </AnimatedSection>
        <AnimatedSection>
          <Box
            sx={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: '90%',
                gap: 1,
              }}
            >
              <SoftButton
                onClick={() =>
                  openNaverMap({
                    latitude: center.lat(),
                    longitude: center.lng(),
                    placeName: weddingPlaceName,
                    webUrl: 'https://map.naver.com/p/entry/place/1150314863?c=15.00,0,0,0,dh',
                  })
                }
                sx={{
                  width: '33.3%',
                  fontSize: '0.75rem',
                  fontWeight: 900,
                  height: 40,
                  color: '#666666',
                  border: '1px solid #dadada',
                  px: 0,
                }}
                buttonColor={'#ffffff'}
                startDecorator={
                  <img style={{ width: 22, height: 22 }} src={NaverMapIcon} alt={'Naver Map'} />
                }
              >
                네이버지도
              </SoftButton>
              <SoftButton
                onClick={() =>
                  openTMap({
                    latitude: center.lat(),
                    longitude: center.lng(),
                    placeName: weddingPlaceName,
                  })
                }
                sx={{
                  width: '33.3%',
                  fontSize: '0.75rem',
                  fontWeight: 900,
                  height: 40,
                  color: '#666666',
                  border: '1px solid #dadada',
                  px: 0,
                }}
                buttonColor={'#ffffff'}
                startDecorator={
                  <img style={{ width: 22, height: 22 }} src={TMapIcon} alt={'T Map'} />
                }
              >
                티맵
              </SoftButton>
              <SoftButton
                onClick={() =>
                  openKakaoMap({
                    latitude: center.lat(),
                    longitude: center.lng(),
                    webUrl: 'https://place.map.kakao.com/m/245466707',
                  })
                }
                sx={{
                  width: '33.3%',
                  fontSize: '0.75rem',
                  fontWeight: 900,
                  height: 40,
                  color: '#666666',
                  border: '1px solid #dadada',
                  px: 0,
                }}
                buttonColor={'#ffffff'}
                startDecorator={
                  <img style={{ width: 20, height: 20 }} src={KakaoMapIcon} alt={'Kakao Map'} />
                }
              >
                카카오내비
              </SoftButton>
            </Box>
          </Box>
        </AnimatedSection>
      </Stack>
      <Stack sx={{ width: '90%', pt: 4, gap: 3.5 }}>
        <Divider />
        <Stack sx={{ width: '100%' }}>
          <Typography sx={{ fontSize: '0.9rem', fontWeight: 800, textAlign: 'left' }}>
            자가용
          </Typography>
        </Stack>
        <Divider />
        <Stack sx={{ width: '100%' }}>
          <Typography sx={{ fontSize: '0.9rem', fontWeight: 800, textAlign: 'left' }}>
            대중교통
          </Typography>
        </Stack>
        <Divider />
        <Stack sx={{ width: '100%' }}>
          <Typography sx={{ fontSize: '0.9rem', fontWeight: 800, textAlign: 'left' }}>
            셔틀버스
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
