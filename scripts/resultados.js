// Script para animar los contadores de la sección de resultados

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    let hasAnimated = false;

    const animateCounter = (el) => {
        const target = +el.getAttribute('data-target');
        const isPercent = el.textContent.includes('%');
        const duration = 1500;
        const stepTime = Math.max(15, duration / target);
        let count = 0;

        const updateCount = () => {
            count++;
            if (count >= target) {
                el.textContent = isPercent ? `${target}%` : target;
            } else {
                el.textContent = isPercent ? `${count}%` : count;
                setTimeout(updateCount, stepTime);
            }
        };
        updateCount();
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                counters.forEach(counter => animateCounter(counter));
                observer.disconnect();
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}); 