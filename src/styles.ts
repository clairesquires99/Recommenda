import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    paddingStart: 5,
    paddingEnd: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
  inputSearchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D3D3D3",
    marginTop: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  customButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 10,
    margin: 10,
    width: "80%",
    flexDirection: "row",
    justifyContent: "center",
  },
  customButtonText: {
    color: "white",
    fontSize: 20,
    paddingRight: 5,
    paddingLeft: 5,
  },
  searchButton: {
    padding: 15,
  },
  cardContainer: {
    flexDirection: "column",
    width: "100%",
  },
  card: {
    marginTop: 10,
    padding: 5,
    flexDirection: "row",
  },
  cardImage: {
    height: 120,
    width: 90,
    borderRadius: 10,
  },
  cardText: {
    marginLeft: 10,
    flex: 1,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  bookAuthor: {
    fontSize: 16,
    color: "#555",
  },
});
