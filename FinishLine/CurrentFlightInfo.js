import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Image } from 'react-native';
import PropTypes from 'prop-types';

class CurrentFlightInfo extends React.Component {
  static propTypes = {
    month: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    departure: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
  }

  viewDetails() {
    
  }

  render() {
    const {month, date, dayOfWeek, departure, destination} = this.props;

    return (
      <View style={{padding: 10}}>
        <View><Text>Upcoming Flights</Text></View>
        <View style={{marginBottom: 20}}>
          <Text style={{fontSize: 108, fontWeight: 'bold'}}>{date}</Text>
          <View>
            <Text>{month}</Text>
            <Text>{departure} -> {destination}</Text>
          </View>
        </View>
        <View>
          <Button
            onPress={this.viewDetails}
            title="View details"
            color="steelblue"
          />
        </View>
      </View>
    )
  }
}

export default CurrentFlightInfo;