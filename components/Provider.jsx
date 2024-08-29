"use client";

import { SessionProvider } from 'next-auth/react';

const ClientProvider = ({children, session}) => {
  return (
	<SessionProvider session={session}>
   {children} 
  </SessionProvider>
  )
}

export default ClientProvider;