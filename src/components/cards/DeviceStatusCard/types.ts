import { CardProps } from "@mui/material";

export type DeviceStatus = {
    active: number,
    issue: number,
    disconnect: number,
    untracked: number,
    other: number
};

export interface DeviceStatusCardProps extends CardProps {
    numberOfRecords: number,
    loading: boolean,
    deviceStatus: DeviceStatus
};