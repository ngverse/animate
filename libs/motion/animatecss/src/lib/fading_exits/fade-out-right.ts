/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/fading_exits/fadeOutRight.css
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

type fadeOutRightMotionOptions = MotionOptions;

const defaults = createDefaults<fadeOutRightMotionOptions>();

const name = `fadeOutRight`;

/**
 * fadeOutRight animation
 */
export const fadeOutRight = createMotionFromAnimate<fadeOutRightMotionOptions>(
  keyframes([
    style({ opacity: 1, offset: 0 }),
    style({ opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 1 }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `fadeOutRight` animation
 */
export const setFadeOutRightDefaults =
  setDefaults<fadeOutRightMotionOptions>(defaults);

/**
 * fadeOutRight animation on :leave
 * @remarks triggerName: `fadeOutRightOnLeave`
 */
export const fadeOutRightOnLeave = createOnLeave(
  fadeOutRight,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * fadeOutRight animation on :decr
 * @remarks triggerName: `fadeOutRightOnDecr`
 */
export const fadeOutRightOnDecr = createOnDecr(
  fadeOutRight,
  name,
  defaults,
  getAnimatecssDefaults()
);
