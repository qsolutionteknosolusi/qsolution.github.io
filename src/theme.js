/**
 * theme.js
 *
 * Purpose:
 * Defines the shared Fluent UI color and typography tokens.
 */
import { createLightTheme } from "@fluentui/react-components";

/**
 * QSolution design tokens.
 *
 * The brand ramp is intentionally kept separate from semantic tokens so new
 * surfaces can use the same visual language without hard-coded values.
 */
export const qsolutionColors = {
  primary: "#0F766E",
  primaryDark: "#115E59",
  primaryDarker: "#042F2E",
  secondary: "#10B981",
  secondarySoft: "#D1FAE5",
  accent: "#F59E0B",
  accentSoft: "#FEF3C7",
  ink: "#12312F",
  muted: "#526B68",
  background: "#FFFFFF",
  backgroundSubtle: "#F8FAFC",
  border: "#DCE8E5",
};

const qsolutionBrand = {
  10: "#042F2E",
  20: "#064E4B",
  30: "#075E59",
  40: "#0F766E",
  50: "#0D887E",
  60: "#10B981",
  70: "#34C99F",
  80: "#62D8B4",
  90: "#93E5CC",
  100: "#B8EFDD",
  110: "#D1FAE5",
  120: "#E6F9F2",
  130: "#F0FDF9",
  140: "#F7FFFC",
  150: "#FAFFFD",
  160: "#FFFFFF",
};

const fluentTheme = createLightTheme(qsolutionBrand);

/**
 * Shared Fluent UI theme for every route.
 *
 * Explicit semantic overrides keep the CTA and brand contrast stable even
 * when Fluent's generated ramp changes in a future package release.
 */
export const qsolutionTheme = {
  ...fluentTheme,
  colorBrandBackground: qsolutionColors.primary,
  colorBrandBackgroundHover: qsolutionColors.primaryDark,
  colorBrandBackgroundPressed: qsolutionColors.primaryDarker,
  colorBrandForeground1: qsolutionColors.primary,
  colorBrandForeground2: qsolutionColors.primaryDark,
  colorCompoundBrandBackground: qsolutionColors.primary,
  colorCompoundBrandBackgroundHover: qsolutionColors.primaryDark,
  colorCompoundBrandBackgroundPressed: qsolutionColors.primaryDarker,
  colorNeutralBackground1: qsolutionColors.background,
  colorNeutralBackground2: qsolutionColors.backgroundSubtle,
  colorNeutralBackground3: "#F1F5F4",
  colorNeutralForeground1: qsolutionColors.ink,
  colorNeutralForeground2: qsolutionColors.muted,
  colorNeutralStroke1: qsolutionColors.border,
  colorNeutralStrokeAccessible: "#47635F",
  fontFamilyBase: '"Plus Jakarta Sans", "Segoe UI Variable", "Segoe UI", sans-serif',
  fontFamilyMonospace: '"Cascadia Code", Consolas, monospace',
  borderRadiusMedium: "8px",
  borderRadiusLarge: "12px",
  borderRadiusXLarge: "16px",
  shadow4: "0 1px 2px rgba(4, 47, 46, 0.06)",
  shadow8: "0 4px 12px rgba(4, 47, 46, 0.08)",
  shadow16: "0 10px 28px rgba(4, 47, 46, 0.12)",
  shadow64: "0 24px 64px rgba(4, 47, 46, 0.16)",
};

export const qsolutionTypography = {
  display: {
    fontSize: "64px",
    lineHeight: 1.05,
    fontWeight: 800,
  },
  mobileDisplay: {
    fontSize: "38px",
    lineHeight: 1.1,
    fontWeight: 800,
  },
  subheadline: {
    fontSize: "22px",
    lineHeight: 1.55,
    fontWeight: 500,
  },
};
