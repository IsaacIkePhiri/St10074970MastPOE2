import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import HomePage from './HomePage'; // Import your existing HomePage component
import BookListScreen from './BookListScreen'; // Import your BookListScreen component
import HistoryScreen from './HistoryScreen';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const switchToPage = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <View style={styles.container}>
      {/* Navigation Buttons */}
      <View style={styles.navigation}>
        <Button title="Home" onPress={() => switchToPage('home')} />
        <Button title="Book List" onPress={() => switchToPage('bookList')} />
        <Button title="History" onPress={() => switchToPage('history')} />
      </View>

      {/* Display the Current Page */}
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'bookList' && <BookListScreen />}
      {currentPage === 'history' && <HistoryScreen />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  navigation: {
    flexDirection: 'row',
    marginBottom: 20,
  },
});

export default App;
