import Link from 'next/link';

import clsx from 'clsx';

import { NotFoundPageStyled } from '@/styles/pageStyled/NotFoundPageStyled';

export default function NotFoundPage() {
  return (
    <NotFoundPageStyled className={clsx('notFound')}>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </NotFoundPageStyled>
  );
}
