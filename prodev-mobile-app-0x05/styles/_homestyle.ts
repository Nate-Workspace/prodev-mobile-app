import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },

  // Search Bar
  searchGroup: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: "#34967C",
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "white",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#555",
  },
  searchControl: {
    height: 40,
    fontSize: 13,
    color: "#000",
    marginTop: 4,
  },
  searchButton: {
    width: 40,
    height: 40,
    backgroundColor: "#34967C",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  // Filter scroll section
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 20,
    paddingVertical: 10,
  },
  filterContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    padding: 6,
    borderRadius: 10,
    backgroundColor: "#EFEFEF",
    gap: 4,
  },

  // Listings
  listingContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    flex: 1,
  },

  paginationContainer: {
    marginTop: 20,
    marginBottom: 40,
    alignItems: "center",
  },
  showMoreButton: {
    backgroundColor: "#34967C",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  showMoreButtonText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 14,
  },
});

export { styles };
