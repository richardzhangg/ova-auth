import SessionProvider from './SessionProvider';
import './globals.css'
import { Inter } from 'next/font/google';

// async function always returns a 'Promise' object. allows you to handle async operations in a way that resembles synch code
// 'await': halts the execution of the function until the promise is resolved or rejected.

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-gray-900">
      <body className="h-full">
      <SessionProvider>
        {children}
      </SessionProvider>
      </body>
    </html>
  )
}
