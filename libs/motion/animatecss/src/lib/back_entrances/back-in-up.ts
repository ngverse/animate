/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/back_entrances/backInUp.css
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

type backInUpMotionOptions = MotionOptions;

const defaults = createDefaults<backInUpMotionOptions>();

const name = `backInUp`;

/**
 * backInUp animation
 */
export const backInUp = createMotionFromAnimate<backInUpMotionOptions>(
  keyframes([
    style({
      transform: 'translateY(1200px) scale(0.7)',
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
 * sets default values for the `backInUp` animation
 */
export const setBackInUpDefaults = setDefaults<backInUpMotionOptions>(defaults);

/**
 * backInUp animation on :enter
 * @remarks triggerName: `backInUpOnEnter`
 */
export const backInUpOnEnter = createOnEnter(
  backInUp,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * backInUp animation on :incr
 * @remarks triggerName: `backInUpOnIncr`
 */
export const backInUpOnIncr = createOnIncr(
  backInUp,
  name,
  defaults,
  getAnimatecssDefaults()
);
