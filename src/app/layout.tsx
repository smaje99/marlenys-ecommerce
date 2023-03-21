import { titleFont, bodyFont } from '@/app/fonts';
import { Navigator } from '@/components/Navigator';

import 'normalize.css';
import '@/styles/index.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es" className={`${titleFont.variable} ${bodyFont.variable}`}>
            <body>
                {children}
                <Navigator />
            </body>
        </html>
    )
}
