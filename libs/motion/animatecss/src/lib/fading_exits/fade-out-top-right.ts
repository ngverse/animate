/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/fading_exits/fadeOutTopRight.css
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

type fadeOutTopRightMotionOptions = MotionOptions;

const defaults = createDefaults<fadeOutTopRightMotionOptions>();

const name = `fadeOutTopRight`;

/**
 * fadeOutTopRight animation
 */
export const fadeOutTopRight =
  createMotionFromAnimate<fadeOutTopRightMotionOptions>(
    keyframes([
      style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }),
      style({
        opacity: 0,
        transform: 'translate3d(100%, -100%, 0)',
        offset: 1,
      }),
    ]),
    defaults,
    getAnimatecssDefaults()
  );

/**
 * sets default values for the `fadeOutTopRight` animation
 */
export const setFadeOutTopRightDefaults =
  setDefaults<fadeOutTopRightMotionOptions>(defaults);

/**
 * fadeOutTopRight animation on :leave
 * @remarks triggerName: `fadeOutTopRightOnLeave`
 */
export const fadeOutTopRightOnLeave = createOnLeave(
  fadeOutTopRight,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * fadeOutTopRight animation on :decr
 * @remarks triggerName: `fadeOutTopRightOnDecr`
 */
export const fadeOutTopRightOnDecr = createOnDecr(
  fadeOutTopRight,
  name,
  defaults,
  getAnimatecssDefaults()
);
