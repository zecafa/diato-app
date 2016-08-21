import Rx   from 'rx'
import view from './view'

const Page1 = (sources) => {
  const props$ = sources.Props;
  const $view = view(props$);

  return {
    DOM: Rx.Observable.just($view),
    Props: props$,
  }
};

export default Page1
