// session provider so the app can access the authenticated user
'use client';
import {SessionProvider as Provider} from 'next-auth/react';
// Props = {
//     children: React.ReactNode,
// }
export default function SessionProvider({children}){
    return (
        <Provider>
            {children}
        </Provider>
    )
}
