document.addEventListener('DOMContentLoaded', () => {
    const reviewForm = document.getElementById('reviewForm');
    const reviewsSection = document.getElementById('reviews');

    if (reviewForm && reviewsSection) {
        reviewForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const userName = document.getElementById('review_name').value.trim();
            const userRating = document.getElementById('rating').value;
            const userText = document.getElementById('review_text').value.trim();

            if (userName && userText) {
                const newArticle = document.createElement('article');
                const h3 = document.createElement('h3');
                const pRating = document.createElement('p');
                const pText = document.createElement('p');
                const pDate = document.createElement('p');
                const hr = document.createElement('hr');

                h3.textContent = userName;
                pRating.textContent = `Оценка: ${userRating}`;
                pText.textContent = userText;
                pDate.textContent = `Дата: ${new Date().toLocaleDateString('ru-RU')}`;

                newArticle.appendChild(h3);
                newArticle.appendChild(pRating);
                newArticle.appendChild(pText);
                newArticle.appendChild(pDate);

                reviewsSection.appendChild(hr);
                reviewsSection.appendChild(newArticle);

                reviewForm.reset();
            }
        });
    }

    const diagnosticForm = document.getElementById('add_diagnostics');
    const recordingSection = document.getElementById('recording');

    if (diagnosticForm && recordingSection) {
        diagnosticForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const diagName = document.getElementById('name').value.trim();
            const diagPhone = document.getElementById('telephone').value.trim();
            const diagCar = document.getElementById('name_car').value.trim();
            
            const problemSelect = document.getElementById('problem');
            const diagProblem = problemSelect.options[problemSelect.selectedIndex].text;

            if (diagName && diagPhone && diagCar) {
                const newRecord = document.createElement('article');
                const h3 = document.createElement('h3');
                const pPhone = document.createElement('p');
                const pCar = document.createElement('p');
                const pProblem = document.createElement('p');
                const pDate = document.createElement('p');
                const hr = document.createElement('hr');

                h3.textContent = `Заявка от: ${diagName}`;
                pPhone.textContent = `Телефон: ${diagPhone}`;
                pCar.textContent = `Автомобиль: ${diagCar}`;
                pProblem.textContent = `Проблема: ${diagProblem}`;
                pDate.textContent = `Дата записи: ${new Date().toLocaleDateString('ru-RU')}`;

                newRecord.appendChild(h3);
                newRecord.appendChild(pPhone);
                newRecord.appendChild(pCar);
                newRecord.appendChild(pProblem);
                newRecord.appendChild(pDate);

                recordingSection.appendChild(hr);
                recordingSection.appendChild(newRecord);

                diagnosticForm.reset();
            }
        });
    }

    const serviceItems = document.querySelectorAll('.services-list li');
    const problemSelect = document.getElementById('problem');
    const diagnosticSection = document.getElementById('diagnostic-section');

    serviceItems.forEach(item => {
        item.addEventListener('click', () => {
            const serviceName = item.getAttribute('data-service').trim();
            
            if (problemSelect) {
                for (let option of problemSelect.options) {
                    if (option.value.trim() === serviceName || option.text.includes(serviceName)) {
                        problemSelect.value = option.value;
                        break;
                    }
                }
            }

            if (diagnosticSection) {
                diagnosticSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
