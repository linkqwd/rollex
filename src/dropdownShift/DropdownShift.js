import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import styled, { css } from 'styled-components';

import { Hint } from '../hint';
import { Error } from '../error';
import { Label } from '../label';
import { DropdownIcon } from '../icons';
import {
    blackColor, borderColor, radius,
    whiteColor, darkGreyColor, bgGreen,
    errorColor, normalText,
} from '../style';
import isEqual from "lodash/isEqual";


const Wrapper = styled.div`
    position: relative;
    width: 100%;
`;

const SelectionElem = styled.button.attrs(props => ({
    'data-qa': props.dataQa,
    'data-atid': props.dataAtid,
    'data-gtm': props.gtmSelector,
}))`
    position: relative;
    display: block;
    width: 100%;
    min-width: 0;
    height: 40px;
    padding: 0 24px 0 10px;
    border-radius: ${radius};
    color: ${blackColor};
    text-align: left;
    background-color: ${({ open }) => (open ? '#ebedee' : whiteColor)};
    border: 1px solid ${({ error }) => (error ? errorColor : borderColor)};
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    transition: background-color .2s linear;
    font-size: ${normalText};
    box-sizing: border-box;

    &:hover {
        background-color: #ebedee;
    }

    &:focus {
        border-color: ${borderColor};
        outline: none;
        background-color: #ebedee;
    }

    &::-moz-focus-inner {
        border: none;
    }


    ${({ disabled }) => disabled && css`
        background-color: #fafafa;
        border-color: #e5e5e5;
        color: ${darkGreyColor};

        &:hover {
            background-color: #fafafa;
            border-color: #e5e5e5;
        }
    `};
`;

const InputWrapper = styled.li`
    display: block;
    padding: 3px 10px;
`;

const SearchInput = styled.input.attrs(props => ({
    'data-qa': props.dataQa,
    'data-atid': props.dataAtid,
}))`
    width: 100%;
    min-width: 30px;
    padding: 10px;
    border: 1px solid #d0d4dc;
    border-radius: ${radius};
    outline: none;
    font: 15px/18px Arial, sans-serif;
    box-sizing: border-box;
    background-color: transparent;

    ${({ disabled }) => disabled && css`
        color: #a5a5a5;
    `};

    &:focus{
        border-color: ${bgGreen};
    }

    cursor: ${({ disabled }) => (disabled ? 'default' : 'text')};
`;

const Icon = styled(DropdownIcon)`
    position: absolute;
    top: 50%;
    right: 7px;
    margin-top: -5px;
    width: 10px;
    height: 10px;
`;

const List = styled.ul`
    position: absolute;
    z-index: 2;
    top: 100%;
    left: 0;
    display: block;
    margin-top: 2px;
    padding: 5px 0;
    min-width: 100%;
    overflow-y: auto;
    box-sizing: border-box;
    border: 1px solid ${borderColor};
    border-radius: ${radius};
    background-color: ${whiteColor};
    color: ${blackColor};

    max-height: ${({ maxHeight }) => (maxHeight ? `${maxHeight}px` : 'none')};
`;

const Item = styled.li.attrs(props => ({
    'data-qa': props.dataQa,
    'data-gtm': props.dataGtm,
    'data-atid': props.dataAtid,
}))`
    display: block;
    padding: 6px 10px;
    cursor: pointer;
    word-break: break-all;
    overflow-wrap: break-word;
    font-size: 13px;
    transition: background-color .2s linear;

    &:hover {
        background-color: #ebedee;
    }

    ${({ isInFocus }) => isInFocus && css`
        background-color: #ebedee;
    `};

`;

const ItemNotFound = styled.li`
    display: block;
    padding: 6px 10px;
    font-size: 13px;
    color: ${darkGreyColor};
`;


// Usage:
/*
    import React from 'react';
    import { Dropdown } from 'zk-ui';

    <Dropdown
        label='Item'
        required
        searchable
        name='items'
        selected='one'
        items={['one', 'two', 'three', 'four']}
        hint={(selected) => `Selected: ${selected}`}
    />

 */
export class DropdownShift extends Component {
    static propTypes = {
        /** Array of the dropdown options. */
        options: PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            label: PropTypes.string.isRequired,
            dataQa: PropTypes.string,
            dataAtid: PropTypes.string,
            dataGtm: PropTypes.string,
            disabled: PropTypes.bool, // you can disable particular radio button
        })).isRequired,

        /** Selected item. */
        selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        /** If true dropdown will have a search input field. */
        searchable: PropTypes.bool,

        /** If true dropdown will be disabled. */
        disabled: PropTypes.bool,

        /** Label added above dropdown. */
        label: PropTypes.string,

        /** If true add required marker near label. */
        required: PropTypes.bool,

        /** Dropdown name. */
        name: PropTypes.string,

        /**
         * Hint added below dropdown.
         * (func: (selected) => hintString  or react node)
         */
        hint: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

        /**
         * Error added below dropdown.
         * (func: (name) => errorString  or react node)
         */
        error: PropTypes.oneOfType([PropTypes.node, PropTypes.array, PropTypes.func]),

        /** Max height of dropdown in pixels. */
        maxHeight: PropTypes.number, // px

        /** Use selector `[data-qa="${errorDataQa}"]` to get DOM node. */
        errorDataQa: PropTypes.string,

        /** Use selector `[data-qa="${dataQa}"]` to get button DOM node. */
        dataQa: PropTypes.string,

        /** Use selector `[data-qa="${inputDataQa}"]` to get input DOM node. */
        inputDataQa: PropTypes.string,

        /** Text in dropdown list, it will be visible when no items found */
        noItemsText: PropTypes.string,

        /** Text for dropdown button, it will be visible when prop selected is not provided */
        dropdownPlaceholder: PropTypes.string,

        /** Function called when user select one of the dropdown options. */
        onChange: PropTypes.func,

        /** Selector for Prozorro auto-testing purposes */
        dataAtid: PropTypes.string,

        /** Selector for Prozorro auto-testing purposes */
        inputDataAtid: PropTypes.string,

        /** Selector for Prozorro auto-testing purposes */
        listDataAtid: PropTypes.string,

        /** Selector for Google tag manager */
        gtmSelector: PropTypes.string,
    };

    constructor(props) {
        super(props);
        const { selected, options, dropdownPlaceholder } = props;
        const selectedOption = (options.length > 0 && options.find(elem => elem.value === selected)) || {};
        const ddp = dropdownPlaceholder || '---';

        this.state = {
            filteredInput: '',
            filteredItems: options.filter(({disabled}) => !disabled),
            selectedLabel: selectedOption.label || ddp,
            selected,
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.selected !== prevProps.selected) {
            this.setState({ selected: this.props.selected });
        }
        if (!isEqual(prevProps.options, this.props.options)) {
            this.setState({filteredItems: this.props.options.filter(({disabled}) => !disabled)})
        }
    }

    select = (selection) => {
        if (!selection) return;
        const { value, label } = selection;
        this.setState(
            {
                selected: value,
                selectedLabel: label,
            },
            this.clearSearchInput,
        );

        // Handle select
        const { onChange, name } = this.props;
        const event = { target: {} };
        if (onChange) {
            event.target.name = name;
            event.target.type = 'dropdown';
            event.target.value = value;
            onChange(event);
        }
    };

    filter = (value, stateAndHelpers) => {
        const { options, searchable } = this.props;

        // don't filter items when no search field provided
        if (!searchable) return;

        // clear search field value when dropdown list is hidden
        if (!stateAndHelpers.isOpen) {
            this.clearSearchInput();
            return;
        }

        this.setState({
            filteredInput: value,
            filteredItems: options.filter(
                ({ label, disabled }) => !disabled && label.toLowerCase().indexOf(value.toLowerCase()) !== -1,
            ),
        });
    };

    clearSearchInput = () => {
        this.setState({
            filteredInput: '',
            filteredItems: this.props.options.filter(({disabled}) => !disabled),
        });
    };

    render() {
        const {
            searchable, label, name, required, hint, maxHeight,
            disabled, error, errorDataQa, noItemsText, options, gtmSelector,
            dataQa, inputDataQa, dataAtid, inputDataAtid, listDataAtid,
        } = this.props;
        const {
            filteredItems, filteredInput, selected, selectedLabel,
        } = this.state;
        const errorContent = (typeof error === 'function') ? error(name) : error;
        const hintMsg = (typeof hint === 'function') ? hint(selected) : hint;
        return (
            <Fragment>
                <Downshift
                    onChange={selection => this.select(selection)}
                    itemToString={item => (item ? item.label : '')}
                    onInputValueChange={(value, stateAndHelpers) => this.filter(value, stateAndHelpers)}
                    onOuterClick={this.clearSearchInput}
                    // initialSelectedItem={(options && options.find(elem => elem.value === selected)) || {}}
                    // selectedItem is controlled prop - need for update dropdown when this.prop.selected change
                    selectedItem={options.find(elem => elem.value === selected) || ''}
                    onStateChange={(changes, stateAndHelpers) => {
                        if (changes.hasOwnProperty('selectedItem') && changes.selectedItem) {
                            this.setState({ selected: changes.selectedItem.value });
                        }
                    }}
                >
                    {({
                          getRootProps,
                          getInputProps,
                          getItemProps,
                          getLabelProps,
                          getMenuProps,
                          getToggleButtonProps,
                          isOpen,
                          selectedItem,
                          highlightedIndex,
                      }) => {

                        return (
                            <Wrapper {...getRootProps()}>
                                <Label {...getLabelProps({ required })}>
                                    {label}
                                </Label>
                                <SelectionElem
                                    {...getToggleButtonProps({
                                        disabled,
                                        error: Boolean(errorContent),
                                        open: isOpen,
                                        dataQa,
                                        dataAtid,
                                        gtmSelector,
                                    })}
                                >
                                    {selectedItem.label || selectedLabel}
                                    <Icon />
                                </SelectionElem>
                                {isOpen ?
                                    <List {...getMenuProps()} data-atid={listDataAtid} maxHeight={maxHeight}>
                                        {searchable ?
                                            <InputWrapper>
                                                <SearchInput
                                                    {...getInputProps({
                                                        placeholder: 'Поиск',
                                                        value: filteredInput,
                                                        name,
                                                        dataQa: inputDataQa,
                                                        dataAtid: inputDataAtid,
                                                    })}
                                                />
                                            </InputWrapper>
                                            : null
                                        }
                                        {filteredItems && filteredItems
                                            .map((item, index) => (
                                                <Item {...getItemProps({
                                                    key: item.value,
                                                    isInFocus: highlightedIndex === index,
                                                    dataQa: item.dataQa,
                                                    dataGtm: item.dataGtm,
                                                    dataAtid: `${item.dataAtid}_${index}`,
                                                    index,
                                                    item,
                                                })}
                                                >
                                                    {Object.is(selectedItem, item) ?
                                                        <b>{item.label}</b>
                                                        : item.label
                                                    }
                                                </Item>
                                            ))
                                        }
                                        {filteredItems && filteredItems.length === 0 ?
                                            <ItemNotFound>{noItemsText}</ItemNotFound>
                                            : null
                                        }
                                    </List>
                                    : null
                                }
                            </Wrapper>
                        );
                    }}
                </Downshift>
                <Hint>{hintMsg}</Hint>
                <Error dataQa={errorDataQa}>{errorContent}</Error>
            </Fragment>
        );
    }
}
