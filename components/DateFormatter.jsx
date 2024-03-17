import { format } from "date-fns"

const DateFormatter = ({ date }) => {
    const str = format(
        new Date(date),
        'dd/MM/yyyy'
    );
    return <>{str}</>
}

export default DateFormatter