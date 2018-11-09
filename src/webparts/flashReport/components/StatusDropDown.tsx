import * as React from 'react';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Dropdown, IDropdown, DropdownMenuItemType, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { BaseComponent, createRef } from 'office-ui-fabric-react/lib/Utilities';


export class DropdownBasicExample extends BaseComponent<
  {},
  {
    selectedItem?: { key: string | number | undefined };
    selectedItems: string[];
  }
> {
  private _basicDropdown = createRef<IDropdown>();

  constructor(props: {}) {
    super(props);
    this.state = {
      selectedItem: undefined,
      selectedItems: []
    };
  }

  public render() {
    const { selectedItem, selectedItems } = this.state;

    return (
      <div className="docs-DropdownExample">
        <Dropdown
          placeHolder="Select a month"
          id="Basicdrop1"
          ariaLabel="Basic dropdown example"
          options={[
            { key: 'Header', text: 'Month selection', itemType: DropdownMenuItemType.Header },
            { key: 'G', text: 'Month 1', title: 'Select green if all good' },
            { key: 'O', text: 'Month 2 ', title: 'Select orange if failing a bit' },
            { key: 'R', text: 'Month 3', title: 'ITS gona BLOW!!!!', disabled: false }
           
          ]}
          onFocus={this._log('onFocus called')}
          onBlur={this._log('onBlur called')}
         
        />
       
        
      </div>
    );
  }

  public changeState = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void => {
    console.log('here is the things updating...' + item.key + ' ' + item.text + ' ' + item.selected);
    this.setState({ selectedItem: item });
  };

  public onChangeMultiSelect = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void => {
    const updatedSelectedItem = this.state.selectedItems ? this.copyArray(this.state.selectedItems) : [];
    if (item.selected) {
      // add the option if it's checked
      updatedSelectedItem.push(item.key);
    } else {
      // remove the option if it's unchecked
      const currIndex = updatedSelectedItem.indexOf(item.key);
      if (currIndex > -1) {
        updatedSelectedItem.splice(currIndex, 1);
      }
    }
    this.setState({
      selectedItems: updatedSelectedItem
    });
  };

  public copyArray = (array: any[]): any[] => {
    const newArray: any[] = [];
    for (let i = 0; i < array.length; i++) {
      newArray[i] = array[i];
    }
    return newArray;
  };

  private _onSetFocusButtonClicked = (): void => {
    if (this._basicDropdown.current) {
      this._basicDropdown.current.focus(true);
    }
  };

  private _log(str: string): () => void {
    return (): void => {
      console.log(str);
    };
  }
}