
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        document.querySelector('.navbar').classList.add('navbar-shrink');
    } else {
        document.querySelector('.navbar').classList.remove('navbar-shrink');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        
        const href = this.getAttribute('href');
        if (href && href.startsWith('#') && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}); 

/* particle generator */

        const particlesContainer = document.getElementById('particles-container');
        const particleCount = 80;
        
       
        for (let i = 0; i < particleCount; i++) {
            createParticle();
        }
        
        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            const size = Math.random() * 3 + 1;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
           
            resetParticle(particle);
            
            particlesContainer.appendChild(particle);
            
           
            animateParticle(particle);
        }
        
        function resetParticle(particle) {
        
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.opacity = '0';
            
            return {
                x: posX,
                y: posY
            };
        }
        
        function animateParticle(particle) {
           
            const pos = resetParticle(particle);
            
            
            const duration = Math.random() * 10 + 10;
            const delay = Math.random() * 5;
            
           
            setTimeout(() => {
                particle.style.transition = `all ${duration}s linear`;
                particle.style.opacity = Math.random() * 0.3 + 0.1;
                
               
                const moveX = pos.x + (Math.random() * 20 - 10);
                const moveY = pos.y - Math.random() * 30; 
                
                particle.style.left = `${moveX}%`;
                particle.style.top = `${moveY}%`;
                
                
                setTimeout(() => {
                    animateParticle(particle);
                }, duration * 700);
            }, delay * 700);
        }
        
        