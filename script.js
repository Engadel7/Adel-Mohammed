document.addEventListener('DOMContentLoaded', () => {
    
    fetch('get_profile.php')
        .then(res => res.json())
        .then(data => {
            document.getElementById('hero-role').textContent = data.home.role;
            document.getElementById('hero-desc').textContent = data.home.description;
            document.getElementById('about-name').textContent = data.about.name;
            document.getElementById('about-bio').textContent = data.about.bio;
            
            const linkedinBtn = document.getElementById('linkedin-link');
            linkedinBtn.href = data.about.linkedin_url;
        })
        .catch(err => console.error("Error fetching profile:", err));

    fetch('get_skills.php')
        .then(res => res.json())
        .then(skills => {
            const skillsContainer = document.getElementById('skills-container');
            skills.forEach(skill => {
                const div = document.createElement('div');
                div.className = 'skill-box';
                div.textContent = skill.skill_name;
                skillsContainer.appendChild(div);
            });
        })
        .catch(err => console.error("Error fetching skills:", err));

    let allProjects = [];
    fetch('get_projects.php')
        .then(res => res.json())
        .then(projects => {
            allProjects = projects;
            renderProjects('all'); 
        })
        .catch(err => console.error("Error fetching projects:", err));

    function renderProjects(filter) {
        const container = document.getElementById('projects-container');
        container.innerHTML = '';
        const filtered = filter === 'all' ? allProjects : allProjects.filter(p => p.category === filter);
        
        filtered.forEach(p => {
            const div = document.createElement('div');
            div.className = 'glass-card project-card';
            div.innerHTML = `
                <span class="badge" style="margin-bottom:1rem; display:inline-block">${p.category}</span>
                <h3>${p.title}</h3>
                <p style="color: var(--text-muted); margin-top:1rem; font-size:0.9rem;">${p.description}</p>
            `;
            container.appendChild(div);
        });
    }

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderProjects(e.target.getAttribute('data-filter'));
        });
    });

    const themeBtn = document.getElementById('theme-toggle');
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
    });
});