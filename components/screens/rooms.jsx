import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../consts/colors";
import room from "../consts/rooms";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import { Paystack } from "react-native-paystack-webview";

import { Picker } from "@react-native-picker/picker";
import SelectDropdown from "react-native-select-dropdown";
import { auth, db } from "../backend/firebase";

const Rooms = ({ navigation, route }) => {
    const {width, height } = Dimensions.get("screen");

  const [addHotels, setAddHotels] = useState([]);
  const item = route.params.item;
  const CheckIn = route.params.CheckIn;
  const CheckOut = route.params.CheckOut;
  const adultPlus = route.params.adultPlus;
  const roomprice = route.params.roomprice;
  const roomnumber = item.room;
  const categories = ["All", "Popular", "Top Rated"];

  // const paystackWebViewRef = useRef<paystackProps.PayStackRef>();
  console.log(roomprice);

  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  // const [selectedPrice, setSelectedPrice] = useState();
  const sort = ["highest to lowest", "lowest to highest"];

  // console.log(addHotels[0]?.images, '<------------')

  const Card = ({ room, index }) => {

    return (
      <ScrollView showsVerticalScrollIndicator={false} style={{}}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "space-between",
            marginTop: 10,
            borderColor: COLORS.primary,
            borderRadius: 10,
            borderWidth: 3,
            width: "95%",
            // height: "250%",
            padding: 10,
            // top: -90,
          }}
        >
          <Image
            source={{ uri: room?.roomurl }}
            style={{ width: "40%", height: "105%", borderRadius: 10 }}
          ></Image>

          <View style={{  paddingHorizontal: 15 }}>
            <Text
              style={{
                fontWeight: "bold",
                color: COLORS.secondary,
                fontSize: 20,
              }}
            >
              {room.roomtype} Room{" "}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Icon
                name="airline-seat-flat"
                size={24}
                color={COLORS.primary}
                style={{ marginRight: 10 }}
              />
              <Text
                style={{
                  fontWeight: "bold",
                  color: COLORS.secondary,
                  fontSize: 16,
                }}
              >
                {room.beds}bed(s){" "}
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <Icon
                name="money"
                size={24}
                color={COLORS.primary}
                style={{ marginRight: 10 }}
              />
              <Text
                style={{
                  fontWeight: "bold",
                  color: COLORS.secondary,
                  fontSize: 16,
                }}
              >
                R{room.roomprice}.00
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignContent: "space-between",
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Confirm", {
                    CheckIn: CheckIn,
                    CheckOut: CheckOut,
                    adultPlus: adultPlus,
                    roomprice: roomprice,
                    item: item,
                    room: room,
                  })
                }
              >
                {/* <Text style={{fontWeight:'bold', color:COLORS.secondary, fontSize:16}}>Select</Text> */}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignContent: "flex-end",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: COLORS.secondary,
                      fontSize: 16,
                    }}
                  >
                    {" "}
                    {item.room.length} Available{" "}
                  </Text>
                  <Icon name="east" size={24} color={COLORS.primary} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
     
        <View style={styles.header}>

            
        <View style={{  width:width / 1.3,
    height:height /6.3,
        backgroundColor: COLORS.white,
        elevation: 15,
        marginHorizontal: 10,
        borderRadius: 10,
        top:280,
        left:90,
        position:'absolute'
        }}>
    <Text style={{ fontSize: 26, fontWeight: 'bold', color: COLORS.primary, marginTop: 50 ,textAlign:'center'}}> Rooms</Text>
    <Icon name="keyboard-arrow-left" size={38} color='#fff' style={{top:-190, left:-40}} 
    onPress={navigation.goBack} />
          </View>



          <Text
            style={{
              fontSize: 26,
              fontWeight: "bold",
              color: COLORS.white,
              marginBottom: 30,
            }}
          >
            {" "}
            Select Room Type{" "}
          </Text>
         <Text style={{ fontSize:26, fontWeight:'bold', color:COLORS.white}}> {room.name}</Text>
        </View>

          <FlatList
            data={item.room}
            contentContainerStyle={{ paddingLeft: 20 }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => <Card room={item} index={index} />}
          />
   

        <TouchableOpacity
          style={{ margin: 10, justifyContent: "flex-end" }}
          onPress={() => navigation.navigate("PaymentScreen")}
        >
          <Text
            style={{
              padding: 5,
              color: COLORS.secondary,
              fontWeight: "bold",
              textAlign: "right",
            }}
          >
            Proceed to payment
          </Text>
        </TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 350,
    width: 480,
    backgroundColor: COLORS.secondary,
    marginLeft: -60,
    borderRadius: 500,

    top: -100,
  },

  inputText: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.secondary,
    flex: 1,
  },

  categoryListText: {
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default Rooms;
