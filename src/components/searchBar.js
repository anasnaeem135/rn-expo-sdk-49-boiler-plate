import { StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import theme from 'src/theme/theme';

const SearchbarComponent = ({ onChange, value, placeholder = 'Search', ...props }) => {
  // const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => onChange(query);

  return (
    <Searchbar
      placeholder={placeholder}
      onChangeText={onChangeSearch}
      iconColor={theme.colors.secondary}
      value={value}
      style={styles.border}
      {...props}
    />
  );
};

export default SearchbarComponent;

const styles = StyleSheet.create({
  border: {
    borderColor: theme.colors.primaryAccent,
    borderWidth: 2,
    borderRadius: 10,
  },
});
