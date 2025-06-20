document.addEventListener('DOMContentLoaded', () => {
    // Inicializar el dashboard
    initDashboard();
    
    // Inicializar la navegación
    initNavigation();
    
    // Inicializar el selector de idioma
    initLanguageSelector();
    
    // Inicializar la sesión de usuario
    initUserSession();
});

function initDashboard() {
    // Obtener el idioma actual
    const currentLang = localStorage.getItem('appLanguage') || 'es';
    
    // Textos según el idioma
    const texts = {
        title: currentLang === 'en' ? 'Elite Flower Company Information' : 'Información de la Compañía Elite Flower',
        subtitle: currentLang === 'en' ? 'Welcome to the Maintenance System' : 'Bienvenido al sistema de mantenimiento',
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

    // Actualizar textos en la página
    updateDashboardTexts(texts);
    
    // Inicializar el estado del sistema
    initSystemStatus();
}

function updateDashboardTexts(texts) {
    // Actualizar título y subtítulo
    const sectionTitle = document.querySelector('.section-title');
    const welcomeTitle = document.querySelector('.welcome-message h2');
    const welcomeDescription = document.querySelector('.welcome-message p');
    
    if (sectionTitle) sectionTitle.textContent = texts.title;
    if (welcomeTitle) welcomeTitle.textContent = texts.subtitle;
    if (welcomeDescription) welcomeDescription.textContent = texts.description;
    
    // Actualizar etiquetas de estadísticas
    const statLabels = document.querySelectorAll('.stat-label');
    if (statLabels.length >= 4) {
        statLabels[0].textContent = texts.stats.farms;
        statLabels[1].textContent = texts.stats.reservoirs;
        statLabels[2].textContent = texts.stats.plastics;
        statLabels[3].textContent = texts.stats.notes;
    }
    
    // Actualizar etiquetas del sistema
    const systemTitle = document.querySelector('.dashboard-card:nth-child(2) .dashboard-card-header h3');
    const statusLabels = document.querySelectorAll('.status-label');
    
    if (systemTitle) systemTitle.textContent = texts.system.title;
    if (statusLabels.length >= 3) {
        statusLabels[0].textContent = texts.system.database;
        statusLabels[1].textContent = texts.system.api;
        statusLabels[2].textContent = texts.system.storage;
    }
}

function initSystemStatus() {
    // Simular verificación del estado del sistema
    checkDatabaseStatus();
    checkAPIStatus();
    checkStorageStatus();
}

function checkDatabaseStatus() {
    // Simular verificación de base de datos
    setTimeout(() => {
        const statusElement = document.querySelector('.status-item:nth-child(1) .status-value');
        if (statusElement) {
            statusElement.textContent = 'Operativo';
            statusElement.className = 'status-value status-ok';
        }
    }, 1000);
}

function checkAPIStatus() {
    // Simular verificación de API
    setTimeout(() => {
        const statusElement = document.querySelector('.status-item:nth-child(2) .status-value');
        if (statusElement) {
            statusElement.textContent = 'Operativo';
            statusElement.className = 'status-value status-ok';
        }
    }, 1500);
}

function checkStorageStatus() {
    // Simular verificación de almacenamiento
    setTimeout(() => {
        const statusElement = document.querySelector('.status-item:nth-child(3) .status-value');
        if (statusElement) {
            statusElement.textContent = 'Operativo';
            statusElement.className = 'status-value status-ok';
        }
    }, 2000);
}

// Función para manejar cambios en el idioma
function handleLanguageChange(lang) {
    // Actualizar textos del dashboard
    initDashboard();
}

// Función para manejar cambios en la navegación
function handleNavigation(section) {
    // Si estamos en el dashboard, actualizar la información
    if (section === 'dashboard') {
        initDashboard();
    }
}

// Exportar funciones para uso en main.js
window.dashboardFunctions = {
    handleLanguageChange,
    handleNavigation
}; 