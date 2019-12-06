/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import BrowserView from './BrowserView';

storiesOf('BrowserView', module).add('default', () => <BrowserView tiempoRestante={{dias: 0, horas: '', minutos: '', segundos: ''}}/>);
