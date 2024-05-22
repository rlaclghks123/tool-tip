export interface BasicTooltipsType {
  id: number;
  tooltipContents: string;
  direction: string;
  bottonContents: string;
}

export const TOP_INFO: BasicTooltipsType[] = [
  {
    id: 1,
    tooltipContents: 'top left contents',
    direction: 'topLeft',
    bottonContents: 'TL',
  },
  {
    id: 2,
    tooltipContents: 'top contents',
    direction: 'top',
    bottonContents: 'Top',
  },
  {
    id: 3,
    tooltipContents: 'top right contents',
    direction: 'topRight',
    bottonContents: 'TR',
  },
];

export const LEFT_INFO: BasicTooltipsType[] = [
  {
    id: 1,
    tooltipContents: 'left top contents',
    direction: 'leftTop',
    bottonContents: 'LT',
  },
  {
    id: 2,
    tooltipContents: 'left contents',
    direction: 'left',
    bottonContents: 'Left',
  },
  {
    id: 3,
    tooltipContents: 'left bottom contents',
    direction: 'leftBottom',
    bottonContents: 'LB',
  },
];

export const RIGHT_INFO: BasicTooltipsType[] = [
  {
    id: 1,
    tooltipContents: 'right top contents',
    direction: 'rightTop',
    bottonContents: 'RT',
  },
  {
    id: 2,
    tooltipContents: 'right contents',
    direction: 'right',
    bottonContents: 'Right',
  },
  {
    id: 3,
    tooltipContents: 'right bottom contents',
    direction: 'rightBottom',
    bottonContents: 'RB',
  },
];

export const BOTTOM_INFO: BasicTooltipsType[] = [
  {
    id: 1,
    tooltipContents: 'bottom left contents',
    direction: 'bottomLeft',
    bottonContents: 'BL',
  },
  {
    id: 2,
    tooltipContents: 'bottom contents',
    direction: 'bottom',
    bottonContents: 'Bottom',
  },
  {
    id: 3,
    tooltipContents: 'bottom right contents',
    direction: 'bottomRight',
    bottonContents: 'BR',
  },
];
