import { useEffect } from 'react';
import { getWeddingImageSrc } from '@/entities/invitation';
const Kakao = window.Kakao;

export function useShareKakao({ targetUrl }: { targetUrl: string }) {
  useEffect(() => {
    Kakao.cleanup();
    Kakao.init(import.meta.env.VITE_KAKAO_APP_KEY);
  }, []);

  return () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `김지우 ♥ 김지영 결혼합니다.`,
        description: '12월 14일 (토) 오후 1시\n천안 비렌티 신관 3F, 루체오홀',
        imageUrl: getWeddingImageSrc('header-image-origin.jpeg'),
        link: {
          mobileWebUrl: targetUrl,
          webUrl: targetUrl,
        },
      },
      buttons: [
        {
          title: '모바일청첩장',
          link: {
            mobileWebUrl: targetUrl,
            webUrl: targetUrl,
          },
        },
      ],
    });
  };
}
