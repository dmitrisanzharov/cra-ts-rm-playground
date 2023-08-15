import React from "react";
import { Typography } from "@mui/material";
import {
    ProgressLinesContainer,
    ProgressLinesMetricContainer,
    ProgressLinesTitle,
    ProgressLinesTrack,
    ProgressLinesTrackIndicator,
} from "./styles";

interface ProgressLinesComponentProps {
    metric: number;
    total: number;
    label: string;
    color: string;
    href: string;
}

export const ProgressLinesComponent: React.FC<ProgressLinesComponentProps> = ({
    metric,
    total,
    label,
    color,
    href,
}) => {
    //

    const calcWidth = (): number => {
        return Math.round((metric / total) * 100);
    };

    return (
        <ProgressLinesContainer className=''>
            <ProgressLinesMetricContainer>
                <ProgressLinesTitle>
                    <Typography variant='body2'>
                        <a
                            href={href}
                            target='_blank'
                            rel='noreferrer'
                            style={{ color: "black", textDecoration: "none" }}
                        >
                            {" "}
                            {label}
                        </a>
                    </Typography>
                </ProgressLinesTitle>
                <Typography variant='body2' sx={{ textAlign: "right" }}>
                    {" "}
                    {metric}
                </Typography>
            </ProgressLinesMetricContainer>
            <ProgressLinesTrack>
                <ProgressLinesTrackIndicator
                    sx={{ background: color, width: `${calcWidth()}%` }}
                ></ProgressLinesTrackIndicator>
            </ProgressLinesTrack>
        </ProgressLinesContainer>
    );
};

export default ProgressLinesComponent;
