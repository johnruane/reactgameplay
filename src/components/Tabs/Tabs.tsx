import { useCallback, useState } from 'react';

import { LinkType } from '../LinkComponent';
import classNames from 'classnames';

import { LinkComponent } from '@components';

import ArrowUpRight from '@svg/global/arrow-up-right.svg?react';

import styles from './style.module.css';

const Tabs = ({
  tabs,
  link,
  additionalTabsClasses,
  additionalTabsContentClasses,
}: {
  tabs: [{ id: number; title: string; content: React.ReactNode }];
  link: string;
  additionalTabsClasses?: string;
  additionalTabsContentClasses?: string;
}) => {
  const [selectedSection, setSelectedSection] = useState(1);

  const handleClick = useCallback((e) => {
    e.preventDefault();
    setSelectedSection(Number(e.target.value));
  }, []);

  return (
    <>
      <div
        className={classNames(styles['tb-tabs-wrapper'], additionalTabsClasses)}
      >
        {tabs?.map((tab) => (
          <button
            key={tab?.title}
            className={classNames('button', styles['tb-tab-button'], {
              [styles['tb-tab-button-active']]: tab?.id === selectedSection,
            })}
            value={tab?.id}
            onClick={handleClick}
          >
            {tab?.title}
          </button>
        ))}
      </div>
      <div
        className={classNames(
          styles['tb-tabs-content'],
          additionalTabsContentClasses,
        )}
        data-stack="space-xl-2xl"
      >
        {tabs?.find((x) => x.id === selectedSection)?.content}
        <LinkComponent
          label="View code in repository"
          to={link}
          type={LinkType.EXTERNAL}
          additionalClasses="l-up-link"
        >
          <ArrowUpRight />
        </LinkComponent>
      </div>
    </>
  );
};

export default Tabs;
