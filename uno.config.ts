import { defineConfig } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  theme : {
    colors : {
      Color1 : '#CB3CFF',
      Color2 : '#343b4f',
      Color3 : '#57c3ff',
      Color4 : '#9a91fb',
      Color5 : '#fdb52a',
      Color800 : '#080f25',
      Color700 : '#212c4d',
      Color600 : '#37446b',
      Color200 : '#d9e1fa',
      Color300 : '#d1dbf9',
      Color400 : '#aeb9e1',
      ColorGreen : '#05C168'
    },
    breakpoints : {
      'mobile' : '1024px'
    },
  },
  rules : [
    ['relative',{'position' : 'relative'}]
  ]
})