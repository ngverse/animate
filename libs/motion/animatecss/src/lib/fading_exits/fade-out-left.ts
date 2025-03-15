/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/fading_exits/fadeOutLeft.css
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

type fadeOutLeftMotionOptions = MotionOptions;

const defaults = createDefaults<fadeOutLeftMotionOptions>();

const name = `fadeOutLeft`;

/**
 * fadeOutLeft animation
 */
export const fadeOutLeft = createMotionFromAnimate<fadeOutLeftMotionOptions>(
  keyframes([
    style({ opacity: 1, offset: 0 }),
    style({ opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 1 }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `fadeOutLeft` animation
 */
export const setFadeOutLeftDefaults =
  setDefaults<fadeOutLeftMotionOptions>(defaults);

/**
 * fadeOutLeft animation on :leave
 * @remarks triggerName: `fadeOutLeftOnLeave`
 */
export const fadeOutLeftOnLeave = createOnLeave(
  fadeOutLeft,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * fadeOutLeft animation on :decr
 * @remarks triggerName: `fadeOutLeftOnDecr`
 */
export const fadeOutLeftOnDecr = createOnDecr(
  fadeOutLeft,
  name,
  defaults,
  getAnimatecssDefaults()
);
