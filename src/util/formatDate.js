import { format } from "date-fns";

export function formatDate(startDate, endDate){
    const timeDate =
      format(new Date(startDate), "PP") +
      " - " +
      format(new Date(endDate), "PP");
    return timeDate;
};
