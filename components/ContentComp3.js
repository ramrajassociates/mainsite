import React from "react";
import ContentComp3Card from "./ContentComp3Card";
function ContentComp3({ content, logo }) {
  return (
    <div className="flex flex-col space-y-10 px-2 lg:px-10 py-5 ">
      {content.map((item, keyval) => {
        return <ContentComp3Card item={item} key={keyval} logo={logo} />;
      })}
    </div>
  );
}

export default ContentComp3;
