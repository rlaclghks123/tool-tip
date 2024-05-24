import { Direction } from '../components/types/tooltip';

export interface BasicTooltipsType {
  id: number;
  tooltipContents: string[];
  direction: Direction;
  bottonContents: string;
}

export const TOOLTIP_CONTENTS = ['prompt text', 'prompt text', ' prompt text'];

export const TOP_INFO: BasicTooltipsType[] = [
  {
    id: 1,
    tooltipContents: TOOLTIP_CONTENTS,
    direction: 'topLeft',
    bottonContents: 'TL',
  },
  {
    id: 2,
    tooltipContents: TOOLTIP_CONTENTS,
    direction: 'top',
    bottonContents: 'Top',
  },
  {
    id: 3,
    tooltipContents: TOOLTIP_CONTENTS,
    direction: 'topRight',
    bottonContents: 'TR',
  },
];

export const LEFT_INFO: BasicTooltipsType[] = [
  {
    id: 1,
    tooltipContents: TOOLTIP_CONTENTS,
    direction: 'leftTop',
    bottonContents: 'LT',
  },
  {
    id: 2,
    tooltipContents: TOOLTIP_CONTENTS,
    direction: 'left',
    bottonContents: 'Left',
  },
  {
    id: 3,
    tooltipContents: TOOLTIP_CONTENTS,
    direction: 'leftBottom',
    bottonContents: 'LB',
  },
];

export const RIGHT_INFO: BasicTooltipsType[] = [
  {
    id: 1,
    tooltipContents: TOOLTIP_CONTENTS,
    direction: 'rightTop',
    bottonContents: 'RT',
  },
  {
    id: 2,
    tooltipContents: TOOLTIP_CONTENTS,
    direction: 'right',
    bottonContents: 'Right',
  },
  {
    id: 3,
    tooltipContents: TOOLTIP_CONTENTS,
    direction: 'rightBottom',
    bottonContents: 'RB',
  },
];

export const BOTTOM_INFO: BasicTooltipsType[] = [
  {
    id: 1,
    tooltipContents: TOOLTIP_CONTENTS,
    direction: 'bottomLeft',
    bottonContents: 'BL',
  },
  {
    id: 2,
    tooltipContents: TOOLTIP_CONTENTS,
    direction: 'bottom',
    bottonContents: 'Bottom',
  },
  {
    id: 3,
    tooltipContents: TOOLTIP_CONTENTS,
    direction: 'bottomRight',
    bottonContents: 'BR',
  },
];
