import { ReactNode } from "react"

export type AsChild = {asChild?: boolean}
export type AnyProps = Record<string, any>;
export type RootLayoutProps = {
  children: ReactNode
}