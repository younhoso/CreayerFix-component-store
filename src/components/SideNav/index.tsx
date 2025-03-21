import Link from 'next/link';

import clsx from 'clsx';

import { TitleSiteMap } from '@/app/sitemap';

import { SideNavStyled } from './styled';

type SideNavProps = {
  category: () => TitleSiteMap[];
};

export default function SideNav({ category }: SideNavProps) {
  return (
    <SideNavStyled className={clsx('sideNav')}>
      <div className="inner">
        <Link href={'/'}></Link>
        <ul className="categoryInner">
          {category().map(v => {
            return (
              <li key={v.title}>
                <Link href={v.url}>{v.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </SideNavStyled>
  );
}
