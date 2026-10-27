// 디자인 토큰. 색은 모두 단색(불투명 hex)만 쓰고 그라데이션은 쓰지 않는다.
// 컴포넌트에서는 값을 직접 적지 말고 여기 있는 토큰만 가져다 쓴다.
export const theme = {
    fonts: {
        primary: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Noto Sans KR', sans-serif",
    },

    colors: {
        // 배경 단계: background < surface < surfaceRaised
        background: "#000000",
        surface: "#0e0e10",
        surfaceRaised: "#17171a",
        border: "#232327",
        borderStrong: "#3a3a42",

        text: "#f5f5f7",
        textSecondary: "#a1a1a6",
        textTertiary: "#6e6e73",

        accent: "#7b8ff7",
        accentHover: "#8e9ff9",
        accentSubtle: "#161a33",
        accentBorder: "#2c3466",
        onAccent: "#ffffff",

        // 썸네일처럼 밝은 바탕이 필요한 곳
        paper: "#ffffff",
        onPaper: "#111111",
    },

    // 4px 단위 간격
    space: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "32px",
        "3xl": "48px",
        "4xl": "64px",
        section: "120px",
    },

    radius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        pill: "999px",
    },

    fontSize: {
        xs: "0.75rem",
        sm: "0.8125rem",
        md: "0.9375rem",
        lg: "1.0625rem",
        xl: "1.375rem",
        "2xl": "2rem",
        display: "clamp(3rem, 7vw, 5.2rem)",
    },

    fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700,
    },

    shadow: {
        card: "0 24px 48px #000000",
    },

    transition: {
        fast: "0.15s ease",
        base: "0.2s ease",
        slow: "0.35s ease",
    },

    layout: {
        maxWidth: "980px",
        headerHeight: "52px",
    },

    media: {
        mobile: "@media screen and (max-width: 600px)",
        tablet: "@media screen and (max-width: 1024px)",
        // 마우스가 있는 기기에서만 hover 효과를 준다(터치에서 눌린 채 남지 않게)
        hover: "@media (hover: hover)",
    },
};

export type Theme = typeof theme;
