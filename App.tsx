
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header isTop={true}>Header 1</Header>
        <Content
          items={[
            { text: 'First sentence', textStyle: { color: 'red', fontSize: 20 } },
            { text: 'Second sentence', textStyle: { color: 'blue', fontSize: 16 } },
            { text: 'Third sentence', textStyle: { color: 'green', fontSize: 14 } },
          ]}
        />
        <Header isTop={false}>Header 2</Header>
        <Content
          items={[
            { text: 'Fourth sentence', textStyle: { color: 'orange', fontSize: 18 } },
            { text: 'Fifth sentence', textStyle: { color: 'purple', fontSize: 16, fontWeight: 'bold' } },
          ]}
        />

        <Footer/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;