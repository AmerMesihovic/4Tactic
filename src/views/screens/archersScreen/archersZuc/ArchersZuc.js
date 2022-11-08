import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import DataTable, { COL_TYPES } from "react-native-datatable-component";

const App = () => {
  const data = [
    {
      Naziv: "Godišnja članarina",
      "Redovna cijena": "100,00 KM",
    },
    {},
    {
      Naziv: "Naknada korištenja strelišta",
      "Cijena za članove": "5,00 KM",
      "Redovna cijena": "5,00 KM",
    },
    {
      Naziv: "Sa sopstvenom municijom, sat vremena po liniji",
      "Cijena za članove": "10,00 KM",
      "Redovna cijena": "10,00 KM",
    },
    { Naziv: "" },
    {
      Naziv: "Pištoljski metak 9x19 mm",
      "Cijena za članove": "0,50 KM",
      "Redovna cijena": "0,70 KM",
    },
    {
      Naziv: "Pištoljski metak 45 cal",
      "Cijena za članove": "1,50 KM",
      "Redovna cijena": "1,70 KM",
    },
    {
      Naziv: "Municija za revolver 357 mag ili 38 special",
      "Cijena za članove": "§",
      "Redovna cijena": "1,50 KM",
    },
    {
      Naziv: "Malokalibarska municija 22LR",
      "Cijena za članove": "0,30 KM",
      "Redovna cijena": "0,40 KM",
    },
    {
      Naziv: "Puščana municija 7.62x39",
      "Cijena za članove": "0,50 KM",
      "Redovna cijena": "0,70 KM",
    },
    {
      Naziv: "Puščana municija 5.56 ili 223",
      "Cijena za članove": "1,00 KM",
      "Redovna cijena": "1,20 KM",
    },
    {
      Naziv: "Municija sačma 12cal",
      "Cijena za članove": "1,00 KM",
      "Redovna cijena": "1,20 KM",
    },
    {},
    {
      Naziv: "Pištolj, puške",
      "Cijena za članove": "5,00 KM",
      "Redovna cijena": "10,00 KM",
    },
    {
      Naziv: "Instruktor 1 sat",
      "Cijena za članove": "25,00 KM",
      "Redovna cijena": "35,00 KM",
    },
    {
      Naziv: "Meta silueta ( prva gratis)",
      "Cijena za članove": "0.50 KM",
      "Redovna cijena": "1,00 KM",
    },
  ];

  const colSettings = [
    { name: "Naziv", type: COL_TYPES.STRING, width: "45%" },
    { name: "Cijena za članove", type: COL_TYPES.INT, width: "27.5%" },
    { name: "Redovna cijena", type: COL_TYPES.INT, width: "27.5%" },
  ];

  const colNames = ["Naziv", "Cijena za članove", "Redovna cijena"];

  return (
    <View style={styles.container}>
      <ScrollView>
        <DataTable
          data={data}
          colNames={colNames}
          colSettings={colSettings}
          backgroundColor={"#CCCAC9"}
          headerLabelStyle={{
            color: "black",
            fontSize: 15,
            textAlign: "center",
            fontWeight: "bold",
          }}
          noOfPages={20}
        ></DataTable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
});

export default App;
