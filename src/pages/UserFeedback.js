import React, { useState } from "react";
import SidebarOptions from "./SidebarOptions";
import "../css/Admin.css";
import { Modal } from "react-bootstrap";
import { FaUser } from "react-icons/fa";

function UserFeedback() {
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  const handleFeedbackClick = (feedback) => {
    setSelectedFeedback(feedback);
  };

  const handleClose = () => {
    setSelectedFeedback(null);
  };

  const feedbacks = [
    { username: 'OceanBreeze22', feedback: 'The user interface is good but ...', date: '5/29/23' },
    { username: 'CosmicUser', feedback: 'The search feature can be improved ...', date: '5/29/23' },
    { username: 'TechGuru77', feedback: 'Really like the design aesthetics...', date: '5/30/23' },
    { username: 'User123', feedback: 'The website is very user-friendly...', date: '6/1/23' },
    { username: 'FeedbackMaster', feedback: 'Had some issues with the cart page...', date: '6/2/23' },
    { username: 'HappyCustomer', feedback: 'Love the eco-friendly products on offer...', date: '6/3/23' },
    { username: 'TestUser', feedback: 'The checkout process was a bit complex...', date: '6/4/23' },
    // Add more feedbacks here...
  ];

  return (
    <div className="admin-dashboard">
      <SidebarOptions />
      <div className="admin-dashboard-content user-feedback-container">
        <h2>USER FEEDBACKS</h2>
        <div className="divider"></div>
        <div className="admin-dashboard-recent-users mb-4 shadow">
          <h2>Recent Feedbacks</h2>
          <div className="divider"></div>
          <div className="user-feedback-list">
            {feedbacks.map((feedback, index) => (
              <div
                key={index}
                className={`user-feedback-item ${selectedFeedback === feedback ? "active" : ""}`}
                onClick={() => handleFeedbackClick(feedback)}
              >
                <div className="user-icon">
                  <FaUser size={30} />
                </div>
                <div className="feedback-content">
                  <strong>{feedback.username}</strong>
                  <p>{feedback.feedback.slice(0, 50) + "..."}</p>
                </div>
                <div className="feedback-date">
                  <i>{feedback.date}</i>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Modal show={selectedFeedback !== null} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>User Feedback</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedFeedback && (
              <>
                <p>
                  <strong>{selectedFeedback.username}</strong> -{" "}
                  <i>{selectedFeedback.date}</i>
                </p>
                <p>{selectedFeedback.feedback}</p>
              </>
            )}
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default UserFeedback;