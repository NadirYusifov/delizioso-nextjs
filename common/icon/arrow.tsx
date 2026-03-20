interface ArrowProps {
    stroke?: string
}

export const Arrow = ({stroke}: ArrowProps) => {
    return (
        <>
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.86113 10.35L1.06113 5.54999L5.86113 0.749987" stroke={stroke} fill="none" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        </>
    )
}

