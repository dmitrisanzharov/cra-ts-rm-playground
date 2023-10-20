import * as React from 'react';
import { Button, ButtonProps, CircularProgress, Dialog, DialogActions, DialogTitle, IconButton, TableCell, TableCellProps, Tooltip } from '@mui/material';
import { CheckCircle, Delete as DeleteIcon, Warning, AddTask as AddTaskIcon } from '@mui/icons-material';
import { t } from 'src/translation/index';

export interface DeleteButtonCellProps extends TableCellProps {
    buttonProps?: ButtonProps,
    loading?: boolean,
    failed?: boolean,
    success?: boolean,
    confirmationLabel?: string,
    defaultIcon?: 'delete' | 'addTask'
}

export const DeleteButtonCellRenderer: React.FC<DeleteButtonCellProps> = ({ buttonProps, loading, failed, success, confirmationLabel, defaultIcon, ...rest }) => {
    const [open, setOpen] = React.useState(false);

    const [openConfirm, setOpenConfirm] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const deleteRecord = React.useCallback((event: MouseEvent) => {
        buttonProps?.onClick?.(event as any);
        setOpenConfirm(false);
    }, [])

    const icon = React.useMemo(() => {
        setOpenConfirm(false);
        if (failed) {
            setOpen(true)
            return (
                <Warning />
            )
        }
        if (success) {
            setOpen(true)
            return (
                <CheckCircle />
            )

        }
        return (defaultIcon === 'addTask' ? <AddTaskIcon />: <DeleteIcon />);
    }, [failed, success, defaultIcon])

    return (
        <TableCell sx={{ p: 0 }} size='small' {...rest} align={defaultIcon && 'center'}>
            <Tooltip
                title={success ? 'success' : failed ? 'error' : (defaultIcon === 'addTask' ? t(
                    'MARK_AS_COMPLETE'
                ) : 'delete')}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
                color={success ? 'success' : failed ? 'error' : undefined}
            >
                <IconButton
                    {...buttonProps}
                    color={success ? 'success' : failed ? 'error' : undefined}
                    onClick={() => setOpenConfirm(true)}
                >
                    {loading ? <CircularProgress size={16} /> : icon}
                </IconButton>
            </Tooltip>
            <Dialog open={openConfirm} onClose={() => setOpenConfirm(false)}>
                <DialogTitle>{confirmationLabel}</DialogTitle>
                <DialogActions>
                    <Button autoFocus onClick={() => setOpenConfirm(false)}>
                        Cancel
                    </Button>
                    <Button onClick={deleteRecord as any} color="error">Delete</Button>
                </DialogActions>
            </Dialog>
        </TableCell>
    )
}

DeleteButtonCellRenderer.defaultProps = { confirmationLabel: "Would you like to Delete this record?" };