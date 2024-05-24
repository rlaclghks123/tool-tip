import { Direction } from '../components/types/tooltip';

export interface BasicTooltipsType {
  id: number;
  tooltipContents: string[];
  direction: Direction;
  bottonContents: string;
}

export const TOP_INFO: BasicTooltipsType[] = [
  {
    id: 1,
    tooltipContents: ['prompt text', 'prompt text', ' prompt text'],
    direction: 'topLeft',
    bottonContents: 'TL',
  },
  {
    id: 2,
    tooltipContents: ['prompt text', 'prompt text', ' prompt text'],
    direction: 'top',
    bottonContents: 'Top',
  },
  {
    id: 3,
    tooltipContents: ['prompt text', 'prompt text', ' prompt text'],
    direction: 'topRight',
    bottonContents: 'TR',
  },
];

export const LEFT_INFO: BasicTooltipsType[] = [
  {
    id: 1,
    tooltipContents: ['prompt text', 'prompt text', ' prompt text'],
    direction: 'leftTop',
    bottonContents: 'LT',
  },
  {
    id: 2,
    tooltipContents: ['prompt text', 'prompt text', ' prompt text'],
    direction: 'left',
    bottonContents: 'Left',
  },
  {
    id: 3,
    tooltipContents: ['prompt text', 'prompt text', ' prompt text'],
    direction: 'leftBottom',
    bottonContents: 'LB',
  },
];

export const RIGHT_INFO: BasicTooltipsType[] = [
  {
    id: 1,
    tooltipContents: ['prompt text', 'prompt text', ' prompt text'],
    direction: 'rightTop',
    bottonContents: 'RT',
  },
  {
    id: 2,
    tooltipContents: ['prompt text', 'prompt text', ' prompt text'],
    direction: 'right',
    bottonContents: 'Right',
  },
  {
    id: 3,
    tooltipContents: ['prompt text', 'prompt text', ' prompt text'],
    direction: 'rightBottom',
    bottonContents: 'RB',
  },
];

export const BOTTOM_INFO: BasicTooltipsType[] = [
  {
    id: 1,
    tooltipContents: ['prompt text', 'prompt text', ' prompt text'],
    direction: 'bottomLeft',
    bottonContents: 'BL',
  },
  {
    id: 2,
    tooltipContents: ['prompt text', 'prompt text', ' prompt text'],
    direction: 'bottom',
    bottonContents: 'Bottom',
  },
  {
    id: 3,
    tooltipContents: ['prompt text', 'prompt text', ' prompt text'],
    direction: 'bottomRight',
    bottonContents: 'BR',
  },
];
