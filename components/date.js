import { parseISO, format } from "date-fns";

export default function Date({ datestring }) {
    const date = parseISO(datestring)
    return (
        <time dateTime={datestring}>{format(date, 'p - PP')}</time>
    )
}

export function DateNoTimeStamp({ datestring }) {
    const date = parseISO(datestring)
    return (
        <time dateTime={datestring}>{format(date, 'PP')}</time>
    )
}

export function FullDate({ datestring }) {
    const date = parseISO(datestring)
    return (
        <time dateTime={datestring}>{format(date, 'PPPPpppp')}</time>
    )
}