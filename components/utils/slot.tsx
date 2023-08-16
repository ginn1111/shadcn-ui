import { combineRef, mergeReactProps } from '@/lib/utils';
import { AnyProps } from '@/types/global';
import { HTMLAttributes, ReactNode, cloneElement, forwardRef, isValidElement } from 'react';

type SlotProps = {
  children?: ReactNode;
} & HTMLAttributes<HTMLElement>

const Slot = forwardRef<HTMLElement, SlotProps>((slotProps, forwardedRef) => {
  const { children, ...restSlotProps } = slotProps;
  if (!isValidElement(children)) return null;

  return (
    cloneElement(children, {
      ...mergeReactProps(restSlotProps, children.props as AnyProps),
      ref: combineRef(forwardedRef, (children as any).ref)
    } as any)
  )
})

Slot.displayName = 'Slot'

export default Slot