import {h, div, ul, li, a, nav, button, span} from '@cycle/dom'

const view = () => {
  return   div('.menu', [
      ul([
        li([`option #1`]),
        li([`option #2`])
      ])
    ]),
    nav('.navbar.navbar-inverse.navbar-fixed-top', [
      div('.container', [
        div('.navbar-header', [
          button('.navbar-toggle.collapsed', {
            'attributes': {
              'type': 'button',
              'data-toggle': 'collapse',
              'data-target': '#navbar',
              'aria-expanded': 'false',
              'aria-controls': 'navbar',
              'className': 'navbar-toggle collapsed'
            }
          }, [
            span('.sr-only', [`Toggle navigation`]),
            `
              `,
            span('.icon-bar'),
            `
              `,
            span('.icon-bar'),
            `
              `,
            span('.icon-bar')
          ]),
          `
            `,
          a('.navbar-brand', {
            'attributes': {
              'href': '#',
              'className': 'navbar-brand'
            }
          }, [`Diato APP`])
        ]),
        div('#navbar.collapse.navbar-collapse', [
          ul('.nav.navbar-nav', [
            li('.active', [
              a({
                'attributes': {
                  'href': '#'
                }
              }, [`Home`])
            ]),
            li([
              a({
                'attributes': {
                  'href': '#about'
                }
              }, [`About`])
            ]),
            li([
              a({
                'attributes': {
                  'href': '#contact'
                }
              }, [`Contact`])
            ])
          ])
        ])
        /* /.nav-collapse */
      ])
    ])
};

export default view;
