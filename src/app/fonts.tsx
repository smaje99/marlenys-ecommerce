import localFont from 'next/font/local';

export const titleFont = localFont({
    src: '../assets/fonts/DellaRespira-Regular.woff2',
    display: 'fallback',
    variable: '--title-font'
});

export const bodyFont = localFont({
    src: '../assets/fonts/OpenSans-Regular.woff2',
    display: 'fallback',
    variable: '--body-font'
});