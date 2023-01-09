import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Pagination } from "antd";
import { layDanhSachPhimAction } from "redux/actions/QuanLyPhimActions";

import Film_Flip from "components/Film/Film_Flip";

function MultipleRowSlick(props) {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div className="grid grid-cols-4 gap-8">
        {props.arrFilm.items?.map((item, index) => {
          // eslint-disable-next-line react/jsx-pascal-case
          return <Film_Flip item={item} key={index} />;
        })}
      </div>
      <br />
      <div className="mt-20">
        {props.arrFilm.items && (
          <Pagination
            defaultCurrent={props.arrFilm.currentPage}
            total={props.arrFilm.totalCount}
            pageSize={8}
            onChange={(page) => {
              dispatch(layDanhSachPhimAction(page));
            }}
          />
        )}
      </div>
    </Fragment>
  );
}

export default MultipleRowSlick;
