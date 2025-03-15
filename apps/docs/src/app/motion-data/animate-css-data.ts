import { AnimationReferenceMetadata } from '@angular/animations';
import {
  backInDown,
  backInLeft,
  backInRight,
  backInUp,
  backOutDown,
  backOutLeft,
  backOutRight,
  backOutUp,
  bounce,
  bounceIn,
  bounceInDown,
  bounceInLeft,
  bounceInRight,
  bounceInUp,
  bounceOut,
  bounceOutDown,
  bounceOutLeft,
  bounceOutRight,
  bounceOutUp,
  flash,
  flip,
  flipInX,
  flipInY,
  flipOutX,
  flipOutY,
  headShake,
  heartBeat,
  hinge,
  jackInTheBox,
  jello,
  lightSpeedInLeft,
  lightSpeedInRight,
  lightSpeedOutLeft,
  lightSpeedOutRight,
  pulse,
  rollIn,
  rollOut,
  rotateIn,
  rotateInDownLeft,
  rotateInDownRight,
  rotateInUpLeft,
  rotateInUpRight,
  rotateOut,
  rotateOutDownLeft,
  rotateOutDownRight,
  rotateOutUpLeft,
  rotateOutUpRight,
  rubberBand,
  shakeX,
  shakeY,
  slideInDown,
  slideInLeft,
  slideInRight,
  slideInUp,
  slideOutDown,
  slideOutLeft,
  slideOutRight,
  slideOutUp,
  swing,
  tada,
  wobble,
  zoomIn,
  zoomInDown,
  zoomInLeft,
  zoomInRight,
  zoomInUp,
  zoomOut,
  zoomOutDown,
  zoomOutLeft,
  zoomOutRight,
  zoomOutUp,
} from '@ngverse/motion/animatecss';

import {
  MotionGroup,
  MotionItem,
  MotionOption,
  TRIGGER_TYPES,
} from './motion-types';

function getAnimatecssLink(group: string, name: string) {
  return `https://github.com/animate-css/animate.css/blob/main/source/${group}/${name}.css`;
}

function getMotionItem(
  group: string,
  name: string,
  animation: () => AnimationReferenceMetadata,
  trigger: TRIGGER_TYPES[],
  options?: MotionOption[] | undefined
) {
  return {
    href: getAnimatecssLink(group, name),
    name: name,
    triggers: trigger,
    motion: animation,
    options,
  };
}

function getAllStates(
  group: string,
  name: string,
  animation: () => AnimationReferenceMetadata,
  options?: MotionOption[] | undefined
): MotionItem {
  return getMotionItem(group, name, animation, [TRIGGER_TYPES.All], options);
}

function getAllEnters(
  group: string,
  name: string,
  animation: () => AnimationReferenceMetadata,
  options?: MotionOption[] | undefined
) {
  return getMotionItem(
    group,
    name,
    animation,
    [TRIGGER_TYPES.AllEnters],
    options
  );
}

function getAllLeaves(
  group: string,
  name: string,
  animation: () => AnimationReferenceMetadata,
  options?: MotionOption[] | undefined
) {
  return getMotionItem(
    group,
    name,
    animation,
    [TRIGGER_TYPES.AllLeaves],
    options
  );
}

export const ANIMATE_CSS_DATA: MotionGroup = {
  name: 'animatecss',
  motions: [
    /** Attention Seekers */
    getAllStates('attention_seekers', 'bounce', bounce),
    getAllStates('attention_seekers', 'flash', flash),
    getAllStates('attention_seekers', 'headShake', headShake),
    getAllStates('attention_seekers', 'heartBeat', heartBeat),
    getAllStates('attention_seekers', 'jello', jello),
    getAllStates('attention_seekers', 'pulse', pulse),
    getAllStates('attention_seekers', 'rubberBand', rubberBand),
    getAllStates('attention_seekers', 'shakeX', shakeX),
    getAllStates('attention_seekers', 'shakeY', shakeY),
    getAllStates('attention_seekers', 'swing', swing),
    getAllStates('attention_seekers', 'tada', tada),
    getAllStates('attention_seekers', 'wobble', wobble),

    /** Back Entrances */
    getAllEnters('back_entrances', 'backInUp', backInUp),
    getAllEnters('back_entrances', 'backInDown', backInDown),
    getAllEnters('back_entrances', 'backInLeft', backInLeft),
    getAllEnters('back_entrances', 'backInRight', backInRight),

    /** Back Exits */
    getAllLeaves('back_exits', 'backOutDown', backOutDown),
    getAllLeaves('back_exits', 'backOutLeft', backOutLeft),
    getAllLeaves('back_exits', 'backOutRight', backOutRight),
    getAllLeaves('back_exits', 'backOutUp', backOutUp),

    /** Flippers */
    getAllStates('flippers', 'flip', flip),
    getAllEnters('flippers', 'flipInX', flipInX),
    getAllEnters('flippers', 'flipInY', flipInY),
    getAllLeaves('flippers', 'flipOutX', flipOutX),
    getAllLeaves('flippers', 'flipOutY', flipOutY),

    /** Specials */
    getAllStates('specials', 'hinge', hinge),
    getAllStates('specials', 'jackInTheBox', jackInTheBox),
    getAllEnters('specials', 'rollIn', rollIn),
    getAllLeaves('specials', 'rollOut', rollOut),

    /** Zooming Entrances */
    getAllEnters('zooming_entrances', 'zoomIn', zoomIn),
    getAllEnters('zooming_entrances', 'zoomInDown', zoomInDown),
    getAllEnters('zooming_entrances', 'zoomInLeft', zoomInLeft),
    getAllEnters('zooming_entrances', 'zoomInRight', zoomInRight),
    getAllEnters('zooming_entrances', 'zoomInUp', zoomInUp),

    /** Zooming Exits */
    getAllLeaves('zooming_exits', 'zoomOut', zoomOut),
    getAllLeaves('zooming_exits', 'zoomOutDown', zoomOutDown),
    getAllLeaves('zooming_exits', 'zoomOutLeft', zoomOutLeft),
    getAllLeaves('zooming_exits', 'zoomOutRight', zoomOutRight),
    getAllLeaves('zooming_exits', 'zoomOutUp', zoomOutUp),

    /** Sliding Entrances */
    getAllEnters('sliding_entrances', 'slideInDown', slideInDown),
    getAllEnters('sliding_entrances', 'slideInLeft', slideInLeft),
    getAllEnters('sliding_entrances', 'slideInRight', slideInRight),
    getAllEnters('sliding_entrances', 'slideInUp', slideInUp),

    /** Sliding Exits */
    getAllLeaves('sliding_exits', 'slideOutDown', slideOutDown),
    getAllLeaves('sliding_exits', 'slideOutLeft', slideOutLeft),
    getAllLeaves('sliding_exits', 'slideOutRight', slideOutRight),
    getAllLeaves('sliding_exits', 'slideOutUp', slideOutUp),

    /** Bouncing Exits */
    getAllLeaves('bouncing_exits', 'bounceOut', bounceOut),
    getAllLeaves('bouncing_exits', 'bounceOutDown', bounceOutDown),
    getAllLeaves('bouncing_exits', 'bounceOutLeft', bounceOutLeft),
    getAllLeaves('bouncing_exits', 'bounceOutRight', bounceOutRight),
    getAllLeaves('bouncing_exits', 'bounceOutUp', bounceOutUp),

    /** Bouncing Entrances */
    getAllEnters('bouncing_entrances', 'bounceIn', bounceIn),
    getAllEnters('bouncing_entrances', 'bounceInDown', bounceInDown),
    getAllEnters('bouncing_entrances', 'bounceInLeft', bounceInLeft),
    getAllEnters('bouncing_entrances', 'bounceInRight', bounceInRight),
    getAllEnters('bouncing_entrances', 'bounceInUp', bounceInUp),

    /** Lightspeed */
    getAllEnters('lightspeed', 'lightSpeedInLeft', lightSpeedInLeft),
    getAllEnters('lightspeed', 'lightSpeedInRight', lightSpeedInRight),
    getAllLeaves('lightspeed', 'lightSpeedOutLeft', lightSpeedOutLeft),
    getAllLeaves('lightspeed', 'lightSpeedOutRight', lightSpeedOutRight),

    /** Rotating Entrances */
    getAllEnters('rotating_entrances', 'rotateIn', rotateIn),
    getAllEnters('rotating_entrances', 'rotateInDownLeft', rotateInDownLeft),
    getAllEnters('rotating_entrances', 'rotateInDownRight', rotateInDownRight),
    getAllEnters('rotating_entrances', 'rotateInUpLeft', rotateInUpLeft),
    getAllEnters('rotating_entrances', 'rotateInUpRight', rotateInUpRight),

    /** Rotating Exits */
    getAllLeaves('rotating_exits', 'rotateOut', rotateOut),
    getAllLeaves('rotating_exits', 'rotateOutDownLeft', rotateOutDownLeft),
    getAllLeaves('rotating_exits', 'rotateOutDownRight', rotateOutDownRight),
    getAllLeaves('rotating_exits', 'rotateOutUpLeft', rotateOutUpLeft),
    getAllLeaves('rotating_exits', 'rotateOutUpRight', rotateOutUpRight),
  ],
};
