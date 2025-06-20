// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Inicialización de la aplicación
    initApp();
});

// Función de inicialización
function initApp() {
    console.log('Aplicación iniciada');
    
    // Verificar si hay una sección específica a la que navegar
    const navigateTo = localStorage.getItem('navigateTo');
    if (navigateTo) {
        localStorage.removeItem('navigateTo');
        navigateToSection(navigateTo);
    }
    
    // Aquí irá la lógica de inicialización
    const menuBtn = document.querySelector('.menu-toggle');
    const sidebar = document.getElementById('sidebar');
    if(menuBtn && sidebar) {
        menuBtn.addEventListener('click', function() {
            // Toggle sidebar open class
            sidebar.classList.toggle('open');
            
            // Toggle active class for button rotation
            menuBtn.classList.toggle('active');
            
            // Add animation class
            menuBtn.classList.add('menu-toggle-animation');
            
            // Remove animation class after animation completes
            setTimeout(() => {
                menuBtn.classList.remove('menu-toggle-animation');
            }, 500);
        });
    }
    
    // Farm dropdown functionality
    initFarmDropdown();
    
    // Language selector functionality
    initLanguageSelector();
    
    // User session functionality
    initUserSession();
    
    // Navigation functionality
    initNavigation();
    
    // Initialize tooltips
    initTooltips();
    
    // Check for hash in URL to navigate to the correct section
    handleHashChange();

    // Inicializar el mapa cuando se carga la sección de plásticos
    initPlasticsMap();

    // Mostrar el dashboard general por defecto
    showCompanyInfo();

    // Manejar eventos
    handleEvents();

    document.querySelector('.login-form')?.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Mostrar la pantalla de carga
        const loadingScreen = document.querySelector('.loading-screen');
        loadingScreen.style.display = 'flex';
        
        // Simular un tiempo de carga (2 segundos)
        setTimeout(() => {
            window.location.href = '../pages/dashboard.html';
        }, 2000);
    });

    // Manejar el botón de pantalla completa de FDIM
    document.getElementById('fdim-fullscreen-btn').addEventListener('click', function() {
        const fdimContainer = document.querySelector('.fdim-container');
        if (!document.fullscreenElement) {
            fdimContainer.requestFullscreen().catch(err => {
                console.error(`Error al intentar entrar en pantalla completa: ${err.message}`);
            });
            this.innerHTML = '<i class="fas fa-compress"></i>';
        } else {
            document.exitFullscreen();
            this.innerHTML = '<i class="fas fa-expand"></i>';
        }
    });

    // Ajustar el iframe cuando cambie el modo de pantalla completa
    document.addEventListener('fullscreenchange', function() {
        const fdimContainer = document.querySelector('.fdim-container');
        if (document.fullscreenElement) {
            fdimContainer.style.height = '100vh';
        } else {
            fdimContainer.style.height = 'calc(100vh - 200px)';
        }
    });
}

// Función para manejar eventos
function handleEvents() {
    // Manejador para el enlace de administración de usuarios
    const usersLink = document.getElementById('users-link');
    console.log('usersLink element:', usersLink); // Log para depuración
    
    if (usersLink) {
        usersLink.addEventListener('click', function(e) {
            console.log('Click en users-link detectado'); // Log para depuración
            e.preventDefault();
            window.location.href = 'pages/users.html';
        });
    }
}

// Función para actualizar la UI
function updateUI() {
    // Aquí irá la lógica de actualización de la interfaz
}

// Función para mostrar información general de la compañía
function showCompanyInfo() {
    // Obtener el contenedor principal del dashboard
    const dashboardSection = document.getElementById('dashboard-section');
    if (!dashboardSection) return;
    
    // Limpiar el contenido actual
    dashboardSection.innerHTML = '';
    
    // Obtener el idioma actual
    const currentLang = localStorage.getItem('appLanguage') || 'es';
    
    // Textos según el idioma
    const texts = {
        title: currentLang === 'en' ? 'Elite Flower Company Information' : 'Información de la Compañía Elite Flower',
        subtitle: currentLang === 'en' ? 'Welcome to the Maintenance System' : 'Bienvenido al Sistema de Mantenimiento',
        description: currentLang === 'en' 
            ? 'Elite Flower is a leading company in the flower industry, dedicated to producing high-quality flowers for export. This maintenance system helps manage resources and track maintenance activities across all farms.' 
            : 'Elite Flower es una empresa líder en la industria de las flores, dedicada a producir flores de alta calidad para exportación. Este sistema de mantenimiento ayuda a gestionar recursos y realizar seguimiento a las actividades de mantenimiento en todas las fincas.',
        stats: {
            farms: currentLang === 'en' ? 'Total Farms' : 'Total de Fincas',
            reservoirs: currentLang === 'en' ? 'Reservoirs' : 'Reservorios',
            plastics: currentLang === 'en' ? 'Plastic Items' : 'Artículos de Plástico',
            notes: currentLang === 'en' ? 'Maintenance Notes' : 'Notas de Mantenimiento'
        },
        system: {
            title: currentLang === 'en' ? 'System Status' : 'Estado del Sistema',
            database: currentLang === 'en' ? 'Database Connection' : 'Conexión a Base de Datos',
            api: currentLang === 'en' ? 'API Services' : 'Servicios API',
            storage: currentLang === 'en' ? 'Storage' : 'Almacenamiento',
            status: {
                ok: currentLang === 'en' ? 'Operational' : 'Operativo',
                warning: currentLang === 'en' ? 'Warning' : 'Advertencia',
                error: currentLang === 'en' ? 'Error' : 'Error'
            }
        }
    };
    
    // Crear estructura HTML para la información de la compañía
    const companyInfoHTML = `
        <div class="welcome-section">
            <h1 class="section-title">${texts.title}</h1>
            <div class="welcome-message">
                <h2>${texts.subtitle}</h2>
                <p>${texts.description}</p>
            </div>
        </div>
        
        <div class="dashboard-grid">
            <div class="dashboard-card">
                <div class="dashboard-card-header">
                    <h3>${currentLang === 'en' ? 'Company Overview' : 'Resumen de la Compañía'}</h3>
                </div>
                <div class="dashboard-card-body">
                    <div class="dashboard-stat">
                        <div class="stat-value">12</div>
                        <div class="stat-label">${texts.stats.farms}</div>
                    </div>
                    <div class="dashboard-stat">
                        <div class="stat-value">48</div>
                        <div class="stat-label">${texts.stats.reservoirs}</div>
                    </div>
                    <div class="dashboard-stat">
                        <div class="stat-value">156</div>
                        <div class="stat-label">${texts.stats.plastics}</div>
                    </div>
                    <div class="dashboard-stat">
                        <div class="stat-value">89</div>
                        <div class="stat-label">${texts.stats.notes}</div>
                    </div>
                </div>
            </div>
            
            <div class="dashboard-card">
                <div class="dashboard-card-header">
                    <h3>${texts.system.title}</h3>
                </div>
                <div class="dashboard-card-body">
                    <div class="system-status">
                        <div class="status-item">
                            <span class="status-label">${texts.system.database}</span>
                            <span class="status-value status-ok">${texts.system.status.ok}</span>
                        </div>
                        <div class="status-item">
                            <span class="status-label">${texts.system.api}</span>
                            <span class="status-value status-ok">${texts.system.status.ok}</span>
                        </div>
                        <div class="status-item">
                            <span class="status-label">${texts.system.storage}</span>
                            <span class="status-value status-ok">${texts.system.status.ok}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Insertar el HTML en el contenedor
    dashboardSection.innerHTML = companyInfoHTML;
    
    // Actualizar la URL sin cambiar la página
    history.pushState(null, '', '#dashboard');
    
    console.log('Dashboard general cargado');
}

// Función para mostrar información específica de una finca
function showFarmSpecificInfo(farmName) {
    if (!farmName) return;
    
    // Navegar a la sección de dashboard
    navigateToSection('dashboard');
    
    // Obtener el contenedor principal del dashboard
    const dashboardSection = document.getElementById('dashboard-section');
    if (!dashboardSection) return;
    
    // Limpiar el contenido actual
    dashboardSection.innerHTML = '';
    
    // Obtener el idioma actual
    const currentLang = localStorage.getItem('appLanguage') || 'es';
    
    // Textos según el idioma
    const texts = {
        farmInfo: currentLang === 'en' ? 'Farm Information' : 'Información de la Finca',
        dashboard: currentLang === 'en' ? 'Dashboard' : 'Panel de Control',
        stats: {
            reservoirs: currentLang === 'en' ? 'Reservoirs' : 'Reservorios',
            plastics: currentLang === 'en' ? 'Plastic Items' : 'Artículos de Plástico',
            notes: currentLang === 'en' ? 'Maintenance Notes' : 'Notas de Mantenimiento',
            tasks: currentLang === 'en' ? 'Pending Tasks' : 'Tareas Pendientes'
        },
        maintenance: {
            title: currentLang === 'en' ? 'Maintenance Status' : 'Estado de Mantenimiento',
            lastCheck: currentLang === 'en' ? 'Last Check' : 'Última Revisión',
            nextCheck: currentLang === 'en' ? 'Next Check' : 'Próxima Revisión',
            status: currentLang === 'en' ? 'Status' : 'Estado'
        },
        recentActivity: {
            title: currentLang === 'en' ? 'Recent Activity' : 'Actividad Reciente',
            date: currentLang === 'en' ? 'Date' : 'Fecha',
            type: currentLang === 'en' ? 'Type' : 'Tipo',
            description: currentLang === 'en' ? 'Description' : 'Descripción',
            user: currentLang === 'en' ? 'User' : 'Usuario'
        }
    };
    
    // Generar datos aleatorios para la finca
    const reservoirsCount = Math.floor(Math.random() * 8) + 2;
    const plasticsCount = Math.floor(Math.random() * 20) + 10;
    const notesCount = Math.floor(Math.random() * 15) + 5;
    const tasksCount = Math.floor(Math.random() * 10) + 2;
    
    // Fecha actual y próxima revisión
    const today = new Date();
    const lastCheck = new Date(today);
    lastCheck.setDate(today.getDate() - Math.floor(Math.random() * 10));
    
    const nextCheck = new Date(today);
    nextCheck.setDate(today.getDate() + Math.floor(Math.random() * 15) + 5);
    
    // Formatear fechas
    const formatDate = (date) => {
        return date.toLocaleDateString(currentLang === 'en' ? 'en-US' : 'es-ES', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };
    
    // Crear estructura HTML para la información de la finca
    const farmInfoHTML = `
        <h1 class="section-title">${farmName} - ${texts.dashboard}</h1>
        
        <div class="info-box">
            <div class="section-header">
                <h3>${texts.farmInfo}</h3>
            </div>
            <p>${currentLang === 'en' ? 
                `Welcome to the ${farmName} dashboard. Here you can monitor maintenance activities and resource status for this farm.` : 
                `Bienvenido al panel de control de ${farmName}. Aquí puede monitorear las actividades de mantenimiento y el estado de los recursos para esta finca.`
            }</p>
        </div>
        
        <div class="dashboard-grid">
            <div class="dashboard-card">
                <div class="dashboard-card-header">
                    <h3>${currentLang === 'en' ? 'Resource Overview' : 'Resumen de Recursos'}</h3>
                </div>
                <div class="dashboard-card-body">
                    <div class="dashboard-stat">
                        <div class="stat-value">${reservoirsCount}</div>
                        <div class="stat-label">${texts.stats.reservoirs}</div>
                    </div>
                    <div class="dashboard-stat">
                        <div class="stat-value">${plasticsCount}</div>
                        <div class="stat-label">${texts.stats.plastics}</div>
                    </div>
                    <div class="dashboard-stat">
                        <div class="stat-value">${notesCount}</div>
                        <div class="stat-label">${texts.stats.notes}</div>
                    </div>
                    <div class="dashboard-stat">
                        <div class="stat-value">${tasksCount}</div>
                        <div class="stat-label">${texts.stats.tasks}</div>
                    </div>
                </div>
            </div>
            
            <div class="dashboard-card">
                <div class="dashboard-card-header">
                    <h3>${texts.maintenance.title}</h3>
                </div>
                <div class="dashboard-card-body">
                    <div class="system-status">
                        <div class="status-item">
                            <span class="status-label">${texts.maintenance.lastCheck}</span>
                            <span class="status-value">${formatDate(lastCheck)}</span>
                        </div>
                        <div class="status-item">
                            <span class="status-label">${texts.maintenance.nextCheck}</span>
                            <span class="status-value">${formatDate(nextCheck)}</span>
                        </div>
                        <div class="status-item">
                            <span class="status-label">${texts.maintenance.status}</span>
                            <span class="status-value status-ok">${currentLang === 'en' ? 'Good' : 'Bueno'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="info-box">
            <div class="section-header">
                <h3>${texts.recentActivity.title}</h3>
            </div>
            <div class="data-table-container">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>${texts.recentActivity.date}</th>
                            <th>${texts.recentActivity.type}</th>
                            <th>${texts.recentActivity.description}</th>
                            <th>${texts.recentActivity.user}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${formatDate(new Date(today.getTime() - 1000 * 60 * 60 * 2))}</td>
                            <td>${currentLang === 'en' ? 'Inspection' : 'Inspección'}</td>
                            <td>${currentLang === 'en' ? 'Reservoir water quality check' : 'Verificación de calidad de agua en reservorio'}</td>
                            <td>Carlos Mendez</td>
                        </tr>
                        <tr>
                            <td>${formatDate(new Date(today.getTime() - 1000 * 60 * 60 * 8))}</td>
                            <td>${currentLang === 'en' ? 'Maintenance' : 'Mantenimiento'}</td>
                            <td>${currentLang === 'en' ? 'Plastic replacement in sector B' : 'Reemplazo de plástico en sector B'}</td>
                            <td>Maria Lopez</td>
                        </tr>
                        <tr>
                            <td>${formatDate(new Date(today.getTime() - 1000 * 60 * 60 * 24))}</td>
                            <td>${currentLang === 'en' ? 'Repair' : 'Reparación'}</td>
                            <td>${currentLang === 'en' ? 'Fixed leak in reservoir #2' : 'Reparación de fuga en reservorio #2'}</td>
                            <td>Juan Perez</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
    
    // Insertar el HTML en el contenedor
    dashboardSection.innerHTML = farmInfoHTML;
    
    console.log(`Información de la finca ${farmName} cargada`);
}

// Función para inicializar la navegación
function initNavigation() {
    const navLinks = document.querySelectorAll('.sidebar-link');
    
    // Agregar event listeners a los enlaces de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Obtener la sección a mostrar desde el atributo data-section
            const section = this.getAttribute('data-section');
            
            // Actualizar la URL con el hash
            window.location.hash = section;
            
            // Navegar a la sección
            navigateToSection(section);
            
            // En dispositivos móviles, cerrar el sidebar después de hacer clic
            const sidebar = document.getElementById('sidebar');
            if (window.innerWidth < 768 && sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
                document.querySelector('.menu-toggle').classList.remove('active');
            }
        });
    });
    
    // Manejar cambios en el hash de la URL
    window.addEventListener('hashchange', handleHashChange);
    
    // Manejar la navegación inicial
    const hash = window.location.hash.slice(1) || 'dashboard';
    navigateToSection(hash);
}

// Función para manejar cambios en el hash de la URL
function handleHashChange() {
    // Obtener el hash actual sin el símbolo #
    let hash = window.location.hash.substring(1);
    
    // Si no hay hash, usar 'dashboard' por defecto
    if (!hash) {
        hash = 'dashboard';
    }
    
    // Navegar a la sección correspondiente
    navigateToSection(hash);
}

// Función para navegar a una sección específica
function navigateToSection(sectionId) {
    // Ocultar todas las secciones
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Mostrar la sección seleccionada
    const targetSection = document.getElementById(`${sectionId}-section`);
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Actualizar el estado activo en la navegación
        document.querySelectorAll('.sidebar-link').forEach(link => {
            link.classList.remove('active');
            
            if (link.getAttribute('data-section') === sectionId) {
                link.classList.add('active');
            }
        });
        
        // Actualizar traducciones si es necesario
        const currentLang = localStorage.getItem('appLanguage') || 'es';
        if (typeof updateSectionTranslations === 'function') {
            updateSectionTranslations(sectionId, currentLang);
        }
        
        console.log(`Navegando a la sección: ${sectionId}`);
    } else {
        console.error(`Sección no encontrada: ${sectionId}`);
        // Si la sección no existe, mostrar el dashboard
        navigateToSection('dashboard');
    }
}

// Función para inicializar la gestión de sesión de usuario
function initUserSession() {
    const userSessionInfo = document.querySelector('.user-session-info');
    const userDropdown = document.querySelector('.user-dropdown');
    const userMenuIcon = document.querySelector('.user-menu');
    const logoutBtn = document.getElementById('logout-btn');
    const usersLink = document.getElementById('users-link');
    
    // Comprobar si hay una sesión activa
    const isLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
    
    // Si no hay sesión activa, redirigir a la página de login
    if (!isLoggedIn && window.location.pathname.indexOf('login.html') === -1) {
        // Simular que estamos en una sesión para propósitos de demostración
        // En una aplicación real, descomentar la siguiente línea:
        // window.location.href = 'pages/login.html';
        localStorage.setItem('userLoggedIn', 'true');
    }
    
    // Manejar clic en el menú de usuario
    if (userSessionInfo) {
        userSessionInfo.addEventListener('click', function(e) {
            e.stopPropagation();
            const isOpen = userDropdown.style.display === 'block';
            
            // Cerrar otros dropdowns abiertos
            document.querySelectorAll('.language-dropdown, .farm-dropdown-content').forEach(dropdown => {
                dropdown.style.display = 'none';
            });
            
            // Toggle dropdown
            userDropdown.style.display = isOpen ? 'none' : 'block';
            
            // Toggle rotation del icono
            if (userMenuIcon) {
                userMenuIcon.classList.toggle('active', !isOpen);
            }
        });
    }
    
    // Manejar clic en el enlace de administración de usuarios
    if (usersLink) {
        usersLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'pages/users.html';
        });
    }
    
    // Cerrar dropdown cuando se hace clic fuera
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.user-session')) {
            if (userDropdown) {
                userDropdown.style.display = 'none';
                if (userMenuIcon) {
                    userMenuIcon.classList.remove('active');
                }
            }
        }
    });
    
    // Manejar clic en el botón de cerrar sesión
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            // Mostrar confirmación
            const confirmLogout = confirm('¿Estás seguro de que deseas cerrar sesión?');
            
            if (confirmLogout) {
                // Eliminar datos de sesión
                localStorage.removeItem('userLoggedIn');
                
                // Redirigir a la página de login
                window.location.href = 'index.html';
            }
        });
    }
    
    // Traducir elementos del menú de usuario según el idioma
    updateUserSessionTranslations();
}

// Función para actualizar las traducciones del menú de usuario
function updateUserSessionTranslations(lang) {
    const currentLang = lang || localStorage.getItem('appLanguage') || 'es';
    const translations = {
        'es': {
            'profile': 'Mi Perfil',
            'logout': 'Cerrar Sesión',
            'logout-confirm': '¿Estás seguro de que deseas cerrar sesión?'
        },
        'en': {
            'profile': 'My Profile',
            'logout': 'Log Out',
            'logout-confirm': 'Are you sure you want to log out?'
        }
    };
    
    // Actualizar textos
    if (translations[currentLang]) {
        const profileLink = document.querySelector('#profile-link .user-dropdown-text');
        const logoutBtn = document.querySelector('#logout-btn .user-dropdown-text');
        
        if (profileLink) profileLink.textContent = translations[currentLang]['profile'];
        if (logoutBtn) logoutBtn.textContent = translations[currentLang]['logout'];
    }
}

// Función para inicializar el selector de idioma
function initLanguageSelector() {
    const languageSelector = document.querySelector('.language-selector');
    const languageDropdown = document.querySelector('.language-dropdown');
    const languageOptions = document.querySelectorAll('.language-option');
    const currentLanguage = document.querySelector('.current-language');
    const langCode = document.querySelector('.lang-code');
    
    // Obtener el idioma actual del localStorage o usar español por defecto
    const savedLanguage = localStorage.getItem('appLanguage') || 'es';
    setLanguage(savedLanguage);
    
    // Mostrar el dropdown al hacer clic en el selector
    if (languageSelector && languageDropdown) {
        languageSelector.addEventListener('click', function(e) {
            e.stopPropagation();
            const isVisible = languageDropdown.style.display === 'block';
            languageDropdown.style.display = isVisible ? 'none' : 'block';
            
            // Cerrar otros dropdowns
            document.querySelectorAll('.user-dropdown, .farm-dropdown-content').forEach(dropdown => {
                dropdown.style.display = 'none';
            });
        });
        
        // Mantener el dropdown abierto cuando el cursor está sobre él
        languageSelector.addEventListener('mouseenter', function() {
            languageDropdown.style.display = 'block';
        });
        
        languageSelector.addEventListener('mouseleave', function() {
            // Pequeño retraso para permitir que el cursor se mueva al dropdown
            setTimeout(() => {
                if (!languageSelector.matches(':hover') && !languageDropdown.matches(':hover')) {
                    languageDropdown.style.display = 'none';
                }
            }, 100);
        });
    }
    
    // Manejar la selección de idioma
    languageOptions.forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
            
            // Guardar la preferencia de idioma
            localStorage.setItem('appLanguage', lang);
        });
    });
    
    // Cerrar dropdown cuando se hace clic fuera
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.language-selector')) {
            if (languageDropdown) {
                languageDropdown.style.display = 'none';
            }
        }
    });
    
    // Función para cambiar el idioma
    function setLanguage(lang) {
        // Actualizar el código de idioma mostrado
        if (langCode) {
            langCode.textContent = lang.toUpperCase();
        }
        
        // Actualizar la bandera mostrada
        if (currentLanguage) {
            // Obtener la bandera del idioma seleccionado
            const selectedOption = document.querySelector(`.language-option[data-lang="${lang}"]`);
            if (selectedOption) {
                const flagSvg = selectedOption.querySelector('svg').cloneNode(true);
                const currentFlag = currentLanguage.querySelector('svg');
                if (currentFlag && flagSvg) {
                    currentLanguage.replaceChild(flagSvg, currentFlag);
                }
            }
        }
        
        // Actualizar las traducciones del menú de usuario
        updateUserSessionTranslations(lang);
        
        // Aquí se pueden añadir las traducciones de texto
        const translations = {
            'es': {
                'header-title': 'Mantenimiento',
                'farm-title': 'Finca Productora',
                'dashboard': 'Dashboard',
                'plasticos': 'Plásticos',
                'reservorios': 'Reservorios',
                'notas': 'Notas',
                'user-name': 'Nombre del usuario',
                'info-title': 'Recuadro para mostrar los avisos de tu módulo',
                'info-text': 'En este recuadro vamos a mostrar la información del modulo.'
            },
            'en': {
                'header-title': 'Maintenance',
                'farm-title': 'Production Farm',
                'dashboard': 'Dashboard',
                'plasticos': 'Plastics',
                'reservorios': 'Reservoirs',
                'notas': 'Notes',
                'user-name': 'User name',
                'info-title': 'Box to display your module notifications',
                'info-text': 'In this box we will show the module information.'
            }
        };
        
        // Aplicar traducciones
        if (translations[lang]) {
            document.querySelector('.header-title').textContent = translations[lang]['header-title'];
            document.querySelector('.farm-title').textContent = translations[lang]['farm-title'];
            
            // Traducir elementos de navegación y sus tooltips
            const sidebarLinks = document.querySelectorAll('.sidebar-link');
            sidebarLinks.forEach((link, index) => {
                const textElement = link.querySelector('.sidebar-text');
                const tooltipElement = link.querySelector('.sidebar-tooltip');
                
                if (index === 0 && textElement) {
                    textElement.textContent = translations[lang]['dashboard'];
                    if (tooltipElement) tooltipElement.textContent = translations[lang]['dashboard'];
                } else if (index === 1 && textElement) {
                    textElement.textContent = translations[lang]['plasticos'];
                    if (tooltipElement) tooltipElement.textContent = translations[lang]['plasticos'];
                } else if (index === 2 && textElement) {
                    textElement.textContent = translations[lang]['reservorios'];
                    if (tooltipElement) tooltipElement.textContent = translations[lang]['reservorios'];
                } else if (index === 3 && textElement) {
                    textElement.textContent = translations[lang]['notas'];
                    if (tooltipElement) tooltipElement.textContent = translations[lang]['notas'];
                }
            });
            
            // Traducir nombre de usuario
            document.querySelector('.user-name').textContent = translations[lang]['user-name'];
            
            // Traducir información del recuadro
            const infoTitle = document.querySelector('.info-box p:first-child');
            const infoText = document.querySelector('.info-box p:last-child');
            if (infoTitle) infoTitle.textContent = translations[lang]['info-title'];
            if (infoText) infoText.textContent = translations[lang]['info-text'];
            
            // Actualizar el selector de fincas
            const farmSelectorLabel = document.querySelector('.farm-selector-label');
            if (farmSelectorLabel) {
                farmSelectorLabel.textContent = lang === 'es' ? 'Finca Productora:' : 'Production Farm:';
            }
            
            console.log(`Idioma cambiado a: ${lang}`);
        }
    }
}

// Función para inicializar el dropdown de fincas
function initFarmDropdown() {
    const farmDropdownBtn = document.querySelector('.farm-dropdown-btn');
    const farmDropdownContent = document.querySelector('.farm-dropdown-content');
    const farmDropdownItems = document.querySelectorAll('.farm-dropdown-content a');
    const farmName = document.querySelector('.farm-name');
    const maintenanceTitle = document.querySelector('.header-title');
    
    // Variable para almacenar la finca seleccionada
    let selectedFarm = localStorage.getItem('selectedFarm') || '';
    
    // Si hay una finca seleccionada previamente, actualizar la UI
    if (selectedFarm && farmName) {
        farmName.textContent = selectedFarm;
        showFarmSpecificInfo(selectedFarm);
    } else {
        // Si no hay finca seleccionada, mostrar información general
        showCompanyInfo();
    }
    
    // Manejar la apertura del dropdown con click
    farmDropdownBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const isOpen = farmDropdownContent.style.display === 'block';
        farmDropdownContent.style.display = isOpen ? 'none' : 'block';
        
        // Toggle the active class on the dropdown icon
        const dropdownIcon = this.querySelector('.dropdown-icon');
        if (dropdownIcon) {
            if (isOpen) {
                dropdownIcon.classList.remove('active');
            } else {
                dropdownIcon.classList.add('active');
            }
        }
    });
    
    // Cerrar el dropdown cuando el cursor sale de él
    farmDropdownContent.addEventListener('mouseleave', function() {
        farmDropdownContent.style.display = 'none';
        
        // Remove active class from dropdown icon
        const dropdownIcon = farmDropdownBtn.querySelector('.dropdown-icon');
        if (dropdownIcon) {
            dropdownIcon.classList.remove('active');
        }
    });
    
    // Cerrar el dropdown cuando se hace clic fuera de él
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.farm-dropdown')) {
            farmDropdownContent.style.display = 'none';
        }
    });
    
    // Manejar la selección de fincas
    farmDropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const farmValue = this.textContent;
            
            // Actualizar el texto del botón
            const btnText = farmDropdownBtn.querySelector('span:first-child');
            if (btnText) {
                btnText.textContent = farmValue;
            }
            
            // Actualizar el título de la finca en la barra lateral
            if (farmName) {
                farmName.textContent = farmValue;
            }
            
            // Guardar la selección en localStorage
            localStorage.setItem('selectedFarm', farmValue);
            selectedFarm = farmValue;
            
            // Mostrar información específica de la finca
            showFarmSpecificInfo(farmValue);
            
            // Cerrar el dropdown después de seleccionar
            farmDropdownContent.style.display = 'none';
            
            console.log(`Finca seleccionada: ${farmValue}`);
        });
    });
    
    // Agregar evento al título de mantenimiento para mostrar información general
    if (maintenanceTitle) {
        maintenanceTitle.addEventListener('click', function() {
            // Limpiar la finca seleccionada
            if (farmName) {
                farmName.textContent = 'Seleccionar Finca';
            }
            localStorage.removeItem('selectedFarm');
            selectedFarm = '';
            
            // Mostrar información general de la compañía
            showCompanyInfo();
            
            console.log('Mostrando información general de la compañía');
        });
    }
}

// Función para inicializar los tooltips
function initTooltips() {
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    sidebarLinks.forEach(link => {
        const tooltip = link.querySelector('.sidebar-tooltip');
        
        // Evento mouseenter
        link.addEventListener('mouseenter', function(e) {
            if (tooltip) {
                const rect = link.getBoundingClientRect();
                tooltip.style.left = (rect.right + 10) + 'px';
                tooltip.style.top = (rect.top + (rect.height / 2)) + 'px';
                tooltip.style.opacity = '1';
                tooltip.style.visibility = 'visible';
            }
        });

        // Evento mouseleave
        link.addEventListener('mouseleave', function() {
            if (tooltip) {
                tooltip.style.opacity = '0';
                tooltip.style.visibility = 'hidden';
            }
        });
    });
}

// Variables globales para el módulo de Administración de Consumo
let fechaActual = new Date();
let lecturas = {}; // Almacén de lecturas por fecha
let lecturaEditando = null;

// Sistema de pestañas
function cambiarTab(tabName) {
    // Ocultar todas las pestañas
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // Mostrar la pestaña seleccionada
    document.getElementById(`tab-${tabName}`).classList.add('active');
    event.target.classList.add('active');

    // Si es historial, generar el calendario
    if (tabName === 'historial') {
        generarCalendario();
    }
}

// Generación del calendario
function generarCalendario() {
    const calendario = document.getElementById('calendar-grid');
    const titulo = document.getElementById('calendar-title');
    
    const meses = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    
    const diasSemana = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    
    titulo.textContent = `${meses[fechaActual.getMonth()]} ${fechaActual.getFullYear()}`;
    
    // Limpiar calendario
    calendario.innerHTML = '';
    
    // Crear encabezados de días
    diasSemana.forEach(dia => {
        const header = document.createElement('div');
        header.className = 'calendar-day-header';
        header.textContent = dia;
        calendario.appendChild(header);
    });
    
    // Obtener primer día del mes y días en el mes
    const primerDia = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 1);
    const ultimoDia = new Date(fechaActual.getFullYear(), fechaActual.getMonth() + 1, 0);
    const diasEnMes = ultimoDia.getDate();
    const diaSemanaInicio = primerDia.getDay();
    
    // Días del mes anterior
    const mesAnterior = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 0);
    for (let i = diaSemanaInicio - 1; i >= 0; i--) {
        const dia = mesAnterior.getDate() - i;
        const celda = crearCeldaDia(dia, true);
        calendario.appendChild(celda);
    }
    
    // Días del mes actual
    const hoy = new Date();
    for (let dia = 1; dia <= diasEnMes; dia++) {
        const fecha = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), dia);
        const esHoy = fecha.toDateString() === hoy.toDateString();
        const celda = crearCeldaDia(dia, false, esHoy, fecha);
        calendario.appendChild(celda);
    }
    
    // Días del mes siguiente para completar la cuadrícula
    const celdasActuales = calendario.children.length - 7; // Restar encabezados
    const celdasNecesarias = 42; // 6 semanas × 7 días
    const celdasRestantes = celdasNecesarias - celdasActuales;
    
    for (let dia = 1; dia <= celdasRestantes; dia++) {
        const celda = crearCeldaDia(dia, true);
        calendario.appendChild(celda);
    }
}

function crearCeldaDia(numeroDia, esOtroMes = false, esHoy = false, fecha = null) {
    const celda = document.createElement('div');
    celda.className = 'calendar-day';
    
    if (esOtroMes) celda.classList.add('other-month');
    if (esHoy) celda.classList.add('today');
    
    const numeroDiaEl = document.createElement('div');
    numeroDiaEl.className = 'calendar-day-number';
    numeroDiaEl.textContent = numeroDia;
    celda.appendChild(numeroDiaEl);
    
    // Agregar eventos si es día del mes actual
    if (!esOtroMes && fecha) {
        const fechaStr = fecha.toISOString().split('T')[0];
        celda.dataset.fecha = fechaStr;
        
        // Mostrar lecturas del día
        if (lecturas[fechaStr]) {
            lecturas[fechaStr].forEach(lectura => {
                const evento = document.createElement('div');
                evento.className = `calendar-event ${lectura.tipo}`;
                evento.textContent = `${lectura.cuenta}: ${lectura.valor} kWh`;
                evento.onclick = (e) => {
                    e.stopPropagation();
                    editarLectura(lectura);
                };
                celda.appendChild(evento);
            });
        }
        
        // Click en el día para mostrar opciones
        celda.onclick = () => {
            mostrarModalAgregarLectura(fechaStr);
        };
    }
    
    return celda;
}

function mostrarModalAgregarLectura(fecha) {
    const modal = document.getElementById('modal-agregar-lectura');
    const fechaDisplay = document.getElementById('fecha-display');
    const fechaInput = document.getElementById('fecha-consulta');
    
    // Formatear fecha para mostrar
    const fechaObj = new Date(fecha);
    fechaDisplay.textContent = fechaObj.toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Establecer fecha actual en el input
    const ahora = new Date();
    fechaInput.value = ahora.toISOString().slice(0, 16);
    
    // Mostrar lecturas existentes
    mostrarLecturasExistentes(fecha);
    
    // Mostrar modal
    modal.classList.add('active');
}

function mostrarLecturasExistentes(fecha) {
    const contenedor = document.getElementById('lista-lecturas-dia');
    const lecturasDelDia = lecturas[fecha] || [];
    
    if (lecturasDelDia.length === 0) {
        contenedor.innerHTML = '<p class="no-lecturas">No hay lecturas registradas para este día.</p>';
        return;
    }
    
    contenedor.innerHTML = lecturasDelDia.map(lectura => `
        <div class="lectura-item ${lectura.tipo}">
            <div class="lectura-header">
                <span class="lectura-cuenta">${lectura.cuenta}</span>
                <div class="lectura-actions">
                    <button class="btn btn-small btn-warning" onclick="editarLectura(${JSON.stringify(lectura)})">Editar</button>
                    <button class="btn btn-small btn-danger" onclick="eliminarLectura(${JSON.stringify(lectura)})">Eliminar</button>
                </div>
            </div>
            <div class="lectura-info">
                <p>Valor: ${lectura.valor} kWh</p>
                <p>Operador: ${lectura.operador?.nombre || 'No especificado'}</p>
                <p>Código: ${lectura.operador?.codigo || 'No especificado'}</p>
                ${lectura.observaciones ? `<p>Obs: ${lectura.observaciones}</p>` : ''}
            </div>
        </div>
    `).join('');
}

function guardarNuevaLectura(event) {
    event.preventDefault();
    
    const cuenta = document.getElementById('nueva-cuenta').value;
    const lectura = parseFloat(document.getElementById('nueva-lectura').value);
    const codigoOperador = document.getElementById('codigo-operador').value;
    const nombreOperador = document.getElementById('nombre-operador').value;
    const observaciones = document.getElementById('nuevas-observaciones').value;
    const fecha = document.getElementById('fecha-display').textContent.split(': ')[1];
    
    // Validar lectura
    if (isNaN(lectura) || lectura < 0 || lectura > 999999) {
        mostrarNotificacion('Por favor ingrese un valor válido entre 0 y 999999 kWh', 'error');
        return;
    }
    
    const nuevaLectura = {
        id: Date.now(),
        cuenta: cuenta,
        valor: lectura,
        fecha: fecha,
        tipo: obtenerTipoCuenta(cuenta),
        operador: {
            codigo: codigoOperador,
            nombre: nombreOperador
        },
        observaciones: observaciones
    };
    
    // Guardar lectura
    if (!lecturas[fecha]) lecturas[fecha] = [];
    lecturas[fecha].push(nuevaLectura);
    
    // Actualizar interfaz
    generarCalendario();
    mostrarLecturasExistentes(fecha);
    mostrarNotificacion('Lectura guardada correctamente', 'success');
    
    // Limpiar formulario
    document.getElementById('form-agregar-lectura').reset();
}

function ingresarLectura(cuenta) {
    const modal = document.getElementById('modal-agregar-lectura');
    const fechaDisplay = document.getElementById('fecha-display');
    const fechaInput = document.getElementById('fecha-consulta');
    const fechaActual = new Date();
    
    // Formatear la fecha para mostrar
    const opcionesFecha = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    fechaDisplay.textContent = fechaActual.toLocaleDateString('es-ES', opcionesFecha);
    
    // Establecer la fecha actual en el input
    fechaInput.value = fechaActual.toISOString().slice(0, 16);
    
    // Seleccionar la cuenta en el select
    const cuentaSelect = document.getElementById('nueva-cuenta');
    cuentaSelect.value = cuenta;
    
    // Mostrar el modal
    modal.classList.add('active');
    
    // Mostrar las lecturas existentes para la fecha actual
    mostrarLecturasExistentes(fechaActual);
}

function consultarPredio(cuenta) {
    const modal = document.getElementById('modal-consulta');
    const infoPredio = document.getElementById('info-predio');
    const fechaConsulta = document.getElementById('fecha-consulta');
    const fechaActual = new Date();
    
    // Formatear la fecha actual
    fechaConsulta.value = fechaActual.toISOString().slice(0, 16);
    
    // Obtener la última lectura registrada para esta cuenta
    const lecturasCuenta = lecturas[cuenta] || [];
    const ultimaLectura = lecturasCuenta.length > 0 ? 
        lecturasCuenta[lecturasCuenta.length - 1] : null;
    
    // Construir el HTML con la información del predio
    let html = `
        <div class="predio-info">
            <h4>${cuenta}</h4>
            <div class="info-grid">
                <div class="info-item">
                    <span class="info-label">Última lectura:</span>
                    <span class="info-value">${ultimaLectura ? ultimaLectura.lectura + ' kWh' : 'Sin registros'}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Fecha última lectura:</span>
                    <span class="info-value">${ultimaLectura ? new Date(ultimaLectura.fecha).toLocaleDateString() : '—'}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Operador:</span>
                    <span class="info-value">${ultimaLectura ? ultimaLectura.operador : '—'}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Observaciones:</span>
                    <span class="info-value">${ultimaLectura ? ultimaLectura.observaciones : '—'}</span>
                </div>
            </div>
        </div>
    `;
    
    infoPredio.innerHTML = html;
    modal.classList.add('active');
}

function guardarConsulta(event) {
    event.preventDefault();
    
    const cuenta = document.querySelector('#info-predio p:first-child').textContent.split(': ')[1];
    const fecha = document.getElementById('fecha-consulta').value;
    const codigoConsultor = document.getElementById('codigo-consultor').value;
    const nombreConsultor = document.getElementById('nombre-consultor').value;
    const observaciones = document.getElementById('observaciones-consulta').value;
    
    // Aquí puedes implementar la lógica para guardar la consulta
    // Por ahora solo mostraremos una notificación
    mostrarNotificacion('Consulta registrada correctamente', 'success');
    cerrarModalConsulta();
}

function cerrarModalAgregarLectura() {
    document.getElementById('modal-agregar-lectura').classList.remove('active');
}

function cerrarModalConsulta() {
    document.getElementById('modal-consulta').classList.remove('active');
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    // Generar algunas lecturas de ejemplo para demostración
    const ejemplos = [
        { cuenta: 'EMGESA 635', valor: 1250.5, fecha: '2025-06-08', tipo: 'emgesa' },
        { cuenta: 'RUITOQUE 6188', valor: 890.2, fecha: '2025-06-09', tipo: 'ruitoque' },
        { cuenta: 'CODENSA CUARTO FRIO 1345745-2', valor: 2100.8, fecha: '2025-06-10', tipo: 'codensa' }
    ];
    
    ejemplos.forEach(ejemplo => {
        if (!lecturas[ejemplo.fecha]) lecturas[ejemplo.fecha] = [];
        lecturas[ejemplo.fecha].push({
            id: Date.now() + Math.random(),
            ...ejemplo,
            observaciones: 'Lectura de ejemplo'
            });
        });
    
    // Actualizar tabla con ejemplos
    ejemplos.forEach(ejemplo => {
        if (ejemplo.fecha === new Date().toISOString().split('T')[0]) {
            actualizarTablaLecturas(ejemplo.cuenta, ejemplo.valor, ejemplo.fecha);
    }
    });
});
