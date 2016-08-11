const homeIntent = s => ({
    changeNote$: s.DOM.select('#note-select').events('change').map(ev => ev.target.value),
    changeScale$: s.DOM.select('#scale-select').events('change').map(ev => ev.target.value),
    changeDiagram$: s.DOM.select('#diagram-select').events('change').map(ev => ev.target.value)
  });
export default homeIntent
