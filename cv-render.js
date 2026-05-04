document.addEventListener("DOMContentLoaded", () => {
    const d = cvData;

    // --- HEADER ---
    document.getElementById("cv-photo").src = d.personal.photo;
    document.getElementById("cv-name").innerHTML = `${d.personal.firstName} <strong>${d.personal.lastName}</strong>`;
    document.getElementById("cv-title").textContent = d.personal.title;
    document.getElementById("cv-seeking").textContent = d.personal.seeking;
    document.getElementById("cv-bio").textContent = d.personal.bio;
    document.getElementById("cv-bio-mobile").textContent = d.personal.bio;

    document.getElementById("cv-location").textContent = d.personal.location;
    document.getElementById("cv-phone").href = d.personal.phoneHref;
    document.getElementById("cv-phone").innerHTML = `<i class="bi bi-telephone-fill contact-icon"></i> ${d.personal.phone}`;
    document.getElementById("cv-email").href = `mailto:${d.personal.email}`;
    document.getElementById("cv-email").innerHTML = `<i class="bi bi-envelope-fill contact-icon"></i> ${d.personal.email}`;
    document.getElementById("cv-github").href = d.personal.github;
    document.getElementById("cv-github").innerHTML = `<i class="bi bi-github contact-icon"></i> ${d.personal.githubLabel}`;
    document.getElementById("cv-linkedin").href = d.personal.linkedin;
    document.getElementById("cv-linkedin").innerHTML = `<i class="bi bi-linkedin contact-icon"></i> ${d.personal.linkedinLabel}`;

    document.getElementById("cv-qr").src = "images/qr-portfolio.png";
    document.getElementById("cv-qr").parentElement.href = d.personal.portfolio;

    // --- SKILLS ---
    const skillsContainer = document.getElementById("cv-skills");
    for (const [category, items] of Object.entries(d.skills)) {
        const h3 = document.createElement("h3");
        h3.className = "skill-category";
        h3.textContent = category;
        skillsContainer.appendChild(h3);

        const div = document.createElement("div");
        div.className = "skill-tags";
        items.forEach(skill => {
            const span = document.createElement("span");
            span.className = "skill-tag";
            const iconClass = skill.invert ? "skill-icon skill-icon-invert" : "skill-icon";
            span.innerHTML = `<img src="${skill.icon}" alt="${skill.name}" class="${iconClass}">${skill.name}`;
            div.appendChild(span);
        });
        skillsContainer.appendChild(div);
    }

    // --- SOFT SKILLS ---
    const softSkillsList = document.getElementById("cv-soft-skills");
    d.softSkills.forEach(s => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${s.title}</strong> — ${s.desc}`;
        softSkillsList.appendChild(li);
    });

    // --- LANGUAGES ---
    const langList = document.getElementById("cv-languages");
    d.languages.forEach(l => {
        const li = document.createElement("li");
        li.innerHTML = `<span class="lang-name">${l.name}</span><span class="lang-level">${l.level}</span>`;
        langList.appendChild(li);
    });

    // --- HOBBIES ---
    const hobbiesList = document.getElementById("cv-hobbies");
    d.hobbies.forEach(h => {
        const li = document.createElement("li");
        const iconHtml = h.img
            ? `<img src="${h.img}" class="hobby-icon" alt="${h.label}">`
            : `<i class="bi ${h.icon}"></i>`;
        li.innerHTML = `${iconHtml} ${h.label}`;
        hobbiesList.appendChild(li);
    });

    // --- EXPERIENCES ---
    const expContainer = document.getElementById("cv-experiences");
    d.experiences.forEach(exp => {
        const bullets = exp.bullets.map(b => `<li>${b}</li>`).join("");
        expContainer.innerHTML += `
        <div class="experience-item">
            <h3 class="exp-title">${exp.title} <span class="exp-badge">${exp.badge}</span></h3>
            <p class="exp-meta">${exp.company} | ${exp.period} | ${exp.location}</p>
            ${bullets ? `<ul class="exp-bullets">${bullets}</ul>` : ""}
        </div>`;
    });

    // --- PROJECTS ---
    const projContainer = document.getElementById("cv-projects");
    d.projects.forEach(p => {
        projContainer.innerHTML += `
        <div class="project-item">
            <h3 class="project-title">${p.title}</h3>
            <p class="project-stack">${p.stack}</p>
            <a href="${p.url}" target="_blank" class="project-link"><i class="bi bi-github"></i> ${p.urlLabel}</a>
            <p class="project-desc">${p.desc}</p>
        </div>`;
    });

    // --- EDUCATION ---
    const eduContainer = document.getElementById("cv-education");
    d.education.forEach(e => {
        const bullets = e.bullets.map(b => `<li>${b}</li>`).join("");
        eduContainer.innerHTML += `
        <div class="experience-item">
            <h3 class="exp-title">${e.title}</h3>
            <p class="exp-meta">${e.institution} | ${e.period} | ${e.location}</p>
            ${bullets ? `<ul class="exp-bullets">${bullets}</ul>` : ""}
        </div>`;
    });
});
