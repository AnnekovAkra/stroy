document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Подсветка активного пункта меню при прокрутке экранов
    const sections = document.querySelectorAll('.screen');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Проверка, какой экран сейчас находится в поле зрения
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // 2. Строгая обработка отправки формы
    const form = document.getElementById('mainForm');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Имитация успешной отправки данных на сервер
            alert('Ваша заявка успешно зарегистрирована в системе ПГС РФ. Менеджер свяжется с вами в течение 15 минут.');
            form.reset();
        });
    }

    // 3. Изменение прозрачности шапки при скролле вниз
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 20px';
            navbar.style.backgroundColor = 'rgba(11, 12, 14, 0.98)';
        } else {
            navbar.style.padding = '20px';
            navbar.style.backgroundColor = 'rgba(17, 19, 21, 0.95)';
        }
    });
});
// 3. Изменение прозрачности шапки при скролле вниз через добавление класса
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
        navbar.style.padding = '0px'; /* Делает шапку чуть уже при скролле */
    } else {
        navbar.classList.remove('navbar-scrolled');
        navbar.style.padding = '10px 0px';
    }
});
// 3. Плавное управление прозрачностью и высотой черной матовой панели
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
        navbar.style.height = '60px'; /* Панель становится чуть компактнее */
    } else {
        navbar.classList.remove('navbar-scrolled');
        navbar.style.height = '70px'; /* Возврат к исходной высоте */
    }
});
// 3. Плавное переключение состояния парящего острова при скролле
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});
