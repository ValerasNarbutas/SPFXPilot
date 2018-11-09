import * as React from 'react';
import styles from './FlashReport.module.scss';
import { IFlashReportProps } from './IFlashReportProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { DropdownBasicExample } from './StatusDropDown';
import DetailsListGroupedExample from './DetailsList';

export default class FlashReport extends React.Component<IFlashReportProps, {}> {
  public render(): React.ReactElement<IFlashReportProps> {
    return (
      <div className={styles.flashReport}>
        <div className="ms-Grid">
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-u-sm6 ms-u-md4 ms-u-lg10"><DropdownBasicExample /></div>
            <div className="ms-Grid-col ms-u-sm6 ms-u-md8 ms-u-lg2"><DefaultButton text="Edit" /></div>
          </div>
        </div>
       <div className={styles["ms-Grid"]} >
            <DetailsListGroupedExample>
               
              </DetailsListGroupedExample>
       </div>
        
       
      </div>
    );
  }
}
