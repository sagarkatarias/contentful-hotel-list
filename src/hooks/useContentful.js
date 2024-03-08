// Desc: Custom hook to connect to the Contenful API
import { createClient } from "contentful";
import { sanitizeContent } from "../utils/sanitize";
import { dateToGermanFormat } from "../utils/dateConverter";

const useContentful = () => {
  const client = createClient({
    space: "gyfunrv4a4ak",
    accessToken: "k9P9FQJcUpHKrHX3tXrgXunRyiS3qPchtY7V61tNruE",
    host: "cdn.contentful.com",
  });

  const getHotels = async () => {
    try {
      const hotelsObject = await client.getEntries({
        content_type: "hotel",
      });
      const sanitizedEntries = hotelsObject.items.map((entry) => {
        return {
          ...entry.fields,
          description: sanitizeContent(entry.fields.description),
          images: entry.fields.images[0].fields.file,
          startDate: dateToGermanFormat(entry.fields.startDate),
          endDate: dateToGermanFormat(entry.fields.endDate),
        };
      });
      return sanitizedEntries;
    } catch (error) {
      console.error(error);
    }
  };

  const getReviews = async () => {
    try {
      const reviewsObject = await client.getEntries({
        content_type: "review",
      });
      const sanitizedEntries = reviewsObject.items.map((entry) => {
        return {
          ...entry.fields,
          comment: sanitizeContent(entry.fields.comment),
          customer: entry.fields.customer.fields,
          hotel: entry.fields.hotel.fields.name,
        };
      });
      return sanitizedEntries;
    } catch (error) {
      console.error(error);
    }
  };
  return { getHotels, getReviews };
};



export default useContentful;
