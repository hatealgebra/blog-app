/**
 * @param  {EpochTimeStamp} timestamp
 */
export const timeDifference = (
  timestampNow: EpochTimeStamp,
  timestampComment: EpochTimeStamp
) => {
  if (timestampNow < timestampComment) {
    return "undefined";
  }
  const newDate = new Date(timestampNow * 1000);
  const commentDate = new Date(timestampComment * 1000);
  const yearDifference = newDate.getFullYear() - commentDate.getFullYear();
  const monthDifference = newDate.getMonth() - commentDate.getMonth();
  const daysDifference = newDate.getDate() - commentDate.getDate();
  const hoursDifference = newDate.getHours() - commentDate.getHours();
  const minsDifference = newDate.getMinutes() - commentDate.getMinutes();

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
