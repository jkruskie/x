import type { Apps, AppType } from '../resources/apps';
import styles from '../styles/Icons.module.scss';
import { useContext, useRef, useState } from 'react';
import { AppsContext } from '../resources/AppsProvider';
import Icon from './Icon';

// selected state/class here with style, selected, hover, selected + hover

export default function Icons() {
  const { apps = {} } = useContext(AppsContext),
    [selectedIcon, setSelectedIcon] = useState(''),
    iconsRef = useRef(),
    clearSelectedIcon = ({ target }) => target.isSameNode(iconsRef.current) && setSelectedIcon('');

    // TODO: Could I get cool interactions if I animated the Icons group?
  return (
    <div className={ styles.icons } onClick={ clearSelectedIcon } ref={ iconsRef }>
      { Object.entries(apps as Apps)
        .filter(([_id, app]) => app.component)
        .map(([id, app]) =>
          <Icon key={ app.id }
            icon={ app.icon }
            id={ id }
            name={ app.name }
            selectedIconState={ [selectedIcon, setSelectedIcon] }
          />) }
    </div>
  );
};

// import type { FC } from 'react';
// import styles from '../styles/Desktop.module.scss';

// export const Desktop: FC = ({ children }) => {
//   return (
//     <main className={ styles.desktop }>
//       { children }
//     </main>
//   );
// };
