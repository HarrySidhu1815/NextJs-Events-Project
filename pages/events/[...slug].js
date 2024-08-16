import { useRouter } from "next/router";
import React from "react";
import { getFilteredEvents } from "../../dummy_data";

export default function FilteredPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading ...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return <p>Invalid Filtered. Please adjust your filters</p>;
  }

  const filterResultData = getFilteredEvents({
    year: numYear,
    month: numMonth
  })

  if(!filterResultData || filterResultData.length === 0){
    return <p>No events found for appliad filter</p>
  }
  return (
    <div>
      <h1>Filtered Page</h1>
    </div>
  );
}
