import { StyleSheet } from "react-native";

// export const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 16,
//     },
//     title: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         marginBottom: 16,
//     },
//     input: {
//         height: 40,
//         borderColor: 'gray',
//         borderWidth: 1,
//         marginBottom: 12,
//         paddingHorizontal: 8,
//     },
//     favoriteButton: {
//         marginBottom: 12,
//     },
// });

// styles.ts


export const colors = {
  primary: '#3498db',
  text: '#2c3e50',
  background: '#ecf0f1',
  border: '#bdc3c7',
};

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: colors.text,
  },
  input: {
    height: 40,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
    color: colors.text,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  listItemText: {
    fontSize: 18,
    color: colors.text,
  },
  listItemButtons: {
    flexDirection: 'row',
  },
  listItemButton: {
    marginLeft: 10,
    padding: 5,
    borderRadius: 5,
  },
  listItemButtonText: {
    color: 'white',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
});

