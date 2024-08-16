import { useRouter } from "next/router";
import React from "react";
import { getFilteredEvents } from "../../dummy_data";
import EventList from "../../components/events/event-list";
import ErrorAlert from "../../components/UI/error-alert";
import ResultsTitle from "../../components/event-detail/results-title";
import Button from "../../components/UI/button";

export default function FilteredPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return (
      <>
        <ErrorAlert>
          <p className="center">Loading ...</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
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
    return (
      <>
        <ErrorAlert>
          <p>Invalid Filtered. Please adjust your filters</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const filterResultData = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filterResultData || filterResultData.length === 0) {
    return <p>No events found for appliad filter</p>;
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <div>
      <ResultsTitle date={date} />
      <EventList items={filterResultData} />
    </div>
  );
}
