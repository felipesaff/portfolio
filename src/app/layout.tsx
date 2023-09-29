import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
	subsets: ['latin'],
	weight: '300'
});

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<html className={roboto.className} lang="en">
			<body suppressHydrationWarning>{children}</body>
		</html>
	);
}
