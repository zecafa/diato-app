import view   from './view';
import intent from './intent';
import model  from './model';

// returning our DOM
const Home = (sources) => {
  const actions = intent(sources.DOM);
  const state$ = model({...actions});

  return {
    DOM: view(state$),
    Props: state$,
  }
};

export default Home
