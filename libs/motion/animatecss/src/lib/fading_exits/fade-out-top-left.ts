/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/fading_exits/fadeOutTopLeft.css
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

type fadeOutTopLeftMotionOptions = MotionOptions;

const defaults = createDefaults<fadeOutTopLeftMotionOptions>();

const name = `fadeOutTopLeft`;

/**
 * fadeOutTopLeft animation
 */
export const fadeOutTopLeft =
  createMotionFromAnimate<fadeOutTopLeftMotionOptions>(
    keyframes([
      style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }),
      style({
        opacity: 0,
        transform: 'translate3d(-100%, -100%, 0)',
        offset: 1,
      }),
    ]),
    defaults,
    getAnimatecssDefaults()
  );

/**
 * sets default values for the `fadeOutTopLeft` animation
 */
export const setFadeOutTopLeftDefaults =
  setDefaults<fadeOutTopLeftMotionOptions>(defaults);

/**
 * fadeOutTopLeft animation on :leave
 * @remarks triggerName: `fadeOutTopLeftOnLeave`
 */
export const fadeOutTopLeftOnLeave = createOnLeave(
  fadeOutTopLeft,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * fadeOutTopLeft animation on :decr
 * @remarks triggerName: `fadeOutTopLeftOnDecr`
 */
export const fadeOutTopLeftOnDecr = createOnDecr(
  fadeOutTopLeft,
  name,
  defaults,
  getAnimatecssDefaults()
);
