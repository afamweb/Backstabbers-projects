/** Design tokens for The Backstarbbers site. Rebuild CSS with: npm run build */
module.exports = {
  "content": [
    "./*.html",
    "./site.js"
  ],
  "darkMode": "class",
  "theme": {
    "extend": {
      "colors": {
        "on-primary-fixed-variant": "#005236",
        "tertiary-fixed": "#e9ddff",
        "on-primary-container": "#00422b",
        "inverse-on-surface": "#2c303a",
        "on-tertiary": "#3c0091",
        "tertiary-fixed-dim": "#d0bcff",
        "on-surface-variant": "#bbcabf",
        "on-error": "#690005",
        "surface-container-high": "#262a34",
        "surface": "#0f131c",
        "secondary-fixed-dim": "#ffb690",
        "outline-variant": "#3c4a42",
        "primary-container": "#10b981",
        "on-tertiary-container": "#4600a7",
        "surface-bright": "#353943",
        "secondary-container": "#ec6a06",
        "inverse-primary": "#006c49",
        "primary": "#4edea3",
        "surface-variant": "#31353f",
        "on-background": "#dfe2ef",
        "secondary": "#ffb690",
        "on-error-container": "#ffdad6",
        "on-secondary-fixed": "#341100",
        "inverse-surface": "#dfe2ef",
        "surface-tint": "#4edea3",
        "on-tertiary-fixed": "#23005c",
        "tertiary-container": "#b090ff",
        "on-primary-fixed": "#002113",
        "tertiary": "#d0bcff",
        "surface-container-highest": "#31353f",
        "on-secondary-container": "#4a1c00",
        "secondary-fixed": "#ffdbca",
        "on-secondary": "#552100",
        "primary-fixed-dim": "#4edea3",
        "on-primary": "#003824",
        "error": "#ffb4ab",
        "error-container": "#93000a",
        "surface-dim": "#0f131c",
        "surface-container": "#1c1f29",
        "on-surface": "#dfe2ef",
        "on-secondary-fixed-variant": "#783200",
        "surface-container-low": "#181b25",
        "primary-fixed": "#6ffbbe",
        "outline": "#86948a",
        "on-tertiary-fixed-variant": "#5516be",
        "background": "#0f131c",
        "surface-container-lowest": "#0a0e17"
      },
      "borderRadius": {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      "spacing": {
        "space-xl": "2.5rem",
        "gutter-mobile": "0.75rem",
        "margin-mobile": "1rem",
        "space-xs": "0.25rem",
        "space-lg": "1.5rem",
        "margin": "2rem",
        "gutter": "1.25rem",
        "space-md": "1rem",
        "space-sm": "0.5rem"
      },
      "fontFamily": {
        "label-code": [
          "JetBrains Mono"
        ],
        "body-lg": [
          "Geist"
        ],
        "headline-sm": [
          "Space Grotesk"
        ],
        "display-xl": [
          "Space Grotesk"
        ],
        "body-md": [
          "Geist"
        ],
        "code-inline": [
          "JetBrains Mono"
        ],
        "display-xl-mobile": [
          "Space Grotesk"
        ],
        "headline-md": [
          "Space Grotesk"
        ],
        "headline-lg": [
          "Space Grotesk"
        ],
        "headline-lg-mobile": [
          "Space Grotesk"
        ],
        "badge-micro": [
          "JetBrains Mono"
        ],
        "body-sm": [
          "Geist"
        ]
      },
      "fontSize": {
        "label-code": [
          "12px",
          {
            "lineHeight": "16px",
            "letterSpacing": "0.04em",
            "fontWeight": "600"
          }
        ],
        "body-lg": [
          "18px",
          {
            "lineHeight": "28px",
            "fontWeight": "400"
          }
        ],
        "headline-sm": [
          "20px",
          {
            "lineHeight": "28px",
            "letterSpacing": "-0.01em",
            "fontWeight": "600"
          }
        ],
        "display-xl": [
          "56px",
          {
            "lineHeight": "64px",
            "letterSpacing": "-0.04em",
            "fontWeight": "700"
          }
        ],
        "body-md": [
          "15px",
          {
            "lineHeight": "24px",
            "fontWeight": "400"
          }
        ],
        "code-inline": [
          "13px",
          {
            "lineHeight": "18px",
            "fontWeight": "500"
          }
        ],
        "display-xl-mobile": [
          "38px",
          {
            "lineHeight": "44px",
            "letterSpacing": "-0.03em",
            "fontWeight": "700"
          }
        ],
        "headline-md": [
          "28px",
          {
            "lineHeight": "36px",
            "letterSpacing": "-0.02em",
            "fontWeight": "600"
          }
        ],
        "headline-lg": [
          "40px",
          {
            "lineHeight": "48px",
            "letterSpacing": "-0.03em",
            "fontWeight": "600"
          }
        ],
        "headline-lg-mobile": [
          "28px",
          {
            "lineHeight": "36px",
            "letterSpacing": "-0.02em",
            "fontWeight": "600"
          }
        ],
        "badge-micro": [
          "10px",
          {
            "lineHeight": "12px",
            "letterSpacing": "0.08em",
            "fontWeight": "700"
          }
        ],
        "body-sm": [
          "13px",
          {
            "lineHeight": "20px",
            "fontWeight": "400"
          }
        ]
      },
      "keyframes": {
        "fadeIn": {
          "from": {
            "opacity": "0",
            "transform": "translateY(4px)"
          },
          "to": {
            "opacity": "1",
            "transform": "none"
          }
        }
      },
      "animation": {
        "fade-in": "fadeIn 0.3s ease-out"
      }
    }
  }
};
