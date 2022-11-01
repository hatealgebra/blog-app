/**
 * @param  {EpochTimeStamp} timestamp
 */
export const timeDifference = (
  timestampNow: EpochTimeStamp,
  dateCreated: string
) => {
  const nowDate = new Date(timestampNow);
  const commentDate = new Date(dateCreated);

  if (nowDate < commentDate) {
    return "undefined";
  }

  const yearDifference = nowDate.getFullYear() - commentDate.getFullYear();
  const monthDifference = nowDate.getMonth() - commentDate.getMonth();
  const daysDifference = nowDate.getDate() - commentDate.getDate();
  const hoursDifference = nowDate.getHours() - commentDate.getHours();
  const minsDifference = nowDate.getMinutes() - commentDate.getMinutes();

  if (yearDifference > 0) {
    return `${yearDifference} year${(yearDifference > 1 && "s") || ""} ago`;
  } else if (yearDifference === 0 && monthDifference > 0) {
    return `${monthDifference} month${(monthDifference > 1 && "s") || ""} ago`;
  } else if (monthDifference === 0 && daysDifference > 0) {
    if (daysDifference === 1) {
      return "Yesterday";
    } else {
      return `${daysDifference} days ago`;
    }
  } else if (daysDifference === 0 && hoursDifference > 0) {
    return `${hoursDifference} hour${(hoursDifference > 1 && "s") || ""} ago`;
  } else if (hoursDifference === 0 && minsDifference > 0) {
    return `${minsDifference} minute${(minsDifference > 1 && "s") || ""} ago`;
  } else {
    return `Just now`;
  }
};
