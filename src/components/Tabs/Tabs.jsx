import { useState, useCallback } from 'react';
import './Tabs.scss';
import classNames from 'classnames';

const Tabs = ({ data }) => {
  const [selectedSection, setSelectedSection] = useState(1);

  const handleClick = useCallback((e) => {
    e.preventDefault();
    setSelectedSection(Number(e.target.value));
  }, []);

  return (
    <div className='tb-wrapper'>
      <div className='tb-tabs-wrapper'>
        {data.map((tab) => (
          <button
            key={tab.title}
            className={classNames('tb-tab-button', {
              ['tb-tab-button-active']: tab.id === selectedSection,
            })}
            value={tab.id}
            onClick={handleClick}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className='tb-tabs-content-wrapper'>
        {data.find((x) => x.id === selectedSection).content}
      </div>
    </div>
  );
};

export default Tabs;
