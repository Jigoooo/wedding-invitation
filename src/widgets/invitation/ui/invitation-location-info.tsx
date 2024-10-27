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
import { SxProps } from '@mui/joy/styles/types';

function ListItem({
  icon,
  text,
  pt,
  textSx,
}: {
  icon: string;
  text: string;
  pt?: number;
  textSx?: SxProps;
}) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 0.6, pt }}>
      <Typography sx={{ fontSize: '0.9rem', fontWeight: 700 }}>{icon}</Typography>
      <Typography
        sx={[
          { fontSize: '0.75rem', fontWeight: 900, pt: 0.2 },
          ...(Array.isArray(textSx) ? textSx : [textSx]),
        ]}
      >
        {text}
      </Typography>
    </Box>
  );
}

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
      <Stack sx={{ width: '90%', pt: 4, gap: 2.4 }}>
        <Divider />
        <Stack sx={{ width: '100%', gap: 1 }}>
          <Typography sx={{ fontSize: '0.9rem', fontWeight: 900, textAlign: 'left' }}>
            자가용
          </Typography>
          <Stack sx={{ width: '100%', gap: 0.6 }}>
            <ListItem icon={'➀'} text={'천안 IC 진출 후 평택/천안아산 방향으로 고가 진입'} />
            <ListItem
              icon={'➁'}
              text={'천안터널 통과 후 평택/성환 방면 고가 옆길전로 진입하여 곧바로 우회전'}
            />
            <ListItem
              icon={'➂'}
              text={
                '평택방향으로 직진 후 육교 지나서 300m 전방에 비렌티웨딩홀 입구 안내 보이면 우회전'
              }
            />
          </Stack>
          <Stack sx={{ width: '100%', gap: 0.6, pt: 3 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 0.6,
              }}
            >
              <Typography sx={{ fontSize: '0.9rem', fontWeight: 700 }}>※</Typography>
              <Typography sx={{ fontSize: '0.75rem', fontWeight: 900, lineHeight: 1.6, pt: 0.2 }}>
                주차
                <br />
                입구로 진입해서 루체오빌 쪽으로 이동하여 주차
              </Typography>
            </Box>
          </Stack>
        </Stack>
        <Divider />
        <Stack sx={{ width: '100%', gap: 1 }}>
          <Typography sx={{ fontSize: '0.9rem', fontWeight: 800, textAlign: 'left' }}>
            대중교통 (버스)
          </Typography>
          <Stack sx={{ width: '100%', gap: 0.6 }}>
            <ListItem icon={'•'} text={'천안역 (이태리안경) - 100번, 110번'} />
            <ListItem
              icon={'•'}
              text={
                '천안고속버스터미널 (맥도날드앞) - 112번, 140번, 141번, 143번, 144번, 145, 150번, 151번'
              }
            />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 0.6,
                pt: 3,
              }}
            >
              <Typography sx={{ fontSize: '0.9rem', fontWeight: 700 }}>※</Typography>
              <Typography sx={{ fontSize: '0.75rem', fontWeight: 900, pt: 0.2 }}>
                성환방면 100번대 버스 이용 후 공주대 공과대학에서 하차 후 도보 5분
              </Typography>
            </Box>
          </Stack>
        </Stack>
        <Divider />
        <Stack sx={{ width: '100%', gap: 1 }}>
          <Typography sx={{ fontSize: '0.9rem', fontWeight: 800, textAlign: 'left' }}>
            KTX, SRT
          </Typography>
          <Stack sx={{ width: '100%', gap: 0.6 }}>
            <ListItem icon={'•'} text={'천안아산역에서 택시 이용 (20분정도 소요 예상)'} />
          </Stack>
        </Stack>
        <Divider />
        <Stack sx={{ width: '100%', gap: 1 }}>
          <Typography sx={{ fontSize: '0.9rem', fontWeight: 800, textAlign: 'left' }}>
            셔틀버스
          </Typography>
          <Stack sx={{ width: '100%', gap: 0.6 }}>
            <ListItem
              icon={'•'}
              text={'천안종합터미널 - 신세계백화점 - 올리브영 & 스타벅스 건물 앞 횡단보도'}
            />
            <ListItem
              icon={'•'}
              text={'두정역 - 1번 출구에서 나와서 오른쪽으로 50m 지점 파란색 셔틀버스 승강장'}
            />
          </Stack>
          <Stack sx={{ width: '100%', gap: 0.6, pt: 3 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 0.6,
              }}
            >
              <Typography sx={{ fontSize: '0.9rem', fontWeight: 700 }}>※</Typography>
              <Typography sx={{ fontSize: '0.75rem', fontWeight: 900, lineHeight: 1.6, pt: 0.2 }}>
                예식시간 1시간 전부터 30분 간격으로 셔틀버스 이용 가능
                <br />
                시외버스터미널 - 두정역 - 비렌티
                <br />
                자세한 운영시간은 문의 예약실 (041-554-5500)
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
