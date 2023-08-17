import { SxProps, styled } from "@mui/material";
// import { RM_COLOR_BASE_GRAY_LIGHT_80 } from "design-tokens";

// * --------  VICTOR IMPORTS, WILL BE DELETED UPON APPROVAL -------------------
import { RM_COLOR_BASE_GRAY_LIGHT_80 } from "src/design-tokens/tokens";

export const CenterTextContainerSx: SxProps = {
    position: "absolute",
    borderRadius: "50%",
    width: "63%",
    height: "63%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
};

// -----------------------------------------------------
// --------  PROGRESS LINES STYLES -------------------
// -----------------------------------------------------

export const ProgressLinesContainer = styled("section")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;
`;

export const ProgressLinesMetricContainer = styled("div")`
    display: flex;
    height: 32px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    width: 100%;
`;

export const ProgressLinesTitle = styled("div")`
    flex: 1 0 0;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

export const ProgressLinesTrack = styled("div")`
    position: relative;
    width: 100%;
    height: 4px;
    flex-shrink: 0;
    border-radius: 50px;
    background: ${RM_COLOR_BASE_GRAY_LIGHT_80};
`;

export const ProgressLinesTrackIndicator = styled("div")`
    position: absolute;
    left: 0;
    top: 0;
    height: 4px;
    flex-shrink: 0;
    border-radius: 50px;
`;
