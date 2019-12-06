/* eslint-disable */
import React from 'react';
import {storiesOf} from '@storybook/react';
import MobileView from './MobileView';

storiesOf('MobileView', module).add('default', () => <MobileView
    tiempoRestante={{dias: 0, horas: '', minutos: '', segundos: ''}}/>);
