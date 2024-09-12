import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { CardComponent } from "../components";
import CardComponent from "../components/cardComponent";

// Mock useNavigate dan useSelector
jest.mock("react-router-dom", () => ({
    useNavigate: jest.fn(),
}));

jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
}));

describe("CardComponent Tests (Sederhana)", () => {
    let mockNavigate;

    beforeEach(() => {
        mockNavigate = jest.fn();
        useNavigate.mockReturnValue(mockNavigate);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test("menampilkan Loading... ketika dataUser kosong", () => {
        render(<CardComponent />);
        useSelector.mockReturnValue([]); // dataUser kosong


        expect(screen.getByText(/Loading...!/i)).toBeInTheDocument();
    });

    // test("menampilkan data user", () => {
    //     const mockDataUser = [
    //         {
    //             "id": 1,
    //             "name": "Leanne Graham",
    //             "username": "Bret",
    //             "email": "Sincere@april.biz",
    //             "address": {
    //                 "street": "Kulas Light",
    //                 "suite": "Apt. 556",
    //                 "city": "Gwenborough",
    //                 "zipcode": "92998-3874",
    //                 "geo": {
    //                     "lat": "-37.3159",
    //                     "lng": "81.1496"
    //                 }
    //             },
    //         },
    //     ];

    //     useSelector.mockReturnValue(mockDataUser);

    //     render(<CardComponent />);

    //     // Verifikasi data user ditampilkan
    //     expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    //     expect(screen.getByText(/john@mail.com/i)).toBeInTheDocument();
    //     expect(screen.getByText(/Main St/i)).toBeInTheDocument();
    // });

    test("navigasi ke halaman detail saat tombol diklik", () => {
        const mockDataUser = [
            {
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "address": {
                    "street": "Kulas Light",
                    "suite": "Apt. 556",
                    "city": "Gwenborough",
                    "zipcode": "92998-3874",
                    "geo": {
                        "lat": "-37.3159",
                        "lng": "81.1496"
                    }
                },
            },
        ];

        useSelector.mockReturnValue(mockDataUser);

        render(<CardComponent />);

        const button = screen.getByText(/Show Detail/i);
        fireEvent.click(button);

        expect(mockNavigate).toHaveBeenCalledWith("/data/1");
    });
});
