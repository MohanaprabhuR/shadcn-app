export function hexToOklch(hex: string): { l: number; c: number; h: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) return null

  const r = parseInt(result[1], 16) / 255
  const g = parseInt(result[2], 16) / 255
  const b = parseInt(result[3], 16) / 255

  const toLinear = (x: number) =>
    x <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4)

  const lr = toLinear(r)
  const lg = toLinear(g)
  const lb = toLinear(b)

  const l = Math.cbrt(0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb)
  const m = Math.cbrt(0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb)
  const s = Math.cbrt(0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb)

  const L = 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s
  const a = 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s
  const bVal = 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s

  const C = Math.sqrt(a * a + bVal * bVal)
  const H = (Math.atan2(bVal, a) * 180) / Math.PI

  return {
    l: Math.round(L * 1000) / 1000,
    c: Math.round(C * 1000) / 1000,
    h: Math.round((H < 0 ? H + 360 : H) * 10) / 10,
  }
}

export function oklchToHex(l: number, c: number, h: number): string {
  const hRad = (h * Math.PI) / 180
  const a = c * Math.cos(hRad)
  const bVal = c * Math.sin(hRad)

  const l_ = l + 0.3963377774 * a + 0.2158037573 * bVal
  const m_ = l - 0.1055613458 * a - 0.0638541728 * bVal
  const s_ = l - 0.0894841775 * a - 1.291485548 * bVal

  const lc = l_ * l_ * l_
  const mc = m_ * m_ * m_
  const sc = s_ * s_ * s_

  const lr = +4.0767416621 * lc - 3.3077115913 * mc + 0.2309699292 * sc
  const lg = -1.2684380046 * lc + 2.6097574011 * mc - 0.3413193965 * sc
  const lb = -0.0041960863 * lc - 0.7034186147 * mc + 1.707614701 * sc

  const toSRGB = (x: number) => {
    const clamped = Math.max(0, Math.min(1, x))
    return clamped <= 0.0031308
      ? 12.92 * clamped
      : 1.055 * Math.pow(clamped, 1 / 2.4) - 0.055
  }

  const ri = Math.round(toSRGB(lr) * 255)
  const gi = Math.round(toSRGB(lg) * 255)
  const bi = Math.round(toSRGB(lb) * 255)

  return `#${ri.toString(16).padStart(2, "0")}${gi.toString(16).padStart(2, "0")}${bi.toString(16).padStart(2, "0")}`
}

export function oklchString(l: number, c: number, h: number): string {
  return `oklch(${l} ${c} ${h})`
}

export function deriveForeground(l: number): string {
  return l > 0.55 ? "oklch(0.145 0 0)" : "oklch(0.985 0 0)"
}
