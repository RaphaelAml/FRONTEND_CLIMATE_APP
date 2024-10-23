// src/components/CitySuggestionsList.tsx

import React from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from "react-native";
import { City } from "../models/City";

type CitySuggestionsListProps = {
  suggestions: City[];
  onSelectCity: (city: City) => void;
};

export default function CitySuggestionsList({
  suggestions,
  onSelectCity,
}: CitySuggestionsListProps) {
  return (
    <FlatList
      data={suggestions}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={suggestionsStyles.suggestion}
          onPress={() => onSelectCity(item)}
        >
          <Text>{item.name}</Text>
        </TouchableOpacity>
      )}
      style={suggestionsStyles.suggestionsContainer}
    />
  );
}

const suggestionsStyles = {
  suggestion: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  } as ViewStyle,
  suggestionsContainer: {
    maxHeight: 150,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    marginTop: 5,
  } as ViewStyle,
};