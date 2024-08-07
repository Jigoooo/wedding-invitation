import { endOfYear, format, subYears } from 'date-fns';

export const currentYear = new Date().getFullYear();

export function deepCopy<T>(obj: T): T {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  let copy;

  if (Array.isArray(obj)) {
    copy = [];

    for (let i = 0; i < obj.length; i++) {
      copy[i] = deepCopy(obj[i]);
    }
  } else {
    copy = {};

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        // @ts-expect-error
        copy[key] = deepCopy(obj[key]);
      }
    }
  }

  return copy as T;
}

export function sleep(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export function timeoutAction(timeoutCallback: any, time: number = 800) {
  setTimeout(() => {
    timeoutCallback?.();
  }, time);
}

export function isNullOrUndefined(value: any) {
  return value === null || value === undefined;
}

export function convertToRGBA(hexColor: string, alpha: number) {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function getYears(prevYearCount: number = 100) {
  const years = [];

  for (let i = currentYear; i >= currentYear - prevYearCount; i--) {
    const formattedYear = format(endOfYear(subYears(new Date(), currentYear - i)), 'yyyy');
    years.push(formattedYear);
  }

  return years;
}

export function logOnDev(message: string) {
  if (import.meta.env.DEV) {
    console.log(message);
  }
}

export function setScreenSize() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

export function transformArrayToDictByKey<T, K extends keyof T>(array: T[], key: K): { [key: string]: T } {
  return array.reduce((acc: { [key: string]: T }, cur: T) => {
    const keyValue = String(cur[key]);

    acc[keyValue] = cur;

    return acc;
  }, {});
}

export function generateRandomNumber(a: number) {
  return Math.floor(Math.random() * a);
}

export function detectDeviceTypeAndOS() {
  const ua = navigator.userAgent;

  const isAndroid = () => /Android/i.test(ua);
  const isIOS = () => /iPhone|iPad|iPod/i.test(ua);

  const isTablet = /iPad|Tablet|PlayBook/i.test(ua) || (isAndroid() && !/(Mobile)/i.test(ua));
  const isMobile =
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/i.test(
      ua,
    ) && !isTablet;
  const isDesktop = !isTablet && !isMobile;

  return { isDesktop, isAndroid: isAndroid(), isIOS: isIOS(), isMobile, isTablet };
}

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const scrollToTopNoneSmooth = () => {
  window.scrollTo({
    top: 0,
  });
};
