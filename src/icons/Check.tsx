import classNames from "classnames";
import Svg, { Path } from "react-native-svg";

export const Check = ({
  className,
  stoke,
}: {
  className?: string;
  stoke?: string;
}) => (
  <Svg
    width="9"
    height="9"
    viewBox="0 0 9 9"
    fill="none"
    className={classNames(className)}
  >
    <Path
      d="M4.5 0C2.01487 0 0 2.01487 0 4.5C0 6.98513 2.01487 9 4.5 9C6.98513 9 9 6.98513 9 4.5C9 2.01487 6.98513 0 4.5 0ZM6.58463 3.25519L4.42912 6.54975C4.42856 6.55031 4.42744 6.55088 4.42744 6.55144C4.41619 6.56831 4.41 6.58744 4.39594 6.60319C4.37625 6.62456 4.35094 6.63581 4.32844 6.65213C4.32281 6.65606 4.31719 6.66056 4.311 6.6645C4.27612 6.68644 4.24013 6.70106 4.20075 6.71063C4.18781 6.714 4.176 6.71738 4.1625 6.71962C4.13117 6.72393 4.09942 6.72431 4.068 6.72075C4.0458 6.71935 4.02378 6.71596 4.00219 6.71063C3.97991 6.70391 3.95826 6.69525 3.9375 6.68475C3.9195 6.67631 3.90038 6.67406 3.8835 6.66337C3.87113 6.6555 3.86438 6.64313 3.85369 6.63356C3.84919 6.62963 3.84356 6.6285 3.83906 6.62456L2.58413 5.46412C2.50974 5.3927 2.46634 5.29494 2.46327 5.19186C2.46019 5.08878 2.49767 4.98861 2.56766 4.91287C2.63765 4.83713 2.73456 4.79188 2.83757 4.78683C2.94057 4.78178 3.04144 4.81734 3.1185 4.88587L4.02694 5.72625L5.92537 2.82431C5.98251 2.73689 6.07204 2.67575 6.17426 2.65433C6.27648 2.63292 6.38302 2.65299 6.47044 2.71012C6.55786 2.76726 6.619 2.85679 6.64042 2.95901C6.66183 3.06123 6.64176 3.16777 6.58463 3.25519Z"
      fill={stoke || "#000000"}
    />
    <Path
      d="M4.5 0C2.01487 0 0 2.01487 0 4.5C0 6.98513 2.01487 9 4.5 9C6.98513 9 9 6.98513 9 4.5C9 2.01487 6.98513 0 4.5 0ZM6.58463 3.25519L4.42912 6.54975C4.42856 6.55031 4.42744 6.55088 4.42744 6.55144C4.41619 6.56831 4.41 6.58744 4.39594 6.60319C4.37625 6.62456 4.35094 6.63581 4.32844 6.65213C4.32281 6.65606 4.31719 6.66056 4.311 6.6645C4.27612 6.68644 4.24013 6.70106 4.20075 6.71063C4.18781 6.714 4.176 6.71738 4.1625 6.71962C4.13117 6.72393 4.09942 6.72431 4.068 6.72075C4.0458 6.71935 4.02378 6.71596 4.00219 6.71063C3.97991 6.70391 3.95826 6.69525 3.9375 6.68475C3.9195 6.67631 3.90038 6.67406 3.8835 6.66337C3.87113 6.6555 3.86438 6.64313 3.85369 6.63356C3.84919 6.62963 3.84356 6.6285 3.83906 6.62456L2.58413 5.46412C2.50974 5.3927 2.46634 5.29494 2.46327 5.19186C2.46019 5.08878 2.49767 4.98861 2.56766 4.91287C2.63765 4.83713 2.73456 4.79188 2.83757 4.78683C2.94057 4.78178 3.04144 4.81734 3.1185 4.88587L4.02694 5.72625L5.92537 2.82431C5.98251 2.73689 6.07204 2.67575 6.17426 2.65433C6.27648 2.63292 6.38302 2.65299 6.47044 2.71012C6.55786 2.76726 6.619 2.85679 6.64042 2.95901C6.66183 3.06123 6.64176 3.16777 6.58463 3.25519Z"
      fill={stoke || "#000000"}
    />
    <Path
      d="M4.5 0C2.01487 0 0 2.01487 0 4.5C0 6.98513 2.01487 9 4.5 9C6.98513 9 9 6.98513 9 4.5C9 2.01487 6.98513 0 4.5 0ZM6.58463 3.25519L4.42912 6.54975C4.42856 6.55031 4.42744 6.55088 4.42744 6.55144C4.41619 6.56831 4.41 6.58744 4.39594 6.60319C4.37625 6.62456 4.35094 6.63581 4.32844 6.65213C4.32281 6.65606 4.31719 6.66056 4.311 6.6645C4.27612 6.68644 4.24013 6.70106 4.20075 6.71063C4.18781 6.714 4.176 6.71738 4.1625 6.71962C4.13117 6.72393 4.09942 6.72431 4.068 6.72075C4.0458 6.71935 4.02378 6.71596 4.00219 6.71063C3.97991 6.70391 3.95826 6.69525 3.9375 6.68475C3.9195 6.67631 3.90038 6.67406 3.8835 6.66337C3.87113 6.6555 3.86438 6.64313 3.85369 6.63356C3.84919 6.62963 3.84356 6.6285 3.83906 6.62456L2.58413 5.46412C2.50974 5.3927 2.46634 5.29494 2.46327 5.19186C2.46019 5.08878 2.49767 4.98861 2.56766 4.91287C2.63765 4.83713 2.73456 4.79188 2.83757 4.78683C2.94057 4.78178 3.04144 4.81734 3.1185 4.88587L4.02694 5.72625L5.92537 2.82431C5.98251 2.73689 6.07204 2.67575 6.17426 2.65433C6.27648 2.63292 6.38302 2.65299 6.47044 2.71012C6.55786 2.76726 6.619 2.85679 6.64042 2.95901C6.66183 3.06123 6.64176 3.16777 6.58463 3.25519Z"
      fill={stoke || "#000000"}
    />
  </Svg>
);
