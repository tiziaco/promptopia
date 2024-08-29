import '@styles/global.css';

import Nav from '@components/Nav';
import ClientProvider from '@components/Provider';

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export const metadata = {
	title: "Promptopia",
	description: "Discover and shares AI prompts"
}

const RootLayout = ({ children }) => (
	<html lang='en'>
	  <body>
		 <ClientProvider>
			<div className='main'>
			  <div className='gradient' />
			</div>
 
			<main className='app'>
			  <Nav />
			  {children}
			</main>
		 </ClientProvider>
	  </body>
	</html>
 );


// async function RootLayout(children) {
// 	const session = await getServerSession(authOptions)
//   return (
// 	<html lang='en'>
// 	<body>
// 	  <Provider>
// 		 <div className='main'>
// 			<div className='gradient' />
// 		 </div>

// 		 <main className='app'>
// 			<Nav />
// 			{children}
// 		 </main>
// 	  </Provider>
// 	</body>
//  </html>
//   )
// }

export default RootLayout