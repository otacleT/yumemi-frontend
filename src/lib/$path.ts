export const pagesPath = {
  $url: (url?: { hash?: string | undefined } | undefined) => ({ pathname: '/' as const, hash: url?.hash })
};

export type PagesPath = typeof pagesPath;

export const staticPath = {
  favicon_ico: '/favicon.ico',
  icon: {
    icon_arrowB_svg: '/icon/icon-arrowB.svg'
  }
} as const;

export type StaticPath = typeof staticPath;
