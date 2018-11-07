import * as React from 'react';
import styles from './FlashReport.module.scss';
import { IFlashReportProps } from './IFlashReportProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

export default class FlashReport extends React.Component<IFlashReportProps, {}> {
  public render(): React.ReactElement<IFlashReportProps> {
    return (
      <div className={ styles.flashReport }>
        <DefaultButton text="button" /> 
      </div>
    );
  }
}
