import React from 'react';
import '../index.css'; 

export const Discuss = () => {
    return (
    <div className="discussion-forum-container">
      <h1>Welcome to the Discussion Forum</h1>
      <div className="forum-post">
        <h2>Should I Invest My Bonus or Pay Off Debt?</h2>
        <p className="post-content">
        I recently received a significant bonus at work and I'm torn between investing it or paying off some of my high-interest debt. 
        What would be the best strategy to maximize my financial well-being in the long term?
        </p>
        <p className="post-author">Posted by John Doe</p>
      </div>
      <div className="forum-post">
        <h2>How Can I Keep My Retirement Savings Safe During Market Ups and Downs?</h2>
        <p className="post-content">
        I've been diligently saving for retirement in my company's 401(k) plan, but with the recent market volatility, I'm feeling anxious about my investments. 
        How can I ensure my retirement savings remain stable and continue to grow despite market fluctuations?
        </p>
        <p className="post-author">Posted by Jane Smith</p>
      </div>
      {/* Add more posts here */}
      <div className="new-post-form">
        <h2>Create a New Post</h2>
        <form>
          <label htmlFor="post-title">Title:</label>
          <input type="text" id="post-title" />
          <label htmlFor="post-content">Content:</label>
          <textarea id="post-content" rows="4"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
