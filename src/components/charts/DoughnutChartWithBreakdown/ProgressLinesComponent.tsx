import React from 'react';
import { Typography } from '@mui/material';
import {
    ProgressLinesContainer,
    ProgressLinesMetricContainer,
    ProgressLinesTitle,
    ProgressLinesTrack,
    ProgressLinesTrackIndicator,
} from './styles';

interface ProgressLinesComponentPropsInterface {
    metric: number;
    total: number;
    label: string;
    color: string;
    href: string;
    componentVariant: string;
}

export const ProgressLinesComponent: React.FC<ProgressLinesComponentPropsInterface> = ({
    metric,
    total,
    label,
    color,
    href,
    componentVariant,
    ...rest
}) => {
    //

    const calcWidth = (): number => {
        return Math.round((metric / total) * 100);
    };

    return (
        <ProgressLinesContainer {...rest}>
            <ProgressLinesMetricContainer>
                <ProgressLinesTitle>
                    <Typography variant={`${componentVariant === 'vertical' ? 'body2' : 'body1'}`} className=''>
                        <a
                            href={href}
                            target='_blank'
                            rel='noreferrer'
                            style={{ color: 'black', textDecoration: 'none' }}
                        >
                            {label}
                        </a>
                    </Typography>
                </ProgressLinesTitle>
                <Typography variant={`${componentVariant === 'vertical' ? 'body2' : 'body1'}`} sx={{ textAlign: 'right' }}>
                    {metric}
                </Typography>
            </ProgressLinesMetricContainer>
            <ProgressLinesTrack sx={{height: `${componentVariant === 'vertical' ? '4px' : '6px'}`}}>
                <ProgressLinesTrackIndicator
                    sx={{ background: color, width: `${calcWidth()}%`, height: `${componentVariant === 'vertical' ? '4px' : '6px'}` }}
                />
            </ProgressLinesTrack>
        </ProgressLinesContainer>
    );
};

export default ProgressLinesComponent;
