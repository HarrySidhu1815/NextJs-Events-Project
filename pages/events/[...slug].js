import { useRouter } from "next/router";
import React from "react";
import { getFilteredEvents } from "../../dummy_data";
import EventList from "../../components/events/event-list";
import ErrorAlert from "../../components/UI/error-alert";
import ResultsTitle from "../../components/event-detail/results-title";
import Button from "../../components/UI/button";
import Head from "next/head";

export default function FilteredPage({hasError, filterData, dates}) {

  // if (!filterData) {
  //   return (
  //     <>
  //       <ErrorAlert>
  //         <p className="center">Loading ...</p>
  //       </ErrorAlert>
  //       <div className="center">
  //         <Button link="/events">Show All Events</Button>
  //       </div>
  //     </>
  //   );
  // }

  if (hasError) {
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


  if (!filterData || filterData.length === 0) {
    return <p>No events found for appliad filter</p>;
  }

  const date = new Date(dates.numYear, dates.numMonth - 1);

  return (
    <div>
      <Head>
      <title>Filtered Events</title>
        <meta
          name="description"
          content={selectedEvent.description}
        />
      </Head>
      <ResultsTitle date={date} />
      <EventList items={`All Events for ${numMonth}/${numYear}`} />
    </div>
  );
}

export async function getServerSideProps(context){

  const filterData = context.params.slug;

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
    return {
      props: {
        hasError: true
      }
    }
  }

  const filterResultData = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      filterData: filterResultData,
      dates: {
        numYear,
        numMonth
      }
    }
  }
}