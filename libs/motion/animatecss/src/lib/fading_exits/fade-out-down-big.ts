/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/fading_exits/fadeOutDownBig.css
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

type fadeOutDownBigMotionOptions = MotionOptions;

const defaults = createDefaults<fadeOutDownBigMotionOptions>();

const name = `fadeOutDownBig`;

/**
 * fadeOutDownBig animation
 */
export const fadeOutDownBig =
  createMotionFromAnimate<fadeOutDownBigMotionOptions>(
    keyframes([
      style({ opacity: 1, offset: 0 }),
      style({ opacity: 0, transform: 'translate3d(0, 2000px, 0)', offset: 1 }),
    ]),
    defaults,
    getAnimatecssDefaults()
  );

/**
 * sets default values for the `fadeOutDownBig` animation
 */
export const setFadeOutDownBigDefaults =
  setDefaults<fadeOutDownBigMotionOptions>(defaults);

/**
 * fadeOutDownBig animation on :leave
 * @remarks triggerName: `fadeOutDownBigOnLeave`
 */
export const fadeOutDownBigOnLeave = createOnLeave(
  fadeOutDownBig,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * fadeOutDownBig animation on :decr
 * @remarks triggerName: `fadeOutDownBigOnDecr`
 */
export const fadeOutDownBigOnDecr = createOnDecr(
  fadeOutDownBig,
  name,
  defaults,
  getAnimatecssDefaults()
);
