import {run}                from '@cycle/core';
import {makeDOMDriver}      from '@cycle/dom';
import {makeHistoryDriver}  from '@cycle/history';
import {useQueries, createHistory} from 'history';
import Rx                   from 'rx';
import App                  from 'app'
import {rerunner, restartable} from 'cycle-restart';

// we are pulling in our css files here for webpack to compile
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'index.css';

// this is the Cycle run. first argument is our mainApp then an object:
// DOM is the ID or class we want the cycle to render onto our page
// History is using our makeHistoryDriver to deal with routing
const history = useQueries(createHistory)();
const drivers = {
  DOM: makeDOMDriver('#application'),
  History: makeHistoryDriver(history),
  Props: () => Rx.Observable.just(0)
};

const rerun = rerunner(run);
rerun(Main, drivers);

if (module && module.hot) {
  module.hot.accept('./main', () => {
    const main = require('./main').default;
    rerun(main, drivers);
  });
  module.hot.accept();
}
