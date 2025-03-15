/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/fading_exits/fadeOut.css
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

type fadeOutMotionOptions = MotionOptions;

const defaults = createDefaults<fadeOutMotionOptions>();

const name = `fadeOut`;

/**
 * fadeOut animation
 */
export const fadeOut = createMotionFromAnimate<fadeOutMotionOptions>(
  keyframes([
    style({ opacity: 1, offset: 0 }),
    style({ opacity: 0, offset: 1 }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `fadeOut` animation
 */
export const setFadeOutDefaults = setDefaults<fadeOutMotionOptions>(defaults);

/**
 * fadeOut animation on :leave
 * @remarks triggerName: `fadeOutOnLeave`
 */
export const fadeOutOnLeave = createOnLeave(
  fadeOut,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * fadeOut animation on :decr
 * @remarks triggerName: `fadeOutOnDecr`
 */
export const fadeOutOnDecr = createOnDecr(
  fadeOut,
  name,
  defaults,
  getAnimatecssDefaults()
);
