import Rx from 'rx';
import {buildScale, getHandDiagramByKey} from 'utils/data';

const homeModel = ({changeNote$, changeScale$, changeDiagram$}) => {
  const note$ = changeNote$.startWith('C');
  const scale$ = changeScale$.startWith('m');
  const diagram$ = changeDiagram$.startWith('semi-simetric');
  const selectScale$ = Rx.Observable.combineLatest(
      note$,
      scale$,
      (n, s) => buildScale(n, s)
    );
  const selectDiagram$ = diagram$.map(key => getHandDiagramByKey(key, 'right') );


  return Rx.Observable.combineLatest(
    selectScale$,
    selectDiagram$,

    (s1, s2) => ({
      scale: s1,
      diagram: s2
    })

  );
}

export default homeModel;
