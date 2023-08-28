/* eslint-disable */
import {
    RM_COLOR_BASE_GRAY_LIGHT_30,
    RM_LINE_HEIGHT_FONT_BODY_SMALL,
    RM_TYPOGRAPHY_FONT_FAMILY_SANS,
} from 'src/design-tokens/tokens';
import { defaults } from 'react-chartjs-2';

defaults.global.defaultFontColor = RM_COLOR_BASE_GRAY_LIGHT_30;
defaults.global.defaultFontFamily = RM_TYPOGRAPHY_FONT_FAMILY_SANS;
defaults.global.defaultFontSize = 12;
defaults.global.defaultLineHeight = RM_LINE_HEIGHT_FONT_BODY_SMALL;
defaults.global.legend.labels.usePointStyle = true;
defaults.global.legend.display = true;
defaults.global.legend.position = 'bottom';
