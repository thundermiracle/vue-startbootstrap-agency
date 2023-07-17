import type { AllowedComponentProps, Component, VNodeProps } from 'vue'

// get props of vue component
export type ComponentProps<C extends Component> = C extends new (...args: any) => any
  ? Omit<InstanceType<C>['$props'], keyof VNodeProps | keyof AllowedComponentProps>
  : never
