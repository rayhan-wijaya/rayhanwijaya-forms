import '../styles/globals.css';
import type { AppType } from 'next/app';

import { trpcClient } from '../utils/trpcClient'; 

const App: AppType = ({ Component, pageProps }) => {
	return <Component {...pageProps} />;
};

export default trpcClient.withTRPC(App);
