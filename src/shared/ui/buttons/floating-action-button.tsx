import '@/shared/assets/css/fab.sass';

import { MouseEventHandler, useEffect, useState } from 'react';

export function FloatingActionButton() {
  const [showInnerFab, setShowInnerFab] = useState(false);
  const toggleInnerFab: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    setShowInnerFab((prev) => !prev);
  };

  const handleDocumentClick = () => {
    if (showInnerFab) {
      setShowInnerFab(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [showInnerFab]);

  return (
    <div>
      <div className={`inner-fabs ${showInnerFab ? 'show' : ''}`}>
        <div id='fab4' className='fab round' data-tooltip='Create'>
          <i className='material-icons'>create</i>
        </div>
        <div id='fab3' className='fab round' data-tooltip='Move to inbox'>
          <i className='material-icons'>move_to_inbox</i>
        </div>
        <div id='fab2' className='fab round' data-tooltip='Send'>
          <i className='material-icons'>send</i>
        </div>
      </div>
      <div id='fab1' className='fab round' onClick={toggleInnerFab}>
        <i id='fabIcon' className='material-icons'>
          add
        </i>
      </div>
    </div>
  );
}
