/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],

  darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary-fixed": "#d8e2ff",
                        "inverse-primary": "#adc7ff",
                        "primary-fixed-dim": "#adc7ff",
                        "surface": "#f9f9ff",
                        "surface-container-low": "#f2f3fd",
                        "surface-container": "#ecedf7",
                        "inverse-surface": "#2d3038",
                        "on-primary-fixed": "#001a41",
                        "on-primary-fixed-variant": "#004493",
                        "surface-dim": "#d8d9e3",
                        "on-error-container": "#93000a",
                        "primary": "#005bbf",
                        "surface-variant": "#e0e2ec",
                        "on-tertiary": "#ffffff",
                        "tertiary": "#496456",
                        "tertiary-container": "#627d6e",
                        "error": "#ba1a1a",
                        "on-tertiary-fixed-variant": "#324c3f",
                        "error-container": "#ffdad6",
                        "on-secondary-fixed-variant": "#3a475d",
                        "surface-container-high": "#e6e8f2",
                        "on-tertiary-container": "#000703",
                        "tertiary-fixed": "#cce9d8",
                        "background": "#f9f9ff",
                        "on-surface": "#191c23",
                        "on-background": "#191c23",
                        "primary-container": "#1a73e8",
                        "surface-container-lowest": "#ffffff",
                        "on-tertiary-fixed": "#062015",
                        "secondary-container": "#d5e3fe",
                        "secondary-fixed": "#d5e3fe",
                        "outline": "#727785",
                        "surface-container-highest": "#e0e2ec",
                        "on-primary-container": "#ffffff",
                        "on-surface-variant": "#414754",
                        "tertiary-fixed-dim": "#b0cdbc",
                        "on-secondary-container": "#57657c",
                        "on-secondary-fixed": "#0e1c2f",
                        "on-secondary": "#ffffff",
                        "outline-variant": "#c1c6d6",
                        "inverse-on-surface": "#eff0fa",
                        "surface-tint": "#005bc0",
                        "on-primary": "#ffffff",
                        "secondary": "#515f76",
                        "on-error": "#ffffff",
                        "secondary-fixed-dim": "#b9c7e1",
                        "surface-bright": "#f9f9ff"
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    spacing: {
                        "margin-mobile": "16px",
                        "section-gap": "120px",
                        "gutter": "24px",
                        "base": "8px",
                        "margin-desktop": "48px",
                        "container-max": "1280px"
                    },
                    fontFamily: {
                        "headline-xl": ["Plus Jakarta Sans"],
                        "headline-md": ["Plus Jakarta Sans"],
                        "label-md": ["Inter"],
                        "body-lg": ["Inter"],
                        "headline-lg": ["Plus Jakarta Sans"],
                        "label-sm": ["Inter"],
                        "headline-lg-mobile": ["Plus Jakarta Sans"],
                        "body-md": ["Inter"]
                    },
                    fontSize: {
                        "headline-xl": ["64px", { "lineHeight": "72px", "letterSpacing": "-0.02em", "fontWeight": "800" }],
                        "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "700" }],
                        "label-md": ["14px", { "lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "600" }],
                        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
                        "headline-lg": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
                        "label-sm": ["12px", { "lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "700" }],
                        "headline-lg-mobile": ["32px", { "lineHeight": "40px", "fontWeight": "700" }],
                        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }]
                    }
                }
            },
        

  plugins: [],
      };

