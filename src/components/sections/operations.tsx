import React, { useEffect, useState } from "react";
import { svg } from "../../assets/svgs";
import { Button } from "../shared";
import { operationsData as sectionDataSet } from "../shared/contentData";

interface IData {
  id: string;
  header: string;
  icon: string;
  body: string;
}

const initialState = {
  section1: "operations__tab--active",
  section2: "",
  section3: "",
};

const Operations: React.FC = () => {
  const [sectionData, setSectionData] = useState<IData>(sectionDataSet[0]);
  const [styleState, setStyleState] = useState(initialState);

  useEffect(() => {
    if (sectionData.id === "transfers") {
      setStyleState((prevState) => {
        return {
          section1: "operations__tab--active",
          section2: "",
          section3: "",
        };
      });
    }

    if (sectionData.id === "loans") {
      setStyleState((prevState) => {
        return {
          section1: "",
          section2: "operations__tab--active",
          section3: "",
        };
      });
    }

    if (sectionData.id === "closing") {
      setStyleState((prevState) => {
        return {
          section1: "",
          section2: "",
          section3: "operations__tab--active",
        };
      });
    }
  }, [sectionData]);

  const dataHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    const data = sectionDataSet.filter((curData: IData) => {
      return id === curData.id;
    });
    setSectionData(data[0]);
  };

  return (
    <>
      <section className="section" id="section--2">
        <div className="section__title">
          <h2 className="section__description">Operations</h2>
          <h3 className="section__header">
            Everything as simple as possible, but no simpler.
          </h3>
        </div>

        <div className="operations">
          <div className="operations__tab-container">
            <Button
              className={`btn operations__tab operations__tab--1 ${styleState.section1}`}
              data-tab="1"
              onClick={(e) => dataHandler(e, "transfers")}>
              <span>01</span>Instant Transfers
            </Button>
            <Button
              className={`btn operations__tab operations__tab--2 ${styleState.section2}`}
              data-tab="2"
              onClick={(e) => dataHandler(e, "loans")}>
              <span>02</span>Instant Loans
            </Button>
            <Button
              className={`btn operations__tab operations__tab--3 ${styleState.section3}`}
              data-tab="3"
              onClick={(e) => dataHandler(e, "closing")}>
              <span>03</span>Instant Closing
            </Button>
          </div>
          <div className="operations__content operations__content--1 operations__content--active">
            <div className="operations__icon operations__icon--1">
              <svg>
                <use xlinkHref={`${svg.icons}${sectionData.icon}`}></use>
              </svg>
            </div>
            <h5 className="operations__header">{sectionData.header}</h5>
            <p>{sectionData.body}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Operations;
