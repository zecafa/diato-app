import {h, div, h1, form, label, span, select, option} from '@cycle/dom'
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

const getDiagram = (diagram) =>
  div('.panel.panel-default', [
    div('.panel-heading', ['Esquema diato']),
    div('.panel-body', [JSON.stringify(diagram)])
  ]);

const view = (state$) =>
  state$.map(state =>
    div('.container', [
      div('.starter-template', [
        h1([`Diato utils APP`]),
        getForm(),
        getScale(state.scale),
        getDiagram(state.diagram)
      ])
    ])
  );

export default view
