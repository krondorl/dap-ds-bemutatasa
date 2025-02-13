import type { DapDSBadgeType, DapDSBannerType } from 'dap-design-system/dist/react-types';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'dap-ds-badge': DapDSBadgeType;
      'dap-ds-banner': DapDSBannerType;
    }
  }
}

declare module 'dap-design-system/dist/dds.js'
