import {h, div, h1, form, label, span, select, option, p} from '@cycle/dom';
import {reverse, indexOf} from 'ramda';
import {notesEN, scaleList, diagrams} from 'utils/data';

const getForm = () =>
  div('.panel.panel-default', [
    div('.panel-body', [
      form('.form-inline', [
        div('.form-group', [
          label('.sr-only', {
            'attributes': {
              'className': 'sr-only',
              'htmlFor': 'inputTone'
            }
          }, [`tone`]),
          `
          `,
          select('#note-select.form-control', notesEN.map( note =>
            option([note])
          ))
        ]),
        div('.form-group', [
          label('.sr-only', {
            'attributes': {
              'className': 'sr-only',
              'htmlFor': 'inputScale'
            }
          }, [`Scale`]),
          `
          `,
          select('#scale-select.form-control',
            scaleList.map( scale =>
              option({
                'attributes': {
                  'value': scale.key
                }
              }, [scale.name])
          ))
        ]),
        div('.form-group', [
          label('.sr-only', {
            'attributes': {
              'className': 'sr-only',
              'htmlFor': 'inputDiagram'
            }
          }, [`Diagram`]),
          `
          `,
          select('#diagram-select.form-control',
            diagrams.map(diagram => option([diagram.name])
          ))
        ])
      ])
    ])
  ]);

const getScale = (scale) =>
  div('.panel.panel-default', [
    div('.panel-heading', ['Escala']),
    div('.panel-body', [ ...scale ])
  ]);

const getButton = (note, scale) => {
  let btnClass = indexOf(note, scale) !== -1
   ? '.button'
   : '.button.disabled';
  return span(btnClass, [note]);
}


const getRow = (row, scale) =>
  div('.row', row.map(note => getButton(note, scale)))

const getDiagram = (diagram, scale, label) =>
  div('.panel.panel-default', [
    div('.panel-heading', [label]),
    div('.panel-body', [
      div('#open-keyboard', reverse(diagram).map(row => getRow(row, scale)))
    ])
  ]);

const view = (state$) =>
  state$.map(state =>
    div('.container', [
      div('.starter-template', [
        h1([`Diato utils APP`]),
        getForm(),
        getDiagram(state.diagram.open, state.scale, 'OPEN'),
        getDiagram(state.diagram.close, state.scale, 'CLOSE'),
        getScale(state.scale)
      ])
    ])
  );

export default view
