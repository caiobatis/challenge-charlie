import React, { FC, memo } from 'react';

import { Icon, Temperature } from 'atoms';
import { Styles } from './styles';
import { IToday } from './types';

const Today: FC<IToday> = ({ loading, humidity, pressure, temperature, weatherColor, wind }) => {
  return (
    <Styles.Container weatherColor={weatherColor}>
      <div className='icon'>
        <Icon name='sun-clouds' color='white' size={110} />
      </div>

      <div className='content'>
        <Styles.Title>Hoje</Styles.Title>

        {loading ? (
          <Icon name='loading' size={40} color='white' />
        ) : (
          <div className='values'>
            <div className='temperature'>
              <Styles.Element>
                <Temperature temp={temperature ?? 0} />

                <Styles.Label>atual</Styles.Label>
              </Styles.Element>
            </div>

            <div className='temperature'>
              <Styles.TextCenter>
                <Styles.Text fontSize='16px'>{wind} km/h NE</Styles.Text>
                <Styles.Text>Vento</Styles.Text>
              </Styles.TextCenter>

              <div className='pipe'></div>

              <Styles.TextCenter>
                <Styles.Text fontSize='16px'>{humidity}%</Styles.Text>
                <Styles.Text>Humidade</Styles.Text>
              </Styles.TextCenter>

              <div className='pipe'></div>

              <Styles.TextCenter>
                <Styles.Text fontSize='16px'>{pressure}hPa</Styles.Text>
                <Styles.Text>Pressão</Styles.Text>
              </Styles.TextCenter>
            </div>
          </div>
        )}
      </div>
    </Styles.Container>
  );
};

export default memo(Today);
