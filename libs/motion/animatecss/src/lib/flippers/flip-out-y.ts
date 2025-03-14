/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/flippers/flipOutY.css
 */
import { keyframes, style } from '@angular/animations';
import {
  createDefaults,
  createMotionFromAnimate,
  createOnDecr,
  createOnLeave,
  MotionOptions,
  setDefaults,
} from '@ngverse/motion/core';
import { getAnimatecssDefaults } from '../common/animate-css-defaults';

type flipOutYMotionOptions = MotionOptions;

const defaults = createDefaults<flipOutYMotionOptions>();
const name = `flipOutY`;

/**
 * flipOutY animation
 */
export const flipOutY = createMotionFromAnimate<flipOutYMotionOptions>(
  keyframes([
    style({
      transform: 'perspective(400px)',
      opacity: 1,
      easing: 'ease',
      offset: 0,
    }),
    style({
      transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)',
      opacity: 1,
      easing: 'ease',
      offset: 0.3,
    }),
    style({
      transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)',
      opacity: 0,
      easing: 'ease',
      offset: 1,
    }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `flipOutY` animation
 */
export const setFlipOutYDefaults = setDefaults<flipOutYMotionOptions>(defaults);

/**
 * flipOutY animation on :leave
 * @remarks triggerName: `flipOutYOnLeave`
 */
export const flipOutYOnLeave = createOnLeave(
  flipOutY,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * flipOutY animation on :decr
 * @remarks triggerName: `flipOutYOnDecr`
 */
export const flipOutYOnDecr = createOnDecr(
  flipOutY,
  name,
  defaults,
  getAnimatecssDefaults()
);
