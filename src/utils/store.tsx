import {create} from "zustand";
import {Store} from "@/utils/datatypes";

export const useStore = create<Store>((set) => ({
    suggestions: ['Groceries', 'Eating Out', 'Movie', 'Fuel'],
    addSuggestion: (data: string) => {
        set((state) => {
            const updatedSuggestions = state.suggestions
            updatedSuggestions.pop()
            updatedSuggestions.unshift(data)
            return { suggestions: updatedSuggestions };
        });
    },
}));