import ContryList from "../components/ContryList";

import RegionMenue from "../components/RegionMenue";
import SearchInput from "../components/SearchInput";
import { useFetchdata } from "../useFetchdata";

function Home() {
  const {
    isError,
    isLoading,
    contryList,
    filteredcountries,
    setfilteredcountries,
  } = useFetchdata();
  return (
    <>
      {isLoading && (
        <div className="flex justify-center items-center h-screen">
          Loading...
        </div>
      )}
      {isError && (
        <div className="flex justify-center items-center h-screen">
          Error...
        </div>
      )}
      {!isError && !isLoading && (
        <>
          <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
            <SearchInput
              counteryList={contryList}
              filterdList={setfilteredcountries}
            />
            <RegionMenue
              counteryList={contryList}
              filterdList={setfilteredcountries}
            />
          </div>
          <ContryList data={filteredcountries} />
        </>
      )}
    </>
  );
}
export default Home;
