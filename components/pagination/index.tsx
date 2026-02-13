import styled from '@emotion/styled';
import { Pagination } from '@mui/material';
import { ChangeEvent } from 'react';

type SizeType = "small" | "medium" | "large"
type ShapeType = "circular" | "rounded" | undefined

interface PaginationProps {
    count?: number | undefined,
    size?: SizeType | undefined,
    shape?: ShapeType | undefined,
    defaultPage?: number | undefined,
    siblingCount?: number | undefined,
    boundaryCount?: number | undefined,
    onChange?: (event: ChangeEvent<unknown>, value: number) => void | undefined
}

const StyledPagination = styled(Pagination)({
    "& .MuiPagination-ul": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginX: "20px",
    },
    "& .MuiPaginationItem-previousNext": {
        backgroundColor: "#311F09",
        color: "white",
        marginLeft: "30px",
        marginRight: "30px"
    },
    "& .MuiPaginationItem-previousNext:hover": {
        backgroundColor: "#382610",
    },
    "& .MuiPaginationItem-page": {
        backgroundColor: "#FFF4E6",
        color: "#FF8A00",
        fontWeight: "bold",
        marginX: "5px",
    },
    "& .MuiPaginationItem-page:hover": { backgroundColor: "#FFE2BF" },
    "& .MuiPaginationItem-root.Mui-selected": {
        backgroundColor: "#FFDBB0",
    },
    "& .MuiButtonBase-root": { borderRadius: "15px" }
})

export const PaginationComponents = ({ count, size, shape, defaultPage, boundaryCount, siblingCount, onChange }: PaginationProps) => {
    return (
        <>
            <StyledPagination
                count={count}
                size={size}
                shape={shape}
                defaultPage={defaultPage}
                boundaryCount={boundaryCount}
                siblingCount={siblingCount}
                onChange={onChange}
            />
        </>
    )
}
