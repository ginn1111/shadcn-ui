import { AnyProps } from "@/types/global";
import { type ClassValue, clsx } from "clsx"
import { MutableRefObject } from "react";
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function mergeReactProps(parentProps: AnyProps, childProps: AnyProps) {
	// All child props should override.
  const overrideProps = {...childProps}

  for(const propName in childProps) {
    const parentPropValue = parentProps[propName]
    const childPropValue = childProps[propName]

    const isHandler = /^on[A-Z]/.test(propName)

    if(isHandler) {
      if(childPropValue && parentPropValue) {
        overrideProps[propName] = (...args: unknown[]) => {
          childPropValue?.(...args)
          parentPropValue?.(...args)
        }
      }
      /**
       * children event handler do not exist or
       * parent event handler do not exist or 
       * both do not exist
       */
      else {
        overrideProps[propName] = parentPropValue // children event handler can call parent event handler or nothing!
      }
    } else if (propName === 'style') {
      // override style or parent
      overrideProps[propName]= {...parentPropValue,...childPropValue }
    } else if(propName === 'className') {
      // join the class of parent and children -> children override
      console.log(parentPropValue, childPropValue)
      overrideProps[propName] = [parentPropValue, childPropValue].filter(Boolean).join(' ')
    }
  }

  return {...parentProps, ...overrideProps}
}

export function combineRef<Instance> (...refs: React.Ref<Instance>[]) {
  return (instance: Instance | null) => {
    refs.forEach(ref => {
      if(ref instanceof Function) {
        ref(instance)
      } else if(ref != null) {
        (ref as MutableRefObject<Instance | null>).current = instance
      }
    })
  }
}