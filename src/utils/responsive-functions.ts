import { THEME } from '../theme';

export function responsiveWidth(width: number): string {
  const widthPercentage = ((width / THEME.MEASURE.STANDART_SCREEN_WIDTH) * 100).toFixed(2);
  return `${widthPercentage}%`;
}

export function responsiveHeight(height: number): string {
  const heightPercentage = ((height / THEME.MEASURE.STANDART_SCREEN_HEIGHT) * 100).toFixed(2);
  return `${heightPercentage}%`;
}

export function responsiveFontSize(size: number): string {
  const fontPercentage = ((size / THEME.MEASURE.STANDART_SCREEN_HEIGHT) * 100).toFixed(2);
  return `${fontPercentage}vh`;
}