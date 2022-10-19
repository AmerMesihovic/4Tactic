import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { DataTable } from 'react-native-paper';

export default class ArchersVisoko extends Component {

  render() {
    return (
        <DataTable style={styles.container}>
                <DataTable.Row>
                    <DataTable.Cell style={{ flex: 3 }}>Godišnja članarina </DataTable.Cell>
                    <DataTable.Cell></DataTable.Cell>
                    <DataTable.Cell>100,00 KM</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Header style={styles.tableHeader}>
                    <DataTable.Title>Naziv</DataTable.Title>
                    <DataTable.Title style={styles.cell}>Cijena za članove</DataTable.Title>
                    <DataTable.Title style={styles.cell}>Redovna cijena</DataTable.Title>
                </DataTable.Header>
            
                <DataTable.Row>
                    <DataTable.Cell>Naknada korištenja strelišta</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>5,00 KM</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>5,00 KM</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Sa sopstvenom municijom, sat vremena po liniji</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>10,00 KM</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>10,00 KM</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Header style={styles.tableHeader}>
                    <DataTable.Title>Cijena municije</DataTable.Title>
                    <DataTable.Title style={styles.cell}>Cijena za članove</DataTable.Title>
                    <DataTable.Title style={styles.cell}>Redovna cijena</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell>Pištoljski metak 9x19 mm</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>0,60 KM</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>0,70 KM</DataTable.Cell>
                </DataTable.Row>


                <DataTable.Row>
                    <DataTable.Cell>Pištoljski metak 45 cal</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>1,50 KM</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>1,70 KM</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Municija za revolver 357 mag ili 38 special</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>1,30 KM</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>1,50 KM</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Malokalibarska municija 22LR</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>0,30 KM</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>0,40 KM</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Puščana municija 7.62x39</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>1,00 KM</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>1,20 KM</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Puščana municija 5.56 ili 223 </DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>1,00 KM</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>1,20 KM</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Municija sačma 12cal</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>1,00 KM</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>1,20 KM</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Header style={styles.tableHeader}>
                    </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell>Pištolj, puške</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>5,00 KM</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>10,00 KM</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Instruktor 1 sat</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>25,00 KM</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>35,00 KM</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>PMeta silueta ( prva gratis)</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>0,50 KM</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>1,00 KM</DataTable.Cell>
                </DataTable.Row>
        </DataTable>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      padding: 5,

    },
    tableHeader: {
      backgroundColor: '#DCDCDC',
    },
    cell: {
        justifyContent: "flex-end",
    },
    text: {
        numberOfLines: 2,
        ellipsizeMode:"tail"
    }
  });