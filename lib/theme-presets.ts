export interface ThemeColors {
  background: string
  foreground: string
  card: string
  cardForeground: string
  popover: string
  popoverForeground: string
  primary: string
  primaryForeground: string
  secondary: string
  secondaryForeground: string
  muted: string
  mutedForeground: string
  accent: string
  accentForeground: string
  destructive: string
  border: string
  input: string
  ring: string
  chart1: string
  chart2: string
  chart3: string
  chart4: string
  chart5: string
}

export interface ThemePreset {
  id: string
  name: string
  primaryHex: string
  radius: number
  light: ThemeColors
  dark: ThemeColors
}

const BASE_LIGHT: ThemeColors = {
  background: "oklch(1 0 0)",
  foreground: "oklch(0.145 0 0)",
  card: "oklch(1 0 0)",
  cardForeground: "oklch(0.145 0 0)",
  popover: "oklch(1 0 0)",
  popoverForeground: "oklch(0.145 0 0)",
  primary: "oklch(0.205 0 0)",
  primaryForeground: "oklch(0.985 0 0)",
  secondary: "oklch(0.97 0 0)",
  secondaryForeground: "oklch(0.205 0 0)",
  muted: "oklch(0.97 0 0)",
  mutedForeground: "oklch(0.556 0 0)",
  accent: "oklch(0.97 0 0)",
  accentForeground: "oklch(0.205 0 0)",
  destructive: "oklch(0.577 0.245 27.325)",
  border: "oklch(0.922 0 0)",
  input: "oklch(0.922 0 0)",
  ring: "oklch(0.708 0 0)",
  chart1: "oklch(0.646 0.222 41.116)",
  chart2: "oklch(0.6 0.118 184.704)",
  chart3: "oklch(0.398 0.07 227.392)",
  chart4: "oklch(0.828 0.189 84.429)",
  chart5: "oklch(0.769 0.188 70.08)",
}

const BASE_DARK: ThemeColors = {
  background: "oklch(0.145 0 0)",
  foreground: "oklch(0.985 0 0)",
  card: "oklch(0.205 0 0)",
  cardForeground: "oklch(0.985 0 0)",
  popover: "oklch(0.205 0 0)",
  popoverForeground: "oklch(0.985 0 0)",
  primary: "oklch(0.922 0 0)",
  primaryForeground: "oklch(0.205 0 0)",
  secondary: "oklch(0.269 0 0)",
  secondaryForeground: "oklch(0.985 0 0)",
  muted: "oklch(0.269 0 0)",
  mutedForeground: "oklch(0.708 0 0)",
  accent: "oklch(0.269 0 0)",
  accentForeground: "oklch(0.985 0 0)",
  destructive: "oklch(0.704 0.191 22.216)",
  border: "oklch(1 0 0 / 10%)",
  input: "oklch(1 0 0 / 15%)",
  ring: "oklch(0.556 0 0)",
  chart1: "oklch(0.488 0.243 264.376)",
  chart2: "oklch(0.696 0.17 162.48)",
  chart3: "oklch(0.769 0.188 70.08)",
  chart4: "oklch(0.627 0.265 303.9)",
  chart5: "oklch(0.645 0.246 16.439)",
}

export const PRESETS: ThemePreset[] = [
  {
    id: "zinc",
    name: "Zinc",
    primaryHex: "#18181b",
    radius: 0.625,
    light: BASE_LIGHT,
    dark: BASE_DARK,
  },
  {
    id: "slate",
    name: "Slate",
    primaryHex: "#1e293b",
    radius: 0.625,
    light: {
      ...BASE_LIGHT,
      background: "oklch(0.984 0.003 247.858)",
      foreground: "oklch(0.129 0.042 264.695)",
      card: "oklch(1 0 0)",
      cardForeground: "oklch(0.129 0.042 264.695)",
      primary: "oklch(0.208 0.042 265.755)",
      primaryForeground: "oklch(0.984 0.003 247.858)",
      secondary: "oklch(0.968 0.007 247.896)",
      secondaryForeground: "oklch(0.208 0.042 265.755)",
      muted: "oklch(0.968 0.007 247.896)",
      mutedForeground: "oklch(0.554 0.046 264.364)",
      accent: "oklch(0.968 0.007 247.896)",
      accentForeground: "oklch(0.208 0.042 265.755)",
      border: "oklch(0.929 0.013 255.508)",
      input: "oklch(0.929 0.013 255.508)",
      ring: "oklch(0.704 0.04 256.788)",
    },
    dark: {
      ...BASE_DARK,
      background: "oklch(0.129 0.042 264.695)",
      foreground: "oklch(0.984 0.003 247.858)",
      card: "oklch(0.208 0.042 265.755)",
      cardForeground: "oklch(0.984 0.003 247.858)",
      primary: "oklch(0.929 0.013 255.508)",
      primaryForeground: "oklch(0.208 0.042 265.755)",
      secondary: "oklch(0.279 0.041 260.031)",
      secondaryForeground: "oklch(0.984 0.003 247.858)",
      muted: "oklch(0.279 0.041 260.031)",
      mutedForeground: "oklch(0.704 0.04 256.788)",
      accent: "oklch(0.279 0.041 260.031)",
      accentForeground: "oklch(0.984 0.003 247.858)",
      ring: "oklch(0.554 0.046 264.364)",
    },
  },
  {
    id: "rose",
    name: "Rose",
    primaryHex: "#e11d48",
    radius: 0.625,
    light: {
      ...BASE_LIGHT,
      primary: "oklch(0.586 0.253 17.585)",
      primaryForeground: "oklch(0.971 0.013 17.585)",
      ring: "oklch(0.586 0.253 17.585)",
    },
    dark: {
      ...BASE_DARK,
      primary: "oklch(0.645 0.246 16.439)",
      primaryForeground: "oklch(0.145 0.013 17.585)",
      ring: "oklch(0.645 0.246 16.439)",
    },
  },
  {
    id: "blue",
    name: "Blue",
    primaryHex: "#3b82f6",
    radius: 0.625,
    light: {
      ...BASE_LIGHT,
      primary: "oklch(0.546 0.245 262.881)",
      primaryForeground: "oklch(0.971 0.015 262.881)",
      ring: "oklch(0.546 0.245 262.881)",
    },
    dark: {
      ...BASE_DARK,
      primary: "oklch(0.546 0.245 262.881)",
      primaryForeground: "oklch(0.971 0.015 262.881)",
      ring: "oklch(0.546 0.245 262.881)",
    },
  },
  {
    id: "green",
    name: "Green",
    primaryHex: "#22c55e",
    radius: 0.5,
    light: {
      ...BASE_LIGHT,
      primary: "oklch(0.527 0.154 150.069)",
      primaryForeground: "oklch(0.982 0.018 155.826)",
      ring: "oklch(0.527 0.154 150.069)",
    },
    dark: {
      ...BASE_DARK,
      primary: "oklch(0.527 0.154 150.069)",
      primaryForeground: "oklch(0.982 0.018 155.826)",
      ring: "oklch(0.527 0.154 150.069)",
    },
  },
  {
    id: "orange",
    name: "Orange",
    primaryHex: "#f97316",
    radius: 0.75,
    light: {
      ...BASE_LIGHT,
      primary: "oklch(0.646 0.222 41.116)",
      primaryForeground: "oklch(0.98 0.016 73.684)",
      ring: "oklch(0.646 0.222 41.116)",
    },
    dark: {
      ...BASE_DARK,
      primary: "oklch(0.646 0.222 41.116)",
      primaryForeground: "oklch(0.98 0.016 73.684)",
      ring: "oklch(0.646 0.222 41.116)",
    },
  },
  {
    id: "violet",
    name: "Violet",
    primaryHex: "#8b5cf6",
    radius: 0.625,
    light: {
      ...BASE_LIGHT,
      primary: "oklch(0.540 0.287 285.614)",
      primaryForeground: "oklch(0.971 0.014 285.614)",
      ring: "oklch(0.540 0.287 285.614)",
    },
    dark: {
      ...BASE_DARK,
      primary: "oklch(0.540 0.287 285.614)",
      primaryForeground: "oklch(0.971 0.014 285.614)",
      ring: "oklch(0.540 0.287 285.614)",
    },
  },
  {
    id: "yellow",
    name: "Yellow",
    primaryHex: "#eab308",
    radius: 0.375,
    light: {
      ...BASE_LIGHT,
      primary: "oklch(0.795 0.184 86.047)",
      primaryForeground: "oklch(0.421 0.095 57.708)",
      ring: "oklch(0.795 0.184 86.047)",
    },
    dark: {
      ...BASE_DARK,
      primary: "oklch(0.795 0.184 86.047)",
      primaryForeground: "oklch(0.421 0.095 57.708)",
      ring: "oklch(0.795 0.184 86.047)",
    },
  },
]
