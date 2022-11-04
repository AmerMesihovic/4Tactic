// import React, { Component } from 'react';
// import { StyleSheet, Text } from 'react-native';
// import { DataTable } from 'react-native-paper';

// export default class ArchersVisoko extends Component {

//   render() {
//     return (
//         <DataTable style={styles.container}>
//                 <DataTable.Row>
//                     <DataTable.Cell style={{ flex: 3 }}>Godišnja članarina </DataTable.Cell>
//                     <DataTable.Cell></DataTable.Cell>
//                     <DataTable.Cell>100,00 KM</DataTable.Cell>
//                 </DataTable.Row>

//                 <DataTable.Header style={styles.tableHeader}>
//                     <DataTable.Title>Naziv</DataTable.Title>
//                     <DataTable.Title style={styles.cell}>Cijena za članove</DataTable.Title>
//                     <DataTable.Title style={styles.cell}>Redovna cijena</DataTable.Title>
//                 </DataTable.Header>

//                 <DataTable.Row>
//                     <DataTable.Cell>Naknada korištenja strelišta</DataTable.Cell>
//                     <DataTable.Cell style={styles.cell}>5,00 KM</DataTable.Cell>
//                     <DataTable.Cell style={styles.cell}>5,00 KM</DataTable.Cell>
//                 </DataTable.Row>

//                 <DataTable.Row>
//                     <DataTable.Cell>Sa sopstvenom municijom, sat vremena po liniji</DataTable.Cell>
//                     <DataTable.Cell style={styles.cell}>10,00 KM</DataTable.Cell>
//                     <DataTable.Cell style={styles.cell}>10,00 KM</DataTable.Cell>
//                 </DataTable.Row>

//                 <DataTable.Header style={styles.tableHeader}>
//                     <DataTable.Title>Cijena municije</DataTable.Title>
//                     <DataTable.Title style={styles.cell}>Cijena za članove</DataTable.Title>
//                     <DataTable.Title style={styles.cell}>Redovna cijena</DataTable.Title>
//                 </DataTable.Header>

//                 <DataTable.Row>
//                     <DataTable.Cell>Pištoljski metak 9x19 mm</DataTable.Cell>
//                     <DataTable.Cell style={styles.cell}>0,60 KM</DataTable.Cell>
//                     <DataTable.Cell style={styles.cell}>0,70 KM</DataTable.Cell>
//                 </DataTable.Row>

//                 <DataTable.Row>
//                     <DataTable.Cell>Pištoljski metak 45 cal</DataTable.Cell>
//                     <DataTable.Cell style={styles.cell}>1,50 KM</DataTable.Cell>
//                     <DataTable.Cell style={styles.cell}>1,70 KM</DataTable.Cell>
//                 </DataTable.Row>

//                 <DataTable.Row>
//                     <DataTable.Cell>Municija za revolver 357 mag ili 38 special</DataTable.Cell>
//                     <DataTable.Cell style={styles.cell}>1,30 KM</DataTable.Cell>
//                     <DataTable.Cell style={styles.cell}>1,50 KM</DataTable.Cell>
//                 </DataTable.Row>

//                 <DataTable.Row>
//                     <DataTable.Cell>Malokalibarska municija 22LR</DataTable.Cell>
//                     <DataTable.Cell style={styles.cell}>0,30 KM</DataTable.Cell>
//                     <DataTable.Cell style={styles.cell}>0,40 KM</DataTable.Cell>
//                 </DataTable.Row>

//                 <DataTable.Row>
//                     <DataTable.Cell>Puščana municija 7.62x39</DataTable.Cell>
//                     <DataTable.Cell style={styles.cell}>1,00 KM</DataTable.Cell>
//                     <DataTable.Cell style={styles.cell}>1,20 KM</DataTable.Cell>
//                 </DataTable.Row>

//                 <DataTable.Row>
//                     <DataTable.Cell>Puščana municija 5.56 ili 223 </DataTable.Cell>
//                     <DataTable.Cell style={styles.cell}>1,00 KM</DataTable.Cell>
//                     <DataTable.Cell style={styles.cell}>1,20 KM</DataTable.Cell>
//                 </DataTable.Row>

//                 <DataTable.Row>
//                     <DataTable.Cell>Municija sačma 12cal</DataTable.Cell>
//                     <DataTable.Cell style={styles.cell}>1,00 KM</DataTable.Cell>
//                     <DataTable.Cell style={styles.cell}>1,20 KM</DataTable.Cell>
//                 </DataTable.Row>

//                 <DataTable.Header style={styles.tableHeader}>
//                     </DataTable.Header>

//                 <DataTable.Row>
//                     <DataTable.Cell>Pištolj, puške</DataTable.Cell>
//                     <DataTable.Cell style={styles.cell}>5,00 KM</DataTable.Cell>
//                     <DataTable.Cell style={styles.cell}>10,00 KM</DataTable.Cell>
//                 </DataTable.Row>

//                 <DataTable.Row>
//                     <DataTable.Cell>Instruktor 1 sat</DataTable.Cell>
//                     <DataTable.Cell style={styles.cell}>25,00 KM</DataTable.Cell>
//                     <DataTable.Cell style={styles.cell}>35,00 KM</DataTable.Cell>
//                 </DataTable.Row>

//                 <DataTable.Row>
//                     <DataTable.Cell>PMeta silueta ( prva gratis)</DataTable.Cell>
//                     <DataTable.Cell style={styles.cell}>0,50 KM</DataTable.Cell>
//                     <DataTable.Cell style={styles.cell}>1,00 KM</DataTable.Cell>
//                 </DataTable.Row>
//         </DataTable>
//     );
//   }
// }

// const styles = StyleSheet.create({
//     container: {
//       padding: 5,

//     },
//     tableHeader: {
//       backgroundColor: '#DCDCDC',
//     },
//     cell: {
//         justifyContent: "flex-end",
//     },
//     text: {
//         numberOfLines: 2,
//         ellipsizeMode:"tail"
//     }
//   });

// import { NativeBaseProvider } from "native-base";
// import { View } from "native-base";
// import React from "react";
// import DataTable, { COL_TYPES } from "react-native-datatable-component";

// const SomeComponent = (props) => {
//   return (
//     <NativeBaseProvider>
//       <View style={{ width: "98%", alignSelf: "center" }}>
//         <DataTable
//           data={[
//             { name: "Godišnja članarina", regularPrice: "100KM" },
//             { name: "" },
//             {
//               name: "Naknada korištenja strelišta",
//               memberPrice: "5,00 KM",
//               regularPrice: "5,00 KM",
//             },
//             {
//               name: "Sa sopstvenom municijom, sat vremena po liniji",
//               memberPrice: "10,00 KM",
//               regularPrice: "  0,00 KM",
//             },
//             { name: "", memberPrice: "", regularPrice: "" },
//             {
//               name: "Municija",
//               memberPrice: "Cijena za članove",
//               regularPrice: "Redovna cijena",
//             },
//           ]}
//           colNames={["name", "memberPrice", "regularPrice"]}
//           colSettings={[
//             { name: "name", type: COL_TYPES.STRING, width: "35%" },
//             { name: "memberPrice", type: COL_TYPES.INT, width: "32.5%" },
//             { name: "regularPrice", type: COL_TYPES.STRING, width: "32.5%" },
//           ]}
//           noOfPages={1}
//           backgroundColor={"rgba(23,2,4,0.2)"}
//           headerLabelStyle={{ color: "grey", fontSize: 12 }}
//         />
//       </View>
//     </NativeBaseProvider>
//   );
// };

// export default SomeComponent;


import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';

export default class ExampleThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Head', 'Head2', 'Head3', 'Head4', 'Head5', 'Head6', 'Head7', 'Head8', 'Head9'],
      widthArr: [40, 60, 80, 100, 120, 140, 160, 180, 200]
    }
  }

  render() {
    const state = this.state;
    const tableData = [];
    for (let i = 0; i < 30; i += 1) {
      const rowData = [];
      for (let j = 0; j < 9; j += 1) {
        rowData.push(`${i}${j}`);
      }
      tableData.push(rowData);
    }

    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                      textStyle={styles.text}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
});