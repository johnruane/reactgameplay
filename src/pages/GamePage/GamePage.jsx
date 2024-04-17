/* eslint-disable react/prop-types */
import { useParams, useNavigate } from 'react-router-dom';

import Tabs from '@components/Tabs';
import pageData from '@data';
import './GamePage.scss';

const GamePage = () => {
  const { title } = useParams();
  const navigate = useNavigate();

  const data = pageData.find(({ id }) => id === title);

  /*
   * Redirect to 404 if dynamic param title does not match id in page data
   */

  if (!data) {
    navigate('/404');
  }

  const { id, year, complexity, controls, intro, tabs, game } = data || {};

  return (
    <>
      <div className='container background-black'>
        <div className='grid'>
          <div className='gp-intro-wrapper'>
            <h1 className='gp-heading'>
              {id}
              <span className='gp-year'>{year}</span>
            </h1>
            <div className='gp-details-wrapper'>
              <div>
                <p className='gp-details-heading'>Complexity</p>
                <p>{complexity}</p>
              </div>

              <div>
                <p className='gp-details-heading'>Controls</p>
                {controls}
              </div>

              <div>
                <p className='gp-details-heading'>Intro</p>
                {intro}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='hm-wavy-wrapper flip-vertical'>
        <span className='hm-wavy-pink'></span>
        <span className='hm-wavy-black'></span>
      </div>

      <div className='container background-yellow'>
        <div className='grid'>
          <div className='gp-tabs-wrapper'>
            <Tabs data={tabs} />
          </div>
        </div>
      </div>

      <div className='hm-wavy-wrapper'>
        <span className='hm-wavy-pink'></span>
        <span className='hm-wavy-black'></span>
      </div>

      {game}
    </>
  );
};

export default GamePage;
