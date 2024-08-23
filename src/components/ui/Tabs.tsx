import React from 'react';
export interface ITab {
  header: string;
  content: string | React.ReactNode;
}
export const Tabs = ({ tabs }: { tabs: ITab[] }) => {
  const [current, setCurrent] = React.useState(0);
  return (
    <React.Fragment>
      <div>
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            {tabs.map((tab, index) => {
              return (
                <TabHeader
                  header={tab.header}
                  id={index}
                  current={current}
                  setCurrent={setCurrent}
                  key={index}
                />
              );
            })}
          </ul>
        </div>
      </div>
      <div>
        <div>
          {tabs.map((tab, index) => {
            return (
              <TabContent
                content={tab.content}
                id={index}
                current={current}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export const TabHeader = ({
  header,
  id,
  current,
  setCurrent,
}: {
  header: string;
  id: number;
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <li
      className="me-2"
      onClick={() => {
        setCurrent(id);
      }}
    >
      <button
        // href="#"
        type="button"
        className={`inline-block p-4 rounded-t-lg border-b-2 ${
          id === current
            ? 'text-blue-600 border-blue-600 active dark:text-blue-500 dark:border-blue-500'
            : 'border-transparent'
        } hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`}
      >
        {header}
      </button>
    </li>
  );
};

export const TabContent = ({
  content,
  id,
  current,
}: {
  content: string | React.ReactNode;
  id: number;
  current: number;
}) => {
  return (
    <div className={`${id === current ? 'block' : 'hidden'} px-4 py-2`}>
      {content}
    </div>
  );
};
