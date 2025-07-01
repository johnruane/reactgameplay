import { useCallback, useState } from 'react';

import { LinkType } from '../LinkComponent/LinkComponent.types';
import { Tabs as TabsType } from './Tabs.types';
import classNames from 'classnames';

import { LinkComponent } from '@components';

import ArrowUpRight from '@svg/global/arrow-up-right.svg?react';

import './style.css';

const Tabs = ({
  tabs,
  link,
}: {
  tabs: [{ id: number; title: string; content: React.ReactNode }];
  link: string;
}) => {
  const [selectedSection, setSelectedSection] = useState(1);

  const handleClick = useCallback((e) => {
    e.preventDefault();
    setSelectedSection(Number(e.target.value));
  }, []);

  return (
    <>
      <div className="tb-tabs-wrapper">
        {tabs?.map((tab) => (
          <button
            key={tab?.title}
            className={classNames('button tb-tab-button', {
              ['tb-tab-button-active']: tab?.id === selectedSection,
            })}
            value={tab?.id}
            onClick={handleClick}
          >
            {tab?.title}
          </button>
        ))}
      </div>
      <div className="tb-tabs-content" data-stack="space-xl-2xl">
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
