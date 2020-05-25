import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `<svg id="ordinateur" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 21 15.005">
  <g id="Group_2374" data-name="Group 2374" transform="translate(-672 -376.498)">
    <path id="Path_6413" data-name="Path 6413" d="M678.835,389.029a.456.456,0,0,1-.407.5.5.5,0,0,1-.095,0H673a1.11,1.11,0,0,0,1.158,1.061h3.761a.742.742,0,0,1-.063-.3v-.014a.75.75,0,0,1,.757-.743h2.372a.454.454,0,0,1,0-.909h3.029a.454.454,0,1,1,0,.909h2.653a.457.457,0,1,1-.095-.909.5.5,0,0,1,.095,0h4.2v-.761c-.007,0-.013,0-.021,0h-.017v0a.469.469,0,0,1-.5-.439V378.47a1.11,1.11,0,0,0-1.159-1.061H675.833a1.111,1.111,0,0,0-1.166,1.054v8.947a.471.471,0,0,1-.484.456h-.016c-.013,0-.025-.005-.038-.005v.762h4.2A.457.457,0,0,1,678.835,389.029Z" fill="#fff"/>
    <path id="Path_6414" data-name="Path 6414" d="M680.985,389.533h-2.372a.75.75,0,0,0-.757.743v.014a.742.742,0,0,0,.063.3h12.914A1.111,1.111,0,0,0,692,389.54v-.007H680.985Z" fill="#28c7ed"/>
    <path id="Path_6415" data-name="Path 6415" d="M684.469,389.078a.455.455,0,0,0-.455-.454h-3.029a.454.454,0,0,0,0,.909h3.029A.455.455,0,0,0,684.469,389.078Z" fill="#251b4d"/>
    <path id="Path_6416" data-name="Path 6416" d="M693,389.062a.469.469,0,0,0-.5-.439h-5.833a.5.5,0,0,0-.095,0,.457.457,0,1,0,.095.909H692v.007a1.111,1.111,0,0,1-1.167,1.052H674.158A1.11,1.11,0,0,1,673,389.531h5.333a.5.5,0,0,0,.095,0,.457.457,0,1,0-.095-.909h-5.849a.47.47,0,0,0-.484.456v.455a2.071,2.071,0,0,0,2.167,1.968h16.666A2.071,2.071,0,0,0,693,389.533v-.471Z" fill="#251b4d"/>
    <path id="Path_6417" data-name="Path 6417" d="M674.183,387.866a.471.471,0,0,0,.484-.456v-8.947a1.111,1.111,0,0,1,1.166-1.054h13.341a1.11,1.11,0,0,1,1.159,1.061v8.954a.469.469,0,0,0,.5.439v0h.017c.008,0,.014,0,.021,0a.467.467,0,0,0,.463-.452v-8.94a2.071,2.071,0,0,0-2.167-1.97H675.833a2.071,2.071,0,0,0-2.166,1.97v8.956a.466.466,0,0,0,.461.434c.013,0,.025.006.038.005Z" fill="#251b4d"/>
  </g>
</svg>`;
export default class Ordinateur extends React.Component {
  render() {
    return (
      <SvgXml xml={xml} />
    );
  }
}