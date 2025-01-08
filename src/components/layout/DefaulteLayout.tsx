import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Fotter from './Fotter';

const DefaultLayout = ({
    children,
    title,
}: {
    children: React.ReactNode;
    title?: string; 
}) => {
    return (
        <div className=''>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍕</text></svg>" />
				<title className=''>{title || "Fact-Pizza"}</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet" />
			</Head>
            <div className='h-screen grid grid-rows-[auto_1fr_auto] '>
                <Header/>
				<main className="overflow-y-scroll h-">
					{children}
				</main>
                <Fotter/>
			</div>
        </div>
    );

};export default DefaultLayout;