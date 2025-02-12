// theme-config.tsx
import { ThemeConfig } from 'antd';

export const themeConfig: ThemeConfig = {
  token: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontSizeSM: 14,
    fontSizeLG: 22,
    fontSizeHeading1: 38,
    fontSizeHeading2: 28,
    fontSizeHeading3: 24,
    fontSizeHeading4: 22,
    fontSizeHeading5: 16,
    borderRadius: 12,
    colorPrimary: '#000',
    controlHeight: 48,
    controlHeightSM: 40,
    colorTextPlaceholder: '#AABBCA',
    colorBorderSecondary: '#AABBCA',
    controlPaddingHorizontal: 12,
    colorSplit: '#DCE3EB',
  },
  components: {
    Card: {
      boxShadow: 'none',
      borderRadius: 24,
      colorBorderSecondary: '#DCE3EB',
    },
    Avatar: {
      borderRadius: 16,
      groupBorderColor: 'rgba(0,0,0,0.08)',
    },
    Radio: {
      fontWeightStrong: 600,
      buttonBg: '#F1F4F9',
      buttonColor: '#6A7885',
      buttonCheckedBg: '#000',
      buttonSolidCheckedColor: '#fff',
    },
    Button: {
      fontWeight: 600,
      paddingBlock: 10,
      defaultBorderColor: 'transparent',
      defaultHoverBorderColor: 'transparent',
      defaultActiveBorderColor: 'transparent',
      defaultBg: '#F1F4F9',
      defaultHoverBg: '#AABBCA',
    },
    Typography: {
      titleMarginBottom: 0,
      lineHeightHeading2: 1.466667,
    },
    Menu: {
      itemSelectedBg: 'none',
      itemHeight: 44,
    },
    Form: {
      margin: 8,
    },
    Input: {
      paddingBlock: 10,
      hoverBorderColor: '#AABBCA',
    },
    Select: {
      paddingContentHorizontal: 12,
      showArrowPaddingInlineEnd: 27,
      optionSelectedColor: 'white',
      paddingSM: 17,
    },
  },
};

export const providerConfig = {
  layout: {
    style: {
      background: 'none',
    },
  },
  drawer: {
    styles: {
      wrapper: {
        margin: 12,
        width: 480,
      },
      content: {
        borderRadius: 24,
      },
      header: {
        padding: 24,
      },
      footer: {
        padding: 24,
      },
    },
  },
  button: {
    style: {
      boxShadow: 'none',
    },
  },
  theme: themeConfig,
};
