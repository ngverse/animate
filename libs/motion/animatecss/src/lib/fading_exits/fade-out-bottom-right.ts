/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/fading_exits/fadeOutBottomRight.css
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

type fadeOutBottomRightMotionOptions = MotionOptions;

const defaults = createDefaults<fadeOutBottomRightMotionOptions>();

const name = `fadeOutBottomRight`;

/**
 * fadeOutBottomRight animation
 */
export const fadeOutBottomRight =
  createMotionFromAnimate<fadeOutBottomRightMotionOptions>(
    keyframes([
      style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }),
      style({ opacity: 0, transform: 'translate3d(100%, 100%, 0)', offset: 1 }),
    ]),
    defaults,
    getAnimatecssDefaults()
  );

/**
 * sets default values for the `fadeOutBottomRight` animation
 */
export const setFadeOutBottomRightDefaults =
  setDefaults<fadeOutBottomRightMotionOptions>(defaults);

/**
 * fadeOutBottomRight animation on :leave
 * @remarks triggerName: `fadeOutBottomRightOnLeave`
 */
export const fadeOutBottomRightOnLeave = createOnLeave(
  fadeOutBottomRight,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * fadeOutBottomRight animation on :decr
 * @remarks triggerName: `fadeOutBottomRightOnDecr`
 */
export const fadeOutBottomRightOnDecr = createOnDecr(
  fadeOutBottomRight,
  name,
  defaults,
  getAnimatecssDefaults()
);
