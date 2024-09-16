document.addEventListener('DOMContentLoaded', function() {
    // Typing effect for the welcome section
    const typingEffect = document.getElementById('typing-effect');
    const text = typingEffect.textContent;
    typingEffect.textContent = '';
    let index = 0;

    function type() {
        if (index < text.length) {
            typingEffect.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust the speed of typing
        }
    }
    type();

    // Scroll animations
    function scrollAppear() {
        const projectTiles = document.querySelectorAll('.project-tile');
        const contactSection = document.getElementById('contact');
        const blogPosts = document.querySelectorAll('.blog-post');
        const screenPosition = window.innerHeight / 1.3;

        projectTiles.forEach(tile => {
            const tilePosition = tile.getBoundingClientRect().top;

            if (tilePosition < screenPosition) {
                tile.classList.add('scrolled');
            }
        });

        const contactPosition = contactSection.getBoundingClientRect().top;

        if (contactPosition < screenPosition) {
            contactSection.classList.add('scrolled');
        }

        blogPosts.forEach(post => {
            const postPosition = post.getBoundingClientRect().top;

            if (postPosition < screenPosition) {
                post.classList.add('scrolled');
            }
        });
    }

    window.addEventListener('scroll', scrollAppear);

    // Back-to-Top Button
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Dynamic Blog Posts
    const blogContainer = document.getElementById('blog-container');

    const blogPosts = [
        {
            title: 'My Journey into Data Science',
            date: 'September 15, 2024',
            content: 'Data science has always fascinated me, and over the years, I have delved deeper into the field. In this post, I share my journey and the key learnings I’ve gained along the way...'
        },
        {
            title: 'Building a Pharmacy Website',
            date: 'August 22, 2024',
            content: 'Designing and developing a functional pharmacy website presented unique challenges. Here, I discuss the process, technologies used, and the final outcome...'
        }
        // Add more blog posts as needed
    ];

    function loadBlogPosts() {
        blogPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('blog-post');
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p><em>${post.date}</em></p>
                <p>${post.content}</p>
            `;
            blogContainer.appendChild(postElement);
        });
    }

    loadBlogPosts();
});
