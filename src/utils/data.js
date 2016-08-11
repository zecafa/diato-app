import {curry, slice, indexOf, pipe, find, propEq, prop, map, partialRight, tap} from 'ramda';

export const notesEN = ['C','C#','D','Eb','E','F','F#','G','Ab','A','Bb','B'];
export const notesES = ['Do','Do#','Re','Mib','Mi','Fa','Fa#','Sol','Lab','La','Sib','Si'];
export const trace = curry((tag,x) => { console.log(tag,JSON.stringify(x, null, 4)); return x});
export const diagrams = [
  {
    'name': 'semi-simetric',
    'right': {
      'open': [
        ['E','F#','A','C','E','F#','A','C','E','F#','A','C'],
        ['Ab','B','D','F','Ab','B','D','F','Ab','B','D'],
        ['C#','Eb','G','Bb','C#','Eb','G','Bb','C#','Eb ']
      ],
      'close': [
        ['F','G','B','D','F','G','B','D','F','G','B','D'],
        ['A','C','E','F#','A','C','E','F#','A','C','E'],
        ['C#','Eb','Ab','Bb','C#','Eb','Ab','Bb','C#','Eb']
      ]
    }
  },
  {
    'name': 'standar',
    'right': {
      'open': [
        ['C#','F#','A','C','E','F#','A','C','E','F#','A'],
        ['Bb','B','D','F','A','B','D','F','A','B']
      ],
      'close': [
        ['Eb','D','G','B','D','G','B','D','G','B','D'],
        ['Ab','G','C','E','G','C','E','G','C','E']
      ]
    }
  }
];

export const scaleList = [
  {
    key: 'M',
    name: 'mayor',
    value: [0,2,4,5,7,9,11]
  },
  {
    key: 'm',
    name: 'menor',
    value: [0,2,3,5,7,8,10]
  },
  {
    key: 'cro',
    name: 'cromatica',
    value: [0,1,2,3,4,5,6,7,8,9,10,11]
  }
];

const notesFromRoot = (root, notes) => (
[
  ...slice(indexOf(root)(notes), Infinity)(notes),
  ...slice(0, indexOf(root)(notes))(notes)
]);

const buildScale_ = (root, scale, notes, scales) => pipe(
  find(propEq('key',scale)),
  prop('value'),
  map(position => notesFromRoot(root, notes)[position])
)(scales)
;

export const getHandDiagramByKey = (key, hand) => pipe(
  find(propEq('name', key)),
  prop(hand)
)(diagrams);

export const buildScale = partialRight(buildScale_, [notesEN, scaleList]);
//trace('Do mayor')(buildScale('C','M'));
//trace('Sol menor')(buildScale('G','m'));
//trace('Re menor')(buildScale('D','m'));
// TODO: Scale on diato diagram
// TODO: Chords generator
// TODO: Tune chords
// TODO: cycleJs interface
