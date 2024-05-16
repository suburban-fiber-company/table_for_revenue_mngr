import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * The `nameof` function in TypeScript returns the name of a property in an object.
 * @param name - The `name` parameter is a key of an object of type `T`.
 */
export const nameof = <T extends object>(name: keyof T) => name;