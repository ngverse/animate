/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/fading_exits/fadeOutBottomLeft.css
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

type fadeOutBottomLeftMotionOptions = MotionOptions;

const defaults = createDefaults<fadeOutBottomLeftMotionOptions>();

const name = `fadeOutBottomLeft`;

/**
 * fadeOutBottomLeft animation
 */
export const fadeOutBottomLeft =
  createMotionFromAnimate<fadeOutBottomLeftMotionOptions>(
    keyframes([
      style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }),
      style({
        opacity: 0,
        transform: 'translate3d(-100%, 100%, 0)',
        offset: 1,
      }),
    ]),
    defaults,
    getAnimatecssDefaults()
  );

/**
 * sets default values for the `fadeOutBottomLeft` animation
 */
export const setFadeOutBottomLeftDefaults =
  setDefaults<fadeOutBottomLeftMotionOptions>(defaults);

/**
 * fadeOutBottomLeft animation on :leave
 * @remarks triggerName: `fadeOutBottomLeftOnLeave`
 */
export const fadeOutBottomLeftOnLeave = createOnLeave(
  fadeOutBottomLeft,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * fadeOutBottomLeft animation on :decr
 * @remarks triggerName: `fadeOutBottomLeftOnDecr`
 */
export const fadeOutBottomLeftOnDecr = createOnDecr(
  fadeOutBottomLeft,
  name,
  defaults,
  getAnimatecssDefaults()
);
