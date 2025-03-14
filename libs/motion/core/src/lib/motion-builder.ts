/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  animate,
  animateChild,
  animation,
  AnimationKeyframesSequenceMetadata,
  AnimationMetadata,
  AnimationOptions,
  AnimationReferenceMetadata,
  AnimationStyleMetadata,
  query,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';
import {
  CHILDREN_ANIMATION_TYPE,
  CreateMotionFactory,
  MotionOptions,
  TriggerMotionOptions,
} from './motion-types';

function resolveChildren(
  animation: AnimationReferenceMetadata,
  children: CHILDREN_ANIMATION_TYPE
) {
  if (children === 'before') {
    return [query('@*', animateChild(), { optional: true }), animation];
  }
  if (children === 'after') {
    return [animation, query('@*', animateChild(), { optional: true })];
  } else {
    return [animation];
  }
}

export function createDefaults<T extends MotionOptions>(options?: T): T {
  return {
    ...options,
  } as T;
}

export function setDefaults<T extends MotionOptions>(defaults: T) {
  return (options: Partial<T>) => Object.assign(defaults, options);
}

function mapToTime(duration: number, easing: string) {
  return `${duration}ms ${easing}`;
}

function getOptions<T extends MotionOptions>(
  options: T | undefined,
  defaults: T,
  globalDefaults: T
): Required<T> {
  return {
    ...globalDefaults,
    ...defaults,
    ...options,
  } as Required<T>;
}

export function createMotion<T extends Partial<MotionOptions>>(
  animation: AnimationReferenceMetadata,
  defaults: MotionOptions,
  globalDefaults: MotionOptions
) {
  return (options?: Partial<T>) => {
    const parsedOptions = getOptions(options, defaults, globalDefaults);
    const _duration = parsedOptions.duration;
    const _delay = parsedOptions.delay;
    const _easing = parsedOptions.easing;

    const animationOptions: AnimationOptions = {
      delay: _delay,
      params: {
        time: mapToTime(_duration, _easing),
        ...parsedOptions,
      },
    };
    return useAnimation(animation, animationOptions);
  };
}

export function buildMotion<T extends MotionOptions>(
  before: AnimationMetadata[],
  after: AnimationKeyframesSequenceMetadata | AnimationStyleMetadata,
  defaults: MotionOptions,
  globalDefaults: MotionOptions
) {
  const _motion = animation([...before, animate('{{ time }}', after)]);
  return createMotion<T>(_motion, defaults, globalDefaults);
}

export function createMotionFromAnimate<T extends Partial<MotionOptions>>(
  keyframes: AnimationKeyframesSequenceMetadata | AnimationStyleMetadata,
  defaults: MotionOptions,
  globalDefaults: MotionOptions
) {
  const _motion = animation([animate('{{ time }}', keyframes)]);
  return createMotion<T>(_motion, defaults, globalDefaults);
}

export function createTrigger<T extends Partial<TriggerMotionOptions>>(
  motionFactory: CreateMotionFactory<any>,
  triggerName: string,
  transitionName: string,
  defaults: T,
  globalDefaults: TriggerMotionOptions
) {
  return (options?: Partial<T>) => {
    const _triggerName = options?.triggerName ?? triggerName;
    const parsedOptions = getOptions(options, defaults, globalDefaults);
    const _transitionName = transitionName;
    const children = parsedOptions.children as CHILDREN_ANIMATION_TYPE;

    return trigger(_triggerName, [
      transition(
        _transitionName,
        resolveChildren(motionFactory(options), children)
      ),
    ]);
  };
}

export function createOnEnter<T extends Partial<TriggerMotionOptions>>(
  rawFactory: CreateMotionFactory<any>,
  name: string,
  defaults: T,
  globalDefaults: TriggerMotionOptions
) {
  return createTrigger<T>(
    rawFactory,
    `${name}OnEnter`,
    ':enter',
    defaults,
    globalDefaults
  );
}

export function createOnLeave<T extends Partial<TriggerMotionOptions>>(
  rawFactory: CreateMotionFactory<any>,
  name: string,
  defaults: T,
  globalDefaults: TriggerMotionOptions
) {
  return createTrigger<T>(
    rawFactory,
    `${name}OnLeave`,
    ':leave',
    defaults,
    globalDefaults
  );
}

export function createOnIncr<T extends Partial<TriggerMotionOptions>>(
  rawFactory: CreateMotionFactory<any>,
  name: string,
  defaults: T,
  globalDefaults: TriggerMotionOptions
) {
  return createTrigger<T>(
    rawFactory,
    `${name}OnIncr`,
    ':incr',
    defaults,
    globalDefaults
  );
}

export function createOnDecr<T extends Partial<TriggerMotionOptions>>(
  rawFactory: CreateMotionFactory<any>,
  name: string,
  defaults: T,
  globalDefaults: TriggerMotionOptions
) {
  return createTrigger<T>(
    rawFactory,
    `${name}OnDecr`,
    ':decr',
    defaults,
    globalDefaults
  );
}
