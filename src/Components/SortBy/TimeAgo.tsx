import { parseISO, formatDistanceToNow } from 'date-fns';
import { FC } from 'react';
interface TimeAgoProps{
    created:string;
}
const TimeAgo: FC<TimeAgoProps> = ({ created }) => {
    const createdISO = new Date(created).toISOString()
    let timeAgo = ''
    if (createdISO) {
        const date = parseISO(createdISO)
        const timePeriod = formatDistanceToNow(date)
        timeAgo = `${timePeriod} ago`
    }

    return (
        <span title={createdISO}>
            &nbsp; <i>{timeAgo}</i>
        </span>
    )
}
export default TimeAgo