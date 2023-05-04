import React, { createContext, useEffect, useState } from "react";

type contextObjType = React.RefObject<Element> | null;

interface contextObj {
  contextStyle: string;
  fnSetNavRef: (data: React.RefObject<HTMLElement>) => any;
  fnSetHeaderRef: (data: React.RefObject<HTMLElement>) => any;
  fnFeatureSectionRef: (data: React.RefObject<HTMLElement>) => any;
}

export const context = createContext<contextObj>({
  contextStyle: "nav",
  fnSetNavRef: (data: React.RefObject<HTMLElement>) => {},
  fnSetHeaderRef: (data: React.RefObject<HTMLElement>) => {},
  fnFeatureSectionRef: (data: React.RefObject<HTMLElement>) => {},
});

const ContextProvider = (props: any) => {
  const [navStyle, setNavStyle] = useState("nav");
  const [navRef, setNavRef] = useState<contextObjType>(null);
  const [headerRef, setHeaderRef] = useState<contextObjType>(null);
  const [featureSectionRef, setFeatureSectionRef] =
    useState<contextObjType>(null);

  function fnSetHeaderRef(data: React.RefObject<HTMLElement>) {
    setHeaderRef(data);
  }
  function fnFeatureSectionRef(data: React.RefObject<HTMLElement>) {
    setFeatureSectionRef(data);
  }
  function fnSetNavRef(data: React.RefObject<HTMLElement>) {
    setNavRef(data);
  }

  // const headerrrr = document.querySelector(".header");
  useEffect(() => {
    const headerCurrent = headerRef?.current;
    const featureSectionCurrent = featureSectionRef?.current;
    const navHeight = navRef?.current?.clientHeight;

    const callBack: IntersectionObserverCallback = (entries) => {
      const [entry] = entries;
      console.log(entry);

      if (!entry.isIntersecting) setNavStyle("nav sticky");
      else setNavStyle("nav");
    };

    const headerObserver = new IntersectionObserver(callBack, {
      root: null,
      threshold: 0,
      rootMargin: `-${navHeight || "90"}px`,
    });

    if (headerCurrent) headerObserver.observe(headerCurrent);
    // headerObserver.observe(headerCurrent);

    console.log(headerCurrent, featureSectionCurrent, navHeight);
  }, [featureSectionRef, headerRef, navRef]);

  return (
    <context.Provider
      value={{
        contextStyle: navStyle,
        fnSetNavRef,
        fnSetHeaderRef,
        fnFeatureSectionRef,
      }}>
      {props.children}
    </context.Provider>
  );
};

export default ContextProvider;
