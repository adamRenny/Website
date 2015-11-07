import 'babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import October2015Game from '../../shared/view/October2015Game';
import GameSystem from './game/october2015/System';

// TODO: Add a document.ready
ReactDOM.render(
    <October2015Game game={ new GameSystem() } />,
    document.getElementById('game-102015')
);