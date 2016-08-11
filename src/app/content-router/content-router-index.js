import switchPath from 'switch-path';
import Rx         from 'rx';
import isolate    from '@cycle/isolate';
import Home       from 'scales/index';
import Page1      from 'page1/index';

function ContentRouter(sources) {
  const sinks$ = sources.History.map(({pathname}) => {

    // use switchpath to marry up our current url with component
    const pathAndValue = switchPath(pathname, {
      '/': Home,
      '/page1': Page1
    });

    // the result from the switchpath
    const component = pathAndValue.value;

    // isolate the component will help if using templates
    //const Component = isolate(component);
    const Component$ = component(sources);

    // check if the page/component has a Props value and if so pass it on
    const Props$ = Component$.Props ? sources.Props = Component$.Props : sources.Props;

    return {
      Comp: Component$,
      Props: Props$.share() // return our Props$ to current page/component
    };
  }).shareReplay(1); // make sure sinks$ are hot

  return {
    DOM: sinks$.flatMapLatest(s => s.Comp.DOM),
    History: sinks$.flatMapLatest(s => s.Comp.link),
    Props: sinks$.flatMapLatest(s => s.Props),
  };
}

export default ContentRouter;
