document.getElementById('lang-toggle').addEventListener('click', function() {
    const isEnglish = document.documentElement.lang === 'en';
    document.documentElement.lang = isEnglish ? 'fa' : 'en';
    document.documentElement.dir = isEnglish ? 'rtl' : 'ltr';
    
    document.querySelectorAll('.en').forEach(el => {
        el.style.display = isEnglish ? 'none' : 'block';
    });
    
    document.querySelectorAll('.fa').forEach(el => {
        el.style.display = isEnglish ? 'block' : 'none';
    });
    
    this.textContent = isEnglish ? 'English' : 'فارسی';
});