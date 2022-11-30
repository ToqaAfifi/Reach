import moment from 'moment';

export default function formatPublishTime(date) {
    var publishTime = moment().format(date);
    return moment(publishTime).fromNow();
}