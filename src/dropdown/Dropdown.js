import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { Error } from '../error';
import { Hint } from '../hint';
import { DropdownIcon } from '../icons';
import { Label } from '../label';
import { blackColor, borderColor, radius, whiteColor, darkGreyColor } from '../style';

// TODO: fix scrolling to selected element when dropdown is opening


const Wrapper = styled.div`
    position: relative;
    width: 100%;
`;

const SelectionElem = styled.div`
    position: relative;
    padding: 10px 24px 10px 10px;
    background-color: ${whiteColor};
    border-radius: ${radius};
    color: ${blackColor};
    text-align: left;
    border: 1px solid ${borderColor};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    transition: background-color .2s linear;

    &:hover {
        background-color: #ebedee;
    }

    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

    ${({ disabled }) => disabled && css`
        background-color: #fafafa;
        border-color: #e5e5e5;

        &:hover {
            background-color: #fafafa;
            border-color: #e5e5e5;
        }
    `};

    ${({ open }) => open && css`
        background-color: #ebedee;
    `};
`;

const InputWrapper = styled.input.attrs(props => ({
    'data-qa': props.dataQa,
}))`
    width: 100%;
    min-width: 30px;
    padding: 0;
    border: none;
    outline: none;
    font-size: 13px;
    background-color: transparent;

    ${({ disabled }) => disabled && css`
        color: #a5a5a5;
    `};

    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`;

const Icon = styled(DropdownIcon)`
    position: absolute;
    top: 50%;
    right: 7px;
    margin-top: -5px;
    width: 10px;
    height: 10px;
`;

const List = styled.div`
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

const Item = styled.div.attrs(props => ({
    'data-qa': props.dataQa,
}))`
    padding: 6px 10px;
    cursor: pointer;
    word-break: break-all;
    overflow-wrap: break-word;
    font-size: 13px;
    transition: background-color .2s linear;

    &:hover {
        background-color: #ebedee;
    }
`;

const ItemNotFound = styled.div`
    padding: 6px 10px;
    font-size: 13px;
    color: ${darkGreyColor};
`;

export class Dropdown extends Component {
    static propTypes = {
        /** Array of the dropdown options. */
        options: PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            label: PropTypes.string.isRequired,
            dataQa: PropTypes.string,
            disabled: PropTypes.bool, // you can disable particular radio button
        })).isRequired,

        /** Selected item. */
        selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

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

        /** Use selector `[data-qa="${dataQa}"]` to get DOM node. */
        dataQa: PropTypes.string,

        /** Text in dropdown list, it will be visible when no items found */
        noItemsText: PropTypes.string,

        /** Function called when user select one of the dropdown options. */
        onChange: PropTypes.func,
    };

    constructor(props) {
        super();
        const { selected, options } = props;
        const selectedOption = options.find(elem => elem.value === selected);

        this.state = {
            open: false,
            filteredInput: '',
            filteredItems: options,
            selectedLabel: selectedOption ? selectedOption.label : '---', // --- denote error condition
            selected,
        };

        // Refs
        this.wrapper = React.createRef();
        this.input = React.createRef();
    }

    componentDidMount() {
        document.addEventListener('click', this.toggleOnOutsideClick);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.toggleOnOutsideClick);
    }

    close = (stateMerge) => {
        if (this.state.open) {
            this.setState({
                ...stateMerge,
                open: false,
                filteredInput: '',
                filteredItems: this.props.options,
            });
            if (this.input.current) this.input.current.blur();
        }
    };

    toggle = () => {
        if (this.props.disabled) return;

        if (!this.state.open) {
            this.setState({ open: true });

            // Focus search input
            if (this.input.current) this.input.current.focus();
        } else {
            this.close();
        }
    };

    select = ({ value, label }) => (e) => {
        this.close({
            selected: value,
            selectedLabel: label,
        });

        // Handle select
        const { onChange, name } = this.props;
        if (onChange) {
            e.target.name = name;
            e.target.type = 'dropdown';
            e.target.value = value;
            onChange(e);
        }
    };

    filter = (e) => {
        const filteredInput = String(e.target.value);
        const { options } = this.props;
        this.setState({
            filteredInput,
            filteredItems: options.filter(
                ({ label }) => label.toLowerCase().indexOf(filteredInput.toLowerCase()) !== -1,
            ),
        });
    };

    focus = (e) => {
        const { searchable } = this.props;
        if (!searchable) e.target.blur();
    };

    toggleOnOutsideClick = (e) => {
        if (this.wrapper.current && !this.wrapper.current.contains(e.target)) {
            this.close();
        }
    };

    render() {
        const {
            searchable, label, name, required, hint, maxHeight,
            disabled, error, errorDataQa, dataQa, noItemsText,
        } = this.props;
        const {
            filteredItems, filteredInput, open, selected, selectedLabel,
        } = this.state;

        const errorContent = (typeof error === 'function') ? error(name) : error;
        const hintMsg = (typeof hint === 'function') ? hint(selected) : hint;

        return (
            <Fragment>
                <Label required={required}>{label}</Label>
                <Wrapper ref={this.wrapper}>
                    <SelectionElem
                        disabled={disabled}
                        onClick={this.toggle}
                        open={open}
                    >
                        <InputWrapper
                            type='text'
                            searchable={searchable}
                            readOnly={!searchable}
                            disabled={disabled}
                            placeholder={selectedLabel}
                            value={open ? filteredInput : selectedLabel}
                            name={name}
                            onChange={this.filter}
                            onFocus={this.focus}
                            ref={this.input}
                            dataQa={dataQa}
                            autoComplete='off'
                        />
                        <Icon />
                    </SelectionElem>
                    {open && !disabled &&
                        <List maxHeight={maxHeight}>
                            {filteredItems.map((item, idx) => (
                                <Item
                                    key={idx}
                                    onClick={this.select(item)}
                                    dataQa={item.dataQa}
                                >
                                    {item.value === selected ?
                                        <b>{item.label}</b>
                                        : item.label
                                    }
                                </Item>
                            ))}
                            {filteredItems && filteredItems.length === 0 ?
                                <ItemNotFound>{noItemsText}</ItemNotFound>
                                : null
                            }
                        </List>
                    }
                </Wrapper>
                <Hint>{hintMsg}</Hint>
                <Error dataQa={errorDataQa}>{errorContent}</Error>
            </Fragment>
        );
    }
}
