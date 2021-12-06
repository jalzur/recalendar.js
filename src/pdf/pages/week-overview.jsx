import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import React from 'react';

import MiniCalendar from 'pdf/components/mini-calendar';

class WeekOverviewPage extends React.Component {
	render() {
		const { date } = this.props;
		return (
			<Page>
				<Text>Week overview Page for Week #{date.isoWeek()}</Text>
				<MiniCalendar date={ date } />
			</Page>
		);
	}
}

WeekOverviewPage.propTypes = {
	date: PropTypes.instanceOf( dayjs ).isRequired,
};

export default WeekOverviewPage;
