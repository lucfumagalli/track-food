import { format } from "date-fns"

const DateFormatter = ({ date }) => {
    try {
        const str = format(
            new Date(date),
            'dd/MM/yyyy'
        );
        return <>{str}</>
    } catch (error) {
        return <>{date}</>
    }
}

export default DateFormatter