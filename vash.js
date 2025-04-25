
// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
    // Sample data for founders
    const founders = [
      {
        name: 'Jane Doe',
        role: 'CEO & Educator',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        bio: 'Mathematics enthusiast with 10+ years of teaching experience in advanced calculus.',
        social: {
          twitter: '#',
          linkedin: '#',
          github: '#'
        }
      },
      {
        name: 'John Smith',
        role: 'CTO & Developer',
        image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        bio: 'Computer Science expert specializing in educational technology and interactive learning platforms.',
        social: {
          twitter: '#',
          linkedin: '#',
          github: '#'
        }
      },
      {
        name: 'Sarah Johnson',
        role: 'Content Director',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        bio: 'Former high school science teacher now creating engaging educational content for all ages.',
        social: {
          twitter: '#',
          linkedin: '#',
          github: '#'
        }
      }
    ];
  
    // Sample data for blog posts
    const blogPosts = [
      {
        title: 'Understanding Calculus: A Beginner\'s Guide',
        excerpt: 'Learn the fundamentals of calculus with our easy-to-follow guide for beginners.',
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        date: 'April 15, 2025',
        author: 'Jane Doe',
        tags: ['Mathematics', 'Calculus', 'Beginners']
      },
      {
        title: 'The Science Behind Chemical Reactions',
        excerpt: 'Explore the fascinating world of chemical reactions and understand the processes that drive them.',
        image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        date: 'April 10, 2025',
        author: 'Sarah Johnson',
        tags: ['Science', 'Chemistry', 'Education']
      },
      {
        title: 'Coding for Students: Why It Matters',
        excerpt: 'Discover why learning to code is essential for students in today\'s digital world.',
        image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        date: 'April 5, 2025',
        author: 'John Smith',
        tags: ['Technology', 'Coding', 'Education']
      }
    ];
  
    // Render founders section
    const foundersGrid = document.querySelector('.founders-grid');
    if (foundersGrid) {
      founders.forEach(founder => {
        const founderCard = document.createElement('div');
        founderCard.className = 'founder-card fade-in';
        founderCard.innerHTML = `
          <img src="${founder.image}" alt="${founder.name}" class="founder-image">
          <h3>${founder.name}</h3>
          <p class="founder-role">${founder.role}</p>
          <p>${founder.bio}</p>
          <div class="founder-social">
            <a href="${founder.social.twitter}"><i data-lucide="twitter"></i></a>
            <a href="${founder.social.linkedin}"><i data-lucide="linkedin"></i></a>
            <a href="${founder.social.github}"><i data-lucide="github"></i></a>
          </div>
        `;
        foundersGrid.appendChild(founderCard);
      });
    }
  
    // Render blog posts section
    const postsGrid = document.querySelector('.posts-grid');
    if (postsGrid) {
      blogPosts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = 'post-card fade-in';
        postCard.innerHTML = `
          <img src="${post.image}" alt="${post.title}" class="post-image">
          <div class="post-content">
            <div class="post-meta">
              <span>${post.date}</span>
              <span>${post.author}</span>
            </div>
            <h3>${post.title}</h3>
            <p>${post.excerpt}</p>
            <div class="post-tags">
              ${post.tags.map(tag => `<span class="post-tag">${tag}</span>`).join('')}
            </div>
          </div>
        `;
        postsGrid.appendChild(postCard);
      });
    }
  
    // Add animation classes
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      heroContent.querySelectorAll('h1, p, .btn-primary').forEach((el, index) => {
        el.classList.add('fade-in');
        el.style.animationDelay = `${index * 100}ms`;
      });
    }
  
    // Button click event
    const startButton = document.querySelector('.btn-primary');
    if (startButton) {
      startButton.addEventListener('click', () => {
        alert('Welcome to Apilageai! Start your learning journey now.');
      });
    }
  });
  
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  