import classNames from 'classnames';
import { useCallback, useState } from 'react';

import LinkComponent from '@components/LinkComponent';

import ArrowUpRight from '@svg/global/arrow-up-right.svg?react';

import './Tabs.scss';

const Tabs = ({ data }) => {
  const [selectedSection, setSelectedSection] = useState(1);

  const handleClick = useCallback((e) => {
    e.preventDefault();
    setSelectedSection(Number(e.target.value));
  }, []);

  return (
    <>
      <div className="tb-tabs-wrapper">
        {data?.map((tab) => (
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
        {data?.find((x) => x.id === selectedSection)?.content}
        <LinkComponent
          label="View code in repository"
          to="https://github.com/johnruane/reactgameplay"
          newWindow={true}
          additionalClasses="l-up-link"
        >
          <ArrowUpRight />
        </LinkComponent>
      </div>
    </>
  );
};

export default Tabs;
