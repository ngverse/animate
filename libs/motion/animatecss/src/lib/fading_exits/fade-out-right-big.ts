/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/fading_exits/fadeOutRightBig.css
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

type fadeOutRightBigMotionOptions = MotionOptions;

const defaults = createDefaults<fadeOutRightBigMotionOptions>();

const name = `fadeOutRightBig`;

/**
 * fadeOutRightBig animation
 */
export const fadeOutRightBig =
  createMotionFromAnimate<fadeOutRightBigMotionOptions>(
    keyframes([
      style({ opacity: 1, offset: 0 }),
      style({ opacity: 0, transform: 'translate3d(2000px, 0, 0)', offset: 1 }),
    ]),
    defaults,
    getAnimatecssDefaults()
  );

/**
 * sets default values for the `fadeOutRightBig` animation
 */
export const setFadeOutRightBigDefaults =
  setDefaults<fadeOutRightBigMotionOptions>(defaults);

/**
 * fadeOutRightBig animation on :leave
 * @remarks triggerName: `fadeOutRightBigOnLeave`
 */
export const fadeOutRightBigOnLeave = createOnLeave(
  fadeOutRightBig,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * fadeOutRightBig animation on :decr
 * @remarks triggerName: `fadeOutRightBigOnDecr`
 */
export const fadeOutRightBigOnDecr = createOnDecr(
  fadeOutRightBig,
  name,
  defaults,
  getAnimatecssDefaults()
);
