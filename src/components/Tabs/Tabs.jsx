import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import ExternalLinkArrow from '@icons/ExternalLinkArrow';

import './Tabs.scss';

const Tabs = ({ data }) => {
  const [selectedSection, setSelectedSection] = useState(1);

  const handleClick = useCallback((e) => {
    e.preventDefault();
    setSelectedSection(Number(e.target.value));
  }, []);

  return (
    <>
      <div className='tb-tabs-wrapper'>
        {data?.map((tab) => (
          <button
            key={tab?.title}
            className={classNames('tb-tab-button', {
              ['tb-tab-button-active']: tab?.id === selectedSection,
            })}
            value={tab?.id}
            onClick={handleClick}
          >
            {tab?.title}
          </button>
        ))}
      </div>
      <div className='tb-tabs-content' data-stack='space-xl-2xl'>
        {data?.find((x) => x.id === selectedSection)?.content}
        <Link to='#' className='l-up-link'>
          View code repository
          <ExternalLinkArrow />
        </Link>
      </div>
    </>
  );
};

export default Tabs;
