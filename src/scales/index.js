import view   from './view';
import intent from './intent';
import model  from './model';

// returning our DOM
const Home = (sources) => {
  const props$ = sources.Props;
  const actions = intent(sources);
  const state$ = model({...actions});

  return {
    DOM: view(state$),
    Props: state$,
  }
};

export default Home
