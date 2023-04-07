import { Navigator } from '@/components/Navigator';

import 'normalize.css';
import '@/styles/index.scss';
import '@/styles/organisms/layout.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es">
            <body className='layout'>
                {children}
                <Navigator />
            </body>
        </html>
    )
}
