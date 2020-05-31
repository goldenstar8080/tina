import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `<svg id="tool" xmlns="http://www.w3.org/2000/svg" width="WD" height="HT" viewBox="0 0 15 15">
<g id="Group_2028" data-name="Group 2028" transform="translate(32.68 -55.053)">
  <path id="Path_5727" data-name="Path 5727" d="M-24.339,66.4a4.741,4.741,0,0,0,2.889.225l-1.514-1.514a.363.363,0,0,1-.049.084.391.391,0,0,1-.551.048l-2.761-2.761a.392.392,0,0,1,0-.5.4.4,0,0,1,.129-.1l-1.438-1.437a4.644,4.644,0,0,0,.219,2.895.388.388,0,0,1-.1.391l-4.6,4.568a10.608,10.608,0,0,0,2.772,2.783l4.61-4.582A.393.393,0,0,1-24.339,66.4Z" transform="translate(-0.155 -1.447)" fill="#755efc"/>
  <path id="Path_5728" data-name="Path 5728" d="M-24.087,60.759l2.761,2.761a.385.385,0,0,1,.049.418l1.514,1.514a3.266,3.266,0,0,0,1.306-.826,6.66,6.66,0,0,0,1.856-4.6l-1.941,1.93a1.183,1.183,0,0,1-1.139.3l-.43-.116a3.526,3.526,0,0,1-2.5-2.481l-.114-.426a1.169,1.169,0,0,1,.307-1.133l1.933-1.958a6.739,6.739,0,0,0-4.639,1.844,3.244,3.244,0,0,0-.825,1.277l1.438,1.437A.39.39,0,0,1-24.087,60.759Z" transform="translate(-1.866 -0.3)" fill="#c4baff"/>
  <path id="Path_5729" data-name="Path 5729" d="M-18.353,58.564a.391.391,0,0,0-.16.1L-20.96,61.1a.392.392,0,0,1-.392.1l-.427-.114a2.742,2.742,0,0,1-1.937-1.957l-.114-.427a.392.392,0,0,1,.1-.392l2.451-2.446a.391.391,0,0,0,0-.552.386.386,0,0,0-.16-.1c-1.985-.6-4.659.5-6.093,1.925s-1.4,2.935-.867,4.739l-4.287,4.286c.131.229.263.456.411.674l4.595-4.577a.39.39,0,0,0,.1-.392,4.668,4.668,0,0,1-.219-2.9,3.252,3.252,0,0,1,.823-1.28,6.715,6.715,0,0,1,4.631-1.847l-1.93,1.962a1.174,1.174,0,0,0-.306,1.135l.114.427A3.526,3.526,0,0,0-21.97,61.86l.429.116a1.178,1.178,0,0,0,1.137-.3l1.937-1.933a6.685,6.685,0,0,1-1.853,4.606,3.259,3.259,0,0,1-1.3.828,4.717,4.717,0,0,1-2.884-.225.392.392,0,0,0-.392.1l-4.6,4.59c.218.15.445.286.675.419l4.311-4.295c1.808.536,3.318.563,4.749-.865s2.535-4.084,1.908-6.072A.393.393,0,0,0-18.353,58.564Z" transform="translate(0 0)" fill="#251b4d"/>
  <path id="Path_5730" data-name="Path 5730" d="M-20.868,65.221l-2.761-2.761a.39.39,0,0,0-.421-.052.4.4,0,0,0-.129.1.392.392,0,0,0,0,.5l2.761,2.761a.391.391,0,0,0,.551-.048.363.363,0,0,0,.049-.084A.385.385,0,0,0-20.868,65.221Z" transform="translate(-2.313 -1.988)" fill="#251b4d"/>
</g>
</svg>
`;

export default Tool = ({width, height}) => {
  return(
      <SvgXml xml={xml.replace('WD', width).replace('HT', height)} />
  )
}