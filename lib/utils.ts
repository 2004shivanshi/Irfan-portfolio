import { type ClassValue, clsx } from "clsx"
import OpenAI from "openai";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

