import '@tanstack/react-query';
import { AxiosError } from 'axios';

declare module '@tanstack/react-query' {
  interface Register {
    defaultError: AxiosError;
  }
}

declare global {
  interface Window {
    ReactNativeWebView: {
      postMessage(msg: string): void;
    };
    Kakao: KakaoNamespace;
  }
}

interface KakaoNamespace {
  init: (appKey: string) => void;
  cleanup: () => void;
  isInitialized: () => boolean;
  Share: KakaoShare;
}

interface KakaoShare {
  sendDefault: (options: KakaoShareOptions) => void;
}

interface KakaoShareOptions {
  objectType: 'feed';
  content: KakaoShareContent;
  buttons?: KakaoShareButton[];
}

interface KakaoShareContent {
  title: string;
  description: string;
  imageUrl: string;
  link: KakaoLink;
}

interface KakaoShareButton {
  title: string;
  link: KakaoLink;
}

interface KakaoLink {
  mobileWebUrl: string;
  webUrl: string;
}
