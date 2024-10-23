let currentLanguage = 'ar'; // اللغة الافتراضية

function updateDateTime() {
    const now = new Date();
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone; // الحصول على المنطقة الزمنية الحالية

    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: false,
        timeZone: timeZone 
    };

    document.getElementById('date-time').innerText = now.toLocaleString(currentLanguage === 'ar' ? 'ar-EG' : 'en-US', options);
}

function changeLanguage(lang) {
    currentLanguage = lang; // تحديث اللغة الحالية

    const translations = {
        ar: {
            placeholder: 'أضف مهمة جديدة',
            add: 'إضافة',
            footer: 'جميع الحقوق محفوظة لدى storka'
        },
        en: {
            placeholder: 'Add new task',
            add: 'Add',
            footer: 'All rights reserved by storka'
        },
        fr: {
            placeholder: 'Ajouter une nouvelle tâche',
            add: 'Ajouter',
            footer: 'Tous droits réservés à storka'
        },
        es: {
            placeholder: 'Agregar nueva tarea',
            add: 'Agregar',
            footer: 'Todos los derechos reservados a storka'
        }
    };

    const taskInput = document.getElementById('taskInput');
    const addButton = document.querySelector('.add-btn');
    const footer = document.querySelector('footer p');

    taskInput.placeholder = translations[lang].placeholder;
    addButton.innerText = translations[lang].add;
    footer.innerText = translations[lang].footer;

    updateDateTime(); // تحديث التاريخ والوقت بعد تغيير اللغة
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    if (taskInput.value.trim() !== '') {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        li.innerText = taskInput.value;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateDateTime();
    setInterval(updateDateTime, 1000); // تحديث الوقت كل ثانية
});
