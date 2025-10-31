const key_id = "Bộ đề #015";
const club_name = "Food club";  
//----------------------------------------------------------------------
const questions1 = {
    "question1_1": "What is your full name?", 
    "question1_2": "What is your surname?", 
    "question1_3": "What did you do yesterday / last night / last week?", 
    "question1_4": "What do you like to do every morning / in the afternoon / in the evening?", 
    "question1_5": "What do you do in the free time?"
};

const questions1_answer = { 
    "question1_1_answer": "Nguyen Van An.",
    "question1_2_answer": "My surname is Nguyen.",
    "question1_3_answer": "I stayed at home.",
    "question1_4_answer": "I read books every morning.",
    "question1_5_answer": "I enjoy watching movies."
};

//----------------------------------------------------------------------
const questions2 = {
    "question2": "When and where do you usually have meals?",
};
const questions2_answer = { 
    "question2": "I usually have breakfast at home around 7 AM, lunch at work or school around noon, and dinner at home around 7 PM. I prefer eating with family."
};

//----------------------------------------------------------------------
const questions3 = {
    "question3_1": "Tell me the last time you had a good meal?",
    "question3_2": "I want to visit your country? Do you have any suggestions for me on what delicious food to eat?",
    "question3_3": "3.	Today, many people eat pizza. But it is not healthy and they should limit eating it. What is your opinion?"
};

const questions3_answer = { 
    "question3_1_answer": "The last time I had a great meal was at a family gathering last weekend. We had grilled fish, fried rice, and a delicious dessert. Everything was so tasty and satisfying.",
    "question3_2_answer": "If you visit my country, I highly recommend trying pho, banh mi, and fresh spring rolls. These dishes are famous for their unique flavors and are a must-try when you're here.",
    "question3_3_answer": "I agree that pizza is delicious but not very healthy. It’s high in fat and calories, so it should be eaten in moderation. It’s fine as an occasional treat but not a regular meal."
};




//----------------------------------------------------------------------
const questions4_main = "Dear members, the club needs volunteers to be guest speakers for the talk show with a famous chef. Please suggest your desire to be a speaker and what topic will you talk about?";
const question4_1_text = "Write a short email to your friend (about 50 words). Tell your friend what suggestions you will make and why?";
const question4_2_text = "Write an email to the president of the club (about 120-150 words). Tell the manager what suggestions you will make and why?";

const question4_1_text_answer = `Hi Linh, <br> 
    I just heard that the club needs volunteers to be guest speakers for the talk show with the famous chef. I plan to suggest talking about healthy cooking tips. What do you think? 
    <br>Let me know soon! 
    <br>Best, 
    <br>Phuong`;

const question4_2_text_answer = `Dear Club President, 
    <br> I’m excited to hear about the opportunity to volunteer as a guest speaker for the upcoming talk show with the famous chef. I would love to talk about healthy cooking techniques and how to prepare simple yet nutritious meals at home. I believe this topic will be useful for many club members, and it can inspire others to focus more on health-conscious cooking. 
    <br> I am passionate about this subject and would be happy to share some easy recipes and tips. Please let me know if you would like me to participate.  
    <br> Best regards,  
    <br> Phuong`;











































// Hàm để render câu hỏi cho câu hỏi 1
function renderQuestions1() {
    // Cập nhật nội dung cho thẻ h1
    document.getElementById('topic-title_q1').textContent = `Question 1 of 4 - ${club_name}`;

    // Cập nhật nội dung cho thẻ h6
    document.getElementById('description_q1').textContent = `You are joining a ${club_name}. Fill out the form. Write short answers (1-5 words) for each message (Bài này nên trả lời dài nhất là 5 từ, viết hoa từ đầu và dấu chấm kêt thúc câu).`;

    const container = document.getElementById("questions-container1");
    let formContent = '';

    // Lặp qua đối tượng câu hỏi và tạo các ô nhập liệu
    for (let key in questions1) {
        formContent += `
            <div class="mb-4">
                <label for="${key}" class="form-label">${questions1[key]}</label>
                <input type="text" class="form-control" id="${key}" name="${key}">
            </div>
        `;
    }

    // Chèn nội dung câu hỏi vào container
    container.innerHTML = formContent;


}



// Gọi hàm renderQuestions1 khi trang tải
//window.onload = renderQuestions1;








// Giả sử bạn có đối tượng câu hỏi như sau


// Hàm để render câu hỏi cho câu hỏi 2
function renderQuestions2() {
    // Cập nhật nội dung cho thẻ h1
    document.getElementById('topic-title_q2').textContent = `Question 2 of 4 - ${club_name}`;

    // Cập nhật nội dung cho thẻ h6
    document.getElementById('description_q2').textContent = `Now you've become a new member of the ${club_name}. Fill in the form. Write in sentences. Use 20-30 words (Viết 20 đến 30 từ thôi nhé!).`; // "You are joining a Technology Club. Fill out the form. Write short answers (1-5 words) for each message. You have 3 minutes.";

    const container = document.getElementById("questions-container2");
    let formContent = '';

    // Lặp qua đối tượng câu hỏi và tạo các ô nhập liệu
    for (let key in questions2) {
        formContent += `
            <div class="mb-4">
                <label for="${key}" class="form-label">${questions2[key]}</label>
                <textarea class="form-control" id="${key}" name="${key}" rows="3" style="width: 100%;"></textarea>
            </div>
        `;
    }
    // Chèn nội dung câu hỏi vào container
    container.innerHTML = formContent;

     // Thêm sự kiện `input` cho mỗi textarea
    for (let key in questions2) {
        let textarea = document.getElementById(key);
        textarea.addEventListener("input", countWordsInTextarea);
    }
}

function countWordsInTextarea(event) {
    let textareaContent = event.target.value;
    let wordCount = textareaContent.split(/\s+/).filter(Boolean).length;
    document.getElementById("wordCountLabel").textContent = `Word Count: ${wordCount}`;
}



// Hàm để render câu hỏi cho câu hỏi 3
function renderQuestions3() {
    // Cập nhật nội dung cho thẻ h1
document.getElementById('topic-title_q3').textContent = `Question 3 of 4 - ${club_name}`;

    // Cập nhật nội dung cho thẻ h6
document.getElementById('description_q3').textContent = `You are speaking to fellow members of the ${club_name} in a group chat. Respond to them in full sentences (30-40 words per answer).`;

    const container = document.getElementById("questions-container3");
    let formContent = '';

    // Lặp qua đối tượng câu hỏi và tạo các ô nhập liệu
    for (let key in questions3) {
        formContent += `
            <div class="mb-4">
                <label for="${key}" class="form-label">${questions3[key]}</label>
                <textarea class="form-control" id="${key}" name="${key}" rows="3" style="width: 100%;"></textarea>
                <div id="${key}-wordCount" class="text-muted text-end mt-1">Word Count: 0</div>
            </div>
        `;
    }

    // Chèn nội dung câu hỏi vào container
    container.innerHTML = formContent;

       // Thêm sự kiện input cho từng textarea
    // Thêm sự kiện input cho từng textarea
    for (let key in questions3) {
        let textarea = document.getElementById(key);
        textarea.addEventListener("input", function(event) {
            const content = textarea.value;
            // Đếm từ
            const wordCount = content.split(/\s+/).filter(Boolean).length;
            document.getElementById(`${key}-wordCount`).textContent = `Word Count: ${wordCount}`;
        });
    }
}



// Các câu hỏi cho câu hỏi 4

const questions4 = {
    "question4_1": `${questions4_main} <br><strong>${question4_1_text}</strong>`,
    "question4_2": `${questions4_main} <br><strong>${question4_2_text}</strong>`,
};



const description_question4 = "Write a short email (about 50 words) to your friend, and a longer email (120-150 words) to the president of the club.";

// Hàm để render câu hỏi cho câu hỏi 4
function renderQuestions4() {
    // Cập nhật nội dung cho thẻ h1
    document.getElementById('topic-title_q4').textContent = "Question 4 of 4 - Email Writing";

    // Cập nhật nội dung cho thẻ h6
    document.getElementById('description_q4').textContent = description_question4;

    const container = document.getElementById("questions-container4");
    let formContent = '';

    // Lặp qua đối tượng câu hỏi và tạo các ô nhập liệu
    for (let key in questions4) {
        formContent += `
            <div class="mb-4">
                <label for="${key}" class="form-label">${questions4[key]}</label>
                <textarea class="form-control" id="${key}" name="${key}" rows="4" style="width: 100%;"></textarea>
                <div id="${key}-wordCount" class="text-muted text-end mt-1">Word Count: 0</div>
            </div>
        `;
    }

    // Chèn nội dung câu hỏi vào container
    container.innerHTML = formContent;

        // Thêm sự kiện input cho từng textarea
    for (let key in questions4) {
        let textarea = document.getElementById(key);
        textarea.addEventListener("input", function(event) {
            const content = (textarea.value || "").trim(); // Dùng giá trị rỗng mặc định nếu undefined

            // Đếm từ chỉ khi content không phải là chuỗi rỗng
            const wordCount = content ? content.split(/\s+/).filter(Boolean).length : 0;
            document.getElementById(`${key}-wordCount`).textContent = `Word Count: ${wordCount}`;
        });
    }
}




// Cập nhật prompt cho toàn bộ
const promptText_question1 = "Người này đang là thành viên của câu lạc bộ " + club_name + " Hãy chấm điểm 5 câu sau theo khung MiniHippo mức độ A0 đến C1, tiêu chí chấm điểm là trả lời dưới 5 từ, đơn giản và viết hoa chữ đầu dấu chấm cuối câu, kết quả trả về có giải thích.\n\n";
const promptText_question2 = "Người này đang là thành viên của câu lạc bộ " + club_name + " Hãy chấm điểm câu trả lời sau theo khung MiniHippo mức độ A0 đến C1, độ dài trong phạm vi 20-30 words, kết quả trả về có giải thích:\n\n";
const promptText_question3 = "Người này đang là thành viên của câu lạc bộ " + club_name + " Hãy chấm điểm câu trả lời sau theo khung MiniHippo mức độ A0 đến C1, độ dài trong phạm vi 30-40 từ, kết quả trả về có giải thích:\n\n";
const promptText_question4 = "Người này đang là thành viên của câu lạc bộ " + club_name + " Hãy chấm điểm câu trả lời sau theo khung MiniHippo mức độ A0 đến C1, độ dài trong phạm vi 50 từ cho câu hỏi 1 và 120-150 từ cho câu hỏi 2, kết quả trả về có giải thích, sau khi chấm 4 câu hãy chấm cấp độ tổng thể cho các câu trên:\n\n";

// Hàm xử lý khi người dùng nhấn nút "Chấm điểm" cho tất cả 4 câu hỏi
async function handleSubmitAllQuestions() {
    const answers = {
        question1: {},
        question2: {},
        question3: {},
        question4: {}
    };

    // Lấy giá trị từ form câu hỏi 1
    const formElements_question1 = document.getElementById('question1Form').elements;
    for (let element of formElements_question1) {
        if (element.type === "text") {
            answers.question1[element.name] = element.value.trim() === "" ? "No answer" : element.value;
        }
    }

    // Lấy giá trị từ form câu hỏi 2
    const formElements_question2 = document.getElementById('question2Form').elements;
    for (let element of formElements_question2) {
        if (element.type === "textarea") {
            answers.question2[element.name] = element.value.trim() === "" ? "No answer" : element.value;
        }
    }

    // Lấy giá trị từ form câu hỏi 3
    const formElements_question3 = document.getElementById('question3Form').elements;
    for (let element of formElements_question3) {
        if (element.type === "textarea") {
            answers.question3[element.name] = element.value.trim() === "" ? "No answer" : element.value;
        }
    }

    // Lấy giá trị từ form câu hỏi 4
    const formElements_question4 = document.getElementById('question4Form').elements;
    for (let element of formElements_question4) {
        if (element.type === "textarea") {
            answers.question4[element.name] = element.value.trim() === "" ? "No answer" : element.value;
        }
    }

    // Chuyển đối tượng đáp án cho câu hỏi 1 thành một chuỗi
    const userAnswersText_question1 = Object.keys(answers.question1)
        .map(key => `${questions1[key]}: ${answers.question1[key]}`)
        .join("\n");

    // Chuyển đối tượng đáp án cho câu hỏi 2 thành một chuỗi
    const userAnswersText_question2 = Object.keys(answers.question2)
        .map(key => `${questions2[key]}: ${answers.question2[key]}`)
        .join("\n");

    // Chuyển đối tượng đáp án cho câu hỏi 3 thành một chuỗi
    const userAnswersText_question3 = Object.keys(answers.question3)
        .map(key => `${questions3[key]}: ${answers.question3[key]}`)
        .join("\n");

    // Chuyển đối tượng đáp án cho câu hỏi 4 thành một chuỗi
    const userAnswersText_question4 = Object.keys(answers.question4)
        .map(key => `${questions4[key]}: ${answers.question4[key]}`)
        .join("\n");

    // Gộp câu hỏi 1, câu hỏi 2, câu hỏi 3 và câu hỏi 4 thành một trường "question"
    const fullQuestion = `
        ${promptText_question1}${userAnswersText_question1}\n\n
        ${promptText_question2}${userAnswersText_question2}\n\n
        ${promptText_question3}${userAnswersText_question3}\n\n
        ${promptText_question4}${userAnswersText_question4}
    `;

    // Hiển thị modal loading
    const loadingModal = new bootstrap.Modal(document.getElementById('loadingModal'));
    loadingModal.show(); // Hiển thị modal loading

    // Gửi tất cả câu hỏi và đáp án cho server
    try {
        const response = await fetch('/ask', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                question: fullQuestion // Gửi câu hỏi gộp dưới một trường "question"
            })
        });

        const data = await response.json();

        if (data.error) {
            console.log("Lỗi: ", data.error);
            return;
        }

        // Hiển thị kết quả trong modal kết quả
        const modalBody = document.getElementById('modal-body-ai');
        modalBody.innerHTML = `<pre>${data.answer}</pre>`; 
        console.log(data.answer);
        const resultModal = new bootstrap.Modal(document.getElementById('resultModal'));
        resultModal.show();

    } catch (err) {
        console.error('Có lỗi xảy ra khi gửi yêu cầu:', err);
    } finally {
        // Ẩn modal loading khi xong
        loadingModal.hide(); // Ẩn modal loading
    }
}




// Gọi hàm renderQuestions2 khi trang tải
window.onload = function() {
    renderQuestions1();
    renderQuestions2();
    renderQuestions3();
    renderQuestions4();
};





document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('keys_id').innerHTML = key_id;
    // Đảm bảo rằng DOM đã được tải xong trước khi gắn sự kiện
    const nextButton = document.getElementById('nextButton');
    const backButton = document.getElementById('backButton');
    
    if (nextButton && backButton) {
        // Gắn sự kiện Next
        nextButton.addEventListener('click', function() {
            if (currentQuestionIndex < questions.length - 1) {
                currentQuestionIndex++; // Tăng chỉ số câu hỏi
                showCurrentQuestion();  // Hiển thị câu hỏi tiếp theo
            }
        });

        // Gắn sự kiện Back
        backButton.addEventListener('click', function() {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--; // Giảm chỉ số câu hỏi
                showCurrentQuestion();  // Hiển thị câu hỏi trước
            }
        });
    } else {
        console.error("Không tìm thấy phần tử nextButton hoặc backButton");
    }

    // Hiển thị câu hỏi ban đầu (question1)
    showCurrentQuestion();



// Hàm xử lý khi người dùng nhấn nút "Chấm điểm"
document.getElementById('btn_checkallquestions').addEventListener('click', function() {
    // Hiển thị modal xác nhận
    const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    confirmationModal.show();
});

// Sự kiện khi nhấn "Yes" trong modal xác nhận
document.getElementById('confirmButton').addEventListener('click', function() {
    // Ẩn modal xác nhận
    const confirmationModal = bootstrap.Modal.getInstance(document.getElementById('confirmationModal'));
    confirmationModal.hide();

    // Gọi hàm chấm điểm sau khi xác nhận
    handleSubmitAllQuestions();
});


});

// Cập nhật câu hỏi 1, 2, 3, 4
const questions = ["question1", "question2", "question3", "question4"];
let currentQuestionIndex = 0; // Bắt đầu với câu hỏi 1

// Hàm để hiển thị câu hỏi hiện tại
function showCurrentQuestion() {
    // Ẩn tất cả các câu hỏi
    questions.forEach((questionId) => {
        document.getElementById(questionId).style.display = 'none';
    });
    
    // Hiển thị câu hỏi hiện tại
    document.getElementById(questions[currentQuestionIndex]).style.display = 'block';

        // Nếu người dùng đã đến câu hỏi cuối cùng, hiển thị nút "Chấm điểm"
    if (currentQuestionIndex === questions.length - 1) {
        document.getElementById('btn_checkallquestions').classList.remove('d-none');
    } else {
        document.getElementById('btn_checkallquestions').classList.add('d-none');
    }
}


// ===============================================================================================================
// ////////////// ĐẾM NGƯỢC THỜI GIAN --- COUNT DOWN ///////////////
// ===============================================================================================================
// Countdown Timer
let timeLeft = 50 * 60; // 35 minutes in seconds
document.addEventListener("DOMContentLoaded", function() {
const countdownElement = document.getElementById('countdownTimer');


function updateCountdown() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    countdownElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    if (timeLeft > 0) {
        timeLeft--;
        setTimeout(updateCountdown, 1000);
    }
}
updateCountdown();
});


document.addEventListener("DOMContentLoaded", function() {
// Mảng câu hỏi và đáp án




// Lấy phần tử HTML
const showAnswerButton = document.getElementById("question1_showanswer");
const modalBody = document.getElementById("modal-body");

// Lấy modal và bộ điều khiển của Bootstrap
const question1AnswerModal = new bootstrap.Modal(document.getElementById('question1_answerModal'));

// Thêm sự kiện nhấn vào nút "Xem đáp án"
showAnswerButton.addEventListener("click", function() {
    // Xóa nội dung cũ trong modal
    modalBody.innerHTML = '';

    // Lặp qua các câu hỏi và đáp án
    for (let i = 1; i <= 5; i++) {
        const questionKey = `question1_${i}`;
        const answerKey = `question1_${i}_answer`;

        // Tạo nội dung câu hỏi và đáp án
        const questionElement = document.createElement('p');
        questionElement.innerHTML = `<strong>${i}.  ${questions1[questionKey]}</strong>`;
        
        const answerElement = document.createElement('p');
        answerElement.innerHTML = `${questions1_answer[answerKey]}`;

        // Thêm câu hỏi và đáp án vào modal
        modalBody.appendChild(questionElement);
        modalBody.appendChild(answerElement);
    }

    // Mở modal
    question1AnswerModal.show();
});



});



document.addEventListener("DOMContentLoaded", function() {
    // Mảng câu hỏi và đáp án cho câu hỏi 2


    

    // Lấy phần tử HTML cho Câu hỏi 2
    const showAnswerButton2 = document.getElementById("question2_showanswer");
    const modalBody2 = document.getElementById("modal-body2");

    // Lấy modal và bộ điều khiển của Bootstrap cho Câu hỏi 2
    const question2AnswerModal = new bootstrap.Modal(document.getElementById('question2_answerModal'));

    // Thêm sự kiện nhấn vào nút "Xem đáp án" cho Câu hỏi 2
    showAnswerButton2.addEventListener("click", function() {
        // Xóa nội dung cũ trong modal cho câu hỏi 2
        modalBody2.innerHTML = '';

        // Tạo nội dung câu hỏi và đáp án cho câu hỏi 2
        const questionElement2 = document.createElement('p');
        questionElement2.innerHTML = `<strong>${questions2.question2}</strong> `;
        
        const answerElement2 = document.createElement('p');
        answerElement2.innerHTML = `${questions2_answer.question2}`;

        // Thêm câu hỏi và đáp án vào modal của câu hỏi 2
        modalBody2.appendChild(questionElement2);
        modalBody2.appendChild(answerElement2);

        // Mở modal cho câu hỏi 2
        question2AnswerModal.show();
    });
});



document.addEventListener("DOMContentLoaded", function() {

    // Lấy phần tử HTML cho Câu hỏi 3
    const showAnswerButton3 = document.getElementById("question3_showanswer");
    const modalBody3 = document.getElementById("modal-body3");

    // Lấy modal và bộ điều khiển của Bootstrap cho Câu hỏi 3
    const question3AnswerModal = new bootstrap.Modal(document.getElementById('question3_answerModal'));

    // Thêm sự kiện nhấn vào nút "Xem đáp án" cho Câu hỏi 3
    showAnswerButton3.addEventListener("click", function() {
        // Xóa nội dung cũ trong modal cho câu hỏi 3
        modalBody3.innerHTML = '';

        // Lặp qua các câu hỏi và đáp án cho Câu hỏi 3
        for (let i = 1; i <= 3; i++) {
            const questionKey = `question3_${i}`;
            const answerKey = `question3_${i}_answer`;

            // Tạo nội dung câu hỏi và đáp án
            const questionElement3 = document.createElement('p');
            questionElement3.innerHTML = `<strong>${i}. ${questions3[questionKey]}</strong>`;
            
            const answerElement3 = document.createElement('p');
            answerElement3.innerHTML = `${questions3_answer[answerKey]}`;

            // Thêm câu hỏi và đáp án vào modal của câu hỏi 3
            modalBody3.appendChild(questionElement3);
            modalBody3.appendChild(answerElement3);
        }

        // Mở modal cho câu hỏi 3
        question3AnswerModal.show();
    });
});



document.addEventListener("DOMContentLoaded", function() {
    // Lấy phần tử HTML cho Câu hỏi 4
    const showAnswerButton4 = document.getElementById("question4_showanswer");
    const modalBody4 = document.getElementById("modal-body4");

    // Lấy modal và bộ điều khiển của Bootstrap cho Câu hỏi 4
    const question4AnswerModal = new bootstrap.Modal(document.getElementById('question4_answerModal'));

    // Thêm sự kiện nhấn vào nút "Xem đáp án" cho Câu hỏi 4
    showAnswerButton4.addEventListener("click", function() {
        // Xóa nội dung cũ trong modal cho câu hỏi 4
        modalBody4.innerHTML = '';

        // Tạo nội dung câu hỏi và đáp án cho câu hỏi 4
        const questionElement4_1 = document.createElement('p');
        questionElement4_1.innerHTML = `<strong>4.1. ${question4_1_text}</strong>`;
        
        const answerElement4_1 = document.createElement('p');
        answerElement4_1.innerHTML = `${question4_1_text_answer}`;

        const questionElement4_2 = document.createElement('p');
        questionElement4_2.innerHTML = `<strong>4.2. ${question4_2_text}</strong>`;
        
        const answerElement4_2 = document.createElement('p');
        answerElement4_2.innerHTML = `${question4_2_text_answer}`;

        // Thêm câu hỏi và đáp án vào modal của câu hỏi 4
        modalBody4.appendChild(questionElement4_1);
        modalBody4.appendChild(answerElement4_1);
        modalBody4.appendChild(questionElement4_2);
        modalBody4.appendChild(answerElement4_2);

        // Mở modal cho câu hỏi 4
        question4AnswerModal.show();
    });
});
