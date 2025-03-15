/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/back_entrances/backInLeft.css
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

type backInLeftMotionOptions = MotionOptions;

const defaults = createDefaults<backInLeftMotionOptions>();

const name = `backInLeft`;

/**
 * backInLeft animation
 */
export const backInLeft = createMotionFromAnimate<backInLeftMotionOptions>(
  keyframes([
    style({
      transform: 'translateX(-2000px) scale(0.7)',
      opacity: 0.7,
      offset: 0,
    }),
    style({
      transform: 'translateX(0px) scale(0.7)',
      opacity: 0.7,
      offset: 0.8,
    }),
    style({ transform: 'scale(1)', opacity: 1, offset: 1 }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `backInLeft` animation
 */
export const setBackInLeftDefaults =
  setDefaults<backInLeftMotionOptions>(defaults);

/**
 * backInLeft animation on :enter
 * @remarks triggerName: `backInLeftOnEnter`
 */
export const backInLeftOnEnter = createOnEnter(
  backInLeft,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * backInLeft animation on :incr
 * @remarks triggerName: `backInLeftOnIncr`
 */
export const backInLeftOnIncr = createOnIncr(
  backInLeft,
  name,
  defaults,
  getAnimatecssDefaults()
);
