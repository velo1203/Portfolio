// Tokens follow DESIGN.md (Raycast system). GlobalStyle exposes them as CSS variables.
export const tokens = {
    canvas: "#07080a",
    surface: "#0d0d0d",
    "surface-elevated": "#101111",
    "surface-card": "#121212",
    // row fills: the surface ladder alone is too faint to show which row is selected
    "surface-hover": "rgba(255, 255, 255, 0.04)",
    "surface-active": "rgba(255, 255, 255, 0.08)",
    hairline: "#242728",
    "hairline-soft": "rgba(255, 255, 255, 0.08)",
    "hairline-strong": "rgba(255, 255, 255, 0.16)",
    ink: "#f4f4f6",
    body: "#cdcdcd",
    mute: "#9c9c9d",
    ash: "#6a6b6c",
    primary: "#ffffff",
    "primary-pressed": "#e8e8e8",
    "on-primary": "#000000",
    "on-dark": "#ffffff",
    "on-dark-mute": "rgba(255, 255, 255, 0.72)",

    "radius-xs": "4px",
    "radius-sm": "6px",
    "radius-md": "8px",
    "radius-lg": "10px",
    "radius-xl": "16px",

    "ease-out": "cubic-bezier(0.23, 1, 0.32, 1)",
};

export const media = {
    mobile: "@media (max-width: 600px)",
    tablet: "@media (max-width: 900px)",
    hover: "@media (hover: hover) and (pointer: fine)",
    reducedMotion: "@media (prefers-reduced-motion: reduce)",
};
