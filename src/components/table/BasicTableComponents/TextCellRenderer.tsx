import * as React from 'react';
import TableCell, { TableCellProps } from '@mui/material/TableCell';
import { Typography, Box } from '@mui/material';
// import { useTranslation } from '../../../hooks/translation';
import { t } from 'src/translation/index';
import { Cell } from '@tanstack/react-table';
// import { EmptyField } from './dateCellRenderers';

// needs a home
export const titleCase = (str: string) => {
    if (!str || typeof str !== 'string') {
        return '';
    }
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}



interface TextCellRendererProps extends TableCellProps {
    value: string,
    textVariant?: 'unchanged' | 'lowercase' | 'uppercase' | 'titlecase',
    textSize?: 'regular' | 'small' | 'large',
    subtitle?: string, 
    cell?: Cell<any, string> | any,
    align?: 'right' | 'left' | 'center'
};

export const TextCellRenderer: React.FC<TextCellRendererProps> = ({ value, textVariant = 'unchanged', textSize='regular', subtitle, cell, align='left', ...rest }) => {
    let formattedValue = value;
    let formattedSubtitle = subtitle || '';
    let contentSize = {};
    switch (textVariant) {
        case 'lowercase':
            formattedValue = formattedValue.toLowerCase();
            formattedSubtitle = formattedSubtitle.toLowerCase();
            break;
        case 'uppercase':
            formattedValue = formattedValue.toUpperCase();
            formattedSubtitle = formattedSubtitle.toUpperCase();
            break;
        case 'titlecase':
            formattedValue = titleCase(formattedValue);
            formattedSubtitle = titleCase(formattedSubtitle);
            break
        default:
            formattedValue = value;
            break;
    }

    switch (textSize) {
        case 'large':
            contentSize = {
                fontSize: 'var(--rm-size-font-body-large: 1rem)',
                lineHeight: 'var(--rm-line-height-font-medium)'
            };
            break;
        case 'small':
            contentSize = {
                fontSize: 'var(--rm-size-font-body-small)',
                lineHeight: 'var(--rm-line-height-font-medium)'
            };
            break;
        default:
            contentSize = {
                fontSize: 'var(--rm-size-font-body-medium)',
                lineHeight: 'var(--rm-line-height-font-medium)'
            };
            break;
    }
    return (
        <TableCell align={align} id={cell.id} key={cell.id} {...rest}>
            {value ? (
            <div style={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    fontFamily: 'var(--rm-typography-font-family-sans)',
                    ...contentSize
                }}>
                {formattedValue}
                {subtitle && (
                    <Typography
                        style={{
                            fontFamily: 'var(--rm-typography-font-family-sans)',
                            ...contentSize,
                        }}
                    >
                        {formattedSubtitle}
                    </Typography>
                )}
            </div>
            ) : (<Box>{'<EmptyField /> needs to be here'}</Box>)}
        </TableCell>
    )
};

export default TextCellRenderer;