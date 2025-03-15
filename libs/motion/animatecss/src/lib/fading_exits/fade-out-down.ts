/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/fading_exits/fadeOutDown.css
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

type fadeOutDownMotionOptions = MotionOptions;

const defaults = createDefaults<fadeOutDownMotionOptions>();

const name = `fadeOutDown`;

/**
 * fadeOutDown animation
 */
export const fadeOutDown = createMotionFromAnimate<fadeOutDownMotionOptions>(
  keyframes([
    style({ opacity: 1, offset: 0 }),
    style({ opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 1 }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `fadeOutDown` animation
 */
export const setFadeOutDownDefaults =
  setDefaults<fadeOutDownMotionOptions>(defaults);

/**
 * fadeOutDown animation on :leave
 * @remarks triggerName: `fadeOutDownOnLeave`
 */
export const fadeOutDownOnLeave = createOnLeave(
  fadeOutDown,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * fadeOutDown animation on :decr
 * @remarks triggerName: `fadeOutDownOnDecr`
 */
export const fadeOutDownOnDecr = createOnDecr(
  fadeOutDown,
  name,
  defaults,
  getAnimatecssDefaults()
);
