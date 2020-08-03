import React from "react";
import "./Pagination.css";
import PaginationItem from "../pagination-item/PaginationItem";

const Pagination = () => {
  return (
    <ul className="pagination">
      <PaginationItem />
      <PaginationItem />
      <PaginationItem />
      <PaginationItem />
      <PaginationItem />
      <PaginationItem />
      <PaginationItem />
      <PaginationItem />
      <PaginationItem />
    </ul>
  );
};

export default Pagination;
