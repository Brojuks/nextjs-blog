import { parseISO, format } from "date-fns";

export default function Date({ datestring }) {
    const date = parseISO(datestring)
    return (
        <time dateTime={datestring}>{format(date, 'p - PP')}</time>
    )
}