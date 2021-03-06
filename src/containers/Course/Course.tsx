import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { CourseRow } from "../../components";
import { Button, ModalLoader } from "../../components/common";
import { ScrollHorizontal } from "../../components/common/ScrollHorizontal/ScrollHorizontal";
import { doGetAllListCourse } from "../../redux";
import { RootState } from "../../redux/rootReducer";
import { useAppDispatch } from "../../redux/store";
import "./Course.scss";

export const Course: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const listAllCourse = useSelector(
    (state: RootState) => state.courseSlice.listAllCourse
  );
  const isLoading = useSelector(
    (state: RootState) => state.courseSlice.isLoading
  );

  useEffect(() => {
    dispatch(doGetAllListCourse());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="container">
      <Button
        type="submit"
        marginBottom={16}
        onClick={() => history.push("/add-course")}
      >
        ADD
      </Button>
      <div className="course-table">
        <ScrollHorizontal>
          <div className="table-responsive">
            <table style={{ width: "960px" }}>
              <thead>
                <tr>
                  {/* <th className="course-table__edit"></th> */}
                  <th className="course-table__no-order">#</th>
                  <th className="course-table__course-name">Course Name</th>
                  <th className="course-table__duration">Duration</th>
                  <th className="course-table__rating">Rating</th>
                  <th className="course-table__price">Price</th>
                  {/* <th className="course-table__button"></th> */}
                </tr>
              </thead>

              <tbody>
                {listAllCourse.map((item, index) => {
                  return (
                    <CourseRow
                      key={index}
                      index={index + 1}
                      name={item.name}
                      avatar={item.avatar}
                      duration={item.duration}
                      rating={item.rating}
                      price={item.price}
                      onClick={() => {
                        history.push(`/course-detail/${item._id}`);
                      }}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </ScrollHorizontal>
      </div>
      <ModalLoader isShow={isLoading} />
    </div>
  );
};
