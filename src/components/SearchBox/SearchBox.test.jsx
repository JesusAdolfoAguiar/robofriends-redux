import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import SearchBox from "./SearchBox";

describe('SearchBox', () => {
    test("renders search input with placeholder", () => {
        render(<SearchBox />);
    
        const searchInput = screen.getByPlaceholderText("search robots");
        expect(searchInput).toBeInTheDocument();
    });
    
    test("calls searchChange function on input change", () => {
        const mockSearchChange = jest.fn();
        render(<SearchBox searchChange={mockSearchChange} />);
    
        const searchInput = screen.getByPlaceholderText("search robots");
        fireEvent.change(searchInput, { target: { value: "test" } });
    
        expect(mockSearchChange).toHaveBeenCalledTimes(1);
    });
});

