import { Component } from '@angular/core';
import { SidebarLinkComponent } from './sidebar-link/sidebar-link.component';

interface SidebarRoot {
  name: string;
  groups: SidebarGroup[];
  children?: SidebarLink[];
}

interface SidebarGroup {
  name: string;
  children: SidebarLink[];
}

export interface SidebarLink {
  name: string;
  url: string;
  mode?: 'experimental';
}

export const SIDEBAR_ROUTES = [
  {
    name: 'Getting Started',
    children: [
      {
        name: 'Introduction',
        url: '/doc/introduction',
      },
      {
        name: 'Installation',
        url: '/doc/installation',
      },
    ],
  },
  {
    name: 'General CSS',
    children: [
      generalLink('expand'),
      generalLink('expand-x'),
      generalLink('collapse'),
      generalLink('collapse-x'),
    ],
  },
  {
    name: 'Animate CSS',
    groups: [
      {
        name: 'Attention Seekers',
        children: [
          animateCSSLink('bounce'),
          animateCSSLink('flash'),
          animateCSSLink('headShake'),
          animateCSSLink('heartBeat'),
          animateCSSLink('jello'),
          animateCSSLink('pulse'),
          animateCSSLink('rubberBand'),
          animateCSSLink('shakeX'),
          animateCSSLink('shakeY'),
          animateCSSLink('swing'),
          animateCSSLink('tada'),
          animateCSSLink('wobble'),
        ],
      },
      {
        name: 'Back Entrances',
        children: [
          animateCSSLink('backInDown'),
          animateCSSLink('backInLeft'),
          animateCSSLink('backInRight'),
          animateCSSLink('backInUp'),
        ],
      },
      {
        name: 'Back Exits',
        children: [
          animateCSSLink('backOutDown'),
          animateCSSLink('backOutLeft'),
          animateCSSLink('backOutRight'),
          animateCSSLink('backOutUp'),
        ],
      },
      {
        name: 'Flippers',
        children: [
          animateCSSLink('flip'),
          animateCSSLink('flipInX'),
          animateCSSLink('flipInY'),
          animateCSSLink('flipOutX'),
          animateCSSLink('flipOutY'),
        ],
      },
      {
        name: 'Specials',
        children: [
          animateCSSLink('hinge'),
          animateCSSLink('jackInTheBox'),
          animateCSSLink('rollOut'),
          animateCSSLink('rollIn'),
        ],
      },
      {
        name: 'Zooming Entrances',
        children: [
          animateCSSLink('zoomIn'),
          animateCSSLink('zoomInDown'),
          animateCSSLink('zoomInLeft'),
          animateCSSLink('zoomInRight'),
          animateCSSLink('zoomInUp'),
        ],
      },
      {
        name: 'Zooming Exits',
        children: [
          animateCSSLink('zoomOut'),
          animateCSSLink('zoomOutDown'),
          animateCSSLink('zoomOutLeft'),
          animateCSSLink('zoomOutRight'),
          animateCSSLink('zoomOutUp'),
        ],
      },
      {
        name: 'Sliding Entrances',
        children: [
          animateCSSLink('slideInDown'),
          animateCSSLink('slideInLeft'),
          animateCSSLink('slideInRight'),
          animateCSSLink('slideInUp'),
        ],
      },
      {
        name: 'Sliding Exits',
        children: [
          animateCSSLink('slideOutDown'),
          animateCSSLink('slideOutLeft'),
          animateCSSLink('slideOutRight'),
          animateCSSLink('slideOutUp'),
        ],
      },
      {
        name: 'Bouncing Exits',
        children: [
          animateCSSLink('bounceOut'),
          animateCSSLink('bounceOutDown'),
          animateCSSLink('bounceOutLeft'),
          animateCSSLink('bounceOutRight'),
          animateCSSLink('bounceOutUp'),
        ],
      },
      {
        name: 'Bouncing Entrances',
        children: [
          animateCSSLink('bounceIn'),
          animateCSSLink('bounceInDown'),
          animateCSSLink('bounceInLeft'),
          animateCSSLink('bounceInRight'),
          animateCSSLink('bounceInUp'),
        ],
      },
      {
        name: 'Light Speed',
        children: [
          animateCSSLink('lightSpeedInLeft'),
          animateCSSLink('lightSpeedInRight'),
          animateCSSLink('lightSpeedOutLeft'),
          animateCSSLink('lightSpeedOutRight'),
        ],
      },
      {
        name: 'Rotating Entrances',
        children: [
          animateCSSLink('rotateIn'),
          animateCSSLink('rotateInDownLeft'),
          animateCSSLink('rotateInDownRight'),
          animateCSSLink('rotateInUpLeft'),
          animateCSSLink('rotateInUpRight'),
        ],
      },
      {
        name: 'Rotating Exits',
        children: [
          animateCSSLink('rotateOut'),
          animateCSSLink('rotateOutDownLeft'),
          animateCSSLink('rotateOutDownRight'),
          animateCSSLink('rotateOutUpLeft'),
          animateCSSLink('rotateOutUpRight'),
        ],
      },
      {
        name: 'Fading Entrances',
        children: [
          animateCSSLink('fadeIn'),
          animateCSSLink('fadeInDown'),
          animateCSSLink('fadeInDownBig'),
          animateCSSLink('fadeInLeft'),
          animateCSSLink('fadeInLeftBig'),
          animateCSSLink('fadeInRight'),
          animateCSSLink('fadeInRightBig'),
          animateCSSLink('fadeInUp'),
          animateCSSLink('fadeInUpBig'),
          animateCSSLink('fadeInTopLeft'),
          animateCSSLink('fadeInTopRight'),
          animateCSSLink('fadeInBottomLeft'),
          animateCSSLink('fadeInBottomRight'),
        ],
      },
      {
        name: 'Fading Exits',
        children: [
          animateCSSLink('fadeOut'),
          animateCSSLink('fadeOutDown'),
          animateCSSLink('fadeOutDownBig'),
          animateCSSLink('fadeOutLeft'),
          animateCSSLink('fadeOutLeftBig'),
          animateCSSLink('fadeOutRight'),
          animateCSSLink('fadeOutRightBig'),
          animateCSSLink('fadeOutUp'),
          animateCSSLink('fadeOutUpBig'),
          animateCSSLink('fadeOutTopLeft'),
          animateCSSLink('fadeOutTopRight'),
          animateCSSLink('fadeOutBottomLeft'),
          animateCSSLink('fadeOutBottomRight'),
        ],
      },
    ],
  },
] as SidebarRoot[];

function animateCSSLink(name: string) {
  return {
    name: name,
    url: `/doc/animatecss/${name}`,
  };
}

function generalLink(name: string) {
  return {
    name: name,
    url: `/doc/generalcss/${name}`,
  };
}

export function getAllSidebarLinks() {
  return SIDEBAR_ROUTES.flatMap((group) => group.children);
}

@Component({
  selector: 'app-sidebar',
  imports: [SidebarLinkComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  routes: SidebarRoot[] = SIDEBAR_ROUTES;
}
