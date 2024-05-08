import CountryCard from "./ContryCard";
import NoResult from "./NoResult";

const ContryList = ({ data }) => {
  return (
    <div className="mt-8 grid justify-between gap-x-[70px] gap-y-12 md:mt-12 md:grid-cols-[repeat(2,minmax(0,_auto))] lg:grid-cols-[repeat(4,minmax(0,_auto))] lg:gap-y-[70px]">
      {data && data.length ? (
        data.map((contry) => (
          <CountryCard
            key={contry.name.official}
            name={contry.name.common}
            population={contry.population}
            region={contry.region}
            capital={contry.capital}
            flags={contry.flags.svg}
          />
        ))
      ) : (
        <NoResult />
      )}
    </div>
  );
};
export default ContryList;
