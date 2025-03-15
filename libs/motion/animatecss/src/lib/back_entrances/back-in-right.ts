/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/back_entrances/backInRight.css
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

type backInRightMotionOptions = MotionOptions;

const defaults = createDefaults<backInRightMotionOptions>();

const name = `backInRight`;

/**
 * backInRight animation
 */
export const backInRight = createMotionFromAnimate<backInRightMotionOptions>(
  keyframes([
    style({
      transform: 'translateX(2000px) scale(0.7)',
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
 * sets default values for the `backInRight` animation
 */
export const setBackInRightDefaults =
  setDefaults<backInRightMotionOptions>(defaults);

/**
 * backInRight animation on :enter
 * @remarks triggerName: `backInRightOnEnter`
 */
export const backInRightOnEnter = createOnEnter(
  backInRight,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * backInRight animation on :incr
 * @remarks triggerName: `backInRightOnIncr`
 */
export const backInRightOnIncr = createOnIncr(
  backInRight,
  name,
  defaults,
  getAnimatecssDefaults()
);
