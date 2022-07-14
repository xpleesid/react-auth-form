import classNames from 'classnames';
import React from 'react';
import { Button } from 'ui/Button/Button';
import style from './Tabs.module.css';

interface TabsProps {
  activeTab: string;
  onChangeTab: (tab: string) => void;
  tabs: Array<{
    value: string;
    label: string;
    content: React.ReactNode;
  }>;
}

export const Tabs = ({ activeTab, onChangeTab, tabs }: TabsProps) => {
  return (
    <>
      <div className={style.tabsWrapper}>
        {tabs.map((tab) => (
          <Button
            key={tab.value}
            className={classNames(style.tab, activeTab === tab.value && style.activeTab)}
            variant="ghost"
            onClick={() => onChangeTab(tab.value)}
          >
            {tab.label}
          </Button>
        ))}
      </div>
      {tabs.map((tab) => {
        if (tab.value === activeTab) {
          return tab.content;
        }
        return <></>;
      })}
    </>
  );
};
