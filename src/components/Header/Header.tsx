'use client';

import { usePathname } from 'next/navigation';

import clsx from 'clsx';

import { HeaderStyled } from './styled';

export default function Header() {
  const pathname = usePathname();

  return (
    <HeaderStyled className={clsx('Header', { mainHeader: pathname === '/' })}>
      <div className="inner">Header</div>
    </HeaderStyled>
  );
}
