'use client';

import { useState } from 'react';

import clsx from 'clsx';

import Bottomsheet from '@/components/Bottomsheet/Bottomsheet';
import { DraggableEventStyled } from '@/styles/pageStyled/DraggableEventStyled';

export default function DraggableEventPage() {
  const [openModal, setOpenMoal] = useState(false);

  return (
    <DraggableEventStyled className={clsx('DraggablePage')}>
      <div>Bottomsheet</div>
      <Bottomsheet openModal={openModal} setOpenMoal={v => setOpenMoal(v)}>
        <ul>
          <li>Share</li>
          <li>Get link</li>
          <li>Edit name</li>
          <li>Delete collection</li>
          <li>Move</li>
          <li>Star</li>
          <li>Rename</li>
          <li>Remove</li>
        </ul>
      </Bottomsheet>

      <div onClick={() => setOpenMoal(true)}>
        <button>Bottomsheet 버튼</button>
      </div>
    </DraggableEventStyled>
  );
}
