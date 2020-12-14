import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import styled, { css } from 'styled-components';
import debounce from 'lodash/debounce';
import isEqual from 'lodash/isEqual';
import some from 'lodash/some';

import { Tag } from '../tag';
import { Hint } from '../hint';
import { Error } from '../error';
import { Label } from '../label';
import { Spinner as UiSpinner } from '../spinner';
import {
    blackColor, borderColor, radius,
    whiteColor, darkGreyColor, bgGreen,
    errorColor, normalText, disabledBg,
} from '../style';

const Spinner = styled(UiSpinner)`
    margin-bottom: 10px;
    align-self: center;
`;

const Wrapper = styled.div`
    position: relative;
    width: 100%;
`;

const InputWrapper = styled.div.attrs(props => ({
    'data-qa': props.dataQa,
    'data-atid': props.dataAtid,
}))`
    display: flex;
    flex-wrap: wrap;
    padding: 10px 10px 0 10px;
    border: 1px solid ${({ disabled }) => (disabled ? '#e5e5e5' : borderColor)};
    border-radius: ${radius};
    background-color: ${({ disabled }) => (disabled ? disabledBg : whiteColor)};
    transition: border-color .2s linear;
    
    &:focus-within{
        border-color: ${({ error }) => (error ? errorColor : bgGreen)};
    }
`;

const SearchInput = styled.input.attrs(props => ({
    'data-qa': props.dataQa,
    'data-atid': props.dataAtid,
    'data-gtm': props.gtmSelector,
    disabled: props.disabled,
    type: 'text',
}))`
    flex-grow: 1;
    min-width: 30px;
    margin-bottom: 10px;
    border: 0 none;
    outline: none;
    font: 15px/18px Arial, sans-serif;
    background-color: transparent;
    ${({ disabled }) => disabled && css`
        color: #e5e5e5;
    `};
    cursor: ${({ disabled }) => (disabled ? 'default' : 'text')};
`;

const SelectedTag = styled(Tag).attrs({ theme: 'lightBlue' })`
    margin-bottom: 10px;
    margin-right: 10px;
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
}))`
    display: block;
    padding: 6px 10px;
    cursor: pointer;
    word-break: break-all;
    overflow-wrap: break-word;
    font-size: ${normalText};
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
    font-size: ${normalText};
    color: ${darkGreyColor};
`;

const createItemFromValue = value => ({ value, label: value });

export class MultiSelect extends Component {
    static defaultProps = {
        selected: [],
        options: [],
        noItemsText: '---',
        hideEmptyList: false,
        split: false,
        disableSelectKey: false,
        disableEditTag: false,
        filterByValue: false,
        dataQa: 'multiSelect',
        gtmSelector: 'gtmMultiSelect',
        errorDataQa: 'multiSelectError',
        inputDataQa: 'multiSelectInput',
        placeholder: 'Search',
    };

    constructor(props) {
        super(props);
        const { selected, options } = props;

        this.state = {
            filteredInput: '',
            filteredItems: options,
            selected,
            loading: false,
            isMenuOpen: false,
        };
        this.handleOnSearch = debounce(this.handleOnSearch, 500);
        this.input = React.createRef();
    }

    componentDidUpdate(prevProps) {
        if (!isEqual(prevProps.selected, this.props.selected)) {
            this.setState({ selected: this.props.selected });
        }
    }

    componentWillUnmount() {
        if (this.props.onSearch) this.handleOnSearch.cancel(); // or flush() in case we need to fire handler immediately
    }

    updateSelected = (item) => {
        if (this.state.selected.find(selected => selected.value === item[0].value)) {
            return [...this.state.selected.filter(selected => selected.value !== item[0].value)];
        }
        return [...this.state.selected, ...item];
    };

    select = (item) => {
        this.setState(
            {
                selected: this.updateSelected(item),
                isMenuOpen: !this.state.filteredInput,
            },
            () => {
                this.clearSearchInput();
                // Handle select
                const { onChange, name } = this.props;
                if (onChange) {
                    const event = { target: {} };

                    event.target.name = name;
                    event.target.type = 'multiSelect';
                    event.target.value = this.state.selected;
                    onChange(event);
                }
            },
        );
    };

    handleOnSearch = (value) => {
        this.setState({ loading: true }, async () => {
            const remoteFilteredItems = await this.props.onSearch(value);
            this.setState({
                filteredItems: remoteFilteredItems,
                loading: false,
            });
        });
    };

    filter = (byValue, stateAndHelpers) => {
        const { options } = this.props;
        if (!stateAndHelpers.inputValue) {
            // handle removing all text from input by showing all available list
            this.clearSearchInput();
            return;
        }
        if (this.props.onSearch) {
            this.setState({ filteredInput: byValue });
            this.handleOnSearch(byValue);
        } else {
            const filteredOptions = options.filter(({ value, label }) => {
                if (this.props.filterByValue) {
                    const filteredByLabel = label.toLowerCase().indexOf(byValue.toLowerCase()) !== -1;
                    const filteredByValue = value.toLowerCase().indexOf(byValue.toLowerCase()) !== -1;
                    return filteredByLabel || filteredByValue;
                }
                return label.toLowerCase().indexOf(byValue.toLowerCase()) !== -1;
            });

            this.setState({
                filteredInput: byValue,
                filteredItems: filteredOptions,
            });
        }
    };

    clearSearchInput = () => {
        this.setState({
            filteredInput: '',
            filteredItems: this.props.options,
        });
    };

    removeTag = index => () => this.setState(
        prevState => ({ selected: prevState.selected.filter((_, idx) => idx !== index) }),
        () => {
            const { onChange, name } = this.props;
            if (onChange) {
                const event = { target: {} };

                event.target.name = name;
                event.target.type = 'multiSelect';
                event.target.value = this.state.selected;
                onChange(event);
            }
        },
    );

    editTag = (item, index) => (this.props.disableEditTag ? () => {} : () => {
        // first removeTag (copy paste from this.removeTag) then setState filteredInput and set focus to input

        this.setState(
            prevState => ({ selected: prevState.selected.filter((_, idx) => idx !== index) }),
            () => {
                const { onChange, name } = this.props;
                if (onChange) {
                    const event = { target: {} };

                    event.target.name = name;
                    event.target.type = 'multiSelect';
                    event.target.value = this.state.selected;
                    onChange(event);
                }
                this.setState({ filteredInput: item.value });
            },
        );
        this.input.current.focus();
    });

    render() {
        const {
            label, name, required, hint, maxHeight, hideEmptyList, disabled, error, disableOnPaste,
            errorDataQa, noItemsText, dataQa, inputDataQa, dataAtid, inputDataAtid, listDataAtid,
            placeholder, split, disableSelectKey, gtmSelector,
        } = this.props;
        const {
            filteredItems,
            filteredInput,
            selected,
            loading,
            isMenuOpen,
        } = this.state;

        const errorContent = (typeof error === 'function') ? error(name) : error;
        const hintMsg = (typeof hint === 'function') ? hint(selected) : hint;
        const showList = hideEmptyList ? filteredItems.length > 0 : true;

        return (
            <Fragment>
                <Downshift
                    onChange={selection => this.select(selection)}
                    itemToString={() => ('')}
                    onInputValueChange={this.filter}
                    selectedItem={selected}
                    initialSelectedItem={this.props.selected}
                    // initialInputValue=''
                    inputValue={filteredInput}
                    isOpen={isMenuOpen}
                    onOuterClick={() => this.setState({ isMenuOpen: false })}
                >
                    {({
                        getRootProps,
                        getInputProps,
                        getItemProps,
                        getLabelProps,
                        getMenuProps,
                        // isOpen,
                        selectItem,
                        selectedItem,
                        highlightedIndex,
                        // openMenu,
                    }) => {
                        return (
                            <Wrapper {...getRootProps()}>
                                <Label {...getLabelProps({ required })}>
                                    {label}
                                </Label>
                                <InputWrapper dataQa={dataQa} dataAtid={dataAtid} error={Boolean(errorContent)} disabled={disabled}>
                                    {selectedItem.map((item, index) => {
                                        return (
                                            <SelectedTag
                                                key={`${item.value}-${index}`}
                                                noIndent
                                                item={item}
                                                contentRenderer={i => (
                                                    <span onClick={this.editTag(item, index)}>{i.label}</span>
                                                )}
                                                onClose={this.removeTag(index)}
                                                data-qa={item.dataQa ? `${item.dataQa}Selected` : 'multiSelectItemSelected'}
                                                data-atid={item.dataAtid ? `${item.dataAtid}Selected_${index}` : `multiSelectItemSelected_${index}`}
                                                closeDataQa={item.dataQa ? `${item.dataQa}Close` : 'multiSelectTagClose'}
                                                closeDataAtid={item.dataAtid ? `${item.dataAtid}Close_${index}` : `multiSelectTagClose_${index}`}
                                            />
                                        );
                                    })}
                                    <SearchInput
                                        {...getInputProps({
                                            placeholder,
                                            name,
                                            dataQa: inputDataQa,
                                            dataAtid: inputDataAtid,
                                            gtmSelector,
                                            disabled,
                                            ref: this.input,
                                            onFocus: () => this.setState({ isMenuOpen: true }),
                                        })}
                                        onKeyDown={(event) => {
                                            switch (event.key) {
                                                case "Enter":
                                                case " ":
                                                case "Spacebar":
                                                case ",":
                                                    if (!disableSelectKey) {
                                                        event.preventDefault();
                                                        if (this.props.onSearch) this.handleOnSearch.cancel();
                                                        if (event.target.value) {
                                                            let value = [event.target.value];
                                                            if (split) value = event.target.value.split(/[\s,\n]+/);
                                                            const finalVal = value.map(v => createItemFromValue(v));
                                                            selectItem(finalVal);
                                                        }
                                                        break;
                                                    }
                                                default:
                                                    return;
                                            }
                                        }}
                                        onPaste={(event) => {
                                            if (!disableSelectKey && !disableOnPaste) {
                                                event.preventDefault();
                                                if (this.props.onSearch) this.handleOnSearch.cancel();
                                                if (event.clipboardData.getData('Text')) {
                                                    let value = [event.clipboardData.getData('Text')];
                                                    if (split) value = event.clipboardData.getData('Text').split(/[\s,\n]+/);
                                                    const finalVal = value.map(v => createItemFromValue(v));
                                                    selectItem(finalVal);
                                                }
                                            }
                                        }}
                                    />
                                    { loading && <Spinner size='small' /> }
                                </InputWrapper>
                                {isMenuOpen && showList ?
                                    <List {...getMenuProps()} data-atid={listDataAtid} maxHeight={maxHeight}>
                                        {filteredItems.map((item, index) => (
                                            <Item {...getItemProps({
                                                key: `${item.value}_${index}`,
                                                isInFocus: highlightedIndex === index,
                                                dataQa: item.dataQa ? item.dataQa : 'multiSelectItem',
                                                dataAtid: item.dataAtid ? `${item.dataAtid}_${index}` : `multiSelectItem_${index}`,
                                                index,
                                                item: [item],
                                            })}
                                            >
                                                {some(selectedItem, item) ?
                                                    <b>{item.label}</b>
                                                    :
                                                    item.label
                                                }
                                            </Item>
                                        ))}
                                        {filteredItems.length === 0 ?
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

MultiSelect.propTypes = {
    /** Array of the MultiSelect options. */
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        label: PropTypes.string.isRequired,
        dataQa: PropTypes.string,
        dataAtid: PropTypes.string,
        disabled: PropTypes.bool, // you can disable particular radio button
    })),

    /* Selected items. */
    selected: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        label: PropTypes.string.isRequired,
        dataQa: PropTypes.string,
        disabled: PropTypes.bool, // you can disable particular radio button
    })),

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
    placeholder: PropTypes.string,

    /** Function called when user select one of the dropdown's option. */
    onChange: PropTypes.func,

    /** Function called when user search one of the dropdown's option. */
    onSearch: PropTypes.func,

    inputValue: PropTypes.string,

    hideEmptyList: PropTypes.bool,

    /** Split entered text by comma (,) or space (' '), or comma space (', ') */
    split: PropTypes.bool,

    /** Disable adding entered text as selected on key ['enter', 'space', 'comma'] */
    disableSelectKey: PropTypes.bool,

    /** Disable edit tag */
    disableEditTag: PropTypes.bool,

    /** Disable onPaste handler */
    disableOnPaste: PropTypes.bool,

    /** Enable search by value and label. By defaults search works only by label */
    filterByValue: PropTypes.bool,

    /** Selector for Prozorro auto-testing purposes */
    dataAtid: PropTypes.string,

    /** Selector for Prozorro auto-testing purposes */
    inputDataAtid: PropTypes.string,

    /** Selector for Prozorro auto-testing purposes */
    listDataAtid: PropTypes.string,

    /** Selector for Google tag manager */
    gtmSelector: PropTypes.string,
};
