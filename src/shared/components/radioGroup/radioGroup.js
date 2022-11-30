import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import images from "../../../assets/images/images";
import RadioButton from "./radioButton";

class RadioGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.radioList
    }
  }

  componentDidMount() {
    this.setSelectedItem();
  }

  setSelectedItem = () => {
    let { list } = this.state;
    list.map((item) => {
      let indexOfItem = list.indexOf(item);
      if (this.props.selected?.title?.toLowerCase() === item?.title.toLowerCase()) {
        list[indexOfItem].selected = true;
      } else {
        list[indexOfItem].selected = false;
      }
    });
    this.setState({list})
  }


  componentDidUpdate(prevProps, prevState) {
    if (this.props.radioList !== prevProps.radioList || this.props.selected !== prevProps.selected) {
      this.setState({ list: this.props.radioList },()=>{
        this.setSelectedItem()

      })
    }

  }

  onRadionPress = (item, index) => {
    let { list } = this.state;
    list.map((value) => {
      let indexOfItem = list.indexOf(value);
      if (indexOfItem === index) {
        list[indexOfItem].selected = true;
        this.props.onItemPress(item)
      } else {
        list[indexOfItem].selected = false;
      }
    })
    this.setState({ list },()=>{});
  }

  renderRadioItems = (item, index) => {
    return (
      <RadioButton
        radioIcon={item.selected ? images.radioSelected : images.radioUnSelected}
        title={item.title}
        onPress={() => { this.onRadionPress(item, index) }}
      />
    )
  }

  render() {
    return (
      <FlatList
        // horizontal
        data={this.state.list}
        numColumns={2}
        renderItem={({ item, index }) => this.renderRadioItems(item, index)}
      />
    )
  }
};
export default RadioGroup;

const styles = StyleSheet.create({
  container: {

  },
});

