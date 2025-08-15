import PageHeader from "@/components/modules/PageHeader/PageHeader";
import Result from "@/components/templates/Search/Result";
import React from "react";

function Search({ data }) {
  return (
    <>
      <PageHeader route="Search" bg="/images/darkTop.png"/>
      <Result searchResult={data} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;

  const res = await fetch("http://localhost:4000/menu");
  const data = await res.json();

  const searchResult = data.filter(
    (item) =>
      item.category.toLowerCase().includes(query.q.toLowerCase()) ||
      item.title.toLowerCase().includes(query.q.toLowerCase())
  );

  return {
    props: {
      data: searchResult,
    },
  };
}

export default Search;
