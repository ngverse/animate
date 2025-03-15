/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/fading_exits/fadeOutUpBig.css
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

type fadeOutUpBigMotionOptions = MotionOptions;

const defaults = createDefaults<fadeOutUpBigMotionOptions>();

const name = `fadeOutUpBig`;

/**
 * fadeOutUpBig animation
 */
export const fadeOutUpBig = createMotionFromAnimate<fadeOutUpBigMotionOptions>(
  keyframes([
    style({ opacity: 1, offset: 0 }),
    style({ opacity: 0, transform: 'translate3d(0, -2000px, 0)', offset: 1 }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `fadeOutUpBig` animation
 */
export const setFadeOutUpBigDefaults =
  setDefaults<fadeOutUpBigMotionOptions>(defaults);

/**
 * fadeOutUpBig animation on :leave
 * @remarks triggerName: `fadeOutUpBigOnLeave`
 */
export const fadeOutUpBigOnLeave = createOnLeave(
  fadeOutUpBig,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * fadeOutUpBig animation on :decr
 * @remarks triggerName: `fadeOutUpBigOnDecr`
 */
export const fadeOutUpBigOnDecr = createOnDecr(
  fadeOutUpBig,
  name,
  defaults,
  getAnimatecssDefaults()
);
