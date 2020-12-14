```js
import { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import { DatePicker, Box } from 'zk-ui';
import { CalendarIcon } from 'zk-ui/icons';

registerLocale('ru', ru);
// See: https://reactdatepicker.com/
// for complete list of props.
class DatePickerExample extends React.Component {
    constructor() {
        super();
        this.state = {
            timestamp: new Date(),
            date: new Date(),
            time: new Date(),
            startDate: null,
            endDate: null,
        };
        this.change = this.change.bind(this);
        this.changeDate.bind(this);
        this.changeTime.bind(this);
        this.changeStartDate.bind(this);
        this.changeEndDate.bind(this);
    }

    change(timestamp) { this.setState({ timestamp }) };

    changeDate(date) { this.setState({ date }) };

    changeTime(time) { this.setState({ time }) };

    changeStartDate(startDate) { this.setState({ startDate }) };

    changeEndDate(endDate) { this.setState({ endDate }) };

    render() {
        return (
            <>
                <Box mb='20px'>
                    <DatePicker
                        required
                        label='Date and time'
                        before={<CalendarIcon />}
                        selected={this.state.timestamp}
                        onChange={this.change}
                        showTimeSelect
                        timeFormat='HH:mm'
                        timeIntervals={15}
                        dateFormat='dd.MM.yyyy HH:mm'
                        timeCaption='time'
                        locale='ru'
                        fixedHeight
                        dataQa='testQa'
                    />
                </Box>
                <Box mb='20px'>
                    <DatePicker
                        label='Date'
                        selected={this.state.date}
                        onChange={this.changeDate}
                        dateFormat='dd.MM.yyyy'
                        locale='uk'
                        fixedHeight
                    />
                </Box>
                <Box mb='20px'>
                    <DatePicker
                        label='Time'
                        selected={this.state.time}
                        onChange={this.changeTime}
                        showTimeSelect
                        showTimeSelectOnly
                        timeFormat='HH:mm'
                        dateFormat='HH:mm'
                        timeIntervals={30}
                        timeCaption='Time'
                        locale='ru'
                    />
                </Box>
                <Box mb='20px'>
                    <DatePicker
                        label='Start'
                        selected={this.state.startDate}
                        selectsStart
                        minDate={new Date()}
                        maxDate={this.state.endDate}
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onChange={this.changeStartDate}
                        dateFormat='dd.MM.yyyy'
                    />
                </Box>
                <Box mb='20px'>
                    <DatePicker
                        label='End'
                        selected={this.state.endDate}
                        selectsEnd
                        minDate={this.state.startDate}
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onChange={this.changeEndDate}
                        dateFormat='dd.MM.yyyy'
                    />
                </Box>
            </>
        );
    }
};

<DatePickerExample />
```
