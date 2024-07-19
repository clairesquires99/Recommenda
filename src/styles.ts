import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  rootLayout: {
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 5,
    maxWidth: 650,
    width: "100%",
    marginHorizontal: "auto",
    marginTop: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text_20: {
    fontSize: 20,
    marginBottom: 5,
  },
  text_md: {
    fontSize: 16,
    marginBottom: 5,
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
    color: "#007AFF",
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
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    flex: 1,
  },
  authInput: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 5,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#D3D3D3",
    borderRadius: 10,
    width: "100%",
  },
  customButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 10,
    margin: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    maxWidth: 300,
  },
  customButtonText: {
    color: "white",
    fontSize: 20,
    paddingRight: 5,
    paddingLeft: 5,
  },
  arrowButton: {
    padding: 10,
    margin: 10,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  arrowButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 0,
    paddingBottom: 0,
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
  userCard: {
    marginTop: 10,
    padding: 10,
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D3D3D3",
  },
  loadingCont: {
    flex: 1,
    justifyContent: "center",
  },
});
