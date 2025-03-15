/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/back_entrances/backInDown.css
 */
import { keyframes, style } from '@angular/animations';
import {
  createDefaults,
  createMotionFromAnimate,
  createOnEnter,
  createOnIncr,
  MotionOptions,
  setDefaults,
} from '@ngverse/motion/core';
import { getAnimatecssDefaults } from '../common/animate-css-defaults';

type backInDownMotionOptions = MotionOptions;

const defaults = createDefaults<backInDownMotionOptions>();

const name = `backInDown`;

/**
 * backInDown animation
 */
export const backInDown = createMotionFromAnimate<backInDownMotionOptions>(
  keyframes([
    style({
      transform: 'translateY(-1200px) scale(0.7)',
      opacity: 0.7,
      offset: 0,
    }),
    style({
      transform: 'translateY(0px) scale(0.7)',
      opacity: 0.7,
      offset: 0.8,
    }),
    style({ transform: 'scale(1)', opacity: 1, offset: 1 }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `backInDown` animation
 */
export const setBackInDownDefaults =
  setDefaults<backInDownMotionOptions>(defaults);

/**
 * backInDown animation on :enter
 * @remarks triggerName: `backInDownOnEnter`
 */
export const backInDownOnEnter = createOnEnter(
  backInDown,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * backInDown animation on :incr
 * @remarks triggerName: `backInDownOnIncr`
 */
export const backInDownOnIncr = createOnIncr(
  backInDown,
  name,
  defaults,
  getAnimatecssDefaults()
);
