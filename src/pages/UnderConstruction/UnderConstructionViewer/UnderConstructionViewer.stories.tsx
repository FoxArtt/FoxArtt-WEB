/* eslint-disable */
import React from 'react';
import {storiesOf} from '@storybook/react';
import UnderConstructionViewer from './UnderConstructionViewer';

storiesOf('UnderConstructionViewer', module).add('default', () => <UnderConstructionViewer
    tiempoRestante={{dias: 0, horas: '', minutos: '', segundos: ''}}/>);
