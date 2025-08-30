import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import CoolNavBar from "../navbar/CoolNavBar";
import Footer from "../footer/Footer";
import "../shared/SharedStyles.css";
import "./Blog.css";

function Blog() {
  useEffect(() => {
    document.title = "DA | Blog";
  }, []);

  const [selectedPost, setSelectedPost] = useState(null);

  // Template blog posts - replace with actual content later
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable Machine Learning Systems",
      excerpt:
        "Learn the fundamentals of designing and implementing production-ready ML systems that can handle real-world scale and complexity.",
      content: `
        <p>Machine learning has evolved from research experiments to production systems that power billions of decisions daily. Building these systems requires careful consideration of architecture, scalability, and maintainability.</p>
        
        <h2>The Foundation: Data Infrastructure</h2>
        <p>Before diving into algorithms, you need a robust data foundation. This includes data pipelines, storage solutions, and monitoring systems that can handle the volume and velocity of real-world data.</p>
        
        <p>Consider implementing:</p>
        <ul>
          <li><strong>Data validation</strong> at every pipeline stage</li>
          <li><strong>Schema evolution</strong> strategies for changing data structures</li>
          <li><strong>Data lineage tracking</strong> for debugging and compliance</li>
        </ul>
        
        <h2>Model Serving Architecture</h2>
        <p>Your ML models need to serve predictions quickly and reliably. Modern architectures often use microservices with load balancing and auto-scaling.</p>
        
        <pre><code># Example model serving endpoint
@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    features = preprocess(data)
    prediction = model.predict(features)
    return jsonify({'prediction': prediction})</code></pre>
        
        <h2>Monitoring and Observability</h2>
        <p>Production ML systems require comprehensive monitoring. Track model performance, data drift, and system health in real-time.</p>
        
        <blockquote>
          "The best ML system is the one you can monitor and debug effectively in production."
        </blockquote>
        
        <p>Key metrics to monitor include:</p>
        <ul>
          <li>Prediction latency and throughput</li>
          <li>Model accuracy and drift</li>
          <li>Data quality and freshness</li>
          <li>System resource utilization</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Building scalable ML systems is as much about engineering as it is about algorithms. Focus on creating robust, observable, and maintainable architectures that can evolve with your business needs.</p>
        
        <p>Remember: <em>start simple, iterate quickly, and always plan for scale.</em></p>
      `,
      featured: true,
    },
    {
      id: 2,
      title: "The Future of Data Engineering",
      excerpt:
        "Exploring emerging trends and technologies that are reshaping how we build and manage data systems.",
      content: `
        <p>Data engineering is undergoing a transformation. New technologies and paradigms are emerging that promise to simplify complex data workflows and enable more agile development.</p>
        
        <h2>Streaming-First Architectures</h2>
        <p>Batch processing is giving way to real-time streaming. Modern data platforms like Apache Kafka and Apache Flink enable processing data as it arrives, reducing latency and improving user experience.</p>
        
        <h2>Data Mesh and Decentralization</h2>
        <p>The centralized data warehouse model is evolving toward distributed, domain-oriented data ownership. This approach improves scalability and domain expertise but requires careful coordination.</p>
        
        <p>Key principles include:</p>
        <ul>
          <li>Domain-driven data ownership</li>
          <li>Self-serve data infrastructure</li>
          <li>Federated computational governance</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>The future of data engineering is decentralized, real-time, and developer-friendly. Stay adaptable and focus on building systems that can evolve with these changing paradigms.</p>
      `,
      featured: false,
    },
  ];

  // Set this to false to show the full blog, true for coming soon
  const isComingSoon = true;

  if (isComingSoon) {
    return (
      <div className="page-container">
        <CoolNavBar />
        <Container className="content-container">
          <div className="coming-soon-section">
            <div className="coming-soon-card">
              <div className="card-accent"></div>
              <div className="coming-soon-content">
                <h1 className="coming-soon-title">Blog Coming Soon</h1>
              </div>
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }

  // Show individual blog post
  if (selectedPost) {
    return (
      <div className="page-container">
        <CoolNavBar />
        <Container className="content-container">
          <div className="blog-post-full">
            <div className="blog-post-header">
              <button
                className="back-button"
                onClick={() => setSelectedPost(null)}
              >
                ← Back to Blog
              </button>
              <h1 className="blog-post-title">{selectedPost.title}</h1>
            </div>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: selectedPost.content }}
            />
          </div>
        </Container>
        <Footer />
      </div>
    );
  }

  // Full blog implementation - just change isComingSoon to false above
  return (
    <div className="page-container">
      <CoolNavBar />
      <Container className="content-container">
        <div className="align-center mb-5">
          <h1 className="typography-heading color-primary">Blog</h1>
          <p className="color-muted">
            Thoughts, insights, and technical explorations in computer science
            and data science
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts
          .filter((post) => post.featured)
          .map((post) => (
            <div key={post.id} className="featured-post mb-5">
              <div className="card-accent"></div>
              <div className="featured-post-content">
                <h2 className="featured-post-title">{post.title}</h2>
                <p className="featured-post-excerpt">{post.excerpt}</p>
                <button
                  className="read-more-btn"
                  onClick={() => setSelectedPost(post)}
                >
                  Read Full Post
                </button>
              </div>
            </div>
          ))}

        {/* All Posts Grid */}
        <div className="blog-posts-section">
          <h2 className="typography-subheading color-primary mb-4">
            All Posts
          </h2>
          <div className="blog-posts-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-post-card">
                <div className="card-accent"></div>
                <div className="blog-post-content">
                  <h3 className="blog-post-title">{post.title}</h3>
                  <p className="blog-post-excerpt">{post.excerpt}</p>
                  <button
                    className="read-more-btn"
                    onClick={() => setSelectedPost(post)}
                  >
                    Read Full Post
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Blog;
