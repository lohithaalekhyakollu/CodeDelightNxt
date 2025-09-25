import React from "react";
import "./Reviews.css";

const ReviewsSection = () => {
  return (
    <section className="reviews-section">
      <h2 className="reviews-heading">What Our Learners Say</h2>
      <div className="carousel-wrapper">
        <div className="reviews-viewport">
          <div className="reviews-container">
            <div className="review-card">
              <p className="review-text">"Challenges and quizzes helped me apply what I learned quickly. I enjoyed clarity of each lesson."</p>
              <div className="review-author">– K. Lohitha Alekhya</div>
              <div className="review-rating">★★★★★</div>
            </div>
            <div className="review-card">
              <p className="review-text">"The modules are structured really well. Everything builds up smoothly, and the short format made it easy."</p>
              <div className="review-author">– K. Sai Lakshmi Durga</div>
              <div className="review-rating">★★★★☆</div>
            </div>
            <div className="review-card">
              <p className="review-text">"I liked how visual the platform was. It helped me understand programming concepts that I used to find hard before."</p>
              <div className="review-author">– G. Ashrita</div>
              <div className="review-rating">★★★★★</div>
            </div>
            <div className="review-card">
              <p className="review-text">"Fun, easy, and consistent. Every lesson felt rewarding and pushed me to stay on track without losing interest."</p>
              <div className="review-author">– K. Kavya Santhoshi</div>
              <div className="review-rating">★★★★★</div>
            </div>
            <div className="review-card">
              <p className="review-text">"Clean interface and helpful feedback after each quiz. I improved my understanding and confidence over time."</p>
              <div className="review-author">– K. Hema Durga</div>
              <div className="review-rating">★★★★☆</div>
            </div>
            <div className="review-card">
              <p className="review-text">"A fantastic platform that makes coding exciting. The balance of visuals, theory, and practice kept me engaged!"</p>
              <div className="review-author">– R. Nikhila</div>
              <div className="review-rating">★★★★★</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
