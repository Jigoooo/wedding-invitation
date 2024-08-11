export const RouterName = {
  INVITATION: '/',
  CALL_INFO: 'call-info',
} as const;

export type RouterNameKey = keyof typeof RouterName;
export type RouterNameBase = (typeof RouterName)[keyof typeof RouterName];

type Flatten<T> = T extends object ? { [K in keyof T]: Flatten<T[K]> }[keyof T] : T;
type SubRoutes<T> = T extends object
  ? { [K in keyof T]: T[K] extends object ? Flatten<T[K]> : never }[keyof T]
  : never;

export type RouterNameBaseFlattened = Flatten<typeof RouterName>;
export type SubRouterNameBase = SubRoutes<typeof RouterName>;

// type ExtractKeys<T, U> = T extends U ? T : never;
// export type CustomerRouterNameBase = ExtractKeys<
//     Flatten<typeof RouterName['CUSTOMER']>,
//     string
// >;
