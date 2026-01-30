var coursesData = [
    {
        id: "electrician",
        name: "Electrician",
        icon: "fas fa-bolt",
        description: "The Electrician program is designed to produce skilled professionals capable of handling complex electrical systems. Students master residential and industrial wiring, fault finding, and energy distribution. Emphasis is placed on safety protocols (NEO/IEC standards) and modern energy-efficient technologies.",
        programs: [
            {
                title: "Diploma Program",
                duration: "2 Years",
                shift: "Morning",
                features: ["Comprehensive training", "Theory & practical workshops", "Industrial exposure", "Government certified diploma"]
            },
            {
                title: "Certificate Program",
                duration: "1 Year",
                shift: "Evening",
                features: ["Essential electrical skills", "Flexible evening schedule", "Hands-on training", "Career advancement support"]
            }
        ]
    },
    {
        id: "web-designing",
        name: "Web Designing and Development",
        icon: "fas fa-laptop-code",
        description: "This comprehensive course transforms students into versatile full-stack developers. It covers modern UI/UX principles, responsive design using CSS Grid/Flexbox, and robust backend logic with Node.js and databases. Students build production-ready applications, learning the full lifecycle of web software from design to deployment.",
        programs: [
            {
                title: "CBT&A Program",
                duration: "6 Months",
                shift: "Evening",
                features: ["Competency Based Training", "Fast-track program", "Skill-focused curriculum", "Industry-relevant skills"]
            }
        ]
    },
    {
        id: "advanced-welding",
        name: "Advanced Welding",
        icon: "fas fa-fire-burner",
        description: "Master the art and science of welding with advanced techniques including MIG, TIG, and Arc welding. This course covers metallurgy, safety standards, and precision joining for various industrial applications.",
        programs: [
            {
                title: "Diploma Program",
                duration: "2 Years",
                shift: "Morning",
                features: ["Advanced welding techniques", "Metallurgy fundamentals", "Industrial safety", "Certified certification"]
            }
        ]
    },
    {
        id: "machinist",
        name: "Machinist",
        icon: "fas fa-cogs",
        description: "Become an expert in precision machining. Learn to operate lathes, milling machines, and CNC equipment to manufacture parts with high accuracy. The course includes blueprint reading and metrology.",
        programs: [
            {
                title: "Diploma Program",
                duration: "2 Years",
                shift: "Morning",
                features: ["Comprehensive training", "Theory & practical workshops", "Industrial exposure", "Government certified diploma"]
            }
        ]
    },
    {
        id: "auto-technician",
        name: "Auto Technician",
        icon: "fas fa-car-side",
        description: "This course prepares students for the fast-evolving automotive industry. It covers complete engine overhaul, advanced computer-based diagnostic systems, transmission maintenance, and braking technology.",
        programs: [
            {
                title: "Diploma Program",
                duration: "2 Years",
                shift: "Morning",
                features: ["Comprehensive training", "Theory & practical workshops", "Industrial exposure", "Government certified diploma"]
            },
            {
                title: "Certificate Program",
                duration: "1 Year",
                shift: "Evening",
                features: ["Essential skills", "Flexible evening schedule", "Hands-on training", "Government certified"]
            },
            {
                title: "CBT&A Program",
                duration: "6 Months",
                shift: "Evening",
                features: ["Competency Based Training", "Fast-track program", "Skill-focused curriculum", "Industry-relevant skills"]
            }
        ]
    },
    {
        id: "fitter-general",
        name: "Fitter General",
        icon: "fas fa-wrench",
        description: "Gain foundational mechanical skills in fitting and assembly. This course covers bench work, drilling, filing, and assembly of machine components, essential for any manufacturing industry.",
        programs: [
            {
                title: "Diploma Program",
                duration: "2 Years",
                shift: "Morning",
                features: ["Comprehensive training", "Theory & practical workshops", "Industrial exposure", "Government certified diploma"]
            }
        ]
    },
    {
        id: "hvac-professional",
        name: "HVAC Professional",
        icon: "fas fa-snowflake",
        description: "specialize in Heating, Ventilation, and Air Conditioning systems. Learn installation, maintenance, and repair of residential and commercial HVAC units, with a focus on energy efficiency.",
        programs: [
            {
                title: "Diploma Program",
                duration: "2 Years",
                shift: "Morning",
                features: ["Comprehensive training", "Theory & practical workshops", "Industrial exposure", "Government certified diploma"]
            }
        ]
    },
    {
        id: "industrial-electronics",
        name: "Industrial Electronics",
        icon: "fas fa-microchip",
        description: "Focus on the electronic systems used in manufacturing and industrial processes. Topics include PLCs, automation, sensors, and motor controls.",
        programs: [
            {
                title: "Certificate Program",
                duration: "1 Year",
                shift: "Evening",
                features: ["Essential skills", "Flexible evening schedule", "Hands-on training", "Government certified"]
            }
        ]
    },
    {
        id: "electronics-applications",
        name: "Electronics Applications",
        icon: "fas fa-wave-square",
        description: "A broad course covering consumer electronics, circuit design, and repair. Ideal for those looking to work in electronics service centers or manufacturing.",
        programs: [
            {
                title: "Diploma Program",
                duration: "2 Years",
                shift: "Morning",
                features: ["Comprehensive training", "Theory & practical workshops", "Industrial exposure", "Government certified diploma"]
            }
        ]
    },
    {
        id: "professional-plumbing",
        name: "Professional Plumbing",
        icon: "fas fa-faucet",
        description: "Learn the trade of plumbing, including pipe fitting, drainage systems, water supply installation, and fixture maintenance for residential and commercial buildings.",
        programs: [
            {
                title: "Diploma Program",
                duration: "2 Years",
                shift: "Morning",
                features: ["Comprehensive training", "Theory & practical workshops", "Industrial exposure", "Government certified diploma"]
            },
            {
                title: "Certificate Program",
                duration: "1 Year",
                shift: "Evening",
                features: ["Essential skills", "Flexible evening schedule", "Hands-on training", "Government certified"]
            },
            {
                title: "CBT&A Program",
                duration: "6 Months",
                shift: "Evening",
                features: ["Competency Based Training", "Fast-track program", "Skill-focused curriculum", "Industry-relevant skills"]
            }
        ]
    },
    {
        id: "draftsman-mechanical",
        name: "Draftsman Mechanical",
        icon: "fas fa-pencil-ruler",
        description: "Master technical drawing for mechanical engineering. Learn to create detailed CAD drawings for machine parts, assembly layouts, and manufacturing specifications.",
        programs: [
            {
                title: "Certificate Program",
                duration: "1 Year",
                shift: "Evening",
                features: ["Essential skills", "Flexible evening schedule", "Hands-on training", "Government certified"]
            }
        ]
    },
    {
        id: "draftsman-civil",
        name: "Draftsman Civil",
        icon: "fas fa-drafting-compass",
        description: "Prepare for a career in civil engineering and architecture. Learn to draw building plans, structural layouts, and civil infrastructure designs using CAD.",
        programs: [
            {
                title: "Certificate Program",
                duration: "1 Year",
                shift: "Evening",
                features: ["Essential skills", "Flexible evening schedule", "Hands-on training", "Government certified"]
            }
        ]
    },
    {
        id: "computer-operator",
        name: "Computer Operator",
        icon: "fas fa-keyboard",
        description: "Essential IT skills for office environments. Covers MS Office suite, data entry, basic hardware troubleshooting, and internet proficiency.",
        programs: [
            {
                title: "Certificate Program",
                duration: "1 Year",
                shift: "Morning",
                features: ["Professional training focus", "Integrated lab sessions", "Core administrative skills", "Government recognized"]
            },
            {
                title: "Certificate Program",
                duration: "1 Year",
                shift: "Evening",
                features: ["Essential skills", "Flexible evening schedule", "Hands-on training", "Career advancement support"]
            }
        ]
    },
    {
        id: "auto-farm-machinery",
        name: "Auto and Farm Machinery",
        icon: "fas fa-tractor",
        description: "Specialized training in the maintenance and repair of agricultural machinery, including tractors, harvesters, and other farm equipment.",
        programs: [
            {
                title: "Certificate Program",
                duration: "1 Year",
                shift: "Evening",
                features: ["Essential skills", "Flexible evening schedule", "Hands-on training", "Government certified"]
            }
        ]
    },
    {
        id: "auto-electrician",
        name: "Auto Electrician",
        icon: "fas fa-car-battery",
        description: "Focus on the electrical systems of vehicles. Learn to diagnose and fix issues with wiring, lighting, ignition systems, and modern car electronics.",
        programs: [
            {
                title: "Diploma Program",
                duration: "2 Years",
                shift: "Morning",
                features: ["Comprehensive training", "Theory & practical workshops", "Industrial exposure", "Government certified diploma"]
            },
            {
                title: "Certificate Program",
                duration: "1 Year",
                shift: "Evening",
                features: ["Essential skills", "Flexible evening schedule", "Hands-on training", "Government certified"]
            },
            {
                title: "CBT&A Program",
                duration: "6 Months",
                shift: "Evening",
                features: ["Competency Based Training", "Fast-track program", "Skill-focused curriculum", "Industry-relevant skills"]
            }
        ]
    },
    {
        id: "artificial-intelligence",
        name: "Artificial Intelligence",
        icon: "fas fa-brain",
        description: "Step into the future with AI. This course introduces machine learning basics, python programming for data science, and neural network concepts.",
        programs: [
            {
                title: "International Course",
                duration: "3 Months",
                shift: "Evening",
                features: ["International Standards", "Advanced AI Algorithms", "Global Career Opportunities", "Project-Based Learning"]
            }
        ]
    },
    {
        id: "motorcycle-mechanic",
        name: "Motorcycle Mechanic",
        icon: "fas fa-motorcycle",
        description: "Specialized training for motorcycle maintenance. Covers engine repair, tuning, electrical systems, and routine servicing for various bike models.",
        programs: [
            {
                title: "Diploma Program",
                duration: "2 Years",
                shift: "Morning",
                features: ["Comprehensive training", "Theory & practical workshops", "Industrial exposure", "Government certified diploma"]
            },
            {
                title: "Certificate Program",
                duration: "1 Year",
                shift: "Evening",
                features: ["Essential skills", "Flexible evening schedule", "Hands-on training", "Government certified"]
            },
            {
                title: "CBT&A Program",
                duration: "6 Months",
                shift: "Evening",
                features: ["Competency Based Training", "Fast-track program", "Skill-focused curriculum", "Industry-relevant skills"]
            }
        ]
    },
    {
        id: "professional-cooking",
        name: "Professional Cooking",
        icon: "fas fa-utensils",
        description: "Turn your passion for food into a career. Learn culinary arts, food safety, menu planning, and preparation of various cuisines in a professional kitchen setting.",
        programs: [
            {
                title: "CBT&A Program",
                duration: "6 Months",
                shift: "Morning",
                features: ["Fast-track culinary skills", "Practical kitchen sessions", "Competency Based Training", "Government recognized"]
            },
            {
                title: "CBT&A Program",
                duration: "6 Months",
                shift: "Evening",
                features: ["Competency Based Training", "Fast-track program", "Skill-focused curriculum", "Evening classes"]
            }
        ]
    }
];

document.addEventListener('DOMContentLoaded', function () {
    // --- Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            console.log('Hamburger clicked');
            navLinks.classList.toggle('active');
        });
    }

    // --- Dynamic Course Rendering ---
    const coursesGrid = document.querySelector('.courses-grid');
    if (coursesGrid) {
        // Clear existing static content if any (or the script might just append vs overwrite, let's overwrite for safety if we are replacing the inline script)
        // But since we are editing script.js, we need to make sure index.html calls this.
        // We will make index.html container empty or rely on this script to populate it.
        // Let's assume we will clear it first.
        coursesGrid.innerHTML = '';

        // Check if we are on the home page (show top 3) or courses page (show all)
        // Simple check: if there is a 'View More' button nearby or based on URL
        const isHomePage = window.location.pathname.endsWith('index.html') && !window.location.pathname.includes('courses/') && document.querySelector('#courses');

        // Actually, a better way is to see if we are in the 'courses' subdir or root. 
        // Or we can just render strict sets based on page context.
        // For now, let's render ALL if we are on the courses page, and TOP 3 on home page.
        // This script is shared. 

        // Let's deduce limit based on context.
        let coursesToRender = coursesData;

        // If the container has a specific class or data attribute, we can use that.
        // But for now, let's just render all `coursesData` and let the page decide limit?
        // No, we need logic. 

        // Current index.html has 3 courses. courses/index.html has all.
        // We can check if `window.location.pathname` contains 'courses/'.
        const isCoursesPage = window.location.href.includes('/courses/') || window.location.href.includes('courses.html'); // Robust check

        if (!isCoursesPage) {
            coursesToRender = coursesData.slice(0, 3); // Show top 3 on home page
        }

        coursesToRender.forEach(course => {
            const card = document.createElement('div');
            card.className = 'course-card';
            card.innerHTML = `
                <div class="course-icon-wrapper">
                    <i class="${course.icon}"></i>
                </div>
                <div class="course-body">
                    <h3>${course.name}</h3>
                    <button class="btn-details" data-id="${course.id}">View Details <i class="fas fa-chevron-right"></i></button>
                </div>
            `;
            coursesGrid.appendChild(card);
        });

        // Add Event Listeners to Buttons
        coursesGrid.addEventListener('click', function (e) {
            if (e.target.closest('.btn-details')) {
                const btn = e.target.closest('.btn-details');
                const courseId = btn.getAttribute('data-id');
                openCourseModal(courseId);
            }
        });
    }

    // --- Modal Logic ---
    // Inject Modal HTML if it doesn't exist
    if (!document.getElementById('courseModal')) {
        const modalHTML = `
            <div id="courseModal" class="modal">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 id="modalTitle"><i class="fas fa-bolt"></i> Course Name</h2>
                        <span class="close-btn">&times;</span>
                    </div>
                    <div class="modal-body">
                        <div id="modalDetails" class="modal-details-grid">
                            <!-- Dynamic Content -->
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary close-btn-action">Close</button>
                        <a href="#" class="btn btn-primary" id="enrollBtn">Enroll Now</a>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    const modal = document.getElementById('courseModal');
    const closeBtn = document.querySelector('.close-btn');
    const closeBtnAction = document.querySelector('.close-btn-action');

    function openCourseModal(courseId) {
        const course = coursesData.find(c => c.id === courseId);
        if (!course) return;

        const detailsContainer = document.getElementById('modalDetails');
        detailsContainer.innerHTML = '';

        course.programs.forEach(prog => {
            const detailCard = document.createElement('div');
            detailCard.className = 'modal-detail-card';

            detailCard.innerHTML = `
                <h3>${prog.title}</h3>
                <p><strong>Duration:</strong> ${prog.duration}</p>
                <p><strong>Shift:</strong> ${prog.shift}</p>
            `;
            detailsContainer.appendChild(detailCard);
        });

        // Update Enroll Link (Generic for now, can be specific if needed)
        // const enrollBtn = document.getElementById('enrollBtn');
        // enrollBtn.href = \`/enroll?course=\${courseId}\`; 

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeCourseModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    closeBtn.addEventListener('click', closeCourseModal);
    closeBtnAction.addEventListener('click', closeCourseModal);

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeCourseModal();
        }
    });

    // Handle Escape Key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeCourseModal();
        }
    });


    // --- Mobile Auth Buttons Logic (Preserved) ---
    // Add mobile login buttons if missing
    if (window.innerWidth <= 768) {
        moveAuthButtons();
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            moveAuthButtons();
        } else {
            const authContainer = document.querySelector('.auth-buttons');
            const mobileItems = document.querySelectorAll('.nav-links .mobile-auth-item');
            mobileItems.forEach(item => item.remove());
            if (authContainer) {
                authContainer.style.display = '';
                authContainer.classList.remove('hidden');
            }
        }
    });

    function moveAuthButtons() {
        const authContainer = document.querySelector('.auth-buttons');
        const dropdownContent = document.querySelector('.dropdown-content');
        const existingMobileAuth = document.querySelector('.nav-links .mobile-auth');

        if (!existingMobileAuth && authContainer && dropdownContent) {
            const mobileAuth = document.createElement('div');
            mobileAuth.className = 'mobile-auth';
            mobileAuth.style.display = 'flex';
            mobileAuth.style.flexDirection = 'column';
            mobileAuth.style.gap = '15px';
            mobileAuth.style.marginTop = '20px';
            mobileAuth.style.width = '100%';
            mobileAuth.style.textAlign = 'center';

            const links = dropdownContent.querySelectorAll('a');
            links.forEach(link => {
                const newLink = link.cloneNode(true);
                if (newLink.textContent.includes('Admin')) {
                    newLink.className = 'btn btn-primary';
                } else {
                    newLink.className = 'btn btn-secondary';
                }
                newLink.style.display = 'block';
                mobileAuth.appendChild(newLink);
            });

            navLinks.appendChild(mobileAuth);
            authContainer.style.display = 'none';
        } else if (existingMobileAuth) {
            if (authContainer) authContainer.style.display = 'none';
        }
    }

    // Login Dropdown Click Handling (Desktop)
    const dropBtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    if (dropBtn && dropdownContent) {
        dropBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdownContent.classList.toggle('show');
        });

        window.addEventListener('click', (e) => {
            if (!e.target.matches('.dropbtn') && !e.target.closest('.dropbtn')) {
                if (dropdownContent.classList.contains('show')) {
                    dropdownContent.classList.remove('show');
                }
            }
        });
    }
});
