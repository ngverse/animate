/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/fading_exits/fadeOutLeftBig.css
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

type fadeOutLeftBigMotionOptions = MotionOptions;

const defaults = createDefaults<fadeOutLeftBigMotionOptions>();

const name = `fadeOutLeftBig`;

/**
 * fadeOutLeftBig animation
 */
export const fadeOutLeftBig =
  createMotionFromAnimate<fadeOutLeftBigMotionOptions>(
    keyframes([
      style({ opacity: 1, offset: 0 }),
      style({ opacity: 0, transform: 'translate3d(-2000px, 0, 0)', offset: 1 }),
    ]),
    defaults,
    getAnimatecssDefaults()
  );

/**
 * sets default values for the `fadeOutLeftBig` animation
 */
export const setFadeOutLeftBigDefaults =
  setDefaults<fadeOutLeftBigMotionOptions>(defaults);

/**
 * fadeOutLeftBig animation on :leave
 * @remarks triggerName: `fadeOutLeftBigOnLeave`
 */
export const fadeOutLeftBigOnLeave = createOnLeave(
  fadeOutLeftBig,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * fadeOutLeftBig animation on :decr
 * @remarks triggerName: `fadeOutLeftBigOnDecr`
 */
export const fadeOutLeftBigOnDecr = createOnDecr(
  fadeOutLeftBig,
  name,
  defaults,
  getAnimatecssDefaults()
);
