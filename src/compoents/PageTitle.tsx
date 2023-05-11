import React from "react";

type ReadOnlyProps<T> = {
  readonly [P in keyof T]: T[P];
};

type Props = {
  title: string;
  icon: string;
};

function PageTitle({ title, icon }: ReadOnlyProps<Props>) {
  return <div className="text-6xl py-4 text-center">{`${icon} ${title}`}</div>;
}

export default PageTitle;
