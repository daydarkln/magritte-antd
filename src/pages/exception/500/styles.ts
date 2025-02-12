// styles.ts
import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css }) => ({
  pageLayout: css`
    display: grid;
    grid-template-columns: 92px auto;
    gap: 28px;
  `,

  onlineBadge: css`
    .ant-badge-dot {
      top: auto;
      right: 6px;
      bottom: -6px;
      width: 12px;
      height: 12px;
      background: #0ea658;
      box-shadow: 0 0 0 3px #ffffff;
    }
  `,

  likeIcon: css`
    font-size: 24px;
    color: #aabbca;
    transition: color 0.3s;

    &.active {
      color: #ff3c77;
    }

    &:hover {
      color: #ff3c77;
      cursor: pointer;
    }
  `,
  radioGroup: css`
    .ant-radio-button-wrapper:not(:first-child)::before {
      display: none;
    }
    .ant-radio-button-wrapper,
    .ant-radio-button-wrapper:last-child,
    .ant-radio-button-wrapper:first-child {
      font-weight: 600;
      font-size: 1;
      border: none;
      border-radius: 20px;
      border-start-start-radius: 20px;
      border-end-start-radius: 20px;
      border-start-end-radius: 20px;
      border-end-end-radius: 20px;
      padding-inline: 16px;
    }
  `,
}));
