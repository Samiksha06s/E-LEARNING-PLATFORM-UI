document.querySelectorAll('.course-progress progress').forEach(progressBar => {
    let value = progressBar.value;
    const maxValue = progressBar.max; 
    
    const interval = setInterval(() => {
        if (value < maxValue) {
            value++; 
            progressBar.value = value;
        } else {
            clearInterval(interval); 
        }
    }, 1000); 
});
