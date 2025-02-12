import "../styles/dashboard.css";
import React, { useState } from "react";

const Dashboard = () => {
    const name = "Praveen";
    const rollNo = "7376242CS225";

    const [marks, setMarks] = useState(["", "", "", "", ""]);
    const [total, setTotal] = useState(0);

    const handleChange = (index, value) => {
        const newMarks = [...marks];
        newMarks[index] = value;
        setMarks(newMarks);
    };

    const calculateTotal = () => {
        let sum = marks.reduce((acc, num) => acc + (parseInt(num) || 0), 0);
        setTotal(sum);
    };

    return (
        <div>
            <h2>Welcome back</h2>
            <p>Name: {name}</p>
            <p>Roll No: {rollNo}</p>

            <table border="1">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Subject Name</th>
                        <th>Marks</th>
                    </tr>
                </thead>
                <tbody>
                    {[1, 2, 3, 4, 5].map((num, index) => (
                        <tr key={index}>
                            <td>{num}</td>
                            <td>Subject {num}</td>
                            <td>
                                <input
                                    type="number"
                                    value={marks[index]}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button onClick={calculateTotal}>Total</button>
            <p>Total Marks: {total}</p>
        </div>
    );
};

export default Dashboard;
