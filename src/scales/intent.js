const homeIntent = domSource => ({
    changeNote$: domSource.select('#note-select').events('change').map(ev => ev.target.value),
    changeScale$: domSource.select('#scale-select').events('change').map(ev => ev.target.value),
    changeDiagram$: domSource.select('#diagram-select').events('change').map(ev => ev.target.value)
  });
export default homeIntent
