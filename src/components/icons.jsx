// Shared inline SVG icons, ported 1:1 from the static markup.

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const ArrowRight = (props) => (
  <svg viewBox="0 0 24 24" {...stroke} {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const ArrowLeft = (props) => (
  <svg viewBox="0 0 24 24" {...stroke} {...props}>
    <path d="M19 12H5M11 18l-6-6 6-6" />
  </svg>
)

export const Logo = (props) => (
  <svg viewBox="0 0 40 40" fill="none" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" {...props}>
    <path d="M4 35 L20 5 L36 35" />
    <path d="M13 35 L20 20 L27 35" />
  </svg>
)

// Process step icons (1.7 stroke)
const pico = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const IcoSearch = () => (
  <svg viewBox="0 0 24 24" {...pico}>
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
)
export const IcoGlobe = () => (
  <svg viewBox="0 0 24 24" {...pico}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3a14 14 0 0 0 0 18M12 3a14 14 0 0 1 0 18M3 12h18" />
  </svg>
)
export const IcoBulb = () => (
  <svg viewBox="0 0 24 24" {...pico}>
    <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1V17h6v-.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2Z" />
  </svg>
)
export const IcoPen = () => (
  <svg viewBox="0 0 24 24" {...pico}>
    <path d="m12 19 7-7 3 3-7 7-3-3Z" />
    <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5Z" />
    <path d="m2 2 7.6 7.6" />
    <circle cx="11" cy="11" r="2" />
  </svg>
)
export const IcoCode = () => (
  <svg viewBox="0 0 24 24" {...pico}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
)
export const IcoRocket = () => (
  <svg viewBox="0 0 24 24" {...pico}>
    <path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.9.7-2.2-.1-3a2.1 2.1 0 0 0-2.9 0Z" />
    <path d="m12 15-3-3a22 22 0 0 1 8-10c2.5 0 4 1.5 4 4a22 22 0 0 1-10 8Z" />
    <path d="M9 12H4s.5-2.8 2-4c1.7-1.3 5 0 5 0" />
    <path d="M12 15v5s2.8-.5 4-2c1.3-1.7 0-5 0-5" />
  </svg>
)
