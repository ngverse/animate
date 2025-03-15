/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/fading_exits/fadeOutUp.css
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

type fadeOutUpMotionOptions = MotionOptions;

const defaults = createDefaults<fadeOutUpMotionOptions>();

const name = `fadeOutUp`;

/**
 * fadeOutUp animation
 */
export const fadeOutUp = createMotionFromAnimate<fadeOutUpMotionOptions>(
  keyframes([
    style({ opacity: 1, offset: 0 }),
    style({ opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 1 }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `fadeOutUp` animation
 */
export const setFadeOutUpDefaults =
  setDefaults<fadeOutUpMotionOptions>(defaults);

/**
 * fadeOutUp animation on :leave
 * @remarks triggerName: `fadeOutUpOnLeave`
 */
export const fadeOutUpOnLeave = createOnLeave(
  fadeOutUp,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * fadeOutUp animation on :decr
 * @remarks triggerName: `fadeOutUpOnDecr`
 */
export const fadeOutUpOnDecr = createOnDecr(
  fadeOutUp,
  name,
  defaults,
  getAnimatecssDefaults()
);
