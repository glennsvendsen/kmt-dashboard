/**
 * THE DASHBOARD KING - KARL MARTI TRIBUTE
 * Interactive Dashboard Experience
 */

// ============================================
// TEAM DATA
// ============================================

const TEAM_MEMBERS = [
    { name: 'Karl Marti', initials: 'KM', title: 'The Dashboard King 👑', isLeaving: true },
    { name: 'Judicael', initials: 'JU', title: 'Backend Wizard' },
    { name: 'Glenn', initials: 'GL', title: 'Code Architect' },
    { name: 'Annika', initials: 'AN', title: 'Quality Guardian' },
    { name: 'Helar', initials: 'HE', title: 'DevOps Ninja' },
    { name: 'Hener', initials: 'HN', title: 'Data Wrangler' },
    { name: 'Siiri', initials: 'SI', title: 'UI Sorcerer' },
    { name: 'Joel', initials: 'JO', title: 'Performance Hunter' },
    { name: 'Mark', initials: 'MA', title: 'Integration Expert' },
    { name: 'Jacek', initials: 'JA', title: 'Debug Detective' }
];

// ============================================
// ACHIEVEMENTS DATA - Karl gets ~80%!
// ============================================

const ACHIEVEMENTS = [
    // LEGENDARY ACHIEVEMENTS (7 total - Karl gets 6)
    {
        id: 1,
        name: 'Dashboard Inception',
        icon: '🏆',
        description: 'Created a dashboard to monitor other dashboards',
        rarity: 'legendary',
        holder: 'Karl Marti',
        date: 'Dec 2025',
        category: 'legendary'
    },
    {
        id: 2,
        name: 'The Chart Whisperer',
        icon: '📊',
        description: 'Added 50+ graphs to a single dashboard without it crashing (somehow)',
        rarity: 'legendary',
        holder: 'Karl Marti',
        date: 'Nov 2025',
        category: 'legendary'
    },
    {
        id: 3,
        name: 'Midnight Dashboard',
        icon: '🌙',
        description: 'Deployed a new dashboard at 3 AM because "it couldn\'t wait"',
        rarity: 'legendary',
        holder: 'Karl Marti',
        date: 'Oct 2025',
        category: 'legendary'
    },
    {
        id: 4,
        name: 'Dashboard-ception',
        icon: '🎭',
        description: 'Embedded a dashboard inside another dashboard inside another dashboard',
        rarity: 'legendary',
        holder: 'Karl Marti',
        date: 'Sep 2025',
        category: 'legendary'
    },
    {
        id: 5,
        name: 'The Visualizer',
        icon: '👁️',
        description: 'Turned a simple log file into a 15-panel real-time dashboard',
        rarity: 'legendary',
        holder: 'Karl Marti',
        date: 'Aug 2025',
        category: 'legendary'
    },
    {
        id: 6,
        name: 'First Blood',
        icon: '⚡',
        description: 'First person to suggest adding a dashboard in a meeting',
        rarity: 'legendary',
        holder: 'Karl Marti',
        date: 'Jan 2024',
        category: 'legendary'
    },
    {
        id: 7,
        name: 'Bug Slayer Supreme',
        icon: '🐛',
        description: 'Fixed a critical production bug in under 5 minutes',
        rarity: 'legendary',
        holder: 'Jacek',
        date: 'Jul 2025',
        category: 'legendary'
    },

    // EPIC ACHIEVEMENTS (12 total - Karl gets 10)
    {
        id: 8,
        name: 'Coffee Dashboard',
        icon: '☕',
        description: 'Created a dashboard to track team coffee consumption',
        rarity: 'epic',
        holder: 'Karl Marti',
        date: 'Dec 2025',
        category: 'epic'
    },
    {
        id: 9,
        name: 'Tariff-Cache Tamer',
        icon: '🚀',
        description: 'Made tariff-cache run 300% faster (with 5 new monitoring panels)',
        rarity: 'epic',
        holder: 'Karl Marti',
        date: 'Nov 2025',
        category: 'epic'
    },
    {
        id: 10,
        name: 'Event-Day Hero',
        icon: '📅',
        description: 'Survived a Black Friday event without the event-day module crashing',
        rarity: 'epic',
        holder: 'Karl Marti',
        date: 'Nov 2025',
        category: 'epic'
    },
    {
        id: 11,
        name: 'The Refactorer',
        icon: '🔧',
        description: 'Refactored legacy code and added a dashboard for it in the PR',
        rarity: 'epic',
        holder: 'Karl Marti',
        date: 'Oct 2025',
        category: 'epic'
    },
    {
        id: 12,
        name: 'Parking Rate Maestro',
        icon: '🅿️',
        description: 'Debugged a parking rate calculation that been wrong for 2 years',
        rarity: 'epic',
        holder: 'Karl Marti',
        date: 'Sep 2025',
        category: 'epic'
    },
    {
        id: 13,
        name: 'Storage Optimizer',
        icon: '💾',
        description: 'Reduced tariff module storage costs by 40%',
        rarity: 'epic',
        holder: 'Karl Marti',
        date: 'Aug 2025',
        category: 'epic'
    },
    {
        id: 14,
        name: 'API Architect',
        icon: '🏗️',
        description: 'Designed the new tariff-web API that everyone uses',
        rarity: 'epic',
        holder: 'Karl Marti',
        date: 'Jul 2025',
        category: 'epic'
    },
    {
        id: 15,
        name: 'Meeting Survivor',
        icon: '🎯',
        description: 'Sat through 5 consecutive meetings and still shipped code that day',
        rarity: 'epic',
        holder: 'Karl Marti',
        date: 'Jun 2025',
        category: 'epic'
    },
    {
        id: 16,
        name: 'Real-Time Rider',
        icon: '⚡',
        description: 'Implemented real-time updates across all modules',
        rarity: 'epic',
        holder: 'Karl Marti',
        date: 'May 2025',
        category: 'epic'
    },
    {
        id: 17,
        name: 'Documentation Legend',
        icon: '📚',
        description: 'Actually wrote documentation (Karl: "The dashboard IS the docs")',
        rarity: 'epic',
        holder: 'Glenn',
        date: 'Apr 2025',
        category: 'epic'
    },
    {
        id: 18,
        name: 'The Negotiator',
        icon: '🤝',
        description: 'Convinced product to reduce scope by 50%',
        rarity: 'epic',
        holder: 'Annika',
        date: 'Mar 2025',
        category: 'epic'
    },

    // RARE ACHIEVEMENTS (15 total - Karl gets 12)
    {
        id: 19,
        name: 'Metric Maniac',
        icon: '📈',
        description: 'Added 20 new metrics to a dashboard in one sprint',
        rarity: 'rare',
        holder: 'Karl Marti',
        date: 'Dec 2025',
        category: 'rare'
    },
    {
        id: 20,
        name: 'Graph Gardener',
        icon: '🌱',
        description: 'Grew the number of graphs from 10 to 47 "organically"',
        rarity: 'rare',
        holder: 'Karl Marti',
        date: 'Nov 2025',
        category: 'rare'
    },
    {
        id: 21,
        name: 'Alert Artisan',
        icon: '🔔',
        description: 'Set up alerting dashboards for alerting dashboards',
        rarity: 'rare',
        holder: 'Karl Marti',
        date: 'Oct 2025',
        category: 'rare'
    },
    {
        id: 22,
        name: 'Sprint Champion',
        icon: '🏃',
        description: 'Completed all sprint tasks (and added 3 new dashboards)',
        rarity: 'rare',
        holder: 'Karl Marti',
        date: 'Sep 2025',
        category: 'rare'
    },
    {
        id: 23,
        name: 'Code Review King',
        icon: '👀',
        description: 'Reviewed 100+ PRs this year (mostly suggesting dashboards)',
        rarity: 'rare',
        holder: 'Karl Marti',
        date: 'Aug 2025',
        category: 'rare'
    },
    {
        id: 24,
        name: 'Slack Sniper',
        icon: '💬',
        description: 'Responded to a production alert in under 30 seconds',
        rarity: 'rare',
        holder: 'Karl Marti',
        date: 'Jul 2025',
        category: 'rare'
    },
    {
        id: 25,
        name: 'Kubernetes Whisperer',
        icon: '☸️',
        description: 'Deployed without breaking anything (for once)',
        rarity: 'rare',
        holder: 'Karl Marti',
        date: 'Jun 2025',
        category: 'rare'
    },
    {
        id: 26,
        name: 'Color Coordinator',
        icon: '🎨',
        description: 'Made all dashboard colors match the company brand',
        rarity: 'rare',
        holder: 'Karl Marti',
        date: 'May 2025',
        category: 'rare'
    },
    {
        id: 27,
        name: 'Pipeline Pro',
        icon: '🔄',
        description: 'Fixed a CI/CD pipeline that was failing for weeks',
        rarity: 'rare',
        holder: 'Karl Marti',
        date: 'Apr 2025',
        category: 'rare'
    },
    {
        id: 28,
        name: 'Database Diplomat',
        icon: '🗄️',
        description: 'Migrated the main database without any downtime',
        rarity: 'rare',
        holder: 'Karl Marti',
        date: 'Mar 2025',
        category: 'rare'
    },
    {
        id: 29,
        name: 'Test Titan',
        icon: '✅',
        description: 'Achieved 90% test coverage on a legacy module',
        rarity: 'rare',
        holder: 'Karl Marti',
        date: 'Feb 2025',
        category: 'rare'
    },
    {
        id: 30,
        name: 'Incident Commander',
        icon: '🚨',
        description: 'Led an incident response with perfect documentation',
        rarity: 'rare',
        holder: 'Helar',
        date: 'Jan 2025',
        category: 'rare'
    },
    {
        id: 31,
        name: 'Onboarding Oracle',
        icon: '🎓',
        description: 'Successfully onboarded a new team member in record time',
        rarity: 'rare',
        holder: 'Siiri',
        date: 'Dec 2024',
        category: 'rare'
    },
    {
        id: 32,
        name: 'Feature Finisher',
        icon: '🏁',
        description: 'Completed a major feature without scope creep',
        rarity: 'rare',
        holder: 'Judicael',
        date: 'Nov 2024',
        category: 'rare'
    },

    // COMMON ACHIEVEMENTS (16 total - Karl gets 12)
    {
        id: 33,
        name: 'First Dashboard',
        icon: '🌟',
        description: 'Created their first real dashboard',
        rarity: 'common',
        holder: 'Karl Marti',
        date: 'Jan 2023',
        category: 'common'
    },
    {
        id: 34,
        name: 'Widget Wizard',
        icon: '🧩',
        description: 'Added 10 different widget types to a dashboard',
        rarity: 'common',
        holder: 'Karl Marti',
        date: 'Feb 2023',
        category: 'common'
    },
    {
        id: 35,
        name: 'Filter Fanatic',
        icon: '🔍',
        description: 'Added dynamic filters to every single panel',
        rarity: 'common',
        holder: 'Karl Marti',
        date: 'Mar 2023',
        category: 'common'
    },
    {
        id: 36,
        name: 'Theme Themer',
        icon: '🎭',
        description: 'Created a dark mode for the dashboard (Karl\'s favorite)',
        rarity: 'common',
        holder: 'Karl Marti',
        date: 'Apr 2023',
        category: 'common'
    },
    {
        id: 37,
        name: 'Export Expert',
        icon: '📤',
        description: 'Added PDF export to a dashboard',
        rarity: 'common',
        holder: 'Karl Marti',
        date: 'May 2023',
        category: 'common'
    },
    {
        id: 38,
        name: 'Tooltip Tweaker',
        icon: '💡',
        description: 'Added helpful tooltips to 50+ elements',
        rarity: 'common',
        holder: 'Karl Marti',
        date: 'Jun 2023',
        category: 'common'
    },
    {
        id: 39,
        name: 'Loading Lover',
        icon: '⏳',
        description: 'Added a beautiful loading animation to a dashboard',
        rarity: 'common',
        holder: 'Karl Marti',
        date: 'Jul 2023',
        category: 'common'
    },
    {
        id: 40,
        name: 'Responsive Ranger',
        icon: '📱',
        description: 'Made a dashboard mobile-responsive',
        rarity: 'common',
        holder: 'Karl Marti',
        date: 'Aug 2023',
        category: 'common'
    },
    {
        id: 41,
        name: 'Cache Commander',
        icon: '💨',
        description: 'Implemented caching for faster dashboard loads',
        rarity: 'common',
        holder: 'Karl Marti',
        date: 'Sep 2023',
        category: 'common'
    },
    {
        id: 42,
        name: 'Drill Down Master',
        icon: '🔬',
        description: 'Added 5 levels of drill-down to a dashboard',
        rarity: 'common',
        holder: 'Karl Marti',
        date: 'Oct 2023',
        category: 'common'
    },
    {
        id: 43,
        name: 'Bookmark Boss',
        icon: '🔖',
        description: 'Created saved views/bookmarks feature',
        rarity: 'common',
        holder: 'Karl Marti',
        date: 'Nov 2023',
        category: 'common'
    },
    {
        id: 44,
        name: 'Timezone Tamer',
        icon: '🌍',
        description: 'Fixed timezone issues in dashboards',
        rarity: 'common',
        holder: 'Karl Marti',
        date: 'Dec 2023',
        category: 'common'
    },
    {
        id: 45,
        name: 'PR Pioneer',
        icon: '📝',
        description: 'Created first pull request for tariff-web',
        rarity: 'common',
        holder: 'Hener',
        date: 'Jan 2024',
        category: 'common'
    },
    {
        id: 46,
        name: 'Bug Finder',
        icon: '🔎',
        description: 'Found and reported a critical bug before production',
        rarity: 'common',
        holder: 'Joel',
        date: 'Feb 2024',
        category: 'common'
    },
    {
        id: 47,
        name: 'Config Champion',
        icon: '⚙️',
        description: 'Properly documented their first configuration',
        rarity: 'common',
        holder: 'Mark',
        date: 'Mar 2024',
        category: 'common'
    },
    {
        id: 48,
        name: 'Standup Star',
        icon: '🌅',
        description: 'Gave a perfectly timed standup update',
        rarity: 'common',
        holder: 'Karl Marti',
        date: 'Apr 2024',
        category: 'common'
    }
];

// ============================================
// INITIALIZE ON DOM LOAD
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initCountdown();
    initCounters();
    initAchievements();
    initLeaderboard();
    initQuoteCarousel();
    initModal();
    initNavigation();
    initScrollAnimations();
});

// ============================================
// PARTICLE BACKGROUND
// ============================================

function initParticles() {
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.5 + 0.1;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > canvas.width ||
                this.y < 0 || this.y > canvas.height) {
                this.reset();
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(139, 92, 246, ${this.opacity})`;
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        // Draw connections
        particles.forEach((p1, i) => {
            particles.slice(i + 1).forEach(p2 => {
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 * (1 - distance / 100)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            });
        });

        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ============================================
// COUNTDOWN TIMER - End of January 2026
// ============================================

function initCountdown() {
    const endDate = new Date('2026-01-31T17:00:00');

    function updateCountdown() {
        const now = new Date();
        const diff = endDate - now;

        if (diff <= 0) {
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ============================================
// ANIMATED COUNTERS
// ============================================

function initCounters() {
    const counters = document.querySelectorAll('.counting');
    const speed = 2000; // 2 seconds animation

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.target);
                const startTime = performance.now();

                function updateCounter(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / speed, 1);

                    // Easing function
                    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                    const current = Math.round(easeOutQuart * target);

                    counter.textContent = current.toLocaleString();

                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    }
                }

                requestAnimationFrame(updateCounter);
                observer.unobserve(counter);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

// ============================================
// ACHIEVEMENTS GRID
// ============================================

function initAchievements() {
    const grid = document.getElementById('achievementGrid');

    // Sort achievements by rarity order
    const rarityOrder = { legendary: 0, epic: 1, rare: 2, common: 3 };
    const sortedAchievements = [...ACHIEVEMENTS].sort((a, b) =>
        rarityOrder[a.rarity] - rarityOrder[b.rarity]
    );

    sortedAchievements.forEach((achievement, index) => {
        const card = createAchievementCard(achievement, index);
        grid.appendChild(card);
    });
}

function createAchievementCard(achievement, index) {
    const isKarl = achievement.holder === 'Karl Marti';
    const initials = getInitials(achievement.holder);

    const card = document.createElement('div');
    card.className = 'achievement-card';
    card.dataset.rarity = achievement.rarity;
    card.dataset.category = achievement.category;
    card.dataset.id = achievement.id;
    card.style.animationDelay = `${index * 0.05}s`;

    card.innerHTML = `
        <div class="achievement-header">
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-info">
                <div class="achievement-name">${achievement.name}</div>
                <span class="achievement-rarity">${achievement.rarity}</span>
            </div>
        </div>
        <div class="achievement-description">${achievement.description}</div>
        <div class="achievement-holder">
            <div class="holder-avatar">${initials}</div>
            <span class="holder-name ${isKarl ? 'karl' : ''}">${achievement.holder}${isKarl ? ' 👑' : ''}</span>
            <span class="holder-date">${achievement.date}</span>
        </div>
    `;

    card.addEventListener('click', () => openModal(achievement));

    return card;
}

function getInitials(name) {
    const parts = name.split(' ');
    if (parts.length >= 2) {
        return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
}

// ============================================
// NAVIGATION / FILTERING
// ============================================

function initNavigation() {
    const buttons = document.querySelectorAll('.nav-btn');
    const cards = document.querySelectorAll('.achievement-card');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.dataset.category;

            // Filter cards
            cards.forEach(card => {
                if (category === 'all' || card.dataset.rarity === category) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.3s ease-out forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// ============================================
// LEADERBOARD
// ============================================

function initLeaderboard() {
    const leaderboard = document.getElementById('leaderboard');

    // Calculate achievements per member
    const memberStats = TEAM_MEMBERS.map(member => {
        const count = ACHIEVEMENTS.filter(a => a.holder === member.name).length;
        return { ...member, count };
    }).sort((a, b) => b.count - a.count);

    const maxCount = memberStats[0].count;

    memberStats.forEach((member, index) => {
        const row = document.createElement('div');
        row.className = `leaderboard-row ${index === 0 ? 'top-1' : ''}`;

        const rankBadge = index === 0 ? '👑' : '';
        const progressWidth = (member.count / maxCount) * 100;

        row.innerHTML = `
            <div class="rank">
                ${index + 1}
                <span class="rank-badge">${rankBadge}</span>
            </div>
            <div class="member-info">
                <div class="member-avatar">${member.initials}</div>
                <div>
                    <div class="member-name">${member.name}</div>
                    <div class="member-title">${member.title}</div>
                </div>
            </div>
            <div class="member-achievements">${member.count}</div>
            <div class="progress-bar-container">
                <div class="progress-bar" style="width: 0%"></div>
            </div>
        `;

        leaderboard.appendChild(row);

        // Animate progress bar after a delay
        setTimeout(() => {
            const bar = row.querySelector('.progress-bar');
            bar.style.width = `${progressWidth}%`;
        }, 100 + index * 100);
    });
}

// ============================================
// QUOTE CAROUSEL
// ============================================

function initQuoteCarousel() {
    const quotes = document.querySelectorAll('.quote-card');
    const dotsContainer = document.getElementById('quoteDots');
    let currentIndex = 0;

    // Create dots
    quotes.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `quote-dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToQuote(index));
        dotsContainer.appendChild(dot);
    });

    function goToQuote(index) {
        const currentQuote = quotes[currentIndex];
        const nextQuote = quotes[index];
        const dots = document.querySelectorAll('.quote-dot');

        currentQuote.classList.remove('active');
        currentQuote.classList.add('exit');

        setTimeout(() => {
            currentQuote.classList.remove('exit');
        }, 500);

        nextQuote.classList.add('active');

        dots[currentIndex].classList.remove('active');
        dots[index].classList.add('active');

        currentIndex = index;
    }

    function nextQuote() {
        const nextIndex = (currentIndex + 1) % quotes.length;
        goToQuote(nextIndex);
    }

    // Auto-rotate every 5 seconds
    setInterval(nextQuote, 5000);
}

// ============================================
// MODAL
// ============================================

function initModal() {
    const overlay = document.getElementById('modalOverlay');
    const closeBtn = document.getElementById('modalClose');

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

function openModal(achievement) {
    const overlay = document.getElementById('modalOverlay');
    const isKarl = achievement.holder === 'Karl Marti';

    document.getElementById('modalIcon').textContent = achievement.icon;
    document.getElementById('modalTitle').textContent = achievement.name;
    document.getElementById('modalDescription').textContent = achievement.description;
    document.getElementById('modalHolder').textContent = achievement.holder + (isKarl ? ' 👑' : '');
    document.getElementById('modalDate').textContent = `Unlocked: ${achievement.date}`;

    overlay.classList.add('active');

    // Trigger confetti for legendary achievements
    if (achievement.rarity === 'legendary') {
        triggerConfetti();
    }
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
}

// ============================================
// CONFETTI EFFECT
// ============================================

function triggerConfetti() {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confetti = [];
    const colors = ['#ffd700', '#8b5cf6', '#06b6d4', '#ec4899', '#10b981'];
    const confettiCount = 150;

    class Confetto {
        constructor() {
            this.x = canvas.width / 2;
            this.y = canvas.height / 2;
            this.size = Math.random() * 10 + 5;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 20 + 10;
            this.vx = Math.cos(angle) * velocity;
            this.vy = Math.sin(angle) * velocity - 10;
            this.gravity = 0.5;
            this.rotation = Math.random() * 360;
            this.rotationSpeed = Math.random() * 10 - 5;
            this.opacity = 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.vy += this.gravity;
            this.rotation += this.rotationSpeed;
            this.opacity -= 0.01;
            this.vx *= 0.99;
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate((this.rotation * Math.PI) / 180);
            ctx.globalAlpha = Math.max(0, this.opacity);
            ctx.fillStyle = this.color;
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
            ctx.restore();
        }
    }

    for (let i = 0; i < confettiCount; i++) {
        confetti.push(new Confetto());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let stillAlive = false;
        confetti.forEach(c => {
            if (c.opacity > 0) {
                c.update();
                c.draw();
                stillAlive = true;
            }
        });

        if (stillAlive) {
            requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    animate();
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => observer.observe(el));

    // Also animate cards on scroll
    const cards = document.querySelectorAll('.achievement-card, .stat-card, .module-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';

        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 + index * 50);
    });
}

// ============================================
// EXTRA: Easter Egg - Konami Code
// ============================================

let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join(',') === konamiPattern.join(',')) {
        // Easter egg: massive confetti
        for (let i = 0; i < 5; i++) {
            setTimeout(triggerConfetti, i * 200);
        }

        // Change title temporarily
        const title = document.querySelector('.title-text');
        const originalText = title.textContent;
        title.textContent = 'DASHBOARD FOREVER!';
        setTimeout(() => {
            title.textContent = originalText;
        }, 3000);
    }
});

console.log('%c👑 THE DASHBOARD KING 👑', 'font-size: 24px; color: gold; font-weight: bold;');
console.log('%cThis dashboard was built with love for Karl Marti', 'font-size: 14px; color: #8b5cf6;');
console.log('%cTry the Konami code for a surprise! ↑↑↓↓←→←→BA', 'font-size: 12px; color: #06b6d4;');
