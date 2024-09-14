import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import ImportContactsRoundedIcon from '@mui/icons-material/ImportContactsRounded';
import BlindsClosedRoundedIcon from '@mui/icons-material/BlindsClosedRounded';
import BallotRoundedIcon from '@mui/icons-material/BallotRounded';
import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded';
import axios from 'axios'
import "./DashBoard.css"

const Dashboard = () => {

    const [attendance, setAttendance] = useState("")
    const [benefit, setBenefit] = useState("")
    const [department, setDepartment] = useState("")
    const [employee, setEmployee] = useState("")
    const [leave, setLeave] = useState("")
    const [position, setPosition] = useState("")

    const [isloading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        try {
            const { data } = await axios.post('/DashBoardRecords');

            const {
                Attendancedata,
                Benefitdata,
                Departmentdata,
                Employeedata,
                Leavedata,
                Positiondata,
            } = data || {};

            setAttendance(prev => (Attendancedata !== prev ? Attendancedata : prev));
            setBenefit(prev => (Benefitdata !== prev ? Benefitdata : prev));
            setDepartment(prev => (Departmentdata !== prev ? Departmentdata : prev));
            setEmployee(prev => (Employeedata !== prev ? Employeedata : prev));
            setLeave(prev => (Leavedata !== prev ? Leavedata : prev));
            setPosition(prev => (Positiondata !== prev ? Positiondata : prev));
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="mainDiv">

                <div className="sub-div">
                    <div className="purchase-div">
                        <span style={{ height: "7vh", position: "absolute", marginLeft: "2vw", fontSize: "1.7vw", color: "#2F4F4F", }}>Employee</span>
                        <div className="invoice-item" style={{ display: "flex", boxShadow: "rgba(0, 0, 0, 0.25) 0px 2px 5px, rgba(0, 0, 0, 0.12) 0px -1px 10px, rgba(0, 0, 0, 0.12) 0px 2px 2px, rgba(0, 0, 0, 0.17) 0px 2px 2px, rgba(0, 0, 0, 0.09) 0px -2px 2px" }} >
                            <div className="po-div" >
                                <Link to="/po/openpos" className="link">
                                    Employee </Link>
                                {!isloading && <div style={{ marginTop: "1vh" }}> {employee} </div>}
                                {isloading && <div class="loaderr" style={{ marginTop: "1vh" }} ></div>}
                            </div>
                            <div className="icon" style={{ backgroundColor: '#34c38f', marginBottom: "40px" }}>
                                <ImportContactsRoundedIcon className="ImageIcon" />
                            </div>
                        </div>

                        <div className="invoice-item" style={{ display: "flex", boxShadow: "rgba(0, 0, 0, 0.25) 0px 2px 5px, rgba(0, 0, 0, 0.12) 0px -1px 10px, rgba(0, 0, 0, 0.12) 0px 2px 2px, rgba(0, 0, 0, 0.17) 0px 2px 2px, rgba(0, 0, 0, 0.09) 0px -2px 2px" }} >
                            <div className="po-div" >
                                <Link className="link" to="/po/closedpos">
                                    Attendance
                                </Link>
                                {!isloading && <div style={{ marginTop: "1vh" }}> {attendance} </div>}
                                {isloading && <div class="loaderr" style={{ marginTop: "1vh" }} ></div>}
                            </div>
                            <div className="icon" style={{ backgroundColor: 'rgb(249,133,133)', marginBottom: "40px" }}>
                                < BlindsClosedRoundedIcon className="ImageIcon" />
                            </div>
                        </div>

                        <div className="invoice-item" style={{ display: "flex", boxShadow: "rgba(0, 0, 0, 0.25) 0px 2px 5px, rgba(0, 0, 0, 0.12) 0px -1px 10px, rgba(0, 0, 0, 0.12) 0px 2px 2px, rgba(0, 0, 0, 0.17) 0px 2px 2px, rgba(0, 0, 0, 0.09) 0px -2px 2px" }} >
                            <div className="po-div" >
                                <Link className="link" to="/po/allpos">
                                    Department
                                </Link>
                                {!isloading && <div style={{ marginTop: "1vh" }}> {department} </div>}
                                {isloading && <div class="loaderr" style={{ marginTop: "1vh" }} ></div>}
                            </div>
                            <div className="icon" style={{ backgroundColor: '#f1b44c', marginBottom: "40px" }}>
                                < BallotRoundedIcon className="ImageIcon" />
                            </div>
                        </div>

                    </div>
                    <div className="purchase-div">
                        <span style={{ height: "7vh", position: "absolute", marginLeft: "2vw", fontSize: "1.7vw", color: "#2F4F4F", }}>Additionally</span>
                        <div className="invoice-item" style={{ display: "flex", boxShadow: "rgba(0, 0, 0, 0.25) 0px 2px 5px, rgba(0, 0, 0, 0.12) 0px -1px 10px, rgba(0, 0, 0, 0.12) 0px 2px 2px, rgba(0, 0, 0, 0.17) 0px 2px 2px, rgba(0, 0, 0, 0.09) 0px -2px 2px" }} >
                            <div className="po-div" >
                                <Link className="link" to="/Reports/invoiceDetials/All">
                                    Applied Leave
                                </Link>
                                {!isloading && <div style={{ marginTop: "1vh" }}>{leave} </div>}
                                {isloading && <div className="loaderr" style={{ marginTop: "1vh" }} ></div>}
                            </div>
                            <div className="icon" style={{ backgroundColor: '#f1b44c', marginBottom: "40px" }}>
                                < BallotRoundedIcon className="ImageIcon" />
                            </div>
                        </div>
                        <div className="invoice-item" style={{ display: "flex", boxShadow: "rgba(0, 0, 0, 0.25) 0px 2px 5px, rgba(0, 0, 0, 0.12) 0px -1px 10px, rgba(0, 0, 0, 0.12) 0px 2px 2px, rgba(0, 0, 0, 0.17) 0px 2px 2px, rgba(0, 0, 0, 0.09) 0px -2px 2px" }} >
                            <div className="po-div" >
                                <Link className="link" to="/Reports/invoiceDetials/Rejected">
                                    Position
                                </Link>
                                {!isloading && <div style={{ marginTop: "1vh" }}>{position} </div>}
                                {isloading && <div className="loaderr" style={{ marginTop: "1vh" }} ></div>}
                            </div>
                            <div className="icon" style={{ backgroundColor: '#44aee4', marginBottom: "40px" }}>
                                < UploadFileRoundedIcon className="ImageIcon" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Dashboard


