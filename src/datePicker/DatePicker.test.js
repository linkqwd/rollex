import React from 'react';
import { mount } from 'enzyme';
import format from 'date-fns/format';
import addHours from 'date-fns/addHours';
import ru from 'date-fns/locale/ru';
import uk from 'date-fns/locale/uk';
import en from 'date-fns/locale/en-US';
import { CalendarIcon } from '../icons';
import { DatePicker } from './index';

const LOCALE_ENUM = {
    'uk': uk,
    'en': en,
    'ru': ru,
}


describe('Test DatePicker component', () => {

    it('should render', () => {
        const wrapper = mount(
            <DatePicker
                name='test'
                required
                label='Date'
                before={<CalendarIcon />}
                selected={new Date()}
                onChange={() => null}
                showTimeSelect
                timeFormat='HH:mm'
                timeIntervals={15}
                dateFormat='dd.MM.yyyy HH:mm'
                timeCaption='time'
                fixedHeight
            />
        );
        expect(
            wrapper
                .find('input[name="test"]')
                .exists()
        ).toBe(true);
    });

    it('render correct date format', () => {
        const now = new Date();
        const dateFormat = 'dd.MM.yyyy HH:mm';
        const locale = 'uk';
        expect(
            mount(
                <DatePicker
                    name='test'
                    required
                    label='Date'
                    before={<CalendarIcon />}
                    selected={now}
                    onChange={() => null}
                    showTimeSelect
                    timeFormat='HH:mm'
                    timeIntervals={15}
                    dateFormat={dateFormat}
                    timeCaption='time'
                    fixedHeight
                    locale={locale}
                />
            )
                .find('input[name="test"]')
                .instance()
                .value
        ).toBe(format(now, dateFormat, { locale: LOCALE_ENUM[locale] }));
    });

    it('check onChangeRaw default handler', () => {
        const now = new Date();
        const dateFormat = 'dd.MM.yyyy HH:mm';
        const locale = 'uk';

        let selectedDate = null;

        const input = mount(
            <DatePicker
                name='test'
                required
                label='Date'
                before={<CalendarIcon />}
                selected={now}
                onChange={(selected) => {selectedDate = selected;}}
                showTimeSelect
                timeFormat='HH:mm'
                timeIntervals={15}
                dateFormat={dateFormat}
                timeCaption='time'
                fixedHeight
                locale={locale}
            />
        ).find('input[name="test"]');

        addHours(now, 2);
        // raw change input datetime
        input.simulate('change', { target: { value: format(now, dateFormat, { locale: LOCALE_ENUM[locale] }) } });

        expect(
            input.instance().value
        ).toBe(format(now, dateFormat, { locale: LOCALE_ENUM[locale] }));

        expect(
            input.instance().value
        ).toBe(format(selectedDate, dateFormat, { locale: LOCALE_ENUM[locale] }));
    });
});
